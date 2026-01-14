import { z } from "zod";
import { insertEnquirySchema, enquiries } from "./schema";

/* ===============================
   Error Schemas
=============================== */
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

/* ===============================
   API CONTRACT
=============================== */
export const api = {
  enquiries: {
    create: {
      method: "POST" as const,
      path: "/api/enquiries",

      // 🔥 THIS NOW INCLUDES cities (because schema fixed)
      input: insertEnquirySchema,

      responses: {
        201: z.custom<typeof enquiries.$inferSelect>(),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
};

/* ===============================
   URL BUILDER (unchanged)
=============================== */
export function buildUrl(
  path: string,
  params?: Record<string, string | number>
): string {
  let url = path;

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }

  return url;
}
