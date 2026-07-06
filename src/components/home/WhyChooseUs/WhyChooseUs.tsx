"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/src/constants/whyChooseUs";
import { fadeUp, scaleIn, staggerContainer } from "@/src/lib/animations";
import { useLanguage } from "@/src/lib/i18n";

function WhyCard({ itemKey, icon, title, description }: { itemKey?: string; icon: string; title: string; description: string }) {
  const { t } = useLanguage();
  const titleText = itemKey ? t(`home.whyChooseUs.items.${itemKey}.title`) : title;
  const descriptionText = itemKey ? t(`home.whyChooseUs.items.${itemKey}.description`) : description;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={scaleIn}
      className="rounded-3xl border border-[#E5E7EB] bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] transition"
      tabIndex={0}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-surface text-xl">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-text">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </motion.article>
  );
}

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-labelledby="why-choose-us-heading"
      className="bg-surface py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {t("home.whyChooseUs.eyebrow")}
          </p>
          <h2 id="why-choose-us-heading" className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {t("home.whyChooseUs.title")}
          </h2>
          <p className="mt-5 text-base leading-7 text-secondary">
            {t("home.whyChooseUs.description")}
          </p>
        </div>

        <motion.div variants={staggerContainer} className="grid gap-5 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((feature) => (
            <WhyCard key={feature.itemKey ?? feature.title} itemKey={feature.itemKey} {...feature} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
