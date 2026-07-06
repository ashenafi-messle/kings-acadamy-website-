"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/src/components/shared/PageHero";
import { FeesOverview } from "@/src/components/fees/FeesOverview";
import { FeeSchedule } from "@/src/components/fees/FeeSchedule";
import { FeeServices } from "@/src/components/fees/FeeServices";
import { FeeSupport } from "@/src/components/fees/FeeSupport";
import { FeeFAQ } from "@/src/components/fees/FeeFAQ";
import { FeeContact } from "@/src/components/fees/FeeContact";

export function FeesPage() {
  return (
    <main>
      <PageHero title="Transparent Tuition and Fees" description="Kings Academy Gondar is committed to clear, family-friendly financial information and flexible support options." image="/images/hero/hero.jpg" breadcrumb="Fees" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <FeesOverview />
        <FeeSchedule />
        <FeeServices />
        <FeeSupport />
        <FeeFAQ />
        <FeeContact />
      </motion.div>
    </main>
  );
}
