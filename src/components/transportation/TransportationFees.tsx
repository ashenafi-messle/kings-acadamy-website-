"use client";

import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const fees = [
  { label: "Route fee", value: "Quoted per route", note: "Depend on distance and service area" },
  { label: "Annual transport agreement", value: "As advised", note: "Shared during enrollment review" },
  { label: "Emergency support", value: "Included", note: "Families receive timely transport communication" },
];

export function TransportationFees() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Fees" title="Clear information for transport planning." description="We aim to make transport arrangements easy to understand for families from the start." />
      <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white shadow-sm">
        {fees.map((fee) => (
          <div key={fee.label} className="flex flex-col gap-2 border-b border-[#E5E7EB] px-6 py-5 last:border-b-0 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-text">{fee.label}</p>
              <p className="mt-1 text-sm text-secondary">{fee.note}</p>
            </div>
            <p className="text-sm font-semibold text-[#1E3A8A]">{fee.value}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
