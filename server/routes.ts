import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validationResult = insertContactSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: validationResult.error.errors 
        });
      }

      // Create contact record
      const contact = await storage.createContact(validationResult.data);
      
      // Send email notification using Resend
      console.log("Attempting to send email with Resend...");
      console.log("API Key present:", !!process.env.RESEND_API_KEY);
      
      try {
        const result = await resend.emails.send({
          from: 'onboarding@resend.dev', // Default Resend sender for testing
          to: 'resend.yard384@passmail.net', // Resend account email (for testing)
          subject: `Nouveau message de contact: ${contact.subject}`,
          html: `
            <h2>Nouveau message de contact</h2>
            <p><strong>De:</strong> ${contact.firstName} ${contact.lastName}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Sujet:</strong> ${contact.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${contact.message}</p>
            <hr>
            <p><small>Envoyé le ${contact.createdAt?.toLocaleString('fr-FR')}</small></p>
          `,
        });
        
        console.log("✅ Email sent successfully to resend.yard384@passmail.net for contact:", contact.id);
        console.log("Resend response:", result);
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        console.error("Email error details:", emailError?.message || emailError);
        // Don't fail the request if email fails, just log it
      }
      
      res.status(201).json({ 
        message: "Merci ! Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
        id: contact.id 
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ 
        message: "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement." 
      });
    }
  });

  // Get all contacts (for potential admin panel)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // CV download endpoint (placeholder)
  app.get("/api/cv/download", async (req, res) => {
    // In a real application, this would generate and serve a PDF
    res.status(501).json({ 
      message: "CV download functionality will be implemented with PDF generation." 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
