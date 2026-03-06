import { cn } from "@/lib/cn";

interface BadgeProps {
  label: string;
  variant?: "gold" | "navy" | "steel" | "green";
  className?: string;
}

const variantClasses = {
  gold: "bg-brand-gold/10 text-brand-gold border-brand-gold/30",
  navy: "bg-brand-navy/10 text-brand-navy border-brand-navy/30",
  steel: "bg-brand-steel/10 text-brand-steel border-brand-steel/30",
  green: "bg-green-100 text-green-800 border-green-200",
};

export function Badge({ label, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wider",
        variantClasses[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
