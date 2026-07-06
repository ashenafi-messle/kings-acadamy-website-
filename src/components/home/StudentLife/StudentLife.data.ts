export interface StudentLifeItem {
  itemKey?: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export const STUDENT_LIFE_ITEMS: StudentLifeItem[] = [
  {
    itemKey: "sportsAthletics",
    icon: "🏅",
    title: "Sports & Athletics",
    description: "Vibrant athletic programs foster teamwork, fitness, and school spirit across football, track, and games.",
  },
  {
    itemKey: "artsCreativity",
    icon: "🎨",
    title: "Arts & Creativity",
    description: "Visual art, music, and drama experiences help students express themselves and build confidence.",
  },
  {
    itemKey: "studentClubs",
    icon: "🤝",
    title: "Student Clubs",
    description: "From debate to environmental clubs, students lead initiatives and build friendships through shared interests.",
  },
  {
    itemKey: "technologyInnovation",
    icon: "💡",
    title: "Technology & Innovation",
    description: "Hands-on coding, robotics, and maker spaces nurture creative problem solving and future-ready skills.",
  },
  {
    itemKey: "eventsSocialLife",
    icon: "🎉",
    title: "Events & Social Life",
    description: "Community events, cultural celebrations, and field trips make school life lively and memorable.",
  },
  {
    itemKey: "leadershipGrowth",
    icon: "🌱",
    title: "Leadership & Growth",
    description: "Student leadership, service projects, and personal development opportunities build character and resilience.",
  },
];
