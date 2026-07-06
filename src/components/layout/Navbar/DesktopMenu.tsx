"use client";

import { usePathname } from "next/navigation";
import { NAVIGATION } from "./navigation.data";
import { NavLink } from "./NavLink";
import { useLanguage } from "@/src/lib/i18n";

interface DesktopMenuProps {
  scrolled: boolean;
}

export function DesktopMenu({ scrolled }: DesktopMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="hidden lg:flex lg:items-center lg:gap-4">
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={t(`nav.${item.key}`)}
          active={pathname === item.href}
          scrolled={scrolled}
          onClick={() => undefined}
        />
      ))}
    </nav>
  );
}
