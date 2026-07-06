"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DropdownItem } from "./types";
import { cn } from "@/src/lib/utils";

interface DropdownMenuProps {
  items: DropdownItem[];
  open: boolean;
}

const menuMotion = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

export function DropdownMenu({ items, open }: DropdownMenuProps) {
  return (
    <motion.div
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={menuMotion}
      className={cn(
        "origin-top-left absolute left-0 top-full z-30 mt-3 w-72 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white/95 shadow-[0_32px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div className="space-y-1 p-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block rounded-3xl px-4 py-3 transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <p className="text-sm font-semibold text-text">{item.label}</p>
            {item.description ? <p className="mt-1 text-sm text-secondary">{item.description}</p> : null}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
