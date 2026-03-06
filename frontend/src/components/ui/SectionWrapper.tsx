import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  container?: boolean;
}

export function SectionWrapper({
  as: Tag = "section",
  container = true,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag className={cn("py-12 md:py-20", className)} {...props}>
      {container ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
