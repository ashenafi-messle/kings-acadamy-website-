"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { AcademicLevel } from "@/src/constants/academicLevels";

interface AcademicLevelCardProps {
  level: AcademicLevel;
}

export function AcademicLevelCard({ level }: AcademicLevelCardProps) {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className="overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-white shadow-sm">
      <div className="relative h-56 overflow-hidden">
        <Image src={level.image} alt={level.title} fill className="object-cover" />
      </div>
      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{level.badge}</p>
        <h3 className="mt-3 text-2xl font-semibold text-text">{level.title}</h3>
        <p className="mt-4 text-secondary">{level.description}</p>
        <ul className="mt-6 space-y-2 text-sm text-text">
          {level.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <button type="button" className="mt-6 text-sm font-semibold text-primary">{level.cta} →</button>
      </div>
    </motion.article>
  );
}
