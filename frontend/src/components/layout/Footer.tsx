import Link from "next/link";
import { COMPANY_NAME, PHONE, PHONE_HREF, EMAIL, SERVICES, SERVICE_AREAS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Col 1: Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="text-brand-gold">⬡</span>
              <span>{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Premium roofing services in Columbus, OH and Statesville, NC. Licensed, insured, and backed by warranty.
            </p>
            <a href={PHONE_HREF} className="text-brand-gold font-semibold hover:text-brand-orange transition-colors">
              {PHONE}
            </a>
            <br />
            <a href={`mailto:${EMAIL}`} className="text-sm text-gray-400 hover:text-white transition-colors">
              {EMAIL}
            </a>
          </div>

          {/* Col 2: Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mt-6 mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service areas + address */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Service Areas</h3>
            <ul className="space-y-2 mb-6">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link href={`/service-areas/${area.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {area.city}, {area.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
            <address className="not-italic text-sm text-gray-400">
              <p className="font-medium text-white mb-1">Primary Office</p>
              <p>Columbus, OH</p>
              <p className="mt-2 font-medium text-white mb-1">Secondary Office</p>
              <p>Statesville, NC</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Licensed & Insured · Columbus, OH · Statesville, NC</p>
        </div>
      </div>
    </footer>
  );
}
