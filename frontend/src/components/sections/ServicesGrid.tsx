import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";

interface ServicesGridProps {
  heading?: string;
  subheading?: string;
}

export function ServicesGrid({
  heading = "Our Roofing Services",
  subheading = "From full replacements to insurance claims — we handle every aspect of your roofing project.",
}: ServicesGridProps) {
  return (
    <SectionWrapper className="bg-brand-offwhite">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-charcoal sm:text-4xl">{heading}</h2>
        <p className="mt-3 text-base sm:text-lg text-brand-gray max-w-2xl mx-auto">{subheading}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {SERVICES.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group">
            <Card
              variant="elevated"
              className="h-full transition-shadow duration-300 hover:shadow-xl border border-transparent hover:border-brand-gold/20"
            >
              <div className="text-3xl sm:text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-navy transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">{service.shortDescription}</p>
              <div className="mt-4 text-sm font-semibold text-brand-gold group-hover:text-brand-orange transition-colors">
                Learn more →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
