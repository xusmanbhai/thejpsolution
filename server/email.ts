import nodemailer from "nodemailer";
import type { ConsultationPayload } from "./consultationSchema";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");

  if (!user || !pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_USER and SMTP_PASS in your .env file (use a Gmail App Password, not your regular password).",
    );
  }

  return { host, port, user, pass };
}

function getConsultationRecipients(fallback: string): string[] {
  const raw = process.env.CONSULTATION_TO || fallback;
  return raw
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

type FormStep = { title: string; fields: [string, string][] };

function getFormSteps(data: ConsultationPayload): FormStep[] {
  return [
    {
      title: "Step 1 — Contact Information",
      fields: [
        ["Full Name", data.fullName],
        ["Email", data.email],
        ["Phone", data.phone],
        ["Role", data.role],
      ],
    },
    {
      title: "Step 2 — Property Details",
      fields: [
        ["Property Address", data.propertyAddress],
        ["Probate / Case Info", data.isProbateOrInherited || "—"],
        ["Heirs / Co-Owners", data.numberOfHeirs || "—"],
        ["Title / Litigation / Tax / Foreclosure", data.titleIssues || "—"],
      ],
    },
    {
      title: "Step 3 — Solution & Situation",
      fields: [
        ["Solution Type", data.solutionType],
        ["Situation", data.description],
      ],
    },
  ];
}

function buildStepsText(steps: FormStep[]): string {
  return steps
    .map(
      (step) =>
        `${step.title}\n${step.fields.map(([label, value]) => `  ${label}: ${value}`).join("\n")}`,
    )
    .join("\n\n");
}

function buildStepsHtml(steps: FormStep[], heading: string): string {
  const stepBlocks = steps
    .map(
      (step) => `
    <h3 style="margin:1.25em 0 0.5em;font-size:15px;color:#1e3a5f;">${escapeHtml(step.title)}</h3>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;width:100%;">
      ${step.fields
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top;color:#1e3a5f;width:40%;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>`,
    )
    .join("");

  return `<h2 style="margin:0 0 0.5em;font-size:18px;color:#1e3a5f;">${escapeHtml(heading)}</h2>${stepBlocks}`;
}

function buildSubmissionSummary(
  data: ConsultationPayload,
  heading: string,
): { text: string; html: string } {
  const steps = getFormSteps(data);
  return {
    text: `${heading}\n\n${buildStepsText(steps)}`,
    html: buildStepsHtml(steps, heading),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getBusinessReplyEmail(smtpUser: string): string {
  const explicit = process.env.CONSULTATION_REPLY_TO?.trim();
  if (explicit) return explicit;
  const recipients = getConsultationRecipients(smtpUser);
  return recipients[0] || smtpUser;
}

function buildClientConfirmationBody(
  data: ConsultationPayload,
  businessEmail: string,
): { text: string; html: string } {
  const summary = buildSubmissionSummary(data, "Your consultation request details");

  const intro = `Hi ${data.fullName},

Thank you for requesting a confidential consultation with Solution Property Partners.

We have received your submission and a member of our team will reach out within 24 hours.

Below is a copy of the information you submitted:

`;

  const outro = `

If you have urgent questions, reply to this email or contact us at ${businessEmail}.

— Solution Property Partners`;

  const text = `${intro}${summary.text}${outro}`;

  const html = `
    <p>Hi <strong>${escapeHtml(data.fullName)}</strong>,</p>
    <p>Thank you for requesting a confidential consultation with <strong>Solution Property Partners</strong>.</p>
    <p>We have received your submission and a member of our team will reach out within <strong>24 hours</strong>.</p>
    <p>Below is a copy of the information you submitted:</p>
    ${summary.html}
    <p style="margin-top:1.5em;">If you have urgent questions, reply to this email or contact us at
      <a href="mailto:${escapeHtml(businessEmail)}">${escapeHtml(businessEmail)}</a>.</p>
    <p style="margin-top:1em;color:#64748b;font-size:13px;">— Solution Property Partners</p>
  `;

  return { text, html };
}

export async function sendConsultationEmail(data: ConsultationPayload): Promise<void> {
  const { host, port, user, pass } = getSmtpConfig();
  const teamRecipients = getConsultationRecipients(user);
  const businessReplyEmail = getBusinessReplyEmail(user);
  const teamSummary = buildSubmissionSummary(data, "New Consultation Request");
  const clientConfirmation = buildClientConfirmationBody(data, businessReplyEmail);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const from = `"Solution Property Partners" <${user}>`;

  await Promise.all([
    transporter.sendMail({
      from,
      to: teamRecipients,
      replyTo: {
        name: data.fullName,
        address: data.email,
      },
      subject: `Consultation request: ${data.fullName}`,
      text: `${teamSummary.text}\n\n---\nReply to this email to respond directly to ${data.fullName} at ${data.email}.`,
      html: `${teamSummary.html}<p style="margin-top:1.5em;font-size:12px;color:#64748b;">Reply to this email to respond directly to <strong>${escapeHtml(data.fullName)}</strong> at <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>.</p>`,
    }),
    transporter.sendMail({
      from,
      to: data.email,
      replyTo: businessReplyEmail,
      subject: "We received your consultation request",
      text: clientConfirmation.text,
      html: clientConfirmation.html,
    }),
  ]);
}
