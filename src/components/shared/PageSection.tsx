"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function PageSection({ children, className = "", id }: PageSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className={`mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 ${className}`.trim()}
    >
      {children}
    </motion.section>
  );
}
