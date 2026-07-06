"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { technologyFeatures } from "@/src/constants/technology";

export function TechnologyEducation() {
  return (
    <PageSection className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          <div className="relative h-[360px] overflow-hidden rounded-[1.5rem]">
            <Image src="/images/placeholders/hero.jpg" alt="Technology-enabled learning environment" fill className="object-cover" />
          </div>
        </motion.div>
        <div>
          <SectionHeading
            eyebrow="Technology in education"
            title="Digital tools that enhance learning with intention and purpose."
            description="Technology is used to deepen understanding, support collaboration, and prepare students for a digitally connected future."
          />
          <div className="mt-8 space-y-4">
            {technologyFeatures.map((feature) => (
              <div key={feature.title} className="rounded-[1.25rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
                <p className="mt-2 text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
