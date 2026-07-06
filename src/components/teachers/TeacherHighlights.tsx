"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const highlights = [
  { value: "95%", label: "teacher retention" },
  { value: "24/7", label: "student support coordination" },
  { value: "12+", label: "professional development programs" },
  { value: "100%", label: "commitment to safeguarding" },
];

export function TeacherHighlights() {
  return (
    <PageSection>
      <SectionHeading eyebrow="Highlights" title="A staff culture shaped by dedication and growth." description="The strength of our school lies in the commitment of our educators and the culture they build every day." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 text-center shadow-sm">
            <p className="text-4xl font-semibold text-[#1E3A8A]">{item.value}</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-secondary">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
