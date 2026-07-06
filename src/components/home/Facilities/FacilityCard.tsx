"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FacilityItem } from "@/src/types/facility";
import { scaleIn } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function FacilityCard({ itemKey, title, description, image, icon }: FacilityItem) {
  const { t } = useLanguage();
  const titleText = itemKey ? t(`home.facilities.items.${itemKey}.title`) : title;
  const descriptionText = itemKey ? t(`home.facilities.items.${itemKey}.description`) : description;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={scaleIn}
      className="group rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      tabIndex={0}
    >
      {image ? (
        <div className="relative h-48 overflow-hidden rounded-t-[28px] bg-surface">
          <Image
            src={image}
            alt={titleText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
            className="object-cover transition duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-surface text-xl">
          <span aria-hidden="true">{icon}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-text">{titleText}</h3>
        <p className="mt-3 text-sm leading-7 text-secondary">{descriptionText}</p>
      </div>
    </motion.article>
  );
}
