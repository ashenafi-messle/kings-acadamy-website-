"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const development = [
  "Weekly professional learning communities and coaching sessions",
  "Training in inquiry-based instruction and differentiated learning",
  "Leadership pathways for aspiring department and grade leaders",
  "Annual review cycles that support growth, reflection, and excellence",
];

export function ProfessionalDevelopment() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Professional development" title="Teachers grow continuously so students can thrive." description="We invest in staff development because strong teaching practice is central to meaningful learning." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-text">What our teachers experience</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-secondary">
            {development.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: 0.08 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#1E3A8A] p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Commitment to learning</p>
          <h3 className="mt-4 text-2xl font-semibold">A school that teaches, supports, and grows together.</h3>
          <p className="mt-4 text-sm leading-8 text-slate-200">Our educator development framework ensures that every teacher has the tools, guidance, and inspiration to deliver high-quality learning each day.</p>
        </motion.div>
      </div>
    </PageSection>
  );
}
