import type { FloatingCardItem, HeroSectionContent, HeroStat } from "@/src/types/hero";

export const heroContent: HeroSectionContent = {
  badge: "Welcome to Kings Academy Gondar",
  heading: "Empowering Tomorrow's Leaders Through Excellence, Innovation & Character",
  description:
    "Kings Academy Gondar is committed to nurturing confident, creative, and responsible learners through quality education, modern teaching methods, and a supportive learning environment.",
  primaryCta: {
    label: "Explore Programs",
    href: "/academics",
  },
  secondaryCta: {
    label: "Register Now",
    href: "/register",
  },
};

export const HERO_BADGE = heroContent.badge;
export const HERO_TITLE = heroContent.heading;
export const HERO_DESCRIPTION = heroContent.description;
export const HERO_BUTTONS = {
  primary: heroContent.primaryCta,
  secondary: heroContent.secondaryCta,
};

export const heroStats: HeroStat[] = [
  { label: "Students", value: 1500, suffix: "+", icon: "🎓" },
  { label: "Qualified Teachers", value: 120, suffix: "+", icon: "👩‍🏫" },
  { label: "National Exam Success", value: 98, suffix: "%", icon: "🏆" },
  { label: "Years of Excellence", value: 25, suffix: "+", icon: "📅" },
];

export const HERO_STATS = heroStats;

export const HERO_IMAGE = {
  src: "/images/students/Gemini_Generated_Image_x8sflsx8sflsx8sf.png",
  alt: "Students learning together in a bright, modern classroom at Kings Academy Gondar",
};

export const floatingCards: FloatingCardItem[] = [];

export const FLOATING_CARDS = floatingCards;
