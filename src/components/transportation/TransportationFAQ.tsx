"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

const items = [
  { question: "How are transport routes assigned?", answer: "Routes are assigned based on family location, route efficiency, and the availability of transport coverage." },
  { question: "What happens if a student is late or absent?", answer: "Families are notified through the school communication process and our transport team coordinates the day accordingly." },
  { question: "Can families request a different pickup point?", answer: "Requests may be considered depending on route capacity, safety, and overall school transport planning." },
];

export function TransportationFAQ() {
  return (
    <PageSection>
      <SectionHeading eyebrow="FAQ" title="Questions families often ask about transport." description="We make sure transport details are shared clearly so daily school travel feels predictable and calm." />
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
