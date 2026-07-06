import { Menu, X, Search } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface MobileMenuButtonProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function MobileMenuButton({ open, onOpen, onClose }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={open ? onClose : onOpen}
      aria-label={open ? "Close mobile menu" : "Open mobile menu"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white/90 text-text transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
