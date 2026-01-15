import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";

import { Check, ChevronsUpDown, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

/* ================= SCHEMA ================= */
const enquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .refine((val) => !/^[0-9]/.test(val), {
      message: "Name cannot start with a number",
    }),

  email: z.string().email("Enter a valid email address"),

  phone: z
    .string()
    .regex(/^\+?[0-9]{8,15}$/, "Enter valid phone number"),

  cities: z.array(z.string()).min(1, "Select at least one city"),

  days: z
    .number({
      required_error: "Enter number of days",
      invalid_type_error: "Days must be a number",
    })
    .min(1, "Trip must be at least 1 day")
    .max(30, "Trip cannot be more than 30 days"),

  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof enquirySchema>;

/* ================= CITY OPTIONS ================= */
const CITY_OPTIONS = [
  "Varanasi",
  "Ayodhya",
  "Prayagraj",
  "Kerala",
  "Goa",
  "Kashmir",
  "Manali",
  "Jaipur",
  "Others",
];

/* ================= COMPONENT ================= */
export function EnquiryForm() {
  const [success, setSuccess] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cities: [],
      days: 1,
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setSuccess("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // 🔥 days yahin ja raha hai
      });

      if (!res.ok) throw new Error("Failed");

      form.reset();
      setSuccess("Enquiry submitted successfully 🙏");
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 rounded-3xl bg-white shadow-xl border">
      <h2 className="text-2xl font-bold text-center mb-2">
        Get a Custom Travel Quote
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Share your travel details
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          {/* NAME */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your full name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="you@email.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PHONE */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="+91XXXXXXXXXX" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CITIES */}
          <FormField
            control={form.control}
            name="cities"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Cities *</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-between",
                          !field.value.length && "text-muted-foreground"
                        )}
                      >
                        {field.value.length
                          ? field.value.join(", ")
                          : "Select cities"}
                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="max-h-56 overflow-y-auto p-0">
                    <Command>
                      <CommandEmpty>No city found</CommandEmpty>
                      <CommandGroup>
                        {CITY_OPTIONS.map((city) => {
                          const selected = field.value.includes(city);
                          return (
                            <CommandItem
                              key={city}
                              onSelect={() =>
                                field.onChange(
                                  selected
                                    ? field.value.filter((x) => x !== city)
                                    : [...field.value, city]
                                )
                              }
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selected ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {city}
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* DAYS */}
          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Days *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={30}
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(Number(e.target.value))
                    }
                    placeholder="e.g. 5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MESSAGE */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trip Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder="Budget, month, pickup city, travellers..."
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* SUBMIT */}
          <Button type="submit" className="w-full h-12 bg-orange-600">
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              {success}
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
