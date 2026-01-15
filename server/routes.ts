import type { Express } from "express";
import type { Server } from "http";
import { z } from "zod";

import { storage } from "./storage";
import { api } from "@shared/routes";

/* ===============================
   WhatsApp helper
=============================== */
async function sendWhatsappMessage(data: any) {
  try {
    const text = `🛕 New Travel Enquiry

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📍 Cities: ${Array.isArray(data.cities) ? data.cities.join(", ") : "N/A"}

📝 Message:
${data.message || "No message"}
`;

    await fetch(
      `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: process.env.ADMIN_WHATSAPP,
          type: "text",
          text: { body: text },
        }),
      }
    );
  } catch (error) {
    console.error("❌ WhatsApp Send Failed:", error);
  }
}

/* ===============================
   Register Routes
=============================== */
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  /* ===============================
     CREATE ENQUIRY
  =============================== */
  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      console.log("RAW BODY 👉", req.body);

      // ✅ validate using shared schema
      const input = api.enquiries.create.input.parse(req.body);

      console.log("PARSED INPUT 👉", input);

      // 💾 save to DB
      const enquiry = await storage.createEnquiry({
        name: input.name,
        email: input.email,
        phone: input.phone,
        cities: input.cities,
        days: input.days,
        message: input.message,
      });

      // 🔥 WhatsApp (non-blocking)
      sendWhatsappMessage(input);

      return res.status(201).json(enquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }

      console.error("❌ Enquiry Error:", err);
      return res.status(500).json({
        message: "Failed to create enquiry",
      });
    }
  });

  /* ===============================
     GET ALL ENQUIRIES (ADMIN)
  =============================== */
  app.get("/api/enquiries", async (_req, res) => {
    try {
      const data = await storage.getEnquiries();
      return res.json(data);
    } catch (err) {
      console.error("❌ Fetch Enquiries Error:", err);
      return res.status(500).json({
        message: "Failed to fetch enquiries",
      });
    }
  });

  /* ===============================
     DELETE ENQUIRY (ADMIN) 🔥 NEW
  =============================== */
  app.delete("/api/enquiries/:id", async (req, res) => {
    try {
      const id = Number(req.params.id);

      if (!id) {
        return res.status(400).json({
          message: "Invalid enquiry id",
        });
      }

      await storage.deleteEnquiry(id);

      return res.json({ success: true });
    } catch (err) {
      console.error("❌ Delete Enquiry Error:", err);
      return res.status(500).json({
        message: "Failed to delete enquiry",
      });
    }
  });

  return httpServer;
}
