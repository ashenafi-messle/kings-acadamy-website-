"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Users, Compass, ShieldCheck } from "lucide-react";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const pillars = [
  { title: "Student-centered learning", description: "Lessons are designed around curiosity, confidence, and personal growth.", icon: Users },
  { title: "Individual growth", description: "Teachers adapt support to each child's learning profile and pace.", icon: Compass },
  { title: "Academic excellence", description: "Rigorous expectations are balanced with clear guidance and encouragement.", icon: BookOpen },
  { title: "Character development", description: "Our educators model integrity, responsibility, and service.", icon: ShieldCheck },
  { title: "Innovation in teaching", description: "Technology, inquiry, and collaboration are used to enrich learning.", icon: Sparkles },
];

export function TeachingPhilosophy() {
  return (
    <PageSection className="bg-white">
      <SectionHeading eyebrow="Teaching philosophy" title="A culture of excellence, care, and purposeful learning." description="Our teachers create classrooms where each learner feels supported, challenged, and inspired to reach their full potential." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1E3A8A]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 leading-7 text-secondary">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </PageSection>
  );
}
