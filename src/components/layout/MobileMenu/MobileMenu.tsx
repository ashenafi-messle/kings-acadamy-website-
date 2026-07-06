"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { site } from "@/src/constants/site";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl"
      aria-modal
      role="dialog"
    >
      <div ref={ref} className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="font-semibold">Menu</div>
          <button onClick={onClose} aria-label="Close menu" className="rounded p-2 hover:bg-surface">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-4">
            <li>
              <PrimaryButton asChild>
                <Link href="#">Apply Now</Link>
              </PrimaryButton>
            </li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose} className="block rounded-md px-2 py-2 text-lg font-medium hover:bg-surface">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t px-4 py-4">
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-secondary hover:underline">
              Facebook
            </a>
            <a href="#" className="text-sm text-secondary hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

export default MobileMenu;
