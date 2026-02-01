import { NextRequest, NextResponse } from 'next/server';

// Contact form API endpoint
// For production, you can integrate with:
// - Resend (https://resend.com) - recommended for Vercel
// - SendGrid
// - Mailgun
// - Or any other email service

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, we'll log the submission and return success
    // In production, you would send an email here
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // OPTION 1: Using Resend (recommended for Vercel)
    // Uncomment and configure when you have a Resend API key
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Spice N Curry Website <noreply@spicencurrymiami.com>',
      to: 'info@spicencurrymiami.com',
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // OPTION 2: Using Web3Forms (free, no API key needed for basic use)
    // This is a good free option that works immediately
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        name,
        email,
        phone: phone || 'Not provided',
        subject: `Spice N Curry Contact: ${subject}`,
        message,
        from_name: 'Spice N Curry Website',
      }),
    });

    if (process.env.WEB3FORMS_ACCESS_KEY && !web3formsResponse.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
