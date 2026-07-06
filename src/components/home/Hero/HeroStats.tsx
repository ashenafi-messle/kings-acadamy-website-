"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HERO_STATS } from "@/src/lib/constants";
import { fadeUp, staggerContainer } from "@/src/lib/animations";

export function HeroStats() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [values, setValues] = useState<number[]>(HERO_STATS.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();
    let frameId: number;

    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValues(HERO_STATS.map((stat) => Math.round(stat.value * progress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(frame);
      }
    };

    frameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      aria-labelledby="hero-stats-heading"
    >
      <h2 id="hero-stats-heading" className="sr-only">
        Kings Academy Gondar trusted statistics
      </h2>

      {HERO_STATS.map((stat, index) => (
        <motion.article
          key={stat.label}
          variants={fadeUp}
          className="rounded-[24px] border border-[#E5E7EB] bg-white/95 p-5 shadow-card transition duration-300 hover:border-[#E5E7EB]"
        >
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-2xl"
            >
              {stat.icon}
            </span>
            <div className="min-w-0">
              <p className="text-2xl font-semibold tracking-tight text-text">
                {values[index]}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-secondary">{stat.label}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
}
