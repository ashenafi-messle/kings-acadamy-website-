export interface HeroSectionContent {
  badge: string;
  heading: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface HeroStat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface FloatingCardItem {
  title: string;
  description: string;
  icon: string;
  position: string;
  accent: string;
}
