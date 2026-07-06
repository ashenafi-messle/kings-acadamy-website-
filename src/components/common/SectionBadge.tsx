interface SectionBadgeProps {
  children: string;
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-secondary">
      {children}
    </span>
  );
}
