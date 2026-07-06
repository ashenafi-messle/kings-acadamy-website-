"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { floatAnimation } from "@/src/lib/animations";

interface FloatingCardProps extends HTMLMotionProps<"article"> {
  title: string;
  description: string;
  position?: string;
  delay?: number;
  icon?: string;
  accent?: string;
}

export function FloatingCard({
  title,
  description,
  position = "",
  delay = 0,
  icon,
  accent = "bg-primary/10 text-primary",
  className = "",
  ...props
}: FloatingCardProps) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={floatAnimation}
      transition={{ duration: 1.3, ease: "easeInOut", delay, repeat: Infinity, repeatType: "mirror" }}
      whileHover={{ scale: 1.02 }}
      className={`absolute z-20 w-full max-w-[18rem] rounded-[26px] border border-white/20 bg-white/70 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 ease-out ${position} ${className}`}
      {...props}
    >
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}>
        <span className="text-lg" aria-hidden="true">
          {icon}
        </span>
      </div>

      <p className="mt-4 text-sm font-semibold text-text">{title}</p>
      <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
    </motion.article>
  );
}
