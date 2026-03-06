import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "About Transformed Roofing — Our Story & Values",
  description:
    "Learn about Transformed Roofing — a family-owned roofing company serving Columbus, OH and Statesville, NC. Licensed, insured, and committed to quality.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeroSection
        heading="About Transformed Roofing"
        ctaLabel="Get a Free Estimate"
        subheading="A family-owned roofing company built on quality work, fair pricing, and standing behind every project."
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Our Story</h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              Transformed Roofing was founded on a simple belief: homeowners deserve honest, high-quality roofing services from a company that shows up, does the work right, and stands behind it.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              We started in Columbus, Ohio, and expanded to Statesville, North Carolina to serve both communities where we live and work. Every project we take on reflects our commitment to craftsmanship and customer care.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              We work with homeowners, property managers, and builders — treating every roof as if it were our own. That means no shortcuts, no surprises, and no job too small.
            </p>
          </div>
          <div className="rounded-xl bg-brand-offwhite border-2 border-dashed border-brand-steel/20 p-6 sm:p-10 text-center text-brand-gray">
            <div className="text-5xl sm:text-6xl mb-4">👷</div>
            <p className="text-sm">Team photo coming soon</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-navy text-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "200+", label: "Roofs Completed" },
            { value: "5★", label: "Average Rating" },
            { value: "2", label: "States Licensed" },
            { value: "10yr", label: "Workmanship Warranty" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-brand-steel">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
