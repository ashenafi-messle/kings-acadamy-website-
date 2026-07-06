import { BookMarked, FlaskConical, Laptop2, MonitorUp, Sparkles, Trees } from "lucide-react";

export interface LearningResourceItem {
  title: string;
  description: string;
  image: string;
  icon: typeof BookMarked;
}

export const learningResources: LearningResourceItem[] = [
  { title: "Library", description: "A calm and resource-rich reading environment for independent learning.", image: "/images/placeholders/hero.jpg", icon: BookMarked },
  { title: "Science Laboratories", description: "Hands-on experiments encourage inquiry, evidence, and curiosity.", image: "/images/placeholders/hero.jpg", icon: FlaskConical },
  { title: "Computer Laboratories", description: "Digital learning spaces support coding, research, and responsible technology use.", image: "/images/placeholders/hero.jpg", icon: Laptop2 },
  { title: "Smart Classrooms", description: "Flexible teaching spaces support collaboration and multimedia learning.", image: "/images/placeholders/hero.jpg", icon: MonitorUp },
  { title: "Digital Resources", description: "Students access quality content that enriches the curriculum beyond the classroom.", image: "/images/placeholders/hero.jpg", icon: Sparkles },
  { title: "Reading Areas", description: "Inviting spaces where students can read, reflect, and grow in confidence.", image: "/images/placeholders/hero.jpg", icon: Trees },
];
