import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    host: process.env.EMAIL_HOST,
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }  
  })

  const mailOptions: Mail.Options = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    subject: `Message from ${name} - ${email}`,
    text: `Message from ${name} - ${subject} - ${email} - ${message}`,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });
    
    try {
      await sendMailPromise();
      return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
}