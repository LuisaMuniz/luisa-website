import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin view for contact messages (must be before other routes)
  app.get("/admin/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Contact Messages - Admin</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .message { border: 1px solid #ccc; margin: 10px 0; padding: 15px; border-radius: 5px; }
            .message h3 { margin: 0 0 10px 0; color: #333; }
            .meta { color: #666; font-size: 0.9em; margin-bottom: 10px; }
            .content { background: #f5f5f5; padding: 10px; border-radius: 3px; }
            .no-messages { text-align: center; color: #666; padding: 40px; }
          </style>
        </head>
        <body>
          <h1>Contact Form Messages</h1>
          ${messages.length === 0 ? '<div class="no-messages">No messages yet</div>' : ''}
          ${messages.map(msg => `
            <div class="message">
              <h3>${msg.subject}</h3>
              <div class="meta">
                <strong>From:</strong> ${msg.name} (${msg.email}) | 
                <strong>Date:</strong> ${new Date(msg.createdAt).toLocaleString()}
              </div>
              <div class="content">${msg.message.replace(/\n/g, '<br>')}</div>
            </div>
          `).join('')}
        </body>
        </html>
      `;
      res.send(html);
    } catch (error) {
      res.status(500).send('Error loading messages');
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification to Luisa
      const emailSent = await sendEmail({
        to: 'lmunizsimas@gmail.com',
        from: 'lmunizsimas@gmail.com', // Using your verified sender email
        subject: `🔔 New Contact Form Message: ${validatedData.subject}`,
        replyTo: validatedData.email, // Set reply-to to the form sender
        text: `
CV WEBSITE CONTACT FORM SUBMISSION

From: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}
Date: ${new Date().toLocaleString()}

MESSAGE:
${validatedData.message}

---
Reply directly to: ${validatedData.email}

This message was sent from your CV website contact form.
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; }
        .meta { color: #6c757d; margin-bottom: 15px; }
        .message { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="color: #007bff; margin: 0;">🔔 New Contact Form Message</h1>
    </div>
    
    <div class="content">
        <div class="meta">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="message">
            <h3>Message:</h3>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div class="footer">
            <p>This message was sent from your CV website contact form.</p>
            <p><strong>Reply directly to:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
        </div>
    </div>
</body>
</html>
        `
      });
      
      // Console notification for immediate visibility
      console.log('\n🔔 NEW CONTACT FORM MESSAGE RECEIVED:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`From: ${validatedData.name} (${validatedData.email})`);
      console.log(`Subject: ${validatedData.subject}`);
      console.log(`Time: ${new Date().toLocaleString()}`);
      console.log('Message:');
      console.log(validatedData.message);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`Admin URL: http://localhost:5000/admin/messages`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      if (emailSent) {
        console.log('✅ Email notification sent successfully to Gmail');
        console.log('⚠️  If you\'re not receiving emails, check:');
        console.log('   1. Your spam/junk folder');
        console.log('   2. Gmail\'s Promotions tab');
        console.log('   3. SendGrid account verification status');
      } else {
        console.log('❌ Email notification failed - message stored in database');
      }
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res
          .status(400)
          .json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });



  const httpServer = createServer(app);
  return httpServer;
}
