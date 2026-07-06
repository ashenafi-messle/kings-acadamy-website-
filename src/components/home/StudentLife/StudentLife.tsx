"use client";

import { motion } from "framer-motion";
import { STUDENT_LIFE_ITEMS } from "./StudentLife.data";
import { LifeCard } from "./LifeCard";
import { fadeUp, staggerContainer } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function StudentLife() {
  const { t } = useLanguage();
  return (
    <motion.section
      aria-labelledby="student-life-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="bg-surface py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {t("home.studentLife.eyebrow")}
            </p>
            <h2 id="student-life-heading" className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              {t("home.studentLife.title")}
            </h2>
            <p className="mt-5 text-base leading-7 text-secondary">
              {t("home.studentLife.description")}
            </p>
          </div>
          <motion.div variants={staggerContainer} className="grid gap-6 sm:grid-cols-2">
            {STUDENT_LIFE_ITEMS.map(({ itemKey, ...item }) => (
              <LifeCard key={itemKey ?? item.title} itemKey={itemKey} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
