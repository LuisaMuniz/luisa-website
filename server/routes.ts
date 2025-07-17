import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
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
