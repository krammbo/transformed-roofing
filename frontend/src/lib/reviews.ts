import { TESTIMONIALS } from "./constants";
import type { Review, ReviewDisplay } from "@/types";

function toDisplayReview(r: Review): ReviewDisplay {
  return {
    id: String(r.id),
    name: r.reviewer_name,
    location: r.location_label,
    quote: r.body,
    rating: r.rating,
    isFeatured: r.is_featured,
    projectType: r.project_type,
    sourceUrl: r.source_url,
    source: r.source,
  };
}

function toDisplayFromConstant(
  t: (typeof TESTIMONIALS)[number],
  index: number
): ReviewDisplay {
  return {
    id: `fallback-${index}`,
    name: t.name,
    location: t.location,
    quote: t.quote,
    rating: t.rating,
    isFeatured: false,
    projectType: "",
    sourceUrl: "",
    source: "",
  };
}

export async function fetchReviews(limit = 3): Promise<ReviewDisplay[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!apiBase) return TESTIMONIALS.map(toDisplayFromConstant);

  try {
    const res = await fetch(`${apiBase}/api/reviews/?limit=${limit}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return TESTIMONIALS.map(toDisplayFromConstant);
    const data: Review[] = await res.json();
    if (!Array.isArray(data) || data.length === 0)
      return TESTIMONIALS.map(toDisplayFromConstant);
    return data.map(toDisplayReview);
  } catch {
    return TESTIMONIALS.map(toDisplayFromConstant);
  }
}

/** Client-side fetch — filters by state code and only returns featured reviews */
export async function fetchReviewsForArea(
  stateCode: string,
  limit = 3,
): Promise<ReviewDisplay[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

  function filteredFallback() {
    const filtered = TESTIMONIALS.filter((t) => t.location.includes(stateCode));
    return filtered.map(toDisplayFromConstant);
  }

  if (!apiBase) return filteredFallback();

  try {
    const url = `${apiBase}/api/reviews/?limit=${limit}&state=${encodeURIComponent(stateCode)}`;
    const res = await fetch(url);
    if (!res.ok) return filteredFallback();
    const data: Review[] = await res.json();
    if (!Array.isArray(data) || data.length === 0) return filteredFallback();
    return data.map(toDisplayReview);
  } catch {
    return filteredFallback();
  }
}
