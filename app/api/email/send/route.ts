import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { to, subject, html, project } = await request.json();
    
    const msg = {
      to,
      from: 'jerry@zodiacgcc.com',
      subject,
      html,
      tracking_settings: {
        click_tracking: { enable: true },
        open_tracking: { enable: true }
      }
    };

    await sgMail.send(msg);
    
    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      recipient: to,
      project
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
