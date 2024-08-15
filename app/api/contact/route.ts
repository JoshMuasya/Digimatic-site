import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const { name, phonenumber, email, subject, question } = await request.json();

        // Configure Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            subject: `New Contact Us Message: ${subject}`,
            text: `
            Name: ${name}
            Phonenumber: ${phonenumber}
            Email: ${email}
            Question: ${question}
            `,
        };

        // Send Email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return NextResponse.json({
            message: 'Message sent successfully',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Email could not be sent', error }, { status: 500 });
    }
}