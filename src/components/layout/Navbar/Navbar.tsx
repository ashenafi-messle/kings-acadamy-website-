"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuButton } from "./MobileMenuButton";
import { Logo } from "./Logo";
import { TopBar } from "./TopBar";
import { cn } from "@/src/lib/utils";
import { LanguageSwitcher } from "@/src/components/layout/Navbar/LanguageSwitcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50">
      <TopBar />

      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{
            backgroundColor: "rgba(15, 39, 102, 0.96)",
            boxShadow: scrolled ? "0 20px 80px rgba(0, 0, 0, 0.14)" : "none",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "sticky top-0 z-50 border-b border-transparent backdrop-blur-xl transition-all duration-300",
            scrolled ? "shadow-soft" : ""
          )}
        >
          <div className="container mx-auto flex min-h-[88px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="shrink-0">
                <Logo inverted={!scrolled} />
              </div>
              <DesktopMenu scrolled={scrolled} />
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <LanguageSwitcher />
              <div className="lg:hidden">
                <MobileMenuButton open={mobileOpen} onOpen={() => setMobileOpen(true)} onClose={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Navbar;
