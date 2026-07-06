export interface AcademicCalendarItem {
  period: string;
  title: string;
  date: string;
}

export const academicCalendar: AcademicCalendarItem[] = [
  { period: "Phase 1", title: "Semester One Begins", date: "August 2026" },
  { period: "Phase 2", title: "Midterm Review", date: "October 2026" },
  { period: "Phase 3", title: "Final Exams", date: "December 2026" },
  { period: "Phase 4", title: "Holiday Break", date: "January 2027" },
  { period: "Phase 5", title: "Semester Two Begins", date: "February 2027" },
  { period: "Phase 6", title: "Graduation Celebration", date: "June 2027" },
];
