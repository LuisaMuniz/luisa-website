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
        subject: `New Contact Form Message: ${validatedData.subject}`,
        replyTo: validatedData.email, // Set reply-to to the form sender
        text: `
New message from your website contact form:

Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
Reply directly to: ${validatedData.email}
        `,
        html: `
<h2>New Contact Form Message</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Subject:</strong> ${validatedData.subject}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
<hr>
<p><em>Reply directly to: <a href="mailto:${validatedData.email}">${validatedData.email}</a></em></p>
        `
      });
      
      if (emailSent) {
        console.log('Email notification sent successfully');
        console.log('⚠️  If you\'re not receiving emails, check:');
        console.log('   1. Your spam/junk folder');
        console.log('   2. Gmail\'s Promotions tab');
        console.log('   3. SendGrid account verification status');
      } else {
        console.log('Email notification failed - message stored in database');
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
