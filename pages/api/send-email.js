// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'gmail',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Outlook email address
        pass: process.env.EMAIL_PASS, // Your Outlook email password
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'navjotcheema289@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error:', error);
      }
      console.log('Email sent:', info.response);
    });

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error); // Add this line
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
