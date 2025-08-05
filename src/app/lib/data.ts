// src/lib/data.ts
import { Project, Skill, Experience, Education } from '../types';

export const personalInfo = {
  name: 'Richmond E. Hinggo',
  title: 'Full-Stack Developer',
  email: 'comekhazee1995@gmail.com',
  location: 'Purok-10, Barangay San Juan, Surigao City, Philippines',
  about: 'I\'m a passionate full-stack developer with experience creating web applications. I specialize in Next.js, React, Django, MongoDB and PostgreSQL. When I\'m not coding, I am gaming or watching anime, tutorials and movies.',
  avatar: '/images/avatar.jpg',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'web',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    category: 'web',
  },
  {
    id: 3,
    title: 'Weather Mobile App',
    description: 'A mobile application that provides weather forecasts with beautiful visualizations.',
    image: '/images/project3.jpg',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Mapbox'],
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://expo.dev/@username/weather-app',
    category: 'mobile',
  },
];

export const skills: Skill[] = [
  { name: 'Next.js', level: 'expert', category: 'frontend' },
  { name: 'React', level: 'advanced', category: 'frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { name: 'JavaScript', level: 'advanced', category: 'frontend' },
  { name: 'MongoDB', level: 'expert', category: 'backend' },
  { name: 'PostgreSQL', level: 'advanced', category: 'backend' },
  { name: 'Python', level: 'intermediate', category: 'backend' },
  { name: 'Node.js', level: 'intermediate', category: 'backend' },
  { name: 'Canva', level: 'expert', category: 'devops' },
  { name: 'Tailwind CSS', level: 'intermediate', category: 'frontend' },
  { name: 'Figma', level: 'advanced', category: 'design' },
];

export const experiences: Experience[] = [
  {
    company: 'Cauld and Clark Information Technology Solutions',
    position: 'Intern',
    startDate: 'July 2025',
    endDate: 'August 2025',
    description: [
      'Led a team of 5 developers in building a scalable SaaS platform',
      'Implemented microservices architecture using Node.js and Docker',
      'Improved application performance by 40% through code optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'Suigao del Norte State University (SNSU)',
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    year: '2017 - Ongoing',
  },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/comekhazee1995', icon: 'FaGithub' },
  { name: 'Facebook', url: 'https://facebook.com/comekhazee2017', icon: 'FaFacebook' },
  { name: 'Email', url: 'mailto:comekhazee1995@gmail.com', icon: 'FaEnvelope' },
  { name: 'LinkedIn', url: 'contact', icon: 'FaLinkedin' },
];