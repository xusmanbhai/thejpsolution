import type { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { handleConsultationSubmit } from "../../server/consultation";
import { loadProjectEnv } from "../../server/loadEnv";

loadProjectEnv();

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler: Handler = async (
  event: HandlerEvent,
): Promise<HandlerResponse> => {
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
    const body = event.body ? JSON.parse(event.body) : {};
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
  } catch {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: "Invalid request" }),
    };
  }
};
