import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICE_AREAS } from "@/lib/constants";
import Link from "next/link";

export function ServiceAreaMap() {
  return (
    <SectionWrapper className="bg-brand-offwhite">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-charcoal sm:text-4xl">Areas We Serve</h2>
        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
          Proudly serving homeowners in Columbus, OH and Statesville, NC and surrounding communities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICE_AREAS.map((area) => (
          <Link
            key={area.slug}
            href={`/service-areas/${area.slug}`}
            className="group block rounded-xl bg-white border border-gray-200 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 p-8"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-brand-charcoal group-hover:text-brand-navy transition-colors">
                {area.city}, {area.stateCode}
              </h3>
              {area.isPrimary && (
                <span className="text-xs font-semibold uppercase tracking-wider bg-brand-gold/10 text-brand-gold border border-brand-gold/30 rounded-full px-2 py-0.5">
                  Primary
                </span>
              )}
            </div>
            <p className="text-sm text-brand-gray leading-relaxed mb-4">{area.description}</p>
            <div className="text-sm font-semibold text-brand-gold group-hover:text-brand-orange transition-colors">
              View service area →
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
