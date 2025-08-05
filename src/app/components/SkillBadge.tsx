// src/components/SkillBadge.tsx
import { Skill } from '../types';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  // Map skill level to width percentage
  const getLevelWidth = () => {
    switch (skill.level) {
      case 'beginner': return '25%';
      case 'intermediate': return '50%';
      case 'advanced': return '75%';
      case 'expert': return '100%';
      default: return '50%';
    }
  };

  // Map skill category to color class
  const getCategoryClass = () => {
    return `level-${skill.category}`;
  };

  return (
    <div className={styles.skill}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>
          {skill.name}
        </span>
        <span className={styles.skillLevel}>
          {skill.level}
        </span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={`${styles.progress} ${styles[getCategoryClass()]}`}
          style={{ width: getLevelWidth() }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBadge;