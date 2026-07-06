import { Atom, BookOpen, BrushCleaning, Compass, FlaskConical, Laptop, Languages, Microscope, Music4, Telescope, Type, Waves, Zap } from "lucide-react";

export const subjectIcons = {
  atom: Atom,
  bookOpen: BookOpen,
  brushCleaning: BrushCleaning,
  compass: Compass,
  flaskConical: FlaskConical,
  laptop: Laptop,
  languages: Languages,
  microscope: Microscope,
  music4: Music4,
  telescope: Telescope,
  type: Type,
  waves: Waves,
  zap: Zap,
} as const;

export type SubjectIconName = keyof typeof subjectIcons;

export interface SubjectItem {
  name: string;
  description: string;
  iconName: SubjectIconName;
}

export const subjects: SubjectItem[] = [
  { name: "Mathematics", description: "Problem solving, reasoning, and confidence with numbers and logic.", iconName: "atom" },
  { name: "English", description: "Reading, writing, speaking, and communication skills for academic success.", iconName: "type" },
  { name: "Amharic", description: "Language development, literature, and cultural connection.", iconName: "languages" },
  { name: "Science", description: "Observation, inquiry, and discovery through experimentation and evidence.", iconName: "telescope" },
  { name: "Biology", description: "Exploring life, systems, and the natural world with curiosity and care.", iconName: "microscope" },
  { name: "Chemistry", description: "Understanding materials, reactions, and practical laboratory reasoning.", iconName: "flaskConical" },
  { name: "Physics", description: "Investigating motion, energy, and the science behind everyday phenomena.", iconName: "zap" },
  { name: "Geography", description: "A global perspective on places, societies, and environmental awareness.", iconName: "compass" },
  { name: "History", description: "Learning from the past to better understand our present and future.", iconName: "bookOpen" },
  { name: "ICT", description: "Digital fluency, coding, and safe, meaningful technology use.", iconName: "laptop" },
  { name: "Art", description: "Creative expression through drawing, design, and visual communication.", iconName: "brushCleaning" },
  { name: "Music", description: "Performance, listening, and rhythm as essential parts of student growth.", iconName: "music4" },
  { name: "Physical Education", description: "Health, movement, teamwork, and confidence through active learning.", iconName: "waves" },
];
