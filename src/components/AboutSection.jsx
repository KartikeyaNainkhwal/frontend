import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, itemVariants } from './animations';
import { Github, Linkedin, FileText } from 'lucide-react';
import profileImage from "../assets/a.jpg";

const AboutSection = () => {
  return (
    <div className="py-16 md:py-20 lg:py-28 bg-slate-200 dark:bg-gray-900/50">
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            className="md:w-2/5 flex justify-center"
            variants={slideInFromLeft}
          >
            <div className="relative w-100 h-90 overflow-hidden rounded-xl border-4 border-blue-500/20 dark:border-blue-400/20 shadow-lg bg-blue-50/30 dark:bg-blue-900/20">
              <motion.img
                src={profileImage} 
                alt="Profile" 
                className="object-cover w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5 space-y-6"
            variants={slideInFromRight}
          >
            <motion.div 
              className="inline-block rounded-lg bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400"
              whileHover={{ y: -2 }}
            >
              About Me
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] leading-tight text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Full-Stack Developer | Blockchain & DevOps Enthusiast
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 md:text-lg leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate Full-Stack Developer currently pursuing Computer Science & Engineering at IIT Bhilai. Skilled in modern web technologies, blockchain, and UI/UX design, I specialize in Next.js, Node.js, and Solana, building scalable, secure, and user-friendly applications.
            </motion.p>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 md:text-lg leading-relaxed"
              variants={itemVariants}
            >
              With a strong interest in DevOps, I ensure smooth deployment and performance optimization, integrating cloud solutions and CI/CD pipelines into my projects. Always eager to explore new technologies, I love solving complex problems and contributing to innovative digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 pt-2"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/KartikeyaNainkhwal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/kartikeya-nainkhwal-6493402b0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              
              <motion.a 
                href="https://drive.google.com/file/d/1iAVnipF5F9KgKS2ZETuSOhX4TJXLzQsa/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;