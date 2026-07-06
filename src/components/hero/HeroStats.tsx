"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HERO_STATS } from "@/src/lib/constants";
import { staggerContainer } from "@/src/lib/animations";

export function HeroStats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [animatedValues, setAnimatedValues] = useState<number[]>(HERO_STATS.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const durations = [1400, 1400, 1400, 1400];
    const start = performance.now();

    const frame = (time: number) => {
      const progress = Math.min((time - start) / durations[0], 1);
      setAnimatedValues(
        HERO_STATS.map((stat) => Math.round(stat.value * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="mt-12 grid gap-4 sm:grid-cols-2"
    >
      {HERO_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="rounded-[24px] border border-[#E5E7EB] bg-white/90 p-5 shadow-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: "easeOut", delay: index * 0.08 },
            },
          }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-semibold text-text">
                {isInView ? `${animatedValues[index]}${stat.suffix}` : `0${stat.suffix}`}
              </p>
              <p className="mt-1 text-sm text-secondary">{stat.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
