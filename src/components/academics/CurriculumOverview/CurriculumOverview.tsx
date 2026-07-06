"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { BookOpen, Compass, Sparkles } from "lucide-react";

const highlights = [
  { title: "Student-centered learning", description: "Lessons are designed to engage curiosity and support independent thinking.", icon: BookOpen },
  { title: "Balanced development", description: "Academic rigor is paired with values, wellbeing, and creative exploration.", icon: Sparkles },
  { title: "Global relevance", description: "The curriculum blends international standards with local context and cultural identity.", icon: Compass },
];

export function CurriculumOverview() {
  return (
    <PageSection>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Curriculum overview"
            title="A thoughtful academic framework for meaningful progress."
            description="Our curriculum is designed to develop strong foundations in literacy, numeracy, science, and communication while encouraging curiosity, leadership, and ethical responsibility."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} whileHover={{ y: -4 }} className="rounded-[1.25rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-secondary">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-surface p-4 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          <div className="relative h-[360px] overflow-hidden rounded-[1.5rem]">
            <Image src="/images/academics/Gemini_Generated_Image_ycfflycfflycffly.png" alt="Classroom learning environment" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
}
