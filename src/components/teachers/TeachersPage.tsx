"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/src/components/shared/PageHero";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { TeachingPhilosophy } from "@/src/components/teachers/TeachingPhilosophy";
import { TeacherDirectory } from "@/src/components/teachers/TeacherDirectory";
import { Leadership } from "@/src/components/teachers/Leadership";
import { Departments } from "@/src/components/teachers/Departments";
import { TeacherQualifications } from "@/src/components/teachers/Qualifications";
import { ProfessionalDevelopment } from "@/src/components/teachers/ProfessionalDevelopment";
import { TeacherHighlights } from "@/src/components/teachers/TeacherHighlights";
import { TeacherFAQ } from "@/src/components/teachers/FAQ";
import { ContactCTA } from "@/src/components/teachers/ContactCTA";

export function TeachersPage() {
  return (
    <main>
      <PageHero title="Meet Our Dedicated Educators" description="Kings Academy Gondar is proud of its teaching team, whose expertise, care, and commitment shape a vibrant learning community." image="/images/hero/hero.jpg" breadcrumb="Teachers" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <TeachingPhilosophy />
        <TeacherDirectory />
        <Leadership />
        <Departments />
        <TeacherQualifications />
        <ProfessionalDevelopment />
        <TeacherHighlights />
        <TeacherFAQ />
        <ContactCTA />
      </motion.div>
    </main>
  );
}
