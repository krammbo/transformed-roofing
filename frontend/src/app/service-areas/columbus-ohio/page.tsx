import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceAreaSchema } from "@/lib/structured-data";
import { PHONE } from "@/lib/constants";
import { LocationSelector } from "@/components/ui/LocationSelector";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Contractor Columbus OH — Replacement, Repair & Insurance",
  description:
    "Top-rated roofing contractor in Columbus, Ohio. Roof replacement, repair, new installation, and insurance claims. Licensed & insured. Free estimates.",
  path: "/service-areas/columbus-ohio",
});

const NEIGHBORHOODS = [
  "Dublin", "Westerville", "Grove City", "Hilliard", "Gahanna",
  "Worthington", "Upper Arlington", "Reynoldsburg", "Pickerington",
  "Delaware", "Canal Winchester", "New Albany",
];

export default function ColumbusOhioPage() {
  return (
    <>
      <JsonLd
        data={serviceAreaSchema({
          city: "Columbus",
          state: "Ohio",
          stateCode: "OH",
          lat: 39.9612,
          lng: -82.9988,
          phone: PHONE,
        })}
      />
      <HeroSection
        heading="Roofing Contractor in Columbus, OH"
        subheading="Serving Columbus and the surrounding metro area. Expert roof replacement, installation, repair, and insurance claims — all backed by warranty."
        ctaLabel="Free Columbus Estimate"
        ctaHref="/contact"
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
              Columbus&apos;s Trusted Roofing Experts
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              Columbus, Ohio homeowners deal with a full range of weather challenges — from hot summers that bake shingles to ice storms that cause ice damming and structural stress. We know Central Ohio roofing inside and out.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              As a Columbus-based roofing company, we&apos;re in your neighborhood. We respond faster, show up on time, and stand behind every project we complete.
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-brand-charcoal mb-3">Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {NEIGHBORHOODS.map((n) => (
                  <span key={n} className="text-xs rounded-full bg-brand-offwhite border border-gray-200 px-3 py-1 text-brand-gray">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "Response Time", value: "Same-day or next-day" },
              { label: "Service Area Radius", value: "50+ miles from Columbus" },
              { label: "Projects Completed", value: "200+ Columbus homes" },
              { label: "Avg. Google Rating", value: "5.0 ★" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between rounded-xl bg-brand-offwhite border border-gray-200 px-4 py-3 sm:px-5 sm:py-4">
                <span className="text-sm text-brand-gray">{stat.label}</span>
                <span className="font-bold text-brand-navy">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ServicesGrid
        heading="Services in Columbus, OH"
        subheading="Everything your home needs — done right and done on time."
      />

      <TestimonialsSection />

      <CtaBanner
        heading="Columbus Homeowner? Get a Free Roof Inspection."
        subheading="We serve the entire Columbus metro area. Most inspections scheduled within 24 hours."
      />
    </>
  );
}
