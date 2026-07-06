import { motion } from "framer-motion";
import type { FloatingCardItem } from "@/src/types/hero";
import { floatAnimation } from "@/src/lib/animations";

interface FloatingCardProps {
  item: FloatingCardItem;
  delay?: number;
}

export function FloatingCard({ item, delay = 0 }: FloatingCardProps) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={floatAnimation}
      transition={{ duration: 1.2, ease: "easeInOut", delay, repeat: Infinity, repeatType: "mirror" }}
      aria-hidden="true"
      className={`relative z-20 w-56 rounded-[26px] border border-white/70 bg-white/95 p-4 shadow-card ${item.position}`}
    >
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${item.accent}`}>
        <span className="text-lg">{item.icon}</span>
      </div>
      <p className="mt-4 text-sm font-semibold text-text">{item.title}</p>
      <p className="mt-2 text-sm leading-6 text-secondary">{item.description}</p>
    </motion.article>
  );
}
