import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { handleConsultationSubmit } from "./consultation";
import { loadProjectEnv } from "./loadEnv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loadProjectEnv();

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "64kb" }));

  app.post("/api/consultation", async (req, res) => {
    const result = await handleConsultationSubmit(req.body);
    if (result.ok) {
      res.json({ success: true });
      return;
    }
    res.status(result.status).json({ success: false, error: result.message });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
