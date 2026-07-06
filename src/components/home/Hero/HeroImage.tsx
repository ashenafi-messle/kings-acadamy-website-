"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FLOATING_CARDS, HERO_IMAGE } from "@/src/lib/constants";
import { HeroBackground } from "./HeroBackground";
import { FloatingCard } from "./FloatingCard";
import { fadeUp, staggerContainer } from "@/src/lib/animations";

export function HeroImage() {
  return (
    <section className="relative mx-auto flex w-full max-w-[720px] flex-col items-center sm:items-end">
      <HeroBackground />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
        className="relative w-full"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-footer/5 shadow-[0_40px_120px_rgba(15,23,42,0.14)]"
        >
          <div className="relative aspect-[4/5] w-full min-h-[420px] sm:min-h-[520px]">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 560px"
              className="object-cover transition duration-500 ease-out hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),transparent_34%)]" />
          </div>
        </motion.div>

        {FLOATING_CARDS.map((card, index) => (
          <FloatingCard key={card.title} {...card} delay={0.28 + index * 0.12} className="hidden sm:block" />
        ))}
      </motion.div>
    </section>
  );
}
