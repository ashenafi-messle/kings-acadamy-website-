"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/lib/i18n";

interface PageHeroProps {
  title: string;
  titleKey?: string;
  description: string;
  descriptionKey?: string;
  image: string;
  breadcrumb?: string;
  breadcrumbKey?: string;
}

export function PageHero({
  title,
  titleKey,
  description,
  descriptionKey,
  image,
  breadcrumb = "Home",
  breadcrumbKey,
}: PageHeroProps) {
  const { t } = useLanguage();
  const titleText = titleKey ? t(titleKey) : title;
  const descriptionText = descriptionKey ? t(descriptionKey) : description;
  const breadcrumbText = breadcrumbKey ? t(breadcrumbKey) : breadcrumb;

  return (
    <section className="relative overflow-hidden bg-footer text-white">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/60" />
      </div>

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-3xl">
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
