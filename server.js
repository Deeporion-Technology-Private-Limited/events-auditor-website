import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

const TO_EMAIL = "contact@eventsauditor.com";
const SUBJECT = "New Website Enquiry - Events Auditor";

app.use(cors());
app.use(express.json());

app.post("/api/enquiry", async (req, res) => {
  const { name, phone, email, eventType, message } = req.body || {};

  const nameTrim = typeof name === "string" ? name.trim() : "";
  const emailTrim = typeof email === "string" ? email.trim() : "";
  const messageTrim = typeof message === "string" ? message.trim() : "";
  const eventTypeVal = typeof eventType === "string" ? eventType.trim() : "";
  const phoneVal = typeof phone === "string" ? phone.trim() : "";

  if (!nameTrim || !emailTrim || !messageTrim) {
    return res.status(400).json({
      success: false,
      error: "Name, email and message are required.",
    });
  }

  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    return res.status(500).json({
      success: false,
      error: "Email service is not configured.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #1e3a5f; margin-bottom: 1rem;">New Website Enquiry</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Name</td></tr>
        <tr><td style="padding: 0 0 12px 0;">${escapeHtml(nameTrim)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Phone</td></tr>
        <tr><td style="padding: 0 0 12px 0;">${escapeHtml(phoneVal) || "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Email</td></tr>
        <tr><td style="padding: 0 0 12px 0;">${escapeHtml(emailTrim)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Event Type</td></tr>
        <tr><td style="padding: 0 0 12px 0;">${escapeHtml(eventTypeVal) || "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Message</td></tr>
        <tr><td style="padding: 0 0 12px 0; white-space: pre-wrap;">${escapeHtml(messageTrim)}</td></tr>
      </table>
      <p style="margin-top: 1.5rem; color: #6b7280; font-size: 0.875rem;">Sent via Events Auditor website contact form.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: smtpEmail,
      to: TO_EMAIL,
      subject: SUBJECT,
      html,
      replyTo: emailTrim,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Failed to send enquiry. Please try again.",
    });
  }
});

function escapeHtml(str) {
  if (!str) return "";
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(str).replace(/[&<>"']/g, (c) => map[c]);
}

const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));
app.get("/api/*", (_req, res) => res.status(404).json({ error: "Not found" }));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
