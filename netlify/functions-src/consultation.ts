import { handleConsultationSubmit } from "../../server/consultation";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler = async (event: {
  httpMethod: string;
  body: string | null;
  isBase64Encoded?: boolean;
}) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };
  }

  try {
    let rawBody = event.body ?? "";
    if (event.isBase64Encoded && rawBody) {
      rawBody = Buffer.from(rawBody, "base64").toString("utf-8");
    }
    const body = rawBody ? JSON.parse(rawBody) : {};
    const result = await handleConsultationSubmit(body);

    if (result.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: result.status,
      headers,
      body: JSON.stringify({ success: false, error: result.message }),
    };
  } catch (err) {
    console.error("[netlify/consultation]", err);
    const message =
      err instanceof Error ? err.message : "Failed to process consultation request";
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: message }),
    };
  }
};
