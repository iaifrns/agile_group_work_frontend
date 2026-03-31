export const Category = {
  INPROGRESS: "In Progress",
  PENDING: "Pending",
  OVERDUE: "Overdue",
  COMPLETE: "Completed",
};

export const Importance = {
  HIGH: "High Priority",
  MEDIUM: "Medium Priority",
  LOW: "Low Priority",
};

export const fakeTasks = [
  {
    title: "Database Design Document",
    desc: "Create a comprehensive database schema design including ER diagrams, normalization analysis, and implementation plan.",
    createdAt: "Due: Mar 15, 2026",
    category: Category.PENDING,
    importance: Importance.HIGH,
  },
  {
    title: "Frontend Prototype Review",
    desc: "Review and provide feedback on the React prototype developed by the team. Focus on UI/UX improvements.",
    createdAt: "Due: Mar 18, 2026",
    category: Category.INPROGRESS,
    importance: Importance.MEDIUM,
  },
  {
    title: "Data Cleaning Script",
    desc: "Write Python script to clean and preprocess the survey data collected from students.",
    createdAt: "Completed: Mar 10, 2026",
    category: Category.COMPLETE,
    importance: Importance.LOW,
  },
  {
    title: "Research Paper Draft",
    desc: "Complete the first draft of the research paper on machine learning applications in healthcare.",
    createdAt: "Due: Mar 5, 2026",
    category: Category.OVERDUE,
    importance: Importance.HIGH,
  },
  {
    title: "Team Meeting Preparation",
    desc: "Prepare agenda and presentation slides for the weekly team meeting. Include progress updates and next steps.",
    createdAt: "Due: Mar 14, 2026",
    category: Category.PENDING,
    importance: Importance.MEDIUM,
  },
  {
    title: "API Integration",
    desc: "Integrate third-party payment API into the e-commerce platform. Test all endpoints and error handling.",
    createdAt: "Due: Mar 20, 2026",
    category: Category.INPROGRESS,
    importance: Importance.HIGH,
  },
];
