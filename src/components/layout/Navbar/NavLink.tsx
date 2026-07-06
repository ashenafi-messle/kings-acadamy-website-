import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  scrolled?: boolean;
  onClick?: () => void;
}

export function NavLink({ href, label, active = false, scrolled = false, onClick }: NavLinkProps) {
  return (
    <motion.div whileHover={{ y: -2, scale: 1.03 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "inline-flex items-center rounded-lg px-3 py-2 text-sm font-bold tracking-[0.02em] transition duration-300",
          active
            ? "text-[#FFD166]"
            : "!text-white hover:text-[#FFD166] focus-visible:text-[#FFD166]"
        )}
        aria-current={active ? "page" : undefined}
      >
        {label}
        <span
          className={cn(
            "ml-2 h-0.5 w-6 rounded-full transition-all duration-300",
            active ? "bg-[#FFD166]" : "bg-transparent"
          )}
        />
      </Link>
    </motion.div>
  );
}
