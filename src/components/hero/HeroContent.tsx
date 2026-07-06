"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/lib/i18n";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { fadeUp, fadeIn, scaleIn } from "@/src/lib/animations";

export function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
          {t("hero.badge")}
        </span>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-7 text-4xl font-semibold tracking-tight text-text sm:text-5xl xl:text-6xl"
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-6 max-w-xl text-base leading-8 text-secondary sm:text-lg"
      >
        {t("hero.description")}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        className="mt-10"
      >
        <HeroButtons />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-12"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}
