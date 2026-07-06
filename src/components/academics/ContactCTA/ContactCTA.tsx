import Link from "next/link";
import { PageSection } from "@/src/components/shared/PageSection";

export function ContactCTA() {
  return (
    <PageSection>
      <div className="rounded-[2rem] bg-footer px-8 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
        <h3 className="text-3xl font-semibold">Ready to learn more?</h3>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Visit our campus or speak with our team to experience the academic environment at Kings Academy Gondar.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-text">Contact Us</Link>
          <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Visit Our Campus</Link>
        </div>
      </div>
    </PageSection>
  );
}
