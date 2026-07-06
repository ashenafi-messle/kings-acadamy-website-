"use client";

import { BookOpenCheck, Bus, ShieldCheck, CircleDollarSign } from "lucide-react";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const services = [
  { title: "Academic services", description: "Includes instruction, progress monitoring, and academic support at school.", icon: BookOpenCheck },
  { title: "Transport services", description: "Route-based school transport is available for eligible families.", icon: Bus },
  { title: "Wellbeing support", description: "Pastoral care and safeguarding practices are included in our school experience.", icon: ShieldCheck },
  { title: "Payment support", description: "We are happy to discuss family payment arrangements and fee questions.", icon: CircleDollarSign },
];

export function FeeServices() {
  return (
    <PageSection>
      <SectionHeading eyebrow="Included services" title="Fees support a complete school experience." description="Our fee structure covers the core services that make academic life safe, enriching, and well-supported." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1E3A8A]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{service.description}</p>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}
