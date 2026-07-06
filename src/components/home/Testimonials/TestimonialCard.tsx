"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { TestimonialItem } from "./testimonials.data";
import { scaleIn } from "@/src/lib/animations";

interface TestimonialCardProps extends HTMLMotionProps<"article"> {
  testimonial: TestimonialItem;
}

function renderStars(rating: number) {
  return Array.from({ length: rating }, (_, index) => (
    <span key={index} aria-hidden="true" className="text-amber-400">
      ★
    </span>
  ));
}

export function TestimonialCard({ testimonial, className = "", ...props }: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={scaleIn}
      className={`group rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${className}`}
      tabIndex={0}
      aria-label={`${testimonial.name}, ${testimonial.role}: ${testimonial.message}`}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-surface text-lg font-semibold text-text">
          <span aria-hidden="true">{testimonial.avatar}</span>
        </div>
        <div>
          <p className="text-base font-semibold text-text">{testimonial.name}</p>
          <p className="text-sm text-secondary">{testimonial.role}</p>
        </div>
      </div>

      {testimonial.rating ? (
        <div className="mt-4 flex items-center gap-1 text-sm">{renderStars(testimonial.rating)}</div>
      ) : null}

      <p className="mt-5 text-sm leading-7 text-secondary">“{testimonial.message}”</p>
    </motion.article>
  );
}
