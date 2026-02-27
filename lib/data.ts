export const GENERAL_INFO = {
  name: "Mani Priyan",
  email: "manipriyangopalan@gmail.com",
  resume: "/resume.pdf",
};

export const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/manipriyan" },
  { name: "linkedin", url: "https://linkedin.com/in/manipriyan" },
  { name: "resume", url: GENERAL_INFO.resume },
];

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const SKILLS = [
  {
    type: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      { name: "CSS", icon: `${DI}/css3/css3-original.svg` },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Zustand", icon: "https://cdn.simpleicons.org/zustand/433E38" },
      {
        name: "React Query",
        icon: "https://cdn.simpleicons.org/reactquery/FF4154",
      },
    ],
  },
  {
    type: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
    ],
  },
  {
    type: "Testing",
    items: [
      { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325" },
      { name: "Vitest", icon: "https://cdn.simpleicons.org/vitest/6E9F18" },
      { name: "Playwright", icon: `${DI}/playwright/playwright-original.svg` },
      { name: "Cypress", icon: "https://cdn.simpleicons.org/cypress/69D3A7" },
    ],
  },
  {
    type: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
      {
        name: "GitHub Actions",
        icon: "https://cdn.simpleicons.org/githubactions/2088FF",
      },
    ],
  },
  {
    type: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Webpack", icon: "https://cdn.simpleicons.org/webpack/8DD6F9" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
    ],
  },
];

export const EXPERIENCES = [
  {
    _id: "1",
    company: "Money Forward India",
    title: "Senior Software Engineer",
    startDate: "2025",
    endDate: "Present",
  },
  {
    _id: "2",
    company: "Sasken Technologies",
    title: "Senior Software Engineer",
    startDate: "Dec 2024",
    endDate: "Jun 2025",
  },
  {
    _id: "3",
    company: "Cogentsoft Systems",
    title: "Senior Software Engineer",
    startDate: "Nov 2023",
    endDate: "Dec 2024",
  },
  {
    _id: "4",
    company: "Datum Technologies",
    title: "Senior Software Engineer",
    startDate: "Jun 2023",
    endDate: "Nov 2023",
  },
  {
    _id: "5",
    company: "Siam Computing",
    title: "Senior Frontend Developer",
    startDate: "Feb 2023",
    endDate: "Jun 2023",
  },
  {
    _id: "6",
    company: "Nexino",
    title: "Frontend Developer",
    startDate: "Jan 2020",
    endDate: "Feb 2023",
  },
  {
    _id: "7",
    company: "HopeTutors",
    title: "Associate Frontend Developer",
    startDate: "May 2019",
    endDate: "Dec 2020",
  },
];

export const PROJECTS = [
  {
    _id: "1",
    name: "6Storage",
    slug: "6storage",
    startDate: "Dec 2020",
    endDate: "Mar 2021",
    role: "Frontend Developer",
    techStack: ["React.js", "Bootstrap", "JavaScript", "MUI"],
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=500&fit=crop",
    description:
      "Web-based storage application featuring user authentication, storage unit booking, and payment processing with dynamic, responsive interfaces. Built a fully functional storage management system with real-time updates and secure transactions.",
    highlights: [
      "Implemented user authentication and authorization system",
      "Designed storage unit booking workflow with calendar integration",
      "Integrated payment processing for seamless transactions",
      "Created responsive UI with Material-UI components",
      "Optimized application performance with React best practices",
    ],
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "2",
    name: "Guhroo",
    slug: "guhroo",
    startDate: "Feb 2023",
    endDate: "Apr 2023",
    role: "React Developer",
    techStack: ["React.js", "Bootstrap", "JavaScript"],
    thumbnail:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=500&fit=crop",
    description:
      "HR onboarding web application with user authentication and dynamic interfaces. Optimized code efficiency for faster load times with modern design. Developed a comprehensive onboarding platform to streamline employee management processes.",
    highlights: [
      "Built comprehensive HR onboarding workflows",
      "Implemented secure user authentication",
      "Optimized JavaScript code for 40% faster load times",
      "Created dynamic, responsive user interfaces",
      "Maintained modern design consistency across the application",
    ],
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "3",
    name: "Constructly",
    slug: "constructly",
    startDate: "Mar 2021",
    endDate: "Jan 2023",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "React.js", "TypeScript", "Ant Design"],
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=500&fit=crop",
    description:
      "Construction platform with user authentication, booking, and payment processing. Enhanced user experience with dynamic interfaces and TypeScript scalability. A comprehensive solution for construction project management with real-time collaboration features.",
    highlights: [
      "Created construction project management platform from scratch",
      "Implemented user authentication and role-based access control",
      "Built booking and payment processing systems",
      "Designed dynamic interfaces for construction workflows",
      "Ensured code scalability with TypeScript and Next.js",
      "Integrated Ant Design for consistent UI/UX",
    ],
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "4",
    name: "Samsung",
    slug: "samsung-project",
    startDate: "Apr 2023",
    endDate: "Jun 2023",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Vue.js"],
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134ef2944f7?w=400&h=500&fit=crop",
    description:
      "Enterprise-grade e-commerce platform for Samsung. Migrated cart and checkout components to Next.js with TypeScript. Resolved critical bugs and optimized API calls to enhance performance and user experience significantly.",
    highlights: [
      "Migrated legacy cart components to modern Next.js architecture",
      "Refactored checkout flow for improved user experience",
      "Implemented TypeScript for type safety and code reliability",
      "Fixed critical performance bugs reducing load time by 30%",
      "Optimized API calls to reduce unnecessary overhead",
      "Styled components using TailwindCSS for consistency",
    ],
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "5",
    name: "RE Connected",
    slug: "re-connected",
    startDate: "Upcoming",
    endDate: "Ongoing",
    role: "Full-Stack Developer",
    techStack: ["React", "TypeScript", "Firebase"],
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop",
    description:
      "Real estate platform connecting buyers, sellers, and agents with modern frontend and cloud infrastructure. Comprehensive marketplace solution for real estate transactions.",
    highlights: [
      "Building real estate marketplace platform",
      "Implementing user authentication and profiles",
      "Creating property listing and search features",
      "Developing transaction management system",
      "Utilizing Firebase for real-time database and authentication",
    ],
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "6",
    name: "CFM BFM",
    slug: "cfm-bfm",
    startDate: "Upcoming",
    endDate: "Ongoing",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "AWS Lambda"],
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=400&h=500&fit=crop",
    description:
      "Financial management platform with cloud-native architecture and real-time data processing. Comprehensive financial solution for fund and portfolio management.",
    highlights: [
      "Designing cloud-native architecture with AWS Lambda",
      "Implementing real-time data processing pipelines",
      "Building financial analytics dashboards",
      "Creating secure payment processing systems",
      "Developing portfolio management features",
    ],
    liveUrl: "#",
    sourceCode: "#",
  },
];
