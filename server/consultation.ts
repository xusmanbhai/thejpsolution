import { consultationSchema } from "./consultationSchema";
import { sendConsultationEmail } from "./email";

export { consultationSchema } from "./consultationSchema";
export type { ConsultationPayload } from "./consultationSchema";

export async function handleConsultationSubmit(
  body: unknown,
): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const parsed = consultationSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => i.message).join("; ");
    return { ok: false, status: 400, message };
  }

  try {
    await sendConsultationEmail(parsed.data);
    return { ok: true };
  } catch (err) {
    console.error("[consultation] email failed:", err);
    const message =
      err instanceof Error ? err.message : "Failed to send consultation email";
    return { ok: false, status: 500, message };
  }
}
