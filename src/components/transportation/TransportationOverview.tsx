"use client";

import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const highlights = [
  { title: "Safe routes", description: "Transport is planned carefully around student safety and reliable pickup times." },
  { title: "Comfortable travel", description: "Vehicles are maintained to support a clean, calm, and comfortable ride." },
  { title: "Family convenience", description: "Transportation helps families simplify daily routines and reduce travel stress." },
];

export function TransportationOverview() {
  return (
    <PageSection className="bg-white">
      <SectionHeading eyebrow="Transport overview" title="A dependable service for school journeys." description="Our transport program reflects the same standards of safety, organization, and care that define the school experience." />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-text">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
