"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRINCIPAL_MESSAGE } from "@/src/constants/principalMessage";
import { fadeIn, fadeUp, staggerContainer } from "@/src/lib/animations";

export function PrincipalMessage() {
  return (
    <section
      aria-labelledby="principal-message-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="relative mx-auto max-w-[560px] overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-surface/70 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="relative aspect-[4/5] w-full min-h-[420px] sm:min-h-[480px]">
              <Image
                src={PRINCIPAL_MESSAGE.image.src}
                alt={PRINCIPAL_MESSAGE.image.alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 540px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {PRINCIPAL_MESSAGE.heading}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              {PRINCIPAL_MESSAGE.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-secondary">
              {PRINCIPAL_MESSAGE.title}
            </motion.p>

            <div className="mt-8 space-y-6 text-secondary">
              {PRINCIPAL_MESSAGE.paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={fadeUp} className="text-base leading-8">
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10 border-t border-[#E5E7EB] pt-6">
              <p className="text-lg font-semibold text-text">{PRINCIPAL_MESSAGE.signature}</p>
              <p className="mt-1 text-sm text-secondary">Principal, Kings Academy Gondar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
