// src/components/Footer.tsx
import Link from 'next/link';
import { socialLinks } from '../lib/data';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} YourEnemy. All rights reserved.
            </p>
          </div>
          
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;