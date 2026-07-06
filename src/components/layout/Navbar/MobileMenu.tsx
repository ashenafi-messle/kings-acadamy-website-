"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "./navigation.data";
import { cn } from "@/src/lib/utils";
import { X } from "lucide-react";
import { useLanguage } from "@/src/lib/i18n";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-footer/40 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-4">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-text">Menu</span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close mobile menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-text transition hover:bg-surface"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-2">
                  {NAVIGATION.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            "flex items-center justify-between rounded-2xl border px-4 py-4 text-base font-semibold transition",
                            active
                              ? "border-accent/20 bg-accent/10 text-accent"
                              : "border-[#E5E7EB] bg-white text-text hover:bg-surface"
                          )}
                        >
                          <span>{t(`nav.${item.key}`)}</span>
                          <span className="text-sm text-current/70">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
