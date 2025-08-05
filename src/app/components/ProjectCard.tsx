// src/components/ProjectCard.tsx
import { Project } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={`${styles.card} card`}>
      <div className={styles.imageContainer}>
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>
          {project.title}
        </h3>
        
        <p className={styles.description}>
          {project.description}
        </p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          {project.githubUrl && (
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.linkIcon} /> Code
            </Link>
          )}
          
          {project.liveUrl && (
            <Link 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaExternalLinkAlt className={styles.linkIcon} /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;