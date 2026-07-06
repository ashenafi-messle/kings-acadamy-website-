"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/lib/i18n";
import { STATISTICS } from "@/src/constants/statistics";
import { StatCard } from "./StatCard";
import { fadeUp, staggerContainer } from "@/src/lib/animations";

export function Statistics() {
  const { t } = useLanguage();

  return (
    <motion.section
      aria-labelledby="statistics-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="relative overflow-hidden bg-surface py-20"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t("home.statistics.eyebrow")}
          </p>
          <h2
            id="statistics-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl"
          >
            {t("home.statistics.title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            {t("home.statistics.description")}
          </p>
        </div>

        <motion.div
          initial="hidden"
          variants={staggerContainer}
          className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        >
          {STATISTICS.map((stat) => {
            const { itemKey, ...statProps } = stat;
            return <StatCard key={itemKey ?? stat.label} itemKey={itemKey} {...statProps} />;
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
