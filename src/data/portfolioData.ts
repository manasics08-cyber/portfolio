export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface SkillItem {
  name: string;
  level: number; // percentage 0 - 100
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'experience' | 'achievement';
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    greeting: string;
    taglines: string[];
    bioShort: string;
    college: string;
    degree: string;
    graduationYear: string;
    location: string;
    email: string;
    phone: string;
    resumeUrl: string;
    status: string;
  };
  stats: {
    heading: string;
    items: StatItem[];
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    highlights: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
  socials: Array<{
    name: string;
    url: string;
    icon: string;
    username: string;
  }>;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Manasi CS",
    greeting: "Hi, I'm Manasi CS",
    taglines: [
      "Web Developer",
      "UI/UX Designer",
      "Engineering Student",
      "Frontend Artisan"
    ],
    bioShort: "Passionate Computer Science student at Thejus Engineering College blending structural engineering logic with dark, high-performance UI craft. Building scalable web applications with smooth micro-interactions.",
    college: "Thejus Engineering College",
    degree: "B.Tech in Computer Science & Engineering",
    graduationYear: "2026",
    location: "Kerala, India",
    email: "manasics.dev@gmail.com",
    phone: "+91 98765 43210",
    resumeUrl: "#resume",
    status: "Available for internships & collaborations"
  },
  stats: {
    heading: "Transforming\nIdeas Into Impact",
    items: [
      {
        value: 12,
        suffix: "+",
        label: "Successful projects",
        sublabel: "Shipped & production-ready"
      },
      {
        value: 99,
        suffix: "%",
        label: "Faster launch time",
        sublabel: "Modern tech efficiency"
      },
      {
        value: 100,
        suffix: "%",
        label: "Dedication & precision",
        sublabel: "Focused engineering"
      }
    ]
  },
  about: {
    badge: "About Me",
    title: "Discover More About Me",
    p1: "I am an engineering student currently pursuing my B.Tech in Computer Science & Engineering at Thejus Engineering College. My passion lies at the intersection of creative design engineering and resilient web architectures.",
    p2: "Whether developing dynamic full-stack applications with React and Python or crafting buttery smooth interactive 3D landing experiences with GSAP and Three.js, I obsess over performance, typography, and clean code that scales seamlessly.",
    highlights: [
      {
        title: "Thejus Engineering Student",
        desc: "Dedicated to academic excellence, algorithmic mastery, and continuous hands-on project builds.",
        icon: "GraduationCap"
      },
      {
        title: "Modern Web Architect",
        desc: "Specializing in React, Tailwind CSS, TypeScript, and fluid GSAP/Framer animations.",
        icon: "Code2"
      },
      {
        title: "Design System Enthusiast",
        desc: "Crafting pixel-perfect dark mode UI, micro-interactions, and accessible user flows.",
        icon: "Palette"
      },
      {
        title: "End-to-End Problem Solver",
        desc: "Comfortable across the stack from database schemas and REST APIs to responsive frontends.",
        icon: "Rocket"
      }
    ]
  },
  skills: [
    {
      name: "React.js",
      level: 95,
      category: "frontend",
      icon: "Code",
      description: "Hooks, Context, State Management, Next.js, component architecture"
    },
    {
      name: "JavaScript (ES6+)",
      level: 92,
      category: "frontend",
      icon: "Cpu",
      description: "Modern asynchronous JS, closures, DOM manipulation, APIs"
    },
    {
      name: "Tailwind CSS",
      level: 96,
      category: "frontend",
      icon: "Layout",
      description: "Responsive layouts, custom utilities, dark mode, animation tokens"
    },
    {
      name: "HTML5 / Semantic Web",
      level: 98,
      category: "frontend",
      icon: "FileCode",
      description: "Semantic structures, SEO optimization, WCAG accessibility standards"
    },
    {
      name: "Python",
      level: 88,
      category: "languages",
      icon: "Terminal",
      description: "Data processing, Flask/FastAPI backends, automation scripts"
    },
    {
      name: "Java",
      level: 85,
      category: "languages",
      icon: "Layers",
      description: "Object-oriented programming, data structures, algorithms"
    },
    {
      name: "Three.js / WebGL",
      level: 80,
      category: "frontend",
      icon: "Box",
      description: "3D scenes, shaders, lighting, parametric geometries, canvas optimization"
    },
    {
      name: "GSAP & Framer Motion",
      level: 90,
      category: "frontend",
      icon: "Sparkles",
      description: "ScrollTrigger, timeline orchestrations, physics spring transitions"
    },
    {
      name: "Git & GitHub",
      level: 90,
      category: "tools",
      icon: "GitBranch",
      description: "Branching strategies, pull requests, CI/CD actions, version control"
    },
    {
      name: "Figma",
      level: 88,
      category: "tools",
      icon: "Figma",
      description: "UI/UX wireframing, interactive prototyping, component design systems"
    },
    {
      name: "Node.js & Express",
      level: 82,
      category: "backend",
      icon: "Server",
      description: "RESTful APIs, middleware architecture, JWT authentication"
    },
    {
      name: "SQL & Databases",
      level: 84,
      category: "backend",
      icon: "Database",
      description: "PostgreSQL, MySQL relational design, queries, optimization"
    }
  ],
  projects: [
    {
      id: "thejus-nexus",
      title: "Thejus Campus Nexus",
      tagline: "Academic Portal & Resource Hub",
      description: "A centralized campus ecosystem built specifically for Thejus Engineering College students. Features real-time club notices, peer code-sharing vaults, exam schedules, and automated lab attendance tracking.",
      category: "Full Stack & Campus Web",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Socket.io"],
      liveUrl: "https://thejus-campus-nexus.vercel.app",
      githubUrl: "https://github.com/manasics/thejus-campus-nexus",
      featured: true,
      metrics: "500+ Active Student Users"
    },
    {
      id: "neuropulse-ai",
      title: "NeuroPulse Analytics",
      tagline: "Real-time AI Health & Metric Dashboard",
      description: "A high-frequency telemetry dashboard visualizing machine learning inferences, system latency, and predictive performance metrics with dark glassmorphism and real-time SVG charting.",
      category: "Data Viz & Web App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://neuropulse-ai-dash.vercel.app",
      githubUrl: "https://github.com/manasics/neuropulse-ai-analytics",
      featured: true,
      metrics: "60 FPS Render Performance"
    },
    {
      id: "aura-3d-store",
      title: "Aura 3D Digital Marketplace",
      tagline: "Interactive 3D Product Showcase",
      description: "An experimental e-commerce storefront featuring interactive 3D product inspection with Three.js, smooth page transitions, headless shopping cart, and dark aesthetics.",
      category: "3D Creative Web",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      tags: ["Three.js", "React", "GSAP", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://aura-3d-experience.vercel.app",
      githubUrl: "https://github.com/manasics/aura-3d-store",
      featured: true,
      metrics: "Under 1.2s First Contentful Paint"
    },
    {
      id: "devflow-cloud",
      title: "DevFlow Workspace",
      tagline: "Collaborative Developer Kanban & Snippets",
      description: "A productivity workstation for engineering teams with markdown documentation, syntax-highlighted code snippets, drag-and-drop task pipelines, and keyboard shortcuts.",
      category: "Productivity Tool",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Python", "FastAPI", "Tailwind CSS", "Zustand"],
      liveUrl: "https://devflow-workspace.vercel.app",
      githubUrl: "https://github.com/manasics/devflow-workspace",
      featured: false,
      metrics: "Keyboard-First Navigation"
    }
  ],
  timeline: [
    {
      year: "2023 - Present",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Thejus Engineering College",
      location: "Thrissur, Kerala",
      type: "education",
      description: "Deepening algorithmic knowledge in Data Structures, Database Systems, Computer Networks, and Object-Oriented Software Engineering. Active participant in technical symposiums and coding competitions.",
      highlights: [
        "Consistent academic top-tier performance",
        "Lead coordinator for college web development workshops",
        "Hands-on semester projects focused on modern web engineering"
      ]
    },
    {
      year: "2024",
      title: "Frontend Development Intern",
      organization: "TechInnovate Solutions",
      location: "Remote / Hybrid",
      type: "experience",
      description: "Engineered responsive client dashboards, converted Figma designs into modular React components, and optimized critical rendering paths.",
      highlights: [
        "Reduced bundle size by 28% using code-splitting & dynamic imports",
        "Implemented GSAP interactive scroll sequences for marketing pages",
        "Collaborated with senior engineers using Git pull request workflows"
      ]
    },
    {
      year: "2023",
      title: "Hackathon Finalist & Project Lead",
      organization: "State Engineering TechFest",
      location: "Kerala",
      type: "achievement",
      description: "Conceptualized and coded a campus safety and peer academic aid application within a 36-hour sprint, winning praise for UI elegance and system responsiveness.",
      highlights: [
        "Built complete MVP in React + Firebase",
        "Presented live demo to an industry judging panel",
        "Awarded Best User Experience Design Award"
      ]
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary Education (Computer Science)",
      organization: "Higher Secondary Board",
      location: "Kerala",
      type: "education",
      description: "Completed higher secondary education with distinction, establishing core fundamentals in mathematics, computer science (C++ & Python), and logical reasoning.",
      highlights: [
        "Graduated with Distinction (>95%)",
        "School Science & Coding Club Vice President"
      ]
    }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/manasics",
      icon: "Github",
      username: "@manasics"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/manasi-cs",
      icon: "Linkedin",
      username: "manasi-cs"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/manasi.cs",
      icon: "Instagram",
      username: "@manasi.cs"
    },
    {
      name: "Email",
      url: "mailto:manasics.dev@gmail.com",
      icon: "Mail",
      username: "manasics.dev@gmail.com"
    }
  ]
};

