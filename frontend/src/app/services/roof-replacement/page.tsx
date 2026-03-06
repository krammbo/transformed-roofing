import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Roof Replacement Columbus OH — Full Tear-Off & Install",
  description:
    "Professional roof replacement in Columbus, OH. Full tear-off, premium shingles, manufacturer & workmanship warranty. Free estimates. Licensed & insured.",
  path: "/services/roof-replacement",
});

const STEPS = [
  { step: "01", title: "Free Inspection", description: "We assess your existing roof, identify all damage, and give you a detailed written estimate." },
  { step: "02", title: "Material Selection", description: "Choose from our curated selection of shingles and underlayment to match your home's style and budget." },
  { step: "03", title: "Full Tear-Off", description: "Our crew removes the existing roof down to the deck, inspecting and repairing the sheathing as needed." },
  { step: "04", title: "Installation", description: "We install new underlayment, ice and water shield, and your chosen shingles — all to manufacturer spec." },
  { step: "05", title: "Cleanup & Inspection", description: "Magnetic sweep for nails, full haul-off of debris, and final quality inspection before we leave." },
  { step: "06", title: "Warranty & Follow-Up", description: "You receive manufacturer and workmanship warranty documentation. We follow up 30 days later." },
];

export default function RoofReplacementPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Roof Replacement",
          description: "Full roof tear-off and replacement with premium shingles. Backed by manufacturer and workmanship warranties.",
          url: "/services/roof-replacement",
        })}
      />
      <HeroSection
        badge="Service"
        heading="Roof Replacement in Columbus, OH"
        subheading="Full tear-off and replacement with premium shingles. Most jobs completed in a single day — backed by manufacturer and workmanship warranties."
        ctaLabel="Get Free Estimate"
        ctaHref="/contact"
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
              Why Replace Instead of Repair?
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              If your roof is 20+ years old, has widespread granule loss, multiple leak points, or significant storm damage, replacement is often more cost-effective than repeated repairs. A new roof adds home value, improves energy efficiency, and provides decades of peace of mind.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              We install GAF, Owens Corning, and CertainTeed shingles — each backed by manufacturer warranties up to 50 years. Our own workmanship warranty covers labor defects for 10 years.
            </p>
            <ul className="space-y-2">
              {["Licensed & insured crews", "Single-day completion for most homes", "Same-year manufacturer warranty registration", "Detailed written estimate before any work begins"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                  <span className="text-brand-gold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-brand-offwhite border-2 border-dashed border-brand-steel/20 p-8 text-center text-brand-gray">
            <div className="text-6xl mb-4">🏠</div>
            <p className="text-sm">Photo — Completed replacement project</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-offwhite">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-10">Our Replacement Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-brand-gold/40 mb-2">{s.step}</div>
              <h3 className="font-bold text-brand-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner
        heading="Ready for a New Roof?"
        subheading="Most replacements are completed in a single day. Get your free estimate today."
      />
    </>
  );
}
