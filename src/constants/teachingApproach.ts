import { BarChart3, BookOpen, MessagesSquare, Sparkles, Users, Waypoints } from "lucide-react";

export interface TeachingApproachItem {
  title: string;
  description: string;
  icon: typeof BookOpen;
}

export const teachingApproach: TeachingApproachItem[] = [
  { title: "Experienced Teachers", description: "Dedicated educators guide each child with warmth, expertise, and high expectations.", icon: Users },
  { title: "Interactive Learning", description: "Lessons are designed to encourage discussion, questioning, and participation.", icon: MessagesSquare },
  { title: "Student-Centered Classrooms", description: "Students are supported as active learners, not passive recipients of information.", icon: BookOpen },
  { title: "Continuous Feedback", description: "Regular reflection helps students improve with clarity and confidence.", icon: BarChart3 },
  { title: "Project-Based Learning", description: "Real-world investigations connect knowledge to authentic outcomes.", icon: Sparkles },
  { title: "Individual Support", description: "Small-group support and mentoring ensure no learner is left behind.", icon: Waypoints },
];
