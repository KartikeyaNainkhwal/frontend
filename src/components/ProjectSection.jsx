import { motion } from 'framer-motion';
import { containerVariants, itemVariants, hoverEffect, tapEffect } from './animations';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Chat Application",
    description: "This chat application is a real-time messaging platform. It supports user authentication, real-time messaging, and media file uploads",
    tags: ['React', 'Next.js', 'Tailwind CSS', 'MongoDb', 'Pusher', 'Cloudinary', 'NextAuth'],
    image: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    codeLink: "https://github.com/KartikeyaNainkhwal/chat-application",
    demoLink: "https://chat-application-f4xihfn62-kartikeyanainkhwals-projects.vercel.app/"
  },
  {
    title: "Medium Project",
    description: "It is an online publishing platform where users can write, share, and read articles on various topics. It allows writers to publish content, engage with readers through comments and claps, and even monetize their work.",
    tags: ['TypeScript', 'React', 'Redux', 'Firebase','NodeJS', 'Express','postgres','prisma ORM', 'Tailwind CSS'],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    codeLink: "https://github.com/KartikeyaNainkhwal/medium-project",
  },
  {
    title: "Basic Paytm Website",
    description: "This is a simple paytm clone where people can signup, signin, can see their balances, all users and can send money to one person to another but in this we give random bank balance for a user and also using rollback in transactions",
    tags: ['React', 'Tailwind CSS', 'NodeJs', 'express', 'mongoDb'],
    image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    codeLink: "https://github.com/KartikeyaNainkhwal/paytm-project",
  },
  {
    title: "SolDrop",
    description: "SolDrop is a user-friendly web application that allows users to request SOL airdrops on the Solana Devnet. Built with React and the Solana Wallet Adapter, SolDrop simplifies the process of getting test SOL for development and testing purposes.",
    tags: ['Solana', 'React', 'wallet adapter','CSS'],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    codeLink: "https://github.com/KartikeyaNainkhwal/SolDrop",
    demoLink: "https://sol-drop-82e0g74ey-kartikeyanainkhwals-projects.vercel.app/"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <motion.span 
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0 flex justify-between">
        <motion.a 
          href={project.codeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </motion.a>
        <motion.a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-800 dark:text-gray-200"
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            My Recent Work
          </motion.h2>
          
          <motion.p 
            className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl"
            variants={itemVariants}
          >
            Check out some of my featured projects. Each project reflects my passion for clean design and efficient code.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;