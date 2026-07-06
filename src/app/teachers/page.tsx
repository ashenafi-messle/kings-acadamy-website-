import type { Metadata } from "next";
import { TeachersPage } from "@/src/components/teachers/TeachersPage";

export const metadata: Metadata = {
  title: "Teachers",
  description: "Meet the dedicated educators at Kings Academy Gondar and learn about their qualifications, philosophy, and commitment to student growth.",
};

export default function TeachersRoutePage() {
  return <TeachersPage />;
}
