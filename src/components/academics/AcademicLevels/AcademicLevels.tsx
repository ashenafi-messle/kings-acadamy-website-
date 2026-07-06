import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { academicLevels } from "@/src/constants/academicLevels";
import { AcademicLevelCard } from "./AcademicLevelCard";

export function AcademicLevels() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Academic levels"
        title="A complete learning journey from early years to university readiness."
        description="Each stage of school is designed to meet learners where they are while preparing them for the next milestone with confidence."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {academicLevels.map((level) => (
          <AcademicLevelCard key={level.title} level={level} />
        ))}
      </div>
    </PageSection>
  );
}
