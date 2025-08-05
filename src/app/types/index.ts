// src/types/index.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}