"use client";

import { motion } from "framer-motion";
import type { ProgramItem } from "@/src/types/program";
import { scaleIn } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function ProgramCard({ itemKey, icon, title, description, highlights }: ProgramItem) {
  const { t } = useLanguage();
  const titleText = itemKey ? t(`home.programs.items.${itemKey}.title`) : title;
  const descriptionText = itemKey ? t(`home.programs.items.${itemKey}.description`) : description;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={scaleIn}
      className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      tabIndex={0}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-surface text-2xl">
        <span aria-hidden="true">{icon}</span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-text">{titleText}</h3>
      <p className="mt-3 text-sm leading-7 text-secondary">{descriptionText}</p>

      {highlights?.length ? (
        <ul className="mt-5 space-y-3 text-sm text-secondary">
          {highlights.map((item) => {
            const text = item.startsWith("home.") ? t(item) : item;
            return (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface text-xs text-primary">
                  •
                </span>
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </motion.article>
  );
}
