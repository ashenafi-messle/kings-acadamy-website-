"use client";

import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const routeDetails = [
  { area: "Gondar city center", schedule: "Morning pickup 6:45 AM", coverage: "Central residential areas" },
  { area: "North campus belt", schedule: "Morning pickup 7:00 AM", coverage: "Families along the northern route" },
  { area: "West district", schedule: "Morning pickup 7:15 AM", coverage: "Extended service on request" },
  { area: "South residential zones", schedule: "Afternoon return 3:30 PM", coverage: "Connection to home areas" },
];

export function TransportationRoutes() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Coverage" title="Routes designed around family convenience." description="We review transport routes regularly to support consistent service and dependable timing." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {routeDetails.map((route) => (
          <div key={route.area} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-text">{route.area}</h3>
            <p className="mt-3 text-sm font-medium text-[#1E3A8A]">{route.schedule}</p>
            <p className="mt-3 text-sm leading-7 text-secondary">{route.coverage}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
