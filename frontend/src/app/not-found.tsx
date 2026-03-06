import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-offwhite px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-brand-gold/30 mb-4">404</div>
        <h1 className="text-3xl font-bold text-brand-charcoal mb-3">Page Not Found</h1>
        <p className="text-brand-gray mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
