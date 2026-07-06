"use client";

import { BadgeCheck, GraduationCap, BrainCircuit } from "lucide-react";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const qualifications = [
  { title: "Professional credentials", description: "Our teachers hold recognized university degrees and specialist training in education.", icon: GraduationCap },
  { title: "Continuous development", description: "Staff participate in workshops, coaching, and leadership growth initiatives every term.", icon: BrainCircuit },
  { title: "Safeguarded practice", description: "We maintain child welfare standards, safeguarding protocols, and inclusive teaching practices.", icon: BadgeCheck },
];

export function TeacherQualifications() {
  return (
    <PageSection>
      <SectionHeading eyebrow="Qualifications" title="Highly qualified professionals dedicated to excellence." description="Our teaching team is selected for academic strength, professional readiness, and a passion for student growth." />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {qualifications.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1E3A8A]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{item.description}</p>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}
