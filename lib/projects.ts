// lib/projects.ts

export interface Project {
  id: string;
  title: string;
  slug: string;           // The URL path (e.g., 'social-media-agent')
  shortDescription: string; // For the portfolio grid card
  fullDetails: string;    // For the dedicated project page
  technologies: string[]; // Tech stack array
  imageUrl: string;
  liveUrl?: string;       // Optional: Link to the live deployed site
  githubUrl?: string;     // Optional: Link to the source code
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Autonomous Social Media Agent",
    slug: "autonomous-social-agent",
    shortDescription: "An automated video generation and posting pipeline tailored for viral short-form content.",
    fullDetails: "This system orchestrates a complete content creation workflow. It fetches trending topics, generates scripts via LLM APIs, compiles video assets, and automatically schedules posts across multiple platforms using custom integrations. It significantly reduces the manual overhead required to manage affiliate marketing campaigns.",
    technologies: ["Python", "Next.js", "TypeScript", "Groq API"],
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    liveUrl: "https://your-live-demo-link.com",
    githubUrl: "https://github.com/yourusername/social-agent",
  },
  {
    id: "2",
    title: "Retinal Image Preprocessing Tool",
    slug: "retinal-preprocessing",
    shortDescription: "A specialized medical imaging utility for preparing fundus images for analysis.",
    fullDetails: "A research-focused tool designed to apply various filtering techniques to retinal images. By enhancing the contrast and isolating specific features, this pipeline improves the accuracy of downstream machine learning models utilized in diagnostic processes.",
    technologies: ["C++", "Python", "OpenCV"],
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop",
    // Notice we omitted liveUrl and githubUrl here - the UI will handle their absence gracefully!
  }
];