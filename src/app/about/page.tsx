// src/pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillBadge from '../components/SkillBadge';
import { personalInfo, skills, experiences, education } from '../lib/data';
import styles from './about.module.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function About() {
  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const devopsSkills = skills.filter(skill => skill.category === 'devops');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  // Determine grid layout based on number of experiences
  const getGridClass = () => {
    if (experiences.length >= 3) {
      return styles.grid3;
    } else if (experiences.length === 2) {
      return styles.grid2;
    } else {
      return styles.grid1;
    }
  };

  return (
    <>
      <Head>
        <title>About Me - Richmond E. Hinggo Portfolio</title>
        <meta name="description" content="Learn more about Richmond E. Hinggo, a full-stack developer with expertise in React, Node.js, and cloud technologies." />
      </Head>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              <h1 className={styles.heroTitle}>About Me</h1>
              <p className={styles.heroSubtitle}>
                Get to know me, my journey, and my expertise
              </p>
            </div>
          </div>
        </section>

        {/* Personal Info Section */}
        <section className={styles.personalSection}>
          <div className="container">
            <div className={styles.personalContainer}>
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className={styles.avatar}
                  width={160}
                  height={160}
                  priority
                />
              </div>
              <div className={styles.personalInfo}>
                <h2 className={styles.personalName}>
                  {personalInfo.name}
                </h2>
                <p className={styles.personalTitle}>
                  {personalInfo.title}
                </p>
                <p className={styles.personalAbout}>
                  {personalInfo.about}
                </p>
                <div className={styles.personalDetails}>
                  <div className={styles.detailItem}>
                    <FaMapMarkerAlt />
                    {personalInfo.location}
                  </div>
                  <div className={styles.detailItem}>
                    <FaEnvelope />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <div className={styles.skillsContainer}>
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  {frontendSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v4" />
                  </svg>
                  Backend Development
                </h3>
                <div className="space-y-4">
                  {backendSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  DevOps & Tools
                </h3>
                <div className="space-y-4">
                  {devopsSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                  {designSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                  {otherSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.experienceSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <div className={getGridClass()}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.experienceCard}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceTitle}>{exp.position}</h3>
                    <p className={styles.experienceCompany}>
                      {exp.company}
                    </p>
                  </div>
                  <div className={styles.experienceDate}>
                    {exp.startDate} - {exp.endDate}
                  </div>
                  <ul className={styles.experienceDescription}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className={styles.experienceItem}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.educationSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className="max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  <h3 className={styles.educationTitle}>{edu.degree} in {edu.field}</h3>
                  <p className={styles.educationSchool}>{edu.institution}</p>
                  <p className={styles.educationYear}>{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}