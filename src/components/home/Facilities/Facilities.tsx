"use client";

import { motion } from "framer-motion";
import { FACILITIES } from "@/src/constants/facilities";
import { FacilityCard } from "./FacilityCard";
import { fadeUp, staggerContainer } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function Facilities() {
  const { t } = useLanguage();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-labelledby="facilities-heading"
      className="bg-surface py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t("home.facilities.eyebrow")}
          </p>
          <h2 id="facilities-heading" className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {t("home.facilities.title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            {t("home.facilities.description")}
          </p>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {FACILITIES.map(({ itemKey, ...facility }) => (
            <FacilityCard key={itemKey ?? facility.title} itemKey={itemKey} {...facility} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
