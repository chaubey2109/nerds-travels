import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateEnquiry } from "@/hooks/use-enquiries";

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
    .trim()
    .min(2, "Name must be at least 2 characters")
    .refine((val) => !/^[0-9]/.test(val), {
      message: "Name cannot start with a number",
    }),

  email: z.string().trim().email("Enter a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{8,15}$/, "Enter valid phone number with country code"),

  cities: z.array(z.string()).min(1, "Select at least one city"),

  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof enquirySchema>;

const CITY_OPTIONS = [
  "Kashi (Varanasi)",
  "Ayodhya",
  "Prayagraj",
  "Mathura – Vrindavan",
];

/* ================= COMPONENT ================= */
export function EnquiryForm() {
  const mutation = useCreateEnquiry();
  const [success, setSuccess] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cities: [],
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setSuccess("");

    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setSuccess("Enquiry submitted successfully 🙏");
      },
    });
  }

  const selectedCities = form.watch("cities");

  return (
    <div
      className="
        w-full
        max-w-lg
        mx-auto
        px-4 sm:px-6
        py-8 sm:py-10
        rounded-3xl
        bg-white/95 backdrop-blur
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        border
      "
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
        Plan Your Spiritual Journey
      </h2>
      <p className="text-gray-500 text-sm sm:text-base text-center mb-6 sm:mb-8">
        Share your details & preferred destinations
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 sm:space-y-6"
        >
          {/* NAME */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your full name"
                    className="h-11 text-base"
                  />
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
                  <Input
                    {...field}
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 text-base"
                  />
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
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="+91XXXXXXXXXX"
                    className="h-11 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MULTI CITY */}
          <FormField
            control={form.control}
            name="cities"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Cities to Visit *</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full h-11 justify-between text-left text-base",
                          !field.value.length && "text-muted-foreground"
                        )}
                      >
                        <span className="truncate">
                          {field.value.length
                            ? field.value.join(", ")
                            : "Select cities"}
                        </span>
                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent
                    className="
                      w-[--radix-popover-trigger-width]
                      max-h-64
                      p-0
                      overflow-y-auto
                    "
                  >
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
                                    ? field.value.filter((c) => c !== city)
                                    : [...field.value, city]
                                )
                              }
                              className="flex items-center gap-3 py-2"
                            >
                              <div className="w-4">
                                {selected && (
                                  <Check className="h-4 w-4 text-orange-600" />
                                )}
                              </div>
                              <span className="text-sm sm:text-base">
                                {city}
                              </span>
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

          {/* MESSAGE */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder="Any special requirements, dates, etc."
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUBMIT */}
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="
              w-full
              h-12 sm:h-14
              text-base sm:text-lg
              font-semibold
              bg-orange-600 hover:bg-orange-500
            "
          >
            {mutation.isPending ? (
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
            <p className="text-green-600 text-center text-sm sm:text-base font-medium">
              {success}
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
