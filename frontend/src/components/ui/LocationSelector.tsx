"use client";

import { useEffect, useRef, useState } from "react";
import { useServiceArea, type ServiceArea } from "@/context/ServiceAreaContext";

interface LocationSelectorProps {
  /** If provided and user has no saved preference, initialise context to this area on mount */
  defaultSlug?: string;
  /** Visual variant — "badge" for hero sections, "nav" for the header */
  variant?: "badge" | "nav";
}

export function LocationSelector({ defaultSlug, variant = "badge" }: LocationSelectorProps) {
  const { areas, currentArea, setCurrentArea, isLoading } = useServiceArea();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // If this component knows which page we're on, seed the context when there's no saved pref
  useEffect(() => {
    if (!defaultSlug) return;
    if (localStorage.getItem("service_area_slug")) return;
    const match = areas.find((a) => a.slug === defaultSlug);
    if (match) setCurrentArea(match);
    // Only run when areas resolve (isLoading → false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function select(area: ServiceArea) {
    setCurrentArea(area);
    setOpen(false);
  }

  const label = `${currentArea.city}, ${currentArea.state_code}`;

  if (variant === "nav") {
    return (
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-orange transition-colors"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {label}
          <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && <DropdownMenu areas={areas} currentSlug={currentArea.slug} onSelect={select} />}
      </div>
    );
  }

  // badge variant (hero section)
  return (
    <div ref={ref} className="relative mb-4 inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:bg-brand-gold/30 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {label}
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <DropdownMenu areas={areas} currentSlug={currentArea.slug} onSelect={select} />}
    </div>
  );
}

function DropdownMenu({
  areas,
  currentSlug,
  onSelect,
}: {
  areas: ServiceArea[];
  currentSlug: string;
  onSelect: (area: ServiceArea) => void;
}) {
  return (
    <ul
      role="listbox"
      className="absolute left-0 top-full mt-2 z-50 min-w-[160px] sm:min-w-[180px] rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden"
    >
      {areas.map((area) => (
        <li key={area.slug} role="option" aria-selected={area.slug === currentSlug}>
          <button
            type="button"
            onClick={() => onSelect(area)}
            className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-3 transition-colors ${
              area.slug === currentSlug
                ? "bg-brand-gold/10 text-brand-navy font-semibold"
                : "text-brand-charcoal hover:bg-gray-50"
            }`}
          >
            <span>
              {area.city}, {area.state_code}
            </span>
            {area.slug === currentSlug && (
              <svg className="h-4 w-4 text-brand-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
