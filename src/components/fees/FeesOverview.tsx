"use client";

import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const items = [
  { title: "Tuition structure", description: "Fee information is shared clearly by grade level so families know what to expect." },
  { title: "Annual support", description: "We provide guidance on school services, uniforms, transport, and optional programs." },
  { title: "Flexible communication", description: "Our admissions team is available to discuss payment planning and school requirements." },
];

export function FeesOverview() {
  return (
    <PageSection className="bg-white">
      <SectionHeading eyebrow="Fee overview" title="Clarity and support at every step." description="We believe parents should have a simple, transparent view of the costs involved in joining and staying at Kings Academy Gondar." />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-text">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
