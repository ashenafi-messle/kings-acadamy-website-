"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, ACHIEVEMENTS_SECTION } from "./achievements.data";
import { AchievementCard } from "./AchievementCard";
import { fadeUp, staggerContainer } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function Achievements() {
  const { t } = useLanguage();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-labelledby="achievements-heading"
      className="bg-surface py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t("home.achievements.eyebrow")}
          </p>
          <h2 id="achievements-heading" className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {t("home.achievements.title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            {t("home.achievements.description")}
          </p>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              className={achievement.featured ? "xl:col-span-2" : ""}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
