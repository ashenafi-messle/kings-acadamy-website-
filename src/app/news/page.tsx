import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "News",
  description: "Read the latest news, announcements, and stories from Kings Academy Gondar.",
};

const articles = [
  { title: "New science lab opens for inquiry-based learning", description: "Students now have more opportunities to explore experiments, design thinking, and collaborative problem solving." },
  { title: "School community celebrates cultural week", description: "Families and students gathered for performances, storytelling, and shared traditions across campus." },
  { title: "Faculty development program expands", description: "Teachers are engaging in new professional learning to strengthen instruction and student support." },
];

export default function NewsPage() {
  return (
    <main>
      <PageHero title="News & Updates" description="Stay connected with the latest stories, events, and developments from our school community." image="/images/placeholders/hero.jpg" breadcrumb="News" />

      <PageSection>
        <SectionHeading eyebrow="Latest stories" title="What is happening at Kings Academy Gondar." description="From student achievements to community events, these updates offer a glimpse into life at our school." />
        <div className="mt-10 space-y-6">
          {articles.map((article) => (
            <div key={article.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-text">{article.title}</h3>
              <p className="mt-3 text-secondary">{article.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="rounded-[2rem] bg-footer px-8 py-12 text-white">
          <h3 className="text-3xl font-semibold">Follow our journey throughout the year.</h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Visit again soon for new stories, events, and highlights from our school community.</p>
          <div className="mt-8">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-text">Stay in Touch</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
