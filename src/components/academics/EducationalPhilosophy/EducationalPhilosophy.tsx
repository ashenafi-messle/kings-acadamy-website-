"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { philosophyCards } from "@/src/constants/academicLevels";

export function EducationalPhilosophy() {
  return (
    <PageSection className="bg-surface">
      <SectionHeading
        eyebrow="Educational philosophy"
        title="A balanced model of achievement, character, and possibility."
        description="Our academic culture combines intellectual ambition with compassion, creativity, and discipline."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {philosophyCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{card.title}</h3>
              <p className="mt-3 text-secondary">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </PageSection>
  );
}
