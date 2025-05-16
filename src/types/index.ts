export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demoLink?: string;
  githubLink: string;
  image: string;
}

export interface UpcomingProject {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'near-completion';
  estimatedCompletion: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'ai' | 'soft';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}