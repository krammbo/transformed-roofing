"use client";

import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FormFieldBaseProps {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
}

interface InputFieldProps extends FormFieldBaseProps, InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaFieldProps extends FormFieldBaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

interface SelectFieldProps extends FormFieldBaseProps, SelectHTMLAttributes<HTMLSelectElement> {
  as: "select";
  options: { label: string; value: string }[];
  placeholder?: string;
}

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

export function FormField({ label, error, required, hint, as = "input", className, ...props }: FormFieldProps) {
  const id = (props as { id?: string }).id ?? (props as { name?: string }).name;
  const inputClasses = cn(
    "mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-1",
    error
      ? "border-red-500 focus-visible:ring-red-500"
      : "border-gray-300 hover:border-brand-steel",
    className
  );

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-charcoal">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          className={inputClasses}
          rows={4}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === "select" ? (
        <select
          id={id}
          className={cn(inputClasses, "bg-white")}
          {...(props as SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="">{(props as SelectFieldProps).placeholder ?? "Select…"}</option>
          {(props as SelectFieldProps).options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={inputClasses}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && !error && <p className="mt-1 text-xs text-brand-gray">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}
