import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Roof Claim Contractor Columbus OH — Maximize Your Payout",
  description:
    "We work directly with your insurance company on storm damage roof claims in Columbus, OH. Maximize your payout — no out-of-pocket surprises. Free inspection.",
  path: "/services/insurance-claims",
});

const CLAIM_STEPS = [
  { step: "1", title: "Call Us First", description: "Before contacting your insurer, call us. We'll inspect the damage and document everything properly." },
  { step: "2", title: "Free Inspection", description: "Our estimator documents all damage with photos and measurements for your claim file." },
  { step: "3", title: "Adjuster Meeting", description: "We meet your adjuster on-site to ensure nothing is missed and your claim reflects the true scope." },
  { step: "4", title: "Claim Approval", description: "We review the insurer's scope with you and identify any supplements needed to cover all damage." },
  { step: "5", title: "Roof Replacement", description: "Once approved, we schedule your replacement. We handle all the paperwork and coordination." },
  { step: "6", title: "Final Payment", description: "You pay your deductible. We handle the rest — no hidden charges, no shortcuts." },
];

export default function InsuranceClaimsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Insurance Roof Claims",
          description: "We work directly with your insurance company to maximize your claim. No out-of-pocket surprises.",
          url: "/services/insurance-claims",
        })}
      />
      <HeroSection
        badge="Service"
        heading="Insurance Roof Claim Contractor in Columbus, OH"
        subheading="Storm damage? We work directly with your insurance company to maximize your claim — you only pay your deductible."
        ctaLabel="Free Damage Inspection"
        ctaHref="/contact"
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
              Don&apos;t Navigate Insurance Alone
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              Insurance companies are looking to minimize payouts. Without a roofing contractor experienced in claims, you may receive far less than your roof replacement actually costs.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              We&apos;ve processed hundreds of claims and know exactly what adjusters look for — and what they sometimes miss. We advocate for you throughout the entire process.
            </p>
            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-4 mt-6">
              <p className="text-sm font-semibold text-brand-charcoal">
                ⚠️ Important: Call us before you file your claim. The order of operations matters for maximizing your payout.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-brand-offwhite border-2 border-dashed border-brand-steel/20 p-8 text-center text-brand-gray">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-sm">Photo — Storm damage documentation</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-offwhite">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-10">Our Claims Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLAIM_STEPS.map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center mb-3">
                {s.step}
              </div>
              <h3 className="font-bold text-brand-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner
        heading="Had a Storm? Get a Free Inspection."
        subheading="We'll tell you honestly whether you have a claim-worthy damage. No pressure."
      />
    </>
  );
}
