"use client";

import { motion } from "framer-motion";
import { subjectIcons, type SubjectItem } from "@/src/constants/subjects";

interface SubjectCardProps {
  subject: SubjectItem;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = subjectIcons[subject.iconName];

  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} className="rounded-[1.4rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-text">{subject.name}</h3>
      <p className="mt-3 text-sm leading-7 text-secondary">{subject.description}</p>
    </motion.div>
  );
}
