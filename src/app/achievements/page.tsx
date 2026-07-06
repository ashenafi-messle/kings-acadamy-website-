import type { Metadata } from "next";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Achievements",
  description: "See the academic, artistic, and community achievements that reflect Kings Academy Gondar's commitment to excellence.",
};

const highlights = [
  { title: "Academic excellence", description: "Students continue to demonstrate strong performance in core subjects and external assessments." },
  { title: "Creative leadership", description: "Arts and innovation programs have produced student showcases and community-facing projects." },
  { title: "Service impact", description: "Our school community regularly contributes to local initiatives and outreach programs." },
];

export default function AchievementsPage() {
  return (
    <main>
      <PageHero title="Achievements" description="A snapshot of the progress, recognition, and growth that define our school community." image="/images/placeholders/hero.jpg" breadcrumb="Achievements" />

      <PageSection>
        <SectionHeading eyebrow="Highlights" title="Celebrating growth, contribution, and excellence." description="Our achievements reflect the dedication of students, teachers, and families who continue to raise the standard of learning and leadership." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <SectionHeading eyebrow="Recent milestones" title="Recognition that grows from consistent effort and community spirit." />
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-surface p-5">
              <h3 className="font-semibold text-text">Student leadership awards</h3>
              <p className="mt-2 text-secondary">Students have been recognized for initiative, service, and positive impact across campus programs.</p>
            </div>
            <div className="rounded-2xl bg-surface p-5">
              <h3 className="font-semibold text-text">Inter-school performance showcases</h3>
              <p className="mt-2 text-secondary">Our arts and academic teams continue to perform with confidence and distinction in regional events.</p>
            </div>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
