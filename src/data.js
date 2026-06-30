export const personalInfo = {
  name: "Nagila Goutham",
  title: "Full Stack Developer | IT Student at CBIT",
  email: "nagilagoutham257@gmail.com",
  github: "https://github.com/goutham-120",
  linkedin: "https://www.linkedin.com/in/nagila-goutham-57439235b",
  leetcode: "https://leetcode.com/u/6yUSBmA6VC/",
  resumeFile: "/Goutham_resume.pdf",
  cgpa: "9.62",
  college: "Chaitanya Bharathi Institute of Technology",
  tagline: "MERN Stack • DSA • Machine Learning",
  intro:
    "I'm a first-year IT student at CBIT with a strong foundation in full-stack web development and data structures. I build production-ready MERN stack applications and am actively expanding into AI/ML. I bring both engineering discipline and problem-solving depth to every project I take on.",
  about:
    "I'm a software engineering student at CBIT (2024–2028) with a CGPA of 9.62, focused on building scalable, production-ready web applications using the MERN stack. I've shipped multi-tenant platforms, skill exchange systems, and algorithm visualizers — and I'm actively deepening my knowledge in machine learning and AI-powered applications. Beyond projects, I've solved 450+ LeetCode problems across a 400+ day streak, which reflects my commitment to algorithmic thinking and software craftsmanship. I thrive in environments where engineering rigor meets practical impact.",
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Java", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Libraries",
    items: ["Bootstrap", "NumPy", "Pandas", "Matplotlib"],
  },
];

export const projects = [
  {
    title: "IntelliFlow",
    subtitle: "Workflow & Performance Intelligence Platform",
    description:
      "A production-grade, multi-tenant workflow automation system architected for organizations to design custom multi-stage approval pipelines at scale. Built with enterprise concerns in mind — strict tenant isolation, granular access control, and full auditability — IntelliFlow turns ad-hoc business processes into structured, trackable workflows with real-time performance analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Multi-Tenant Architecture",
      "Workflow Automation",
      "Task Management",
      "Notification System",
      "MERN Stack",
    ],
    github: "https://github.com/goutham-120/IntelliFlow",
    live: "https://intelli-flow-gamma.vercel.app/",
  },
  {
    title: "SkillBridge",
    subtitle: "Skill Exchange Platform",
    description:
      "A full-stack platform where users connect, request learning sessions, and collaborate based on complementary skills. Features availability-based scheduling, skill matching, and a complete admin dashboard for moderation.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Skill Matching",
      "Availability Scheduling",
      "Request System",
      "Ratings & Reviews",
      "Reporting System",
      "Admin Controls",
    ],
    github: "https://github.com/goutham-120/SkillBridge",
    live: "https://skill-bridge-orcin-ten.vercel.app/",
  },
  {
    title: "CodeFlow",
    subtitle: "DSA Visualizer",
    description:
      "A cross-platform terminal-based DSA visualizer built in C++ from scratch with zero external libraries. Features real-time ANSI animations and step-by-step walkthroughs for core algorithmic patterns.",
    tech: ["C++", "ANSI Terminal", "Algorithms"],
    features: [
      "Sliding Window",
      "Prefix Sum",
      "Two Pointers",
      "Recursion",
      "Backtracking",
      "Custom Input",
    ],
    github: "https://github.com/goutham-120/DSA-visualizer",
    live: null,
  },
  {
    title: "Fake News Detector",
    subtitle: "AI-Powered News Credibility Analyzer",
    description:
      "A responsive web app built during a hackathon that analyzes news credibility using an integrated ML model, achieving 94% detection accuracy. Includes real-time article retrieval via news APIs.",
    tech: ["HTML", "CSS", "JavaScript", "REST API", "ML"],
    features: [
      "94% Detection Accuracy",
      "Real-time API",
      "ML Integration",
      "Responsive UI",
    ],
    github: "https://github.com/jakkulaayushpreetham/fake-news-detection-system",
    live: null,
  },
];

// Each achievement is split into prefix/target/decimals/suffix so the
// numeric portion can be animated as a count-up while static text
// (like "Top " or "+") stays fixed.
export const achievements = [
  { prefix: "", target: 500, decimals: 0, suffix: "+", label: "LeetCode Problems", sub: "Solved" },
  { prefix: "", target: 400, decimals: 0, suffix: "+", label: "Day Coding Streak", sub: "Continuous" },
  { prefix: "", target: 9.62, decimals: 2, suffix: "", label: "CGPA", sub: "Out of 10.0" },
  { prefix: "Top ", target: 60, decimals: 0, suffix: "", label: "Sudhee-HICON 2026", sub: "Out of 400+ teams" },
];

export const currentFocus = [
  {
    icon: "🧪",
    title: "Machine Learning Intern @ SkillCraft Technology",
    desc: "June 15 – July 15. Working on applied ML tasks and project work while strengthening foundations in model building and evaluation.",
  },
  {
    icon: "🎯",
    title: "Seeking Software Development Internships",
    desc: "Looking for opportunities to contribute to real-world engineering teams in web development or software engineering roles.",
  },
  {
    icon: "🚀",
    title: "Building Production-Ready Web Applications",
    desc: "Focused on shipping well-architected, scalable MERN stack projects with clean APIs, auth systems, and analytics.",
  },
  {
    icon: "🤖",
    title: "Learning Machine Learning Fundamentals",
    desc: "Studying core ML concepts - supervised learning, neural networks, and model evaluation — to complement my full-stack background.",
  },
];
