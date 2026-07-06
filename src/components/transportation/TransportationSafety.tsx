"use client";

import { ShieldCheck, ClipboardList, Bus, BadgeCheck } from "lucide-react";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const measures = [
  { title: "Driver vetting", description: "Drivers are carefully screened and trained for school transport responsibility.", icon: BadgeCheck },
  { title: "Safety checks", description: "Vehicles are inspected regularly for cleanliness, reliability, and road readiness.", icon: ClipboardList },
  { title: "Student supervision", description: "Transport staff support orderly boarding, arrival, and communication with families.", icon: ShieldCheck },
  { title: "Route discipline", description: "Routes are managed with clear schedules, assigned stops, and punctual expectations.", icon: Bus },
];

export function TransportationSafety() {
  return (
    <PageSection>
      <SectionHeading eyebrow="Safety standards" title="Safety remains our top transport priority." description="Every aspect of our transport service is maintained with care, consistency, and close supervision." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {measures.map((measure) => {
          const Icon = measure.icon;
          return (
            <div key={measure.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1E3A8A]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{measure.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{measure.description}</p>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}
