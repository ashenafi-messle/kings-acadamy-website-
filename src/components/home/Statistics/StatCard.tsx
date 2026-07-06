"use client";

import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/src/hooks/useCountUp";
import { fadeUp } from "@/src/lib/animations";
import type { StatisticItem } from "@/src/types/statistic";
import { useRef } from "react";
import { useLanguage } from "@/src/lib/i18n";

export function StatCard({ itemKey, icon, label, value, suffix = "", description }: StatisticItem) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, { duration: 1200, isActive: isInView });
  const labelText = itemKey ? t(`home.statistics.items.${itemKey}.label`) : label;
  const descriptionText = itemKey ? t(`home.statistics.items.${itemKey}.description`) : description;

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-md"
      aria-label={`${label}: ${value}${suffix}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-surface text-xl shadow-sm shadow-black/5">
        <span aria-hidden="true">{icon}</span>
      </div>

      <p className="mt-5 text-3xl font-semibold tracking-tight text-text">
        {count}
        {suffix}
      </p>

      <p className="mt-3 text-sm leading-6 text-secondary">{labelText}</p>
      {descriptionText ? <p className="mt-2 text-sm text-secondary">{descriptionText}</p> : null}
    </motion.article>
  );
}
