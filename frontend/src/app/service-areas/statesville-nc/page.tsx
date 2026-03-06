import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceAreaSchema } from "@/lib/structured-data";
import { PHONE_NC } from "@/lib/constants";
import { LocationSelector } from "@/components/ui/LocationSelector";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Contractor Statesville NC — Iredell County Roofing",
  description:
    "Expert roofing contractor in Statesville, North Carolina. Roof replacement, repair, and insurance claims serving Iredell County. Licensed & insured. Free estimates.",
  path: "/service-areas/statesville-nc",
});

const COMMUNITIES = [
  "Mooresville", "Troutman", "Harmony", "Olin", "Scotts",
  "Mount Mourne", "Davidson", "Cornelius", "Huntersville",
];

export default function StatesvilleNcPage() {
  return (
    <>
      <JsonLd
        data={serviceAreaSchema({
          city: "Statesville",
          state: "North Carolina",
          stateCode: "NC",
          lat: 35.7829,
          lng: -80.8873,
          phone: PHONE_NC,
        })}
      />
      <HeroSection
        heading="Roofing Contractor in Statesville, NC"
        subheading="Serving Statesville and all of Iredell County. Expert roof replacement, repair, and insurance claims — licensed in North Carolina."
        ctaLabel="Free Statesville Estimate"
        ctaHref="/contact"
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
              Iredell County&apos;s Roofing Experts
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              Statesville and Iredell County homes face unique roofing challenges — from summer humidity that promotes algae growth to severe thunderstorms that cause hail and wind damage.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              Our North Carolina crews are licensed, experienced with local building codes, and familiar with the specific roofing conditions in the Piedmont region.
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-brand-charcoal mb-3">Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {COMMUNITIES.map((c) => (
                  <span key={c} className="text-xs rounded-full bg-brand-offwhite border border-gray-200 px-3 py-1 text-brand-gray">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "State License", value: "NC Licensed & Insured" },
              { label: "Service Area", value: "Iredell County & surrounding" },
              { label: "Specialties", value: "Storm damage, insurance claims" },
              { label: "Est. Response", value: "1–2 business days" },
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
        heading="Services in Statesville, NC"
        subheading="Complete roofing services for Iredell County homeowners."
      />

      <CtaBanner
        heading="Statesville Homeowner? Get a Free Estimate."
        subheading="Licensed in North Carolina. Same trusted service as our Columbus location."
      />
    </>
  );
}
