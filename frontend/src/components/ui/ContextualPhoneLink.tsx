"use client";

import { useServiceArea } from "@/context/ServiceAreaContext";
import { cn } from "@/lib/cn";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface ContextualPhoneLinkProps {
  className?: string;
}

export function ContextualPhoneLink({ className }: ContextualPhoneLinkProps) {
  const { currentArea, isLoading } = useServiceArea();

  const phone = isLoading ? PHONE : currentArea.phone;
  const href = isLoading ? PHONE_HREF : currentArea.phone_href;

  return (
    <a
      href={href}
      className={cn(
        "font-semibold text-brand-gold hover:text-brand-orange transition-colors duration-200",
        className,
      )}
    >
      {phone}
    </a>
  );
}
