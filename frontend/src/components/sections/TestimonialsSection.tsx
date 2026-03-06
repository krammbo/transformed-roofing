"use client";

import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { useServiceArea } from "@/context/ServiceAreaContext";
import { fetchReviewsForArea } from "@/lib/reviews";
import type { ReviewDisplay } from "@/types";

export function TestimonialsSection() {
  const { currentArea, isLoading: areaLoading } = useServiceArea();
  const [reviews, setReviews] = useState<ReviewDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (areaLoading) return;
    setLoading(true);
    fetchReviewsForArea(currentArea.state_code).then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, [currentArea.state_code, areaLoading]);

  return (
    <SectionWrapper className="bg-brand-navy">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What Our Customers Say</h2>
        <p className="mt-4 text-lg text-brand-steel max-w-2xl mx-auto">
          Real reviews from homeowners in {currentArea.city}, {currentArea.state_code}.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-white/10 border border-white/10 h-48 animate-pulse" />
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-center text-brand-steel">No reviews yet for this area.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((r) => (
            <Card key={r.id} variant="elevated" className="bg-white/10 border border-white/10 text-white">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-brand-gold text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-sm text-gray-200 leading-relaxed mb-4">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="text-sm font-semibold text-white">
                {r.name} <span className="text-brand-steel font-normal">— {r.location}</span>
              </div>
              {r.projectType && (
                <span className="mt-3 inline-block text-xs font-medium bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                  {r.projectType}
                </span>
              )}
              {r.sourceUrl && (
                <a
                  href={r.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-xs text-brand-gold hover:underline"
                >
                  Read on {r.source === "google" ? "Google" : r.source || "source"} →
                </a>
              )}
            </Card>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
