import type { Express, Request, Response } from "express";

/**
 * Registers WhatsApp send route
 * POST /api/whatsapp/send
 */
export function registerWhatsappRoute(app: Express) {
  app.post("/api/whatsapp/send", async (req: Request, res: Response) => {
    try {
      const { name, phone, cities, message } = req.body;

      // basic safety checks
      if (!name || !phone) {
        return res.status(400).json({
          success: false,
          message: "Name and phone are required",
        });
      }

      const text = `🛕 New Travel Enquiry

👤 Name: ${name}
📞 Phone: ${phone}
📍 Cities: ${Array.isArray(cities) ? cities.join(", ") : "N/A"}

📝 Message:
${message || "No message provided"}
`;

      // const response = await fetch(
      //   `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
      //   {
      //     method: "POST",
      //     headers: {
      //       Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       messaging_product: "whatsapp",
      //       to: process.env.ADMIN_WHATSAPP,
      //       type: "text",
      //       text: {
      //         body: text,
      //       },
      //     }),
      //   }
      // );

      const response = await fetch(
  `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: process.env.ADMIN_WHATSAPP,
      type: "template",
      template: {
        name: "hello_world",
        language: { code: "en_US" },
      },
    }),
  }
);
      const data = await response.json();

      if (!response.ok) {
        console.error("WhatsApp API Error:", data);
        return res.status(400).json({
          success: false,
          error: data,
        });
      }

      return res.json({
        success: true,
        message: "WhatsApp message sent successfully",
      });
    } catch (error) {
      console.error("WhatsApp Server Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send WhatsApp message",
      });
    }
  });
}
