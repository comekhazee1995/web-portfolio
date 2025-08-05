// src/pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { projects } from './lib/data';
import Link from 'next/link';
import styles from './index.module.css';

export default function Home() {
  // Get featured projects (first 2)
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Head>
        <title>Richmond E. Hinggo - Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Richmond E. Hinggo, a full-stack developer specializing in React, Node.js, and cloud technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Hi, I&apos;m <span>Richmond E. Hinggo</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Full-Stack Developer
                </p>
                <p className={styles.heroDescription}>
                  I build exceptional digital experiences with clean, efficient code. 
                  Passionate about creating scalable applications that solve real-world problems.
                </p>
                <div className={styles.heroButtons}>
                  <Link 
                    href="/projects" 
                    className="btn btn-primary"
                  >
                    View My Work
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn btn-secondary"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
                <Image
                  src="/images/avatar.jpg"
                  alt="Richmond E. Hinggo"
                  className={styles.avatar}
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.projectsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectsGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <Link href="/projects" className={styles.viewAll}>
              <span className="btn btn-secondary">View All Projects</span>
            </Link>
          </div>
        </section>

        {/* Skills Overview */}
        <section className={styles.skillsSection}>
          <div className={styles.skillsContainer}>
            <h2 className={styles.sectionTitle}>Technologies I Work With</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Frontend Development
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>React & Next.js</span>
                    <span className="text-blue-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>JavaScript/TypeScript</span>
                    <span className="text-blue-600">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tailwind CSS</span>
                    <span className="text-blue-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
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
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Node.js</span>
                    <span className="text-green-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Python</span>
                    <span className="text-green-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Database Design</span>
                    <span className="text-green-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  DevOps & Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>AWS</span>
                    <span className="text-purple-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Docker</span>
                    <span className="text-purple-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>CI/CD</span>
                    <span className="text-purple-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}