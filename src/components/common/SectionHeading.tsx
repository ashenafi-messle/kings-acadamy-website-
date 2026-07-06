import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, children }: SectionHeadingProps) {
  return (
    <div className="space-y-4 text-center sm:text-left">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        ) : null}
        <div className="inline-flex items-center gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
        </div>
        <span className="block h-1.5 w-24 rounded-full bg-accent" />
        <p className="max-w-2xl text-base leading-7 text-text-secondary">{description}</p>
      </div>
      {children}
    </div>
  );
}
