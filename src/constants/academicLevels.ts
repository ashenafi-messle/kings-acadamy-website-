import { BookOpen, Brain, Microscope, Sparkles } from "lucide-react";

export interface AcademicLevel {
  title: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  cta: string;
}

export const academicLevels: AcademicLevel[] = [
  {
    title: "Kindergarten",
    badge: "Early Years",
    image: "/images/academics/Gemini_Generated_Image_3yyyv13yyyv13yyy.png",
    description: "A joyful beginning where curiosity, language, and social confidence are nurtured through play and guided exploration.",
    highlights: ["Learning through play", "Early literacy", "Early numeracy", "Social development"],
    cta: "Explore Kindergarten",
  },
  {
    title: "Primary School",
    badge: "Foundation Stage",
    image: "/images/academics/Gemini_Generated_Image_7g8t4w7g8t4w7g8t.png",
    description: "A lively foundation stage that balances literacy, numeracy, inquiry, arts, and physical development in a caring environment.",
    highlights: ["Mathematics", "Science", "Languages", "Arts", "Reading", "Physical Education"],
    cta: "View Primary",
  },
  {
    title: "Secondary School",
    badge: "Growing Independence",
    image: "/images/academics/Gemini_Generated_Image_la1mg9la1mg9la1m.png",
    description: "A rigorous and inspiring phase that strengthens critical thinking, research, and leadership for future study and life.",
    highlights: ["STEM education", "Social sciences", "ICT", "Languages", "Laboratory work"],
    cta: "Discover Secondary",
  },
  {
    title: "Preparatory School",
    badge: "University Readiness",
    image: "/images/academics/Gemini_Generated_Image_qqhp6iqqhp6iqqhp.png",
    description: "Focused preparation for academic success, career guidance, and confident university application pathways.",
    highlights: ["National exam preparation", "Career guidance", "Research skills", "University readiness"],
    cta: "See Preparatory",
  },
];

export const philosophyCards = [
  { title: "Academic Excellence", description: "High expectations, strong routines, and a commitment to meaningful achievement.", icon: Sparkles },
  { title: "Critical Thinking", description: "Students learn to question, analyze, and solve problems with confidence.", icon: Brain },
  { title: "Creativity", description: "Expression, design, and innovation are nurtured across the curriculum.", icon: Sparkles },
  { title: "Collaboration", description: "Shared learning experiences build empathy, teamwork, and responsibility.", icon: BookOpen },
  { title: "Leadership", description: "Students practice service, initiative, and voice in authentic contexts.", icon: Brain },
  { title: "Character Development", description: "We nurture integrity, respect, and confidence alongside academic growth.", icon: BookOpen },
];
