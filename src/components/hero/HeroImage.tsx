import Image from "next/image";
import { FloatingCard } from "./FloatingCard";
import { FLOATING_CARDS, HERO_IMAGE } from "@/src/lib/constants";
import { motion } from "framer-motion";

export function HeroImage() {
  return (
    <div className="relative mx-auto max-w-xl">
      <motion.div
        initial={{ opacity: 0, x: 24, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 shadow-[0_40px_120px_rgba(15,23,42,0.12)]"
      >
        <div className="relative aspect-[4/5] w-full min-h-[420px] sm:min-h-[480px]">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 540px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {FLOATING_CARDS.map((card) => (
        <FloatingCard key={card.title} item={card} />
      ))}
    </div>
  );
}
