import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Learn about admissions at Kings Academy Gondar, including the application process and visit opportunities.",
};

const steps = [
  { title: "Schedule a visit", description: "Meet our team and experience the campus atmosphere in person." },
  { title: "Submit an application", description: "Complete the online form and share the required supporting documents." },
  { title: "Assessment & interview", description: "We welcome families for a short conversation and student placement review." },
  { title: "Enrollment confirmation", description: "Once approved, we guide you through onboarding and school readiness." },
];

export default function AdmissionsPage() {
  return (
    <main>
      <PageHero title="Admissions" description="A clear, welcoming admissions journey for families seeking a vibrant and supportive school community." image="/images/placeholders/hero.jpg" breadcrumb="Admissions" />

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Join our community" title="We make the admissions experience warm, transparent, and encouraging." description="Whether you are exploring a first school placement or transitioning from another institution, our admissions team is here to guide you every step of the way." />
            <p className="mt-6 text-lg leading-8 text-secondary">We welcome families who value academic excellence, caring relationships, and a school culture where every child can thrive.</p>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-text">What families can expect</h3>
            <ul className="mt-6 space-y-4 text-secondary">
              <li>• Personalized guidance from our admissions team</li>
              <li>• Clear application timelines and documentation support</li>
              <li>• Open communication around student readiness and placement</li>
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <SectionHeading eyebrow="Application journey" title="A simple process designed around your family’s needs." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-3 text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative h-[320px] overflow-hidden rounded-[2rem] border border-[#E5E7EB]">
            <Image src="/images/placeholders/hero.jpg" alt="Students in school setting" fill className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Visit the school" title="See the community for yourself." />
            <p className="mt-6 text-lg leading-8 text-secondary">We invite prospective families to visit our campus, tour key learning spaces, and meet members of our teaching team.</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-footer px-6 py-3 font-semibold text-white">Arrange a Visit</Link>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="rounded-[2rem] bg-footer px-8 py-12 text-white">
          <h3 className="text-3xl font-semibold">Start your journey with Kings Academy Gondar.</h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Reach out to our admissions office to request information, schedule a visit, or begin an application.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-text">Contact Admissions</Link>
            <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Learn About Us</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
