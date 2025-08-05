// src/pages/contact.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { personalInfo, socialLinks } from '../lib/data';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Richmond E. Hinggo Portfolio</title>
        <meta name="description" content="Get in touch with Richmond E. Hinggo, a full-stack developer available for freelance work and full-time positions." />
      </Head>

      <Header />
      
      <main>  
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              <h1 className={styles.heroTitle}>Get In Touch</h1>
              <p className={styles.heroSubtitle}>
                I am always interested in new opportunities and exciting projects
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <div className={styles.contactGrid}>
              {/* Contact Information */}
              <div className={styles.contactInfo}>
                <h2 className={styles.sectionTitle}>Contact Information</h2>
                
                <div className={styles.contactItem}>
                  <div className={styles.iconContainer}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactContent}>
                    <h3 className={styles.contactLabel}>Email</h3>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="hover:text-blue-600"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.iconContainer}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.contactContent}>
                    <h3 className={styles.contactLabel}>Location</h3>
                    <p className={styles.contactValue}>{personalInfo.location}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className={styles.sectionTitle}>Connect With Me</h3>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((social) => {
                      const Icon = {
                        FaGithub,
                        FaLinkedin,
                        FaFacebook,
                        FaEnvelope,
                      }[social.icon as keyof typeof social.icon];
                      
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={social.name}
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className={styles.sectionTitle}>Send Me a Message</h2>
                
                <form className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={styles.formInput}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={styles.formInput}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={styles.formInput}
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      className={styles.formTextarea}
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`${styles.submitButton} ${styles['submitButton.primary']}`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}