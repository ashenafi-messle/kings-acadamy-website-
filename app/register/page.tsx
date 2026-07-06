import type { Metadata } from "next";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Register",
  description: "Register your child at Kings Academy Gondar with our school registration form.",
};

const registrationHighlights = [
  "A simple application process for new students",
  "Support from our admissions team",
  "Quick follow-up with program and fee guidance",
];

export default function RegisterPage() {
  return (
    <main>
      <PageHero
        title="School Registration Form"
        description="Begin your child’s admission journey by completing the registration form below."
        image="/images/placeholders/hero.jpg"
        breadcrumb="Register"
      />

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Admissions"
              title="Start your child’s journey with us."
              description="Share your details and our admissions team will reach out with the next steps."
            />
            <ul className="mt-8 space-y-4 text-base leading-8 text-secondary">
              {registrationHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#E5E7EB] bg-surface p-8 shadow-sm">
            <SectionHeading eyebrow="Registration form" title="Student registration request" />
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-text">Parent/Guardian Name</span>
                  <input type="text" className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="Enter full name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-text">Email Address</span>
                  <input type="email" className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="name@example.com" />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-text">Student Name</span>
                  <input type="text" className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="Enter student full name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-text">Student Age</span>
                  <input type="number" min="3" max="18" className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="e.g. 7" />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-text">Phone Number</span>
                  <input type="tel" className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="+251 9XX XXX XXX" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-text">Grade Applying For</span>
                  <input type="text" className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="e.g. Grade 1" />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-text">Additional Message</span>
                <textarea rows={5} className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 outline-none focus:border-primary" placeholder="Tell us about your child or preferred program." />
              </label>

              <button type="submit" className="rounded-full bg-primary px-7 py-3 font-semibold text-white transition hover:bg-[#0F3A7D]">
                Submit Registration Request
              </button>
            </form>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
