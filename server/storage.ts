import { db } from "./db";
import { enquiries, type InsertEnquiry, type Enquiry } from "@shared/schema";
import { eq } from "drizzle-orm"; // 🔥 REQUIRED FOR DELETE

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
  deleteEnquiry(id: number): Promise<void>; // 🔥 ADD
}

export class DatabaseStorage implements IStorage {

  // ===============================
  // CREATE ENQUIRY
  // ===============================
  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    // 🔥 SAFETY: ensure cities is always an array
    const data: InsertEnquiry = {
      ...insertEnquiry,
      cities: Array.isArray(insertEnquiry.cities)
        ? insertEnquiry.cities
        : [],
    };

    console.log("DB INSERT DATA 👉", data);

    const [enquiry] = await db
      .insert(enquiries)
      .values(data)
      .returning();

    return enquiry;
  }

  // ===============================
  // GET ENQUIRIES (ADMIN)
  // ===============================
  async getEnquiries(): Promise<Enquiry[]> {
    const rows = await db.select().from(enquiries);
    return rows;
  }

  // ===============================
  // DELETE ENQUIRY (ADMIN) 🔥 NEW
  // ===============================
  async deleteEnquiry(id: number): Promise<void> {
    await db
      .delete(enquiries)
      .where(eq(enquiries.id, id));
  }
}

export const storage = new DatabaseStorage();
