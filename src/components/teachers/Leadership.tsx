"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const leaders = [
  { name: "Dr. Selam Bekele", title: "Principal", description: "Provides strategic leadership focused on excellence, culture, and student success.", image: "/images/placeholders/hero.jpg" },
  { name: "Mr. Yosef Abebe", title: "Vice Principal", description: "Oversees school operations, student discipline, and strong family partnerships.", image: "/images/placeholders/hero.jpg" },
  { name: "Ms. Hana Tadesse", title: "Academic Coordinator", description: "Leads curriculum planning, instructional quality, and teacher collaboration.", image: "/images/placeholders/hero.jpg" },
  { name: "Mr. Daniel Wolde", title: "Department Head, Student Life", description: "Supports pastoral care, co-curricular programs, and enrichment opportunities.", image: "/images/placeholders/hero.jpg" },
];

export function Leadership() {
  return (
    <PageSection>
      <SectionHeading eyebrow="Leadership team" title="Experienced leaders guiding the school community." description="Our leadership team brings together academic insight, operational excellence, and a shared commitment to students." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {leaders.map((leader, index) => (
          <motion.div key={leader.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <div className="relative h-40 overflow-hidden rounded-[1rem]">
              <Image src={leader.image} alt={leader.name} fill className="object-cover" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-text">{leader.name}</h3>
            <p className="mt-1 text-sm font-semibold text-[#1E3A8A]">{leader.title}</p>
            <p className="mt-3 text-sm leading-7 text-secondary">{leader.description}</p>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
