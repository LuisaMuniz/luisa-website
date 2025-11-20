import { MailerSend, EmailParams as MSEmailParams, Sender, Recipient } from "mailersend";

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const apiKey = process.env.MAILERSEND_API_KEY;
    
    if (!apiKey) {
      console.log('MailerSend API key not found. Email would be sent to:', params.to);
      return false;
    }

    // Initialize MailerSend client
    const mailerSend = new MailerSend({
      apiKey: apiKey,
    });
    
    // Prepare recipients and sender
    const recipients = [new Recipient(params.to)];
    const sentFrom = new Sender(params.from, "CV Website Contact Form");
    
    // Create email parameters
    const emailParams = new MSEmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(params.subject);
    
    if (params.html) {
      emailParams.setHtml(params.html);
    }
    
    if (params.text) {
      emailParams.setText(params.text);
    }
    
    if (params.replyTo) {
      emailParams.setReplyTo(new Recipient(params.replyTo));
    }
    
    // Send email via MailerSend
    const result = await mailerSend.email.send(emailParams);
    
    console.log('Email sent successfully via MailerSend to:', params.to);
    console.log('MailerSend response:', result);
    return true;
  } catch (error) {
    console.error('MailerSend email error:', error);
    
    // More detailed error logging
    if (error && typeof error === 'object') {
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        response: error.response?.body || error.response,
        status: error.status || error.statusCode
      });
    }
    
    return false;
  }
}
