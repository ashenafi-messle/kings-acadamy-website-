"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const items = [
  { question: "When are tuition fees due?", answer: "Families receive a clear payment schedule during the admissions process and can request a tailored arrangement if needed." },
  { question: "Are other services included in tuition?", answer: "Core academic instruction, pastoral care, and school operations are included, while some optional services may be separately quoted." },
  { question: "Can we discuss payment plans?", answer: "Yes. Our team is happy to speak with families about available arrangements and how best to support their situation." },
];

export function FeeFAQ() {
  return (
    <PageSection>
      <SectionHeading eyebrow="FAQ" title="Common questions about fees and payments." description="We want families to feel informed, prepared, and supported from enrollment onward." />
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
