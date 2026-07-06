export interface TestimonialItem {
  name: string;
  role: string;
  message: string;
  rating?: number;
  avatar?: string;
  featured?: boolean;
}

export const TESTIMONIALS_SECTION = {
  label: "Parent & student voices",
  title: "Real stories from families who trust Kings Academy Gondar.",
  description:
    "Hear from students and parents about the supportive learning community, academic progress, and the warm campus experience.",
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Amina Tesfaye",
    role: "Parent",
    message:
      "Our son has grown more confident and curious since joining Kings Academy Gondar. The teachers are caring, and the learning environment is truly supportive.",
    rating: 5,
    avatar: "AT",
    featured: true,
  },
  {
    name: "Samuel Hailu",
    role: "Student",
    message:
      "I love the clubs and activities. Every day feels engaging, and I enjoy learning with friends in modern classrooms.",
    rating: 5,
    avatar: "SH",
  },
  {
    name: "Nadia Bekele",
    role: "Parent",
    message:
      "The academic progress has been outstanding. The school balances structure with creativity, and my daughter feels valued.",
    rating: 5,
    avatar: "NB",
  },
  {
    name: "Michael Girma",
    role: "Parent",
    message:
      "The school community is warm and professional. Communication is excellent and our child thrives with the after-school support.",
    avatar: "MG",
  },
  {
    name: "Sara Melaku",
    role: "Student",
    message:
      "I enjoy the arts and technology classes most. The teachers encourage us to explore our interests and think creatively.",
    rating: 4,
    avatar: "SM",
  },
];
