import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

export function Card({ variant = "default", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-4 sm:p-6",
        variant === "bordered" && "border border-gray-200",
        variant === "elevated" && "shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
