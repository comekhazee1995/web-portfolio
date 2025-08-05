// src/pages/projects.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../lib/data';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Richmond E. Hinggo Portfolio</title>
        <meta name="description" content="A collection of projects by Richmond E. Hinggo, showcasing web development skills and expertise." />
      </Head>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              <h1 className={styles.heroTitle}>My Projects</h1>
              <p className={styles.heroSubtitle}>
                A showcase of my work, highlighting my skills and experience
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className={styles.projectsSection}>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}