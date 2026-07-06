"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { fadeUp } from "@/src/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Kings Academy Gondar hero"
      className="relative overflow-hidden bg-surface text-text"
    >
      <HeroBackground />

      <div className="container relative z-10 min-h-[calc(100vh-5rem)] py-16 sm:py-20 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <HeroContent />
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
}
