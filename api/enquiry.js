const nodemailer = require("nodemailer");

const TO_EMAIL = "contact@eventsauditor.com";
const SUBJECT = "New Website Enquiry - Events Auditor";

function escapeHtml(str) {
  if (!str) return "";
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(str).replace(/[&<>"']/g, (c) => map[c]);
}

function sendJson(res, status, data) {
  res.setHeader("Content-Type", "application/json");
  res.status(status).end(JSON.stringify(data));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { success: false, error: "Method not allowed" });
    return;
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    sendJson(res, 400, { success: false, error: "Invalid JSON body." });
    return;
  }

  const { name, phone, email, eventType, message } = body;
  const nameTrim = typeof name === "string" ? name.trim() : "";
  const emailTrim = typeof email === "string" ? email.trim() : "";
  const messageTrim = typeof message === "string" ? message.trim() : "";
  const eventTypeVal = typeof eventType === "string" ? eventType.trim() : "";
  const phoneVal = typeof phone === "string" ? phone.trim() : "";

  if (!nameTrim || !emailTrim || !messageTrim) {
    sendJson(res, 400, {
      success: false,
      error: "Name, email and message are required.",
    });
    return;
  }

  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    sendJson(res, 500, {
      success: false,
      error: "Email service is not configured.",
    });
    return;
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
    sendJson(res, 200, { success: true });
  } catch {
    sendJson(res, 500, {
      success: false,
      error: "Failed to send enquiry. Please try again.",
    });
  }
};
