"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/src/lib/animations";

export function LatestNews() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      aria-labelledby="latest-news-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Latest news</p>
          <h2 id="latest-news-heading" className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Campus updates and school stories coming soon.
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            We are preparing our news feed to keep families informed about school life, events, and student achievements.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
