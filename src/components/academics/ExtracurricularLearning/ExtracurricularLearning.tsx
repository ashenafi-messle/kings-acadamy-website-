"use client";

import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const activities = [
  "Debate",
  "Robotics",
  "STEM Club",
  "Music",
  "Arts",
  "Sports",
  "Community Service",
  "Leadership Programs",
];

export function ExtracurricularLearning() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Extracurricular learning"
        title="A wider world of growth beyond the classroom."
        description="Our co-curricular programme helps students discover talents, build friendships, and develop confidence through shared experience."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {activities.map((activity, index) => (
          <motion.div key={activity} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.04 }} className="rounded-[1.4rem] border border-[#E5E7EB] bg-surface p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-text">{activity}</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">An engaging opportunity for students to develop confidence, teamwork, and purpose.</p>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
