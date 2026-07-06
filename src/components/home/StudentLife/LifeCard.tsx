"use client";

import { motion } from "framer-motion";
import type { StudentLifeItem } from "./StudentLife.data";
import { scaleIn } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function LifeCard({ itemKey, icon, title, description }: StudentLifeItem) {
  const { t } = useLanguage();
  const titleText = itemKey ? t(`home.studentLife.items.${itemKey}.title`) : title;
  const descriptionText = itemKey ? t(`home.studentLife.items.${itemKey}.description`) : description;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={scaleIn}
      className="group rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      tabIndex={0}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-surface text-2xl">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-text">{titleText}</h3>
      <p className="mt-3 text-sm leading-7 text-secondary">{descriptionText}</p>
    </motion.article>
  );
}
