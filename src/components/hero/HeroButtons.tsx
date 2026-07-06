"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/lib/i18n";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { SecondaryButton } from "@/src/components/common/SecondaryButton";
import { HERO_BUTTONS } from "@/src/lib/constants";
import { scaleIn, staggerContainer } from "@/src/lib/animations";

export function HeroButtons() {
  const { t } = useLanguage();
  const primary = HERO_BUTTONS.primary;
  const secondary = HERO_BUTTONS.secondary;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mt-10 flex flex-col gap-4 md:flex-row md:items-center"
    >
      {primary ? (
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <PrimaryButton
            asChild
            className="w-full rounded-full transition-all duration-300 ease-out hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <Link
              href={primary.href}
              aria-label={t("hero.primary")}
              className="inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold text-white"
            >
              {t("hero.primary")}
            </Link>
          </PrimaryButton>
        </motion.div>
      ) : null}

      {secondary ? (
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <SecondaryButton
            asChild
            className="w-full rounded-full border-primary text-primary transition-all duration-300 ease-out hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            <Link
              href={secondary.href}
              aria-label={t("hero.secondary")}
              className="inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold"
            >
              {t("hero.secondary")}
            </Link>
          </SecondaryButton>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
