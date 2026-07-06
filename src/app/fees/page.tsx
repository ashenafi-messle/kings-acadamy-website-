import type { Metadata } from "next";
import { FeesPage } from "@/src/components/fees/FeesPage";

export const metadata: Metadata = {
  title: "Fees",
  description: "Explore transparent tuition and fee information for Kings Academy Gondar, including schedules, services, and payment options.",
};

export default function FeesRoutePage() {
  return <FeesPage />;
}
