"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageSection } from "@/src/components/shared/PageSection";

export function FeeContact() {
  return (
    <PageSection>
      <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#1E3A8A] p-8 text-white shadow-sm md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Speak with admissions</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Request the latest fee details and enrollment guidance.</h3>
            <p className="mt-4 text-sm leading-8 text-slate-200">Our team is available to answer questions about tuition, school services, and the enrollment process.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:opacity-90">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageSection>
  );
}
