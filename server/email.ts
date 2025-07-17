import sgMail from '@sendgrid/mail';

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
    const apiKey = process.env.SENDGRID_API_KEY;
    
    if (!apiKey) {
      console.log('SendGrid API key not found. Email would be sent to:', params.to);
      return false;
    }

    sgMail.setApiKey(apiKey);
    
    const mailOptions: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    };
    
    if (params.replyTo) {
      mailOptions.replyTo = params.replyTo;
    }
    
    const result = await sgMail.send(mailOptions);
    
    console.log('Email sent successfully to:', params.to);
    console.log('SendGrid response:', result[0]?.statusCode, result[0]?.headers);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    
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