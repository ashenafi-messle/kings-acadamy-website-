import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kings Academy Gondar's story, mission, values, and leadership.",
};

const values = [
  "Academic excellence with a global outlook",
  "Character development through service and responsibility",
  "Innovation supported by strong pastoral care",
  "A community rooted in belonging and ambition",
];

const timeline = [
  { year: "2018", title: "Founded with a vision for international education", detail: "Kings Academy Gondar opened with a commitment to academic rigor and student wellbeing." },
  { year: "2021", title: "Expanded campus facilities", detail: "New science and design spaces expanded hands-on learning opportunities for students." },
  { year: "2024", title: "Strengthened university preparation", detail: "We launched more advanced pathways and personalized counseling for international study." },
];

const leadership = [
  { name: "Dr. Selam Bekele", role: "Principal" },
  { name: "Ms. Hana Tadesse", role: "Head of Academics" },
  { name: "Mr. Daniel Wolde", role: "Director of Student Life" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Kings Academy Gondar" description="A values-led international school shaping confident learners, thoughtful leaders, and compassionate citizens." image="/images/about/Gemini_Generated_Image_cu8bkbcu8bkbcu8b.png" breadcrumb="About" />

      <PageSection id="our-story">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="A school rooted in excellence, innovation, and care." description="From our earliest days, Kings Academy Gondar has been built to offer a world-class education that respects local identity while preparing students for an international future." />
            <p className="mt-6 text-lg leading-8 text-secondary">Our school combines academic ambition with a warm, community-centered approach. Students learn in a culture where curiosity is encouraged, responsibility is practiced, and every child is known well.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-surface p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
            <div className="relative h-80 overflow-hidden rounded-[1.5rem]">
              <Image src="/images/about/Gemini_Generated_Image_cu8bkbcu8bkbcu8b.png" alt="Campus view" fill className="object-cover" />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-text">Mission</h3>
            <p className="mt-4 text-lg leading-8 text-secondary">To provide a transformative learning experience that develops intellectual curiosity, strong character, and leadership for a rapidly changing world.</p>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-text">Vision</h3>
            <p className="mt-4 text-lg leading-8 text-secondary">To become one of the most trusted international schools in the region, known for academic distinction, student wellbeing, and community impact.</p>
          </div>
        </div>
      </PageSection>

      <PageSection id="mission-vision">
        <SectionHeading eyebrow="Core values" title="The principles that guide every classroom and campus experience." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div key={value} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium text-text">{value}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-surface" id="principal-message">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-[#E5E7EB]">
            <Image src="/images/about/Gemini_Generated_Image_cu8bkbcu8bkbcu8b.png" alt="Principal portrait" fill className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Principal's message" title="Every student deserves a learning environment that is ambitious, warm, and purposeful." />
            <p className="mt-6 text-lg leading-8 text-secondary">At Kings Academy Gondar, we believe education must do more than prepare students for exams. It must prepare them for life: to think deeply, act responsibly, and thrive with confidence in a global society.</p>
            <p className="mt-5 text-lg leading-8 text-secondary">Our teachers, staff, and families work collaboratively to offer a school experience that is both rigorous and deeply personal.</p>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <SectionHeading eyebrow="Milestones" title="A steady journey of growth and progress." />
        <div className="mt-10 space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-text">{item.title}</h3>
                </div>
                <p className="max-w-2xl text-secondary">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="rounded-[2rem] bg-footer px-8 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
          <h3 className="text-3xl font-semibold">Discover how our community learns and grows.</h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Explore our academic programs, campus life, and admissions experience to see whether Kings Academy Gondar is the right fit for your family.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/academics" className="rounded-full bg-white px-6 py-3 font-semibold text-text">Explore Academics</Link>
            <Link href="/admissions" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Apply Now</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
