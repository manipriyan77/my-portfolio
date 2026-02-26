export const GENERAL_INFO = {
  name: "Mani Priyan",
  email: "manipriyan.dev@gmail.com",
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
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "CSS", icon: `${DI}/css3/css3-original.svg` },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Zustand", icon: "https://cdn.simpleicons.org/zustand/433E38" },
      { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
    ],
  },
  {
    type: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
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
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
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
    company: "Tech Startup",
    title: "Full-Stack Developer",
    startDate: "2024",
    endDate: "Present",
  },
  {
    _id: "2",
    company: "Digital Agency",
    title: "Frontend Developer",
    startDate: "2023",
    endDate: "2024",
  },
  {
    _id: "3",
    company: "Freelance",
    title: "Web Developer",
    startDate: "2022",
    endDate: "2023",
  },
];

export const PROJECTS = [
  {
    _id: "1",
    name: "FlowBoard",
    slug: "flowboard",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=500&fit=crop",
    description: "A modern project management dashboard with real-time collaboration.",
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "2",
    name: "Luminary AI",
    slug: "luminary-ai",
    techStack: ["React", "Node.js", "OpenAI"],
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=500&fit=crop",
    description: "AI-powered content generation platform with advanced prompting.",
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "3",
    name: "Meridian Commerce",
    slug: "meridian-commerce",
    techStack: ["Next.js", "Stripe", "PostgreSQL"],
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=500&fit=crop",
    description: "Full-featured e-commerce platform with payment integration.",
    liveUrl: "#",
    sourceCode: "#",
  },
  {
    _id: "4",
    name: "Pulse Analytics",
    slug: "pulse-analytics",
    techStack: ["React", "D3.js", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop",
    description: "Data visualization dashboard for real-time business metrics.",
    liveUrl: "#",
    sourceCode: "#",
  },
];
