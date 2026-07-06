import { motion } from "framer-motion";
import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";

export function Hero() {
  return (
    <PageHero
      title="Academic Excellence"
      description="A balanced and forward-looking academic experience where students grow in knowledge, character, and confidence from early years through university preparation."
      image="/images/placeholders/hero.jpg"
      breadcrumb="Academics"
    />
  );
}
