"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SERVICE_AREAS } from "@/lib/constants";

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  state_code: string;
  phone: string;
  phone_href: string;
  lat: number;
  lng: number;
  is_primary: boolean;
};

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Build fallback data from constants so the app works without the API
const FALLBACK_AREAS: ServiceArea[] = SERVICE_AREAS.map((a) => ({
  slug: a.slug,
  city: a.city,
  state: a.state,
  state_code: a.stateCode,
  phone: a.phone,
  phone_href: a.phoneHref,
  lat: a.lat,
  lng: a.lng,
  is_primary: a.isPrimary,
}));

const PRIMARY = FALLBACK_AREAS.find((a) => a.is_primary) ?? FALLBACK_AREAS[0];

interface ServiceAreaContextValue {
  areas: ServiceArea[];
  currentArea: ServiceArea;
  setCurrentArea: (area: ServiceArea) => void;
  isLoading: boolean;
}

const ServiceAreaContext = createContext<ServiceAreaContextValue>({
  areas: FALLBACK_AREAS,
  currentArea: PRIMARY,
  setCurrentArea: () => {},
  isLoading: true,
});

export function useServiceArea() {
  return useContext(ServiceAreaContext);
}

export function ServiceAreaProvider({ children }: { children: React.ReactNode }) {
  const [areas, setAreas] = useState<ServiceArea[]>(FALLBACK_AREAS);
  const [currentArea, setCurrentAreaState] = useState<ServiceArea>(PRIMARY);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      // 1. Fetch areas from API (fall back to constants on error)
      let availableAreas: ServiceArea[] = FALLBACK_AREAS;
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (apiBase) {
        try {
          const res = await fetch(`${apiBase}/api/service-areas/`);
          const data: ServiceArea[] = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            availableAreas = data;
            setAreas(data);
          }
        } catch {
          // silently use fallback
        }
      }

      // 2. Respect saved user preference
      const saved = localStorage.getItem("service_area_slug");
      const savedArea = availableAreas.find((a) => a.slug === saved);
      if (savedArea) {
        setCurrentAreaState(savedArea);
        setIsLoading(false);
        return;
      }

      // 3. Auto-detect via geolocation
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            const nearest = availableAreas.reduce((best, area) => {
              const d = haversineKm(latitude, longitude, area.lat, area.lng);
              const bd = haversineKm(latitude, longitude, best.lat, best.lng);
              return d < bd ? area : best;
            });
            setCurrentAreaState(nearest);
            setIsLoading(false);
          },
          () => setIsLoading(false),
          { timeout: 5000 },
        );
      } else {
        setIsLoading(false);
      }
    }

    init();
  }, []);

  function setCurrentArea(area: ServiceArea) {
    setCurrentAreaState(area);
    localStorage.setItem("service_area_slug", area.slug);
  }

  return (
    <ServiceAreaContext.Provider value={{ areas, currentArea, setCurrentArea, isLoading }}>
      {children}
    </ServiceAreaContext.Provider>
  );
}
