import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Discover the modern classrooms, labs, library, sports, and campus spaces at Kings Academy Gondar.",
};

const facilities = [
  { title: "Science Laboratories", description: "Modern labs support inquiry-based learning and hands-on scientific exploration." },
  { title: "Library & Media Center", description: "A calm, resource-rich space for reading, research, and independent learning." },
  { title: "Sports Fields", description: "Indoor and outdoor spaces encourage physical wellness, teamwork, and confidence." },
  { title: "Arts & Design Studio", description: "Creative spaces inspire performance, visual expression, and imaginative thinking." },
];

export default function FacilitiesPage() {
  return (
    <main>
      <PageHero title="Facilities" description="Purpose-built spaces that support academic growth, creativity, wellness, and community connection." image="/images/placeholders/hero.jpg" breadcrumb="Facilities" />

      <PageSection>
        <SectionHeading eyebrow="Campus spaces" title="Learning environments designed for focus and inspiration." description="Our campus facilities blend modern infrastructure with flexible spaces that support collaboration, innovation, and student wellbeing." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {facilities.map((facility) => (
            <div key={facility.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-text">{facility.title}</h3>
              <p className="mt-3 text-secondary">{facility.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative h-[320px] overflow-hidden rounded-[2rem] border border-[#E5E7EB]">
            <Image src="/images/placeholders/hero.jpg" alt="Library and study space" fill className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Built for modern learning" title="Spaces that help students thrive academically and socially." />
            <p className="mt-6 text-lg leading-8 text-secondary">Every classroom and shared area is designed to encourage focus, collaboration, and the kinds of experiences that shape lifelong confidence.</p>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
