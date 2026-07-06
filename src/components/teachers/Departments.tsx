"use client";

import { BookMarked, Microscope, Palette, Computer, Music4, Trophy } from "lucide-react";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const departments = [
  { name: "Languages", description: "Developing strong communication, reading, and writing skills.", icon: BookMarked },
  { name: "Sciences", description: "Encouraging curiosity, inquiry, and scientific thinking through practical learning.", icon: Microscope },
  { name: "Arts & Design", description: "Inspiring creativity, visual expression, and confidence.", icon: Palette },
  { name: "Technology", description: "Preparing students for a digital future with responsible and imaginative use of tools.", icon: Computer },
  { name: "Music & Performance", description: "Nurturing rhythm, confidence, and creative collaboration.", icon: Music4 },
  { name: "Sports & Wellness", description: "Building discipline, teamwork, and healthy habits through movement.", icon: Trophy },
];

export function Departments() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Departments" title="A wide range of disciplines taught with depth and care." description="Our departments work together to create a balanced, future-ready education for every learner." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => {
          const Icon = department.icon;
          return (
            <div key={department.name} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1E3A8A]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{department.name}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{department.description}</p>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}
