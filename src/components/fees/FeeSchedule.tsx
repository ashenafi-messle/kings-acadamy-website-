"use client";

import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const schedule = [
  { label: "Registration", amount: "USD 150", note: "One-time fee upon enrollment" },
  { label: "Annual tuition", amount: "Varies by grade", note: "Discussed during admissions review" },
  { label: "Transportation", amount: "Based on route", note: "Quoted according to distance" },
  { label: "Uniforms & materials", amount: "As required", note: "Provided through school guidance" },
];

export function FeeSchedule() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Schedule" title="A practical overview of the main charges." description="Families can request the latest fee details and payment guidance directly from our admissions team." />
      <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white shadow-sm">
        <div className="grid grid-cols-[1.4fr_1fr_1.2fr] border-b border-[#E5E7EB] bg-[#F8FAFC] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          <span>Category</span>
          <span>Approximate value</span>
          <span>Notes</span>
        </div>
        {schedule.map((item) => (
          <div key={item.label} className="grid grid-cols-[1.4fr_1fr_1.2fr] gap-4 border-b border-[#E5E7EB] px-6 py-5 text-sm text-secondary last:border-b-0">
            <span className="font-semibold text-text">{item.label}</span>
            <span>{item.amount}</span>
            <span>{item.note}</span>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
