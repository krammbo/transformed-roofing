import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — Columbus OH & Statesville NC Roofing",
  description:
    "Transformed Roofing serves Columbus, OH and Statesville, NC and all surrounding communities. Find your area and request a free estimate.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <HeroSection
        heading="Where We Work"
        ctaLabel="Get a Free Estimate"
        subheading="Serving homeowners in Columbus, Ohio and Statesville, North Carolina — and every community in between."
      />
      <ServiceAreaMap />
      <CtaBanner heading="Not Sure If We Serve Your Area?" subheading="Call us — if we can't help, we'll point you in the right direction." />
    </>
  );
}
