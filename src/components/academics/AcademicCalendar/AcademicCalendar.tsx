"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { academicCalendar } from "@/src/constants/academicCalendar";

export function AcademicCalendar() {
  return (
    <PageSection className="bg-surface">
      <SectionHeading
        eyebrow="Academic calendar"
        title="A clear annual rhythm for learning and growth."
        description="Dates below are placeholders and can be updated as soon as the official school calendar is released."
      />
      <div className="mt-10 space-y-5">
        {academicCalendar.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.04 }} className="flex flex-col gap-3 rounded-[1.4rem] border border-[#E5E7EB] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-text">{item.title}</h3>
            </div>
            <p className="text-secondary">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
