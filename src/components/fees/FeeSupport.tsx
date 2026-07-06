"use client";

import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const support = [
  "Transparent communication about costs and payment timing",
  "Clear guidance on school-related service fees and expectations",
  "Support for families who want to discuss arrangements in advance",
  "Open conversations about scholarship opportunities where applicable",
];

export function FeeSupport() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Family support" title="We help families plan with confidence." description="A strong school experience should feel well-organized, respectful, and easy to understand." />
      <div className="mt-10 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
        <ul className="space-y-4 text-sm leading-7 text-secondary">
          {support.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
