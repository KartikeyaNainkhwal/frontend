import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModeToggle from '../components/ModeToggle';
import Chatbot from '../components/Chatbot';
import ContactForm from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import CertificatesSection from '../components/Certificate';
import Chatbott from '../components/Chatbott';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Chatbott />
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      <main className="container mx-auto px-4 py-10">
        <AnimatedSection id="home">
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection id="about">
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection id="projects">
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection id="skills">
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection id="certificates">
          <CertificatesSection />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <ContactForm />
        </AnimatedSection>
        
      </main>

      <Footer />
    </div>
  );
}
export default Home;