"use client";

import { motion } from "framer-motion";

interface LeadershipPerson {
  name: string;
  role: string;
}

interface LeadershipSectionProps {
  leadership: LeadershipPerson[];
}

export function LeadershipSection({ leadership }: LeadershipSectionProps) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {leadership.map((person) => (
        <motion.article
          key={person.name}
          whileHover={{ y: -6, scale: 1.01 }}
          className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-8 shadow-sm"
        >
          <div className="h-14 w-14 rounded-full bg-surface" />
          <h3 className="mt-5 text-xl font-semibold text-text">{person.name}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.28em] text-primary">{person.role}</p>
        </motion.article>
      ))}
    </div>
  );
}
