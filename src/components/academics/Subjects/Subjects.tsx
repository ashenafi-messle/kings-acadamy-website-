import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { subjects } from "@/src/constants/subjects";
import { SubjectCard } from "./SubjectCard";

export function Subjects() {
  return (
    <PageSection className="bg-surface">
      <SectionHeading
        eyebrow="Subjects offered"
        title="A rich and varied academic programme for every learner."
        description="Students explore a broad intellectual landscape that blends core disciplines, creative subjects, and practical skills."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectCard key={subject.name} subject={subject} />
        ))}
      </div>
    </PageSection>
  );
}
