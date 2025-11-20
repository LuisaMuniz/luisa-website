import * as brevo from '@getbrevo/brevo';

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
    const apiKey = process.env.BREVO_API_KEY;
    
    if (!apiKey) {
      console.log('Brevo API key not found. Email would be sent to:', params.to);
      return false;
    }

    // Initialize Brevo API client
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
    
    // Prepare email data
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: params.to }];
    sendSmtpEmail.sender = { 
      email: params.from,
      name: 'CV Website Contact Form'
    };
    sendSmtpEmail.subject = params.subject;
    
    if (params.text) {
      sendSmtpEmail.textContent = params.text;
    }
    
    if (params.html) {
      sendSmtpEmail.htmlContent = params.html;
    }
    
    if (params.replyTo) {
      sendSmtpEmail.replyTo = { email: params.replyTo };
    }
    
    // Send email via Brevo
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    console.log('Email sent successfully via Brevo to:', params.to);
    console.log('Brevo response:', result);
    return true;
  } catch (error) {
    console.error('Brevo email error:', error);
    
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
