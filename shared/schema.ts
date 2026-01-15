import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  cities: text("cities").array().notNull(), // ✅ ADD THIS
  days: text("days").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

/* 🔥 INSERT SCHEMA — cities INCLUDED */
const daysSchema = z.coerce
  .number()
  .int("Days must be a whole number")
  .min(1, "Trip must be at least 1 day")
  .max(30, "Trip cannot be more than 30 days")
  .transform((val) => String(val));

export const insertEnquirySchema = createInsertSchema(enquiries, {
  days: daysSchema,
}).pick({
  name: true,
  email: true,
  phone: true,
  cities: true,      // ✅ ADD THIS
  days: true,
  message: true,
});

export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
export type Enquiry = typeof enquiries.$inferSelect;
