"use client";

import { useLanguage } from "@/src/lib/i18n";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowKey?: string;
  titleKey?: string;
  descriptionKey?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowKey,
  titleKey,
  descriptionKey,
  align = "left",
}: SectionHeadingProps) {
  const { t } = useLanguage();
  const eyebrowText = eyebrowKey ? t(eyebrowKey) : eyebrow;
  const titleText = titleKey ? t(titleKey) : title;
  const descriptionText = descriptionKey ? t(descriptionKey) : description;

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{eyebrowText}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">{titleText}</h2>
      {descriptionText ? <p className="mt-4 text-base leading-7 text-secondary">{descriptionText}</p> : null}
    </div>
  );
}
