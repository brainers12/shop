import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const sendForm = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Error parsing form' });
    }

    const items = JSON.parse(fields.items);
    const contactInfo = JSON.parse(fields.contactInfo);
    const uploadedImage = files.uploadedImage;
    const instructions = fields.instructions;

    // Debug logging
    console.log('Uploaded Image:', uploadedImage);

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    let itemDetails = items.map(item => `\n- ${item.name} from ${item.store} (Brand: ${item.brand}, Price: ${item.priceFrom}-${item.priceTo}, Quantity: ${item.quantity})`).join('');
    let contactDetails = `
      Name: ${contactInfo.name}
      Contact Number: ${contactInfo.contactNumber}
      Email: ${contactInfo.email}
      Address: ${contactInfo.address}, ${contactInfo.city}, ${contactInfo.province}, ${contactInfo.postalCode}
      Shipping Method: ${fields.shippingMethod}
      Terms Agreed: ${fields.termsAgreed}
      Disclaimer Agreed: ${fields.disclaimerAgreed}
      Instructions: ${instructions}
    `;

    const attachments = [];
    if (uploadedImage && uploadedImage.filepath) {
      attachments.push({
        filename: uploadedImage.originalFilename,
        path: uploadedImage.filepath,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'navjotkaur181@outlook.com',
      subject: 'Form Submission',
      text: `Items: ${itemDetails}
      Uploaded Image: ${uploadedImage ? uploadedImage.originalFilename : 'No image uploaded'}
      Contact Info: ${contactDetails}`,
      attachments: attachments,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
};

export default sendForm;
