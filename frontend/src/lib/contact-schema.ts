import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/[a-zA-Z]/, "Enter your full name"),
  phone: z
    .string()
    .regex(/^[\d\s\-()+.]+$/, "Enter a valid phone number")
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
      },
      "Enter a valid 10-digit US phone number"
    ),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  street: z
    .string()
    .min(5, "Enter your street address")
    .max(200, "Street address is too long")
    .regex(/^\d+\s+\S+/, "Enter a valid street address (e.g. 123 Main St)"),
  city: z
    .string()
    .min(2, "Enter your city")
    .max(100, "City name is too long")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Enter a valid city name"),
  state: z
    .string()
    .min(1, "Select your state")
    .regex(/^[A-Z]{2}$/, "Select a valid state"),
  zip: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code (e.g. 43215)"),
  message: z.string().max(1000, "Message is too long").optional(),
  // Honeypot — must be empty
  website: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
