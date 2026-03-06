"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactFormData } from "@/lib/contact-schema";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/Button";
import type { ApiResponse } from "@/types";
import { z } from "zod";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

interface StateOption {
  label: string;
  value: string;
}

export function ContactForm({
  states = [],
  onStateChange,
}: {
  states?: StateOption[];
  onStateChange?: (stateCode: string) => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError(null);

    const formData = new FormData(e.currentTarget);
    const raw: Record<string, string> = {};
    formData.forEach((val, key) => {
      raw[key] = val as string;
    });

    // Client-side validation
    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const json: ApiResponse = await res.json();

      if (json.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setServerError(json.error ?? "Something went wrong. Please try again.");
        if (json.errors) {
          const fieldErrors: FieldErrors = {};
          for (const [k, msgs] of Object.entries(json.errors)) {
            fieldErrors[k as keyof ContactFormData] = msgs[0];
          }
          setErrors(fieldErrors);
        }
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 sm:p-8 text-center">
        <div className="text-4xl sm:text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">We got your request!</h3>
        <p className="text-green-700">
          We&apos;ll reach out within 1 business day to schedule your free estimate.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from users, bots fill it */}
      <div style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
        <label htmlFor="website">Leave this empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Full Name"
          name="name"
          id="name"
          type="text"
          autoComplete="name"
          required
          placeholder="John Smith"
          error={errors.name}
        />
        <FormField
          label="Phone Number"
          name="phone"
          id="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="(614) 555-0100"
          error={errors.phone}
        />
      </div>

      <FormField
        label="Email Address"
        name="email"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="john@example.com"
        hint="Optional — we'll use phone as primary contact"
        error={errors.email}
      />

      <FormField
        label="Street Address"
        name="street"
        id="street"
        type="text"
        autoComplete="street-address"
        required
        placeholder="123 Main St"
        error={errors.street}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        <div className="col-span-2">
          <FormField
            label="City"
            name="city"
            id="city"
            type="text"
            autoComplete="address-level2"
            required
            placeholder="Columbus"
            error={errors.city}
          />
        </div>
        <FormField
          as="select"
          label="State"
          name="state"
          id="state"
          autoComplete="address-level1"
          required
          placeholder="Select state"
          options={states}
          error={errors.state}
          onChange={(e) => onStateChange?.((e.target as HTMLSelectElement).value)}
        />
        <FormField
          label="ZIP Code"
          name="zip"
          id="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          required
          placeholder="43215"
          error={errors.zip}
        />
      </div>

      <FormField
        as="textarea"
        label="Message / Notes"
        name="message"
        id="message"
        placeholder="Tell us about your project — type of roof, age, any visible damage..."
        error={errors.message}
      />

      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3" role="alert">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Request Free Estimate"}
      </Button>

      <p className="text-center text-xs text-brand-gray">
        We respond within 1 business day. No spam, ever.
      </p>
    </form>
  );
}
