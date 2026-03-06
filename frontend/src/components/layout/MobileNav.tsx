"use client";

import { useState } from "react";
import { NavLink } from "./NavLink";
import { ContextualPhoneLink } from "@/components/ui/ContextualPhoneLink";
import { LocationSelector } from "@/components/ui/LocationSelector";
import { NAV_LINKS } from "@/lib/constants";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-brand-gold transition-colors"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 bg-brand-navy border-t border-brand-steel/20 shadow-lg">
          <nav className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-base border-b border-brand-steel/10 last:border-0"
              />
            ))}
            <div className="pt-3 flex items-center justify-between">
              <LocationSelector variant="nav" />
              <ContextualPhoneLink className="text-base" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
