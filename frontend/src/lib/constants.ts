export const PHONE = "(614) 555-0198";
export const PHONE_HREF = "tel:+16145550198";
export const PHONE_NC = "(704) 555-0198";
export const PHONE_NC_HREF = "tel:+17045550198";
export const EMAIL = "info@transformedroofing.com";
export const COMPANY_NAME = "Transformed Roofing";
export const BASE_URL = "https://transformedroofing.com";

export const ADDRESS = {
  primary: {
    city: "Columbus",
    state: "OH",
    stateCode: "OH",
    zip: "43215",
    full: "Columbus, OH",
  },
  secondary: {
    city: "Statesville",
    state: "North Carolina",
    stateCode: "NC",
    zip: "28677",
    full: "Statesville, NC",
  },
};

export const SERVICES = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    shortDescription:
      "Full tear-off and replacement with premium shingles. Backed by manufacturer and workmanship warranties.",
    icon: "🏠",
    keywords: ["roof replacement columbus ohio", "full roof replacement"],
  },
  {
    slug: "new-roof-installation",
    title: "New Roof Installation",
    shortDescription:
      "Expert installation for new construction and additions. We work with builders and homeowners.",
    icon: "🔨",
    keywords: ["new roof installation columbus ohio", "new construction roofing"],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    shortDescription:
      "Fast, reliable repairs for leaks, storm damage, and worn flashing. Most repairs same-day or next-day.",
    icon: "🔧",
    keywords: ["roof repair columbus ohio", "emergency roof repair"],
  },
  {
    slug: "insurance-claims",
    title: "Insurance Claims",
    shortDescription:
      "We work directly with your insurance company to maximize your claim. No out-of-pocket surprises.",
    icon: "📋",
    keywords: ["insurance roof claim contractor ohio", "storm damage roof claim"],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const SERVICE_AREAS = [
  {
    slug: "columbus-ohio",
    city: "Columbus",
    state: "Ohio",
    stateCode: "OH",
    heading: "Roofing Contractor in Columbus, OH",
    description:
      "Serving Columbus and the surrounding metro area including Dublin, Westerville, Grove City, Hilliard, and Gahanna.",
    cities: [
      "Columbus and metro area",
      "Dublin, Westerville, Grove City",
      "Hilliard, Gahanna, Worthington",
    ],
    lat: 39.9612,
    lng: -82.9988,
    phone: PHONE,
    phoneHref: PHONE_HREF,
    isPrimary: true,
  },
  {
    slug: "statesville-nc",
    city: "Statesville",
    state: "North Carolina",
    stateCode: "NC",
    heading: "Roofing Contractor in Statesville, NC",
    description:
      "Serving Statesville and surrounding Iredell County communities including Mooresville, Troutman, and Harmony.",
    cities: [
      "Statesville",
      "Mooresville, Troutman, Harmony",
    ],
    lat: 35.7829,
    lng: -80.8873,
    phone: PHONE_NC,
    phoneHref: PHONE_NC_HREF,
    isPrimary: false,
  },
] as const;

export type ServiceAreaSlug = (typeof SERVICE_AREAS)[number]["slug"];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const TESTIMONIALS = [
  {
    name: "Mike T.",
    location: "Columbus, OH",
    quote:
      "Transformed Roofing replaced our entire roof in one day. The crew was professional, cleaned up perfectly, and the price was very fair.",
    rating: 5,
  },
  {
    name: "Sandra K.",
    location: "Dublin, OH",
    quote:
      "After a bad storm they came out the next morning, found the leak, and had it fixed by noon. Would recommend them to anyone.",
    rating: 5,
  },
  {
    name: "Tom H.",
    location: "Grove City, OH",
    quote:
      "Fast, professional, and fairly priced. They repaired a leak that two other contractors couldn't find. Will use again without hesitation.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Statesville, NC",
    quote:
      "They handled our entire insurance claim process. We barely had to do anything — they dealt with the adjuster and got us a new roof.",
    rating: 5,
  },
  {
    name: "Mike T.",
    location: "Mooresville, NC",
    quote:
      "Outstanding job on our full roof replacement. Finished in one day, left the yard spotless, and the new shingles look incredible.",
    rating: 5,
  },
  {
    name: "Sandra P.",
    location: "Davidson, NC",
    quote:
      "After a hail storm they came out the next morning, documented everything for insurance, and handled the entire claim. Zero stress.",
    rating: 5,
  },
];
