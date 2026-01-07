import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/schema";
import { useCreateEnquiry } from "@/hooks/use-enquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function EnquiryForm() {
  const mutation = useCreateEnquiry();
  
  const form = useForm<InsertEnquiry>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertEnquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl shadow-orange-900/10 p-8 md:p-10 border border-orange-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">Start Your Journey</h3>
        <p className="text-gray-500 mb-8 font-medium">Fill out the form below and we'll help you plan the perfect spiritual experience.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. Rahul Sharma" 
                      {...field} 
                      className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50 h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="hello@example.com" 
                        {...field} 
                        className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50 h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Phone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+91 98765 43210" 
                        {...field} 
                        className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50 h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your travel plans or specific interests in Kashi..." 
                      className="resize-none rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50 min-h-[120px]"
                      {...field} 
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white shadow-xl shadow-orange-500/25 transition-all duration-300"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </div>
  );
}
