import type { Metadata } from "next";
import { Hero } from "@/src/components/academics/Hero/Hero";
import { CurriculumOverview } from "@/src/components/academics/CurriculumOverview/CurriculumOverview";
import { EducationalPhilosophy } from "@/src/components/academics/EducationalPhilosophy/EducationalPhilosophy";
import { AcademicLevels } from "@/src/components/academics/AcademicLevels/AcademicLevels";
import { Subjects } from "@/src/components/academics/Subjects/Subjects";
import { TeachingApproach } from "@/src/components/academics/TeachingApproach/TeachingApproach";
import { LearningResources } from "@/src/components/academics/LearningResources/LearningResources";
import { Assessment } from "@/src/components/academics/Assessment/Assessment";
import { TechnologyEducation } from "@/src/components/academics/TechnologyEducation/TechnologyEducation";
import { ExtracurricularLearning } from "@/src/components/academics/ExtracurricularLearning/ExtracurricularLearning";
import { ContactCTA } from "@/src/components/academics/ContactCTA/ContactCTA";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore the academic philosophy, curriculum, teaching approach, and learning environment at Kings Academy Gondar.",
};

export default function AcademicsPage() {
  return (
    <main>
      <Hero />
      <CurriculumOverview />
      <EducationalPhilosophy />
      <AcademicLevels />
      <Subjects />
      <TeachingApproach />
      <LearningResources />
      <Assessment />
      <TechnologyEducation />
      <ExtracurricularLearning />
      <ContactCTA />
    </main>
  );
}
