import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface to-primary/20 opacity-90" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),transparent_30%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.24, y: 10 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-surface/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 0.18, x: -18 }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
        className="absolute right-10 top-24 h-56 w-56 rounded-full bg-cyan-200/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.14, scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 4 }}
        className="absolute left-1/3 bottom-10 h-80 w-80 rounded-full bg-white/30 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute inset-x-0 top-1/3 h-72 bg-[radial-gradient(circle,_rgba(255,255,255,0.9),transparent_76%)]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_20%,rgba(255,255,255,0.18))] opacity-20" />
    </div>
  );
}
