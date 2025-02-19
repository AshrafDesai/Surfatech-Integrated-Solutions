import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Allow all origins for testing (Restrict in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Verify environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.OWNER_EMAIL) {
  console.error("❌ Missing required environment variables. Please check .env file.");
  process.exit(1); // Stop server if critical env vars are missing
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact Form API
app.post('/api/contact', async (req, res) => {
  console.log("📩 New contact request received:", req.body); // Debug log
  
  try {
    const { name, email, phone, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const enquiryId = uuidv4().substring(0, 8).toUpperCase();
    console.log("✅ Generated Inquiry ID:", enquiryId);

    // Email to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `📨 New Inquiry from ${name} - ID: ${enquiryId}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Inquiry ID:</strong> ${enquiryId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ We Received Your Inquiry - SurfaTech Integrated Solutions",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and will get back to you soon.</p>
        <p>Your reference ID: <strong>${enquiryId}</strong></p>
        <p>Best Regards,<br>SurfaTech Integrated Solutions Team</p>
      `
    });

    res.json({ success: true, enquiryId });
  } catch (error) {
    console.error("🚨 Error sending email:", error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
