import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Project Gallery — Completed Work",
  description:
    "Browse our gallery of completed roofing projects in Columbus, OH and Statesville, NC. Roof replacements, new installations, and repairs.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        heading="Our Work"
        ctaLabel="Get a Free Estimate"
        subheading="A selection of completed roofing projects across Columbus, OH and Statesville, NC."
      />
      <GalleryGrid />
      <CtaBanner heading="Want Your Roof to Look This Good?" subheading="Request a free estimate — we'll tell you exactly what your roof needs." />
    </>
  );
}
