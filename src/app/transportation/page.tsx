import type { Metadata } from "next";
import { TransportationPage } from "@/src/components/transportation/TransportationPage";

export const metadata: Metadata = {
  title: "Transportation",
  description: "Learn about Kings Academy Gondar transportation services, safety standards, coverage areas, and fees.",
};

export default function TransportationRoutePage() {
  return <TransportationPage />;
}
