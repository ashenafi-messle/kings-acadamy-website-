import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Campus Life",
  description: "Discover the clubs, activities, events, and student experiences that shape campus life at Kings Academy Gondar.",
};

const experiences = [
  { title: "Sports & wellbeing", description: "A balanced program that supports fitness, teamwork, and healthy routines." },
  { title: "Arts & culture", description: "Music, drama, and visual arts provide creative outlets for self-expression." },
  { title: "Leadership clubs", description: "Students build confidence through service, planning, and collaborative projects." },
  { title: "Community events", description: "From celebrations to service days, campus life is rooted in belonging." },
];

export default function CampusLifePage() {
  return (
    <main>
      <PageHero title="Campus Life" description="A lively, nurturing environment where students grow through friendship, opportunity, and shared experiences." image="/images/placeholders/hero.jpg" breadcrumb="Campus Life" />

      <PageSection>
        <SectionHeading eyebrow="Student experience" title="A school community where learning extends beyond the classroom." description="Campus life at Kings Academy Gondar is shaped by connection, creativity, and a strong sense of belonging." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative h-[340px] overflow-hidden rounded-[2rem] border border-[#E5E7EB]">
            <Image src="/images/facilities/Gemini_Generated_Image_la1mg9la1mg9la1m.png" alt="Students at school" fill className="object-cover" />
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-text">Every day offers room to grow</h3>
            <p className="mt-4 text-lg leading-8 text-secondary">From sporting competitions to student-led initiatives, our campus life program helps young people build confidence, teamwork, and a strong sense of purpose.</p>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <SectionHeading eyebrow="Why it matters" title="A vibrant campus supports wellbeing and belonging." />
          <p className="mt-6 text-lg leading-8 text-secondary">We believe that a rich co-curricular life helps students discover their strengths, form lasting friendships, and build resilience that carries into adulthood.</p>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="rounded-[2rem] bg-footer px-8 py-12 text-white">
          <h3 className="text-3xl font-semibold">Experience the energy of our campus community.</h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Visit us to see the clubs, spaces, and traditions that make Kings Academy Gondar such a welcoming place to learn and belong.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-text">Book a Visit</Link>
            <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">About the School</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
