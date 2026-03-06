import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = buildMetadata({
  title: "Free Roofing Estimate — Contact Us",
  description:
    "Request a free roof estimate in Columbus, OH or Statesville, NC. Same-day response for repairs. Call or fill out our quick form.",
  path: "/contact",
});

async function fetchStates(): Promise<{ label: string; value: string }[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiBase) return [];
  try {
    const res = await fetch(`${apiBase}/api/service-areas/`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data: { state: string; state_code: string }[] = await res.json();
    const seen = new Set<string>();
    return data
      .filter((sa) => {
        if (seen.has(sa.state_code)) return false;
        seen.add(sa.state_code);
        return true;
      })
      .map((sa) => ({ label: `${sa.state} (${sa.state_code})`, value: sa.state_code }));
  } catch {
    return [];
  }
}

export default async function ContactPage() {
  const states = await fetchStates();
  return (
    <>
      <SectionWrapper className="bg-brand-offwhite">
        <ContactSection states={states} />
      </SectionWrapper>
    </>
  );

}
