"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/src/components/shared/PageHero";
import { TransportationOverview } from "@/src/components/transportation/TransportationOverview";
import { TransportationRoutes } from "@/src/components/transportation/TransportationRoutes";
import { TransportationSafety } from "@/src/components/transportation/TransportationSafety";
import { TransportationFees } from "@/src/components/transportation/TransportationFees";
import { TransportationFAQ } from "@/src/components/transportation/TransportationFAQ";
import { TransportationContact } from "@/src/components/transportation/TransportationContact";

export function TransportationPage() {
  return (
    <main>
      <PageHero title="Safe and Reliable School Transport" description="Kings Academy Gondar offers organized transport services designed for safety, punctuality, and family convenience." image="/images/hero/hero.jpg" breadcrumb="Transportation" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <TransportationOverview />
        <TransportationRoutes />
        <TransportationSafety />
        <TransportationFees />
        <TransportationFAQ />
        <TransportationContact />
      </motion.div>
    </main>
  );
}
