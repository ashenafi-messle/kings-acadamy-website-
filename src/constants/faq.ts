export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  { question: "Which curriculum do you follow?", answer: "Our curriculum is designed around international best practices while remaining relevant to local context and student needs." },
  { question: "How are students assessed?", answer: "We use a balanced assessment approach that includes class participation, projects, practical work, and formal examinations." },
  { question: "What subjects are offered?", answer: "Students study core subjects such as mathematics, English, science, social studies, ICT, arts, and physical education." },
  { question: "How large are the classes?", answer: "Class sizes are kept manageable so teachers can provide attentive support and meaningful engagement." },
  { question: "How do you support struggling students?", answer: "We provide targeted support, mentoring, and individualized guidance to help each learner progress confidently." },
  { question: "Do you integrate technology into learning?", answer: "Yes. Technology is used meaningfully to enhance instruction, collaboration, independent study, and digital literacy." },
];
