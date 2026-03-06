import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  badge?: React.ReactNode;
  className?: string;
}

export function HeroSection({
  heading,
  subheading,
  ctaLabel,
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
  badge,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative bg-brand-charcoal text-white overflow-hidden",
        className
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-charcoal/80 to-brand-charcoal/95 z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-36">
        <div className="max-w-3xl">
          {badge && (
            <span className="mb-4 inline-flex items-center rounded-full bg-brand-gold/20 border border-brand-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              {badge}
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
            {heading}
          </h1>
          {subheading && (
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {subheading}
            </p>
          )}
          {(ctaLabel || (secondaryCtaLabel && secondaryCtaHref)) && (
            <div className="flex flex-wrap gap-4">
              {ctaLabel && (
                <Button href={ctaHref} variant="primary" size="lg">
                  {ctaLabel}
                </Button>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="outline" size="lg">
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
