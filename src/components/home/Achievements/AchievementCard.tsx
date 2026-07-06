"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { AchievementItem } from "./achievements.data";
import { scaleIn } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

interface AchievementCardProps extends HTMLMotionProps<"article"> {
  achievement: AchievementItem;
}

export function AchievementCard({ achievement, className = "", ...props }: AchievementCardProps) {
  const { t } = useLanguage();
  const titleText = achievement.itemKey ? t(`home.achievements.items.${achievement.itemKey}.title`) : achievement.title;
  const descriptionText = achievement.itemKey ? t(`home.achievements.items.${achievement.itemKey}.description`) : achievement.description;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={scaleIn}
      className={`group relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${className}`}
      tabIndex={0}
      aria-label={`${titleText}. ${descriptionText}`}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-surface text-2xl">
        <span aria-hidden="true">{achievement.icon}</span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <h3 className="text-xl font-semibold text-text">{titleText}</h3>
        {(achievement.year || achievement.metric) && (
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            {achievement.year ?? achievement.metric}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-7 text-secondary">{descriptionText}</p>
    </motion.article>
  );
}
