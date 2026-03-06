import Link from "next/link";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { ContextualPhoneLink } from "@/components/ui/ContextualPhoneLink";
import { LocationSelector } from "@/components/ui/LocationSelector";
import { COMPANY_NAME, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-brand-navy shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl hover:text-brand-gold transition-colors"
            aria-label={`${COMPANY_NAME} — Home`}
          >
            <span className="text-brand-gold">⬡</span>
            <span className="font-heading">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Desktop phone CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <LocationSelector variant="nav" />
            <ContextualPhoneLink className="text-sm" />
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-white hover:bg-brand-orange transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
