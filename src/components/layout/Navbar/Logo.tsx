import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/src/constants/site";
import { cn } from "@/src/lib/utils";

interface LogoProps {
  inverted?: boolean;
}

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3 py-2 pr-2 no-underline sm:pr-3">
      <motion.div
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "relative flex h-18 w-18 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#D4AF37] bg-[#FFF9E6] shadow-[0_16px_40px_rgba(212,175,55,0.28)] ring-2 ring-inset",
          inverted ? "ring-white/30" : "ring-[#D4AF37]/60"
        )}
      >
        <Image src="/images/logo/Gemini_Generated_Image_bto6u2bto6u2bto6.png" alt="Kings Academy Gondar logo" width={84} height={84} className="h-full w-full object-contain p-1.5" />
      </motion.div>
      <div className="hidden min-w-0 flex-col justify-center sm:flex">
        <span className={cn("text-lg font-black leading-none tracking-[0.04em] text-[#FFD166]")}>
          {site.name}
        </span>
        <div className="mt-1.5 flex flex-col gap-0.5 text-[0.72rem] font-semibold uppercase leading-none tracking-[0.28em] text-[#FFD166]">
          <span>Excellence</span>
          <span>Innovation</span>
          <span>Character</span>
        </div>
      </div>
    </Link>
  );
}
