import { cn } from "@/lib/cn";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface PhoneLinkProps {
  className?: string;
  label?: string;
  href?: string;
}

export function PhoneLink({ className, label = PHONE, href = PHONE_HREF }: PhoneLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "font-semibold text-brand-gold hover:text-brand-orange transition-colors duration-200",
        className
      )}
    >
      {label}
    </a>
  );
}
