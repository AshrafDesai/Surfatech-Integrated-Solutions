// server.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // Allow credentials if needed
}));

app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const enquiryId = uuidv4().substring(0, 8).toUpperCase();

    // Email to business owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `New Inquiry from ${name} - ID: ${enquiryId}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Inquiry ID:</strong> ${enquiryId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Auto-reply to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SurfaTech Integrated Solutions',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting SurfaTech Integrated Solutions. We have received your inquiry and our team will get back to you shortly.</p>
        <p>Your inquiry reference number is: <strong>${enquiryId}</strong></p>
        <p>Please keep this number for future reference.</p>
        <br>
        <p>Best regards,</p>
        <p>SurfaTech Integrated Solutions Team</p>
      `
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({ success: true, enquiryId });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});