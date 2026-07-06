"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { fadeUp, staggerContainer } from "@/src/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Kings Academy Gondar hero section"
      className="relative overflow-hidden bg-surface text-text"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-left md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="grid min-h-screen gap-12 lg:grid-cols-2 lg:items-center"
        >
          <motion.div variants={fadeUp} className="lg:max-w-[640px]">
            <HeroContent />
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center">
            <HeroImage />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
