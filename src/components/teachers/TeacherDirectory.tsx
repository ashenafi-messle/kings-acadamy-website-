"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const teachers = [
  {
    name: "Dr. Selam Bekele",
    role: "Principal",
    department: "Leadership",
    qualification: "PhD in Educational Leadership",
    experience: "18 years",
    bio: "Leads the school with a clear focus on academic excellence, strong culture, and student wellbeing.",
    image: "/images/placeholders/hero.jpg",
  },
  {
    name: "Ms. Hana Tadesse",
    role: "Head of Academics",
    department: "Academic Affairs",
    qualification: "MEd in Curriculum and Instruction",
    experience: "14 years",
    bio: "Supports teachers in designing rich, engaging learning experiences that meet diverse learner needs.",
    image: "/images/placeholders/hero.jpg",
  },
  {
    name: "Mr. Daniel Wolde",
    role: "Student Life Coordinator",
    department: "Student Support",
    qualification: "B.Ed in Guidance and Counseling",
    experience: "11 years",
    bio: "Guides pastoral care, student wellbeing, and enrichment programs with warmth and consistency.",
    image: "/images/placeholders/hero.jpg",
  },
];

export function TeacherDirectory() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Teacher directory" title="Experienced educators guiding each student with care." description="Our staff combines academic depth, professional training, and a genuine belief in every learner's potential." />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {teachers.map((teacher, index) => (
          <motion.div key={teacher.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white shadow-sm">
            <div className="relative h-56 bg-surface">
              <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">{teacher.department}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{teacher.name}</h3>
              <p className="mt-2 text-base font-medium text-[#1E3A8A]">{teacher.role}</p>
              <p className="mt-3 text-sm text-secondary">{teacher.qualification}</p>
              <p className="text-sm text-secondary">{teacher.experience} of experience</p>
              <p className="mt-4 text-sm leading-7 text-secondary">{teacher.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
