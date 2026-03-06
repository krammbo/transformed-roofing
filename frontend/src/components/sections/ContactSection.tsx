"use client";

import { useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { EMAIL, SERVICE_AREAS } from "@/lib/constants";
import { ContextualPhoneLink } from "@/components/ui/ContextualPhoneLink";
import { useServiceArea } from "@/context/ServiceAreaContext";

interface StateOption {
  label: string;
  value: string;
}

export function ContactSection({ states }: { states: StateOption[] }) {
  const { currentArea, areas, setCurrentArea } = useServiceArea();
  const [selectedState, setSelectedState] = useState("");

  function handleStateChange(stateCode: string) {
    setSelectedState(stateCode);
    const match = areas.find((a) => a.state_code === stateCode);
    if (match) setCurrentArea(match);
  }

  const activeStateCode = selectedState || currentArea.state_code;
  const visibleAreas = SERVICE_AREAS.filter((area) => area.stateCode === activeStateCode);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      {/* Form */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Request an Estimate</h2>
        <ContactForm states={states} onStateChange={handleStateChange} />
      </div>

      {/* Contact info sidebar */}
      <aside className="lg:col-span-2 space-y-6">
        <div className="rounded-xl bg-brand-navy text-white p-6">
          <h3 className="font-bold text-lg mb-4">Contact Us Directly</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-brand-steel text-xs uppercase tracking-wider mb-1">Phone</p>
              <ContextualPhoneLink className="text-base" />
            </div>
            <div>
              <p className="text-brand-steel text-xs uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-white transition-colors">
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="text-brand-steel text-xs uppercase tracking-wider mb-1">Hours</p>
              <p className="text-gray-300">Mon–Fri: 7am–6pm</p>
              <p className="text-gray-300">Sat: 8am–2pm</p>
              <p className="text-gray-400 text-xs">Emergency service available 24/7</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white border border-gray-200 p-6">
          <h3 className="font-bold text-brand-charcoal mb-3">Service Areas</h3>
          <ul className="text-sm text-brand-gray space-y-2">
            {visibleAreas.map((area) =>
              area.cities.map((city) => (
                <li key={`${area.stateCode}-${city}`}>✓ {city}</li>
              ))
            )}
          </ul>
        </div>

        <div className="rounded-xl bg-brand-gold/10 border border-brand-gold/30 p-6">
          <h3 className="font-bold text-brand-charcoal mb-2">Insurance Claim?</h3>
          <p className="text-sm text-brand-gray">
            We work directly with your insurance company. Call us first — before contacting your insurer — and we&apos;ll guide you through the process.
          </p>
        </div>
      </aside>
    </div>
  );
}
