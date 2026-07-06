import type { StatisticItem } from "@/src/types/statistic";

export const statistics: StatisticItem[] = [
  {
    itemKey: "studentsEnrolled",
    icon: "🎓",
    value: 1420,
    suffix: "+",
    label: "Students enrolled",
    description: "A dynamic student community supported by modern classrooms and student-centered learning.",
  },
  {
    itemKey: "experiencedTeachers",
    icon: "👩‍🏫",
    value: 78,
    suffix: "+",
    label: "Experienced teachers",
    description: "Highly qualified educators guiding every learner with dedication and expertise.",
  },
  {
    itemKey: "examPassRate",
    icon: "🏅",
    value: 98,
    suffix: "%",
    label: "Exam pass rate",
    description: "Outstanding academic performance with progress-driven support and mentoring.",
  },
  {
    itemKey: "graduatesLastYear",
    icon: "📚",
    value: 320,
    suffix: "+",
    label: "Graduates last year",
    description: "Successful alumni who left Kings Academy Gondar ready for the next stage.",
  },
  {
    itemKey: "yearsOfExcellence",
    icon: "📅",
    value: 16,
    suffix: "+",
    label: "Years of excellence",
    description: "A proven track record in international education and student success.",
  },
];

export const STATISTICS = statistics;
