import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "New Roof Installation Columbus OH — New Construction & Additions",
  description:
    "Expert new roof installation for new construction and home additions in Columbus, OH. We work with builders and homeowners. Free estimates.",
  path: "/services/new-roof-installation",
});

export default function NewRoofInstallationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "New Roof Installation",
          description: "Expert installation for new construction and additions. We work with builders and homeowners.",
          url: "/services/new-roof-installation",
        })}
      />
      <HeroSection
        badge="Service"
        heading="New Roof Installation in Columbus, OH"
        subheading="Building new construction or adding an addition? Our certified crews install roofing systems that last — on schedule and on budget."
        ctaLabel="Get Free Estimate"
        ctaHref="/contact"
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
              Built Right From Day One
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              New construction roofing requires precise coordination with your builder&apos;s schedule. We show up on time, work efficiently with other trades, and leave the site clean every day.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              We work directly with general contractors and homeowner-builders throughout the Columbus metro area. From single-family homes to multi-unit developments, our teams are experienced in all roof types and pitches.
            </p>
            <ul className="space-y-2">
              {[
                "Builder-friendly scheduling and communication",
                "All roof types: gable, hip, flat, complex",
                "Full system installation: underlayment, flashings, ridge vents",
                "Detailed material take-offs and firm quotes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                  <span className="text-brand-gold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-brand-offwhite border-2 border-dashed border-brand-steel/20 p-8 text-center text-brand-gray">
            <div className="text-6xl mb-4">🔨</div>
            <p className="text-sm">Photo — New construction project</p>
          </div>
        </div>
      </SectionWrapper>

      <CtaBanner
        heading="Starting a New Build?"
        subheading="Let's get roofing on your project timeline. Request a quote today."
      />
    </>
  );
}
