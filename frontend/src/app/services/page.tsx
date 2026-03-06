import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Services — Replacement, Installation, Repair & Insurance",
  description:
    "Transformed Roofing offers full roof replacement, new installation, repair, and insurance claim assistance in Columbus, OH and Statesville, NC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        heading="Expert Roofing Services"
        ctaLabel="Get a Free Estimate"
        subheading="From emergency repairs to full replacements — we handle every roofing challenge with professionalism and care."
      />
      <ServicesGrid
        heading="What We Offer"
        subheading="All services come with detailed written estimates, licensed crews, and workmanship warranty."
      />
      <CtaBanner heading="Questions About Your Roof?" subheading="Call us or request a free estimate online — we respond fast." />
    </>
  );
}
