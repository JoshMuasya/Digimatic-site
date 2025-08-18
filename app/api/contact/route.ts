import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const { name, phonenumber, email, subject, question } = await request.json();

    if (!name || !email || !phonenumber || !subject || !question) {
        return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // Configure Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL,
            subject: `${subject}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>PhoneNumber:</strong> ${phonenumber}</p>
        <p><strong>Message:</strong><br>${question.replace(/\n/g, '<br>')}</p>
      `,
        })

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Email could not be sent', error }, { status: 500 });
    }
}