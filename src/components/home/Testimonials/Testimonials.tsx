"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "./testimonials.data";
import { TestimonialCard } from "./TestimonialCard";
import { fadeUp, staggerContainer } from "@/src/lib/animations";

export function Testimonials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-labelledby="testimonials-heading"
      className="bg-surface py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {TESTIMONIALS_SECTION.label}
          </p>
          <h2 id="testimonials-heading" className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {TESTIMONIALS_SECTION.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">{TESTIMONIALS_SECTION.description}</p>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              className={testimonial.featured ? "xl:col-span-2" : ""}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
