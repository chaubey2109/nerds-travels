import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  cities: text("cities").array().notNull(), // ✅ ADD THIS

  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

/* 🔥 INSERT SCHEMA — cities INCLUDED */
export const insertEnquirySchema = createInsertSchema(enquiries).pick({
  name: true,
  email: true,
  phone: true,
  cities: true,      // ✅ ADD THIS
  message: true,
});

export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
export type Enquiry = typeof enquiries.$inferSelect;
