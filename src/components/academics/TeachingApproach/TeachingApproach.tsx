"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { teachingApproach } from "@/src/constants/teachingApproach";

export function TeachingApproach() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Teaching & learning approach"
        title="Teaching designed to inspire participation, confidence, and progress."
        description="Our approach combines strong pedagogy, personal attention, and active engagement so students can thrive academically and personally."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teachingApproach.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-text">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-secondary">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </PageSection>
  );
}
