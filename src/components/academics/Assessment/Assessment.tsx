"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { assessmentSteps } from "@/src/constants/assessment";

export function Assessment() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Assessment & student progress"
        title="A clear and supportive approach to measuring growth."
        description="Assessment at Kings Academy Gondar is designed to inform teaching, celebrate progress, and guide students toward continuous improvement."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {assessmentSteps.map((step, index) => (
          <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-surface p-7 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">0{index + 1}</div>
            <h3 className="mt-4 text-lg font-semibold text-text">{step.title}</h3>
            <p className="mt-3 text-secondary">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
