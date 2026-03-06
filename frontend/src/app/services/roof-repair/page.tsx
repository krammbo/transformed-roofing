import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Roof Repair Columbus OH — Leaks, Storm Damage & Flashing",
  description:
    "Fast roof repair in Columbus, OH. Leaks, storm damage, worn flashing, missing shingles. Same-day or next-day response. Licensed & insured.",
  path: "/services/roof-repair",
});

const REPAIR_TYPES = [
  { icon: "💧", title: "Leak Repair", description: "We find the source, not just the symptom. Proper waterproofing and flashing repair." },
  { icon: "🌪️", title: "Storm Damage", description: "Wind, hail, and fallen branch damage repaired quickly to prevent further water intrusion." },
  { icon: "🔩", title: "Flashing Repair", description: "Chimney, skylight, and valley flashing failures are a common cause of leaks. We fix them right." },
  { icon: "🪟", title: "Missing Shingles", description: "Blown-off shingles replaced with matching materials to restore weather protection." },
  { icon: "🌡️", title: "Ventilation Issues", description: "Improper attic ventilation causes premature shingle failure. We diagnose and correct it." },
  { icon: "🪣", title: "Gutter & Fascia", description: "Damaged gutters and fascia boards repaired alongside roofing work for complete protection." },
];

export default function RoofRepairPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Roof Repair",
          description: "Fast, reliable repairs for leaks, storm damage, and worn flashing. Most repairs same-day or next-day.",
          url: "/services/roof-repair",
        })}
      />
      <HeroSection
        badge="Service"
        heading="Roof Repair in Columbus, OH"
        subheading="Leaks, storm damage, missing shingles — we find the cause and fix it right the first time. Same-day and next-day response available."
        ctaLabel="Get Fast Repair Quote"
        ctaHref="/contact"
      />

      <SectionWrapper className="bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-charcoal">What We Repair</h2>
          <p className="mt-3 text-brand-gray max-w-2xl mx-auto">
            From a single missing shingle to widespread storm damage — no job is too small.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPAIR_TYPES.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-xl bg-brand-offwhite border border-gray-100">
              <div className="text-3xl shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-bold text-brand-charcoal mb-1">{r.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner
        heading="Noticed a Leak? Don't Wait."
        subheading="Water damage compounds quickly. Call us now for same-day or next-day response."
      />
    </>
  );
}
