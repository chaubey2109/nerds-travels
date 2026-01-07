import { useMutation } from "@tanstack/react-query";
import { api, type InsertEnquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateEnquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      // Validate with schema first (client-side safety)
      const validated = api.enquiries.create.input.parse(data);
      
      const res = await fetch(api.enquiries.create.path, {
        method: api.enquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Try to parse error message
        try {
          const errorData = await res.json();
          // Check if it matches our validation error schema
          const parsedError = api.enquiries.create.responses[400].safeParse(errorData);
          if (parsedError.success) {
            throw new Error(parsedError.data.message);
          }
        } catch (e) {
          // Fallback if not JSON or unexpected format
        }
        throw new Error('Failed to submit enquiry');
      }

      return api.enquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Sent!",
        description: "We'll be in touch with you shortly to plan your spiritual journey.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
