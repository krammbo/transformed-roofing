import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Company Columbus OH & Statesville NC",
  description:
    "Transformed Roofing — expert roof replacement, installation, repair, and insurance claims in Columbus, OH and Statesville, NC. Free estimates. Licensed & insured.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        heading="Your Trusted Roofing Contractor"
        subheading="Expert roof replacement, installation, repair, and insurance claims. Fast response, transparent pricing, and workmanship backed by warranty."
        ctaLabel="Get Free Estimate"
        ctaHref="/contact"
        secondaryCtaLabel="Our Services"
        secondaryCtaHref="/services"
      />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceAreaMap />
      <CtaBanner />
    </>
  );
}
