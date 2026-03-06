export type { ContactFormData } from "@/lib/contact-schema";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface Review {
  id: number;
  reviewer_name: string;
  location_label: string;
  body: string;
  rating: number;
  source: string;
  source_url: string;
  project_type: string;
  is_featured: boolean;
  display_order: number;
  review_date: string | null;
}

export interface ReviewDisplay {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  isFeatured: boolean;
  projectType: string;
  sourceUrl: string;
  source: string;
}
