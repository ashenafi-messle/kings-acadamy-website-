"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { learningResources } from "@/src/constants/learningResources";

export function LearningResources() {
  return (
    <PageSection className="bg-surface">
      <SectionHeading
        eyebrow="Learning resources"
        title="Spaces and tools that support deep learning every day."
        description="From libraries to laboratories, our learning resources are designed to be inspiring, practical, and future-ready."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {learningResources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <motion.article key={resource.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={resource.image} alt={resource.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">{resource.title}</h3>
                <p className="mt-3 text-secondary">{resource.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </PageSection>
  );
}
