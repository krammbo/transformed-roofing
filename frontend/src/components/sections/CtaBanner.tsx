"use client";

import { Button } from "@/components/ui/Button";
import { useServiceArea } from "@/context/ServiceAreaContext";

interface CtaBannerProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaBanner({
  heading = "Ready for a New Roof?",
  subheading = "Get a free, no-obligation estimate from our certified roofing experts.",
  ctaLabel = "Schedule Free Estimate",
  ctaHref = "/contact",
}: CtaBannerProps) {
  const { currentArea } = useServiceArea();

  return (
    <section className="bg-brand-gold text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{heading}</h2>
            <p className="mt-2 text-sm sm:text-base text-white/90">{subheading}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Button href={ctaHref} variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
              {ctaLabel}
            </Button>
            <a
              href={currentArea.phone_href}
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-white hover:text-brand-gold transition-colors duration-200"
            >
              {currentArea.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
