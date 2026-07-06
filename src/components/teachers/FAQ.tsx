"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const items = [
  {
    question: "What qualifications do Kings Academy teachers hold?",
    answer: "Our teachers are highly qualified professionals with degrees in education and subject expertise, and many continue advancing their training through specialized programs.",
  },
  {
    question: "How do teachers support students with different learning needs?",
    answer: "Teachers use differentiated instruction, close monitoring, and collaborative support to ensure each student is challenged and supported appropriately.",
  },
  {
    question: "How do we know the staff are committed to student wellbeing?",
    answer: "Safeguarding, pastoral care, and regular communication with families are all built into our school culture and staff expectations.",
  },
];

export function TeacherFAQ() {
  return (
    <PageSection className="bg-[#F8FAFC]">
      <SectionHeading eyebrow="Frequently asked questions" title="Questions about our teaching team" description="Helpful answers for families considering the academic and pastoral strength of our school." />
      <div className="mt-10 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-2 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold text-text hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-sm leading-7 text-secondary">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageSection>
  );
}
