import { BASE_URL, COMPANY_NAME, PHONE, EMAIL } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor"],
    name: COMPANY_NAME,
    url: BASE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${BASE_URL}/og-default.jpg`,
    logo: `${BASE_URL}/logo.png`,
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Columbus",
        addressRegion: "OH",
        postalCode: "43215",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Statesville",
        addressRegion: "NC",
        postalCode: "28677",
        addressCountry: "US",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.9612,
      longitude: -82.9988,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Columbus",
        containedInPlace: {
          "@type": "State",
          name: "Ohio",
        },
      },
      {
        "@type": "City",
        name: "Statesville",
        containedInPlace: {
          "@type": "State",
          name: "North Carolina",
        },
      },
    ],
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY_NAME,
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "City", name: "Columbus", containedInPlace: { "@type": "State", name: "Ohio" } },
      { "@type": "City", name: "Statesville", containedInPlace: { "@type": "State", name: "North Carolina" } },
    ],
  };
}

export function serviceAreaSchema({
  city,
  state,
  stateCode,
  lat,
  lng,
  phone = PHONE,
}: {
  city: string;
  state: string;
  stateCode: string;
  lat: number;
  lng: number;
  phone?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor"],
    name: `${COMPANY_NAME} — ${city}, ${stateCode}`,
    url: BASE_URL,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: state },
    },
  };
}
