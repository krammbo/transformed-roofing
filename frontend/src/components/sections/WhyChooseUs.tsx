import { SectionWrapper } from "@/components/ui/SectionWrapper";

const USPs = [
  {
    icon: "🏆",
    title: "Licensed & Insured",
    description: "Fully licensed in Ohio and North Carolina. Liability and workers' comp covered.",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    description: "Same-day or next-day response for repairs. Most replacements completed in one day.",
  },
  {
    icon: "📋",
    title: "Insurance Specialists",
    description: "We work directly with your adjuster to maximize your claim payout.",
  },
  {
    icon: "🛡️",
    title: "Backed by Warranty",
    description: "Manufacturer material warranty plus our own workmanship guarantee.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description: "Detailed written estimates — no hidden fees, no surprises at invoice.",
  },
  {
    icon: "⭐",
    title: "5-Star Rated",
    description: "Hundreds of satisfied customers across Columbus and Statesville.",
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-brand-charcoal sm:text-4xl">
          Why Choose Transformed Roofing?
        </h2>
        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
          We&apos;re not the biggest roofing company — we&apos;re just the best choice for your home.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {USPs.map((usp) => (
          <div key={usp.title} className="flex gap-4">
            <div className="shrink-0 text-3xl">{usp.icon}</div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-1">{usp.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{usp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
