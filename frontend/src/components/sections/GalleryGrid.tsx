import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface GalleryPhoto {
  id: number;
  title: string;
  image_url: string | null;
  description: string;
  project_type: string;
  service_area_slug: string | null;
  display_order: number;
}

async function fetchPhotos(): Promise<GalleryPhoto[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiBase) return [];
  try {
    const res = await fetch(`${apiBase}/api/gallery/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function GalleryGrid() {
  const photos = await fetchPhotos();

  if (photos.length === 0) {
    return (
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`${i % 3 === 0 ? "aspect-[4/3]" : "aspect-square"} rounded-lg bg-brand-offwhite border-2 border-dashed border-brand-steel/30 flex items-center justify-center text-brand-gray`}
            >
              <div className="text-center p-3">
                <div className="text-3xl mb-1">🏠</div>
                <div className="text-xs">Roofing Project {i + 1}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-brand-gray">
          Photos coming soon — our portfolio is growing every week.
        </p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-lg overflow-hidden bg-brand-offwhite"
          >
            {photo.image_url ? (
              <Image
                src={photo.image_url}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-brand-gray text-xs">
                No image
              </div>
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/60 transition-colors duration-300 flex items-end">
              <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold leading-snug">{photo.title}</p>
                {photo.project_type && (
                  <p className="text-brand-gold text-xs mt-0.5">{photo.project_type}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
