import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kings Academy Gondar for visits, admissions guidance, and general inquiries.",
};

const contactDetails = [
  { title: "Address", value: "Kings Academy Gondar, Gondar, Ethiopia" },
  { title: "Phone", value: "+251 000 000 000" },
  { title: "Email", value: "info@kingsacademygondar.com" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" description="We are happy to help with admissions questions, visits, and general information about our school." image="/images/placeholders/hero.jpg" breadcrumb="Contact" />

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <SectionHeading eyebrow="Get in touch" title="We would love to hear from you." />
            <div className="mt-8 space-y-6">
              {contactDetails.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{item.title}</p>
                  <p className="mt-2 text-lg text-secondary">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-surface p-8 shadow-sm">
            <SectionHeading eyebrow="Plan a visit" title="Schedule a tour or request information." />
            <p className="mt-6 text-lg leading-8 text-secondary">Our admissions team can help you learn more about our programs, campus life, and application process. Please reach out with any questions.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="mailto:info@kingsacademygondar.com" className="rounded-full bg-footer px-6 py-3 font-semibold text-white">Email Us</Link>
              <Link href="/admissions" className="rounded-full border border-[#E5E7EB] px-6 py-3 font-semibold text-text">Admissions Page</Link>
            </div>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
