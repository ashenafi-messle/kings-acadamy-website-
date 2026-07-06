import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageSection } from "@/src/components/shared/PageSection";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { faqItems } from "@/src/constants/faq";

export function FAQ() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Frequently asked questions"
        title="Questions families often ask about our academic programme."
        description="We believe transparency and clarity are essential when supporting students and families."
      />
      <div className="mt-10 rounded-[2rem] border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`} className="rounded-2xl border border-[#E5E7EB] px-4 py-2">
              <AccordionTrigger className="text-left text-base font-semibold text-text">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-secondary">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageSection>
  );
}
