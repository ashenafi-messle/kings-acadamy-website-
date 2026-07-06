"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { fadeUp, fadeIn, scaleIn } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

export function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl space-y-8 text-center md:text-left">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D4AF37]/40 bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F3A7D] shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:justify-start">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#D4AF37]/70 bg-[#FFF9E6] ring-2 ring-[#D4AF37]/40 sm:h-14 sm:w-14">
            <Image src="/images/logo/Gemini_Generated_Image_bto6u2bto6u2bto6.png" alt="Kings Academy Gondar logo" fill className="object-contain p-1.5" />
          </div>
          <span>{t("hero.badge")}</span>
        </div>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl font-black tracking-tight text-[#0F172A] drop-shadow-sm sm:text-5xl lg:text-6xl"
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mx-auto max-w-xl text-base leading-8 text-slate-700 sm:text-lg md:mx-0"
      >
        {t("hero.description")}
      </motion.p>

      <motion.div initial="hidden" animate="visible" variants={scaleIn}>
        <HeroButtons />
      </motion.div>

      <HeroStats />
    </div>
  );
}
