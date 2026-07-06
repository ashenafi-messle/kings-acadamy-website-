import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        animate={{ x: [0, 16, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-24 h-56 w-56 rounded-full bg-secondary/15 blur-3xl"
        animate={{ x: [0, -12, 0], y: [0, -16, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.11),_transparent_24%)]" />
      <div className="absolute left-10 top-48 h-24 w-24 rounded-full border border-white/70 bg-white/20 blur-sm" />
      <div className="absolute right-12 bottom-20 h-28 w-28 rounded-full border border-primary/20 bg-surface/20" />
    </div>
  );
}
