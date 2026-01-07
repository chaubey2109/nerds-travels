import { db } from "./db";
import { enquiries, type InsertEnquiry, type Enquiry } from "@shared/schema";

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
}

export class DatabaseStorage implements IStorage {
  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const [enquiry] = await db.insert(enquiries).values(insertEnquiry).returning();
    return enquiry;
  }
}

export const storage = new DatabaseStorage();
