export interface AssessmentStep {
  title: string;
  description: string;
}

export const assessmentSteps: AssessmentStep[] = [
  { title: "Continuous Assessment", description: "Teachers observe progress throughout the term to support steady growth." },
  { title: "Homework", description: "Regular assignments strengthen independence and reinforce learning habits." },
  { title: "Projects", description: "Students demonstrate understanding through inquiry and real-world tasks." },
  { title: "Practical Activities", description: "Hands-on learning is used to connect knowledge with experience." },
  { title: "Midterm Exams", description: "Structured checkpoints help review understanding and readiness." },
  { title: "Final Exams", description: "Term-end evaluations provide a clear picture of mastery and progress." },
  { title: "Parent Reports", description: "Families receive thoughtful feedback to support student development." },
];
