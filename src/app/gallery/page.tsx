import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse a visual glimpse of learning spaces, student life, and special moments at Kings Academy Gondar.",
};

const galleryItems = [
  { src: "/images/placeholders/hero.jpg", alt: "Students working in a classroom" },
  { src: "/images/placeholders/hero.jpg", alt: "School event in progress" },
  { src: "/images/placeholders/hero.jpg", alt: "Campus facilities and outdoor space" },
  { src: "/images/placeholders/hero.jpg", alt: "Students participating in an activity" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Gallery" description="A visual window into our classrooms, campus life, and shared celebrations." image="/images/placeholders/hero.jpg" breadcrumb="Gallery" />

      <PageSection>
        <SectionHeading eyebrow="Moments to remember" title="Explore the atmosphere of our school through images." description="These placeholder highlights reflect the warmth, energy, and learning spirit of Kings Academy Gondar." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.src} className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
              <div className="relative h-72">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
