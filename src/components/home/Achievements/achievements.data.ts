export interface AchievementItem {
  itemKey?: string;
  title: string;
  description: string;
  icon: string;
  year?: string;
  metric?: string;
  featured?: boolean;
}

export const ACHIEVEMENTS_SECTION = {
  label: "Key achievements",
  title: "A record of distinction, awards, and national recognition.",
  description:
    "Kings Academy Gondar has been celebrated for outstanding exam results, competition victories, and innovation-led achievements that underscore our academic excellence.",
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    itemKey: "nationalExam",
    title: "National Exam Top Results",
    description: "Consistently ranking among the top schools in national assessments with outstanding student performance.",
    icon: "🏆",
    metric: "98% pass rate",
    featured: true,
  },
  {
    itemKey: "academicAwards",
    title: "Academic Awards",
    description: "Multiple school awards for excellence in science, mathematics, and language competitions.",
    icon: "🎓",
    year: "2024",
  },
  {
    itemKey: "innovationHonors",
    title: "Innovation & Science Honors",
    description: "Recognition for student-led science fairs, research projects, and technology innovation challenges.",
    icon: "🔬",
    year: "2024",
  },
  {
    itemKey: "sportsChampionship",
    title: "Sports Championship",
    description: "Top placement in regional athletics and team sports events, reinforcing balanced achievement.",
    icon: "⚽",
    year: "2023",
  },
  {
    itemKey: "culturalRecognition",
    title: "Cultural & Arts Recognition",
    description: "Awards for school performances, art exhibitions, and cultural showcases that celebrate student talent.",
    icon: "🎭",
  },
];
