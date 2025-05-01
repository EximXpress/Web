const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;



const allowedOrigins = ['https://www.eximxpress.com'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));


// Middleware
// app.use(cors({ origin: 'https://www.eximxpress.com' })); // Allow CORS from your frontend domain
app.use(express.json()); // Parse JSON bodies

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// API to handle quote form submission
app.post('/api/send-quote', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  // Set up email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email
    to: process.env.TO_EMAIL, // Recipient's email (you can change this to your email)
    subject: 'New Quote Request',
    html: `
      <h2>Quote Request Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send the email using Nodemailer
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send quote request' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
