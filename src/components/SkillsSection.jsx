import { motion } from 'framer-motion';
import { containerVariants, itemVariants, hoverEffect, tapEffect } from './animations';
import { Code, Cpu, Database, Server, HardHat, Layout, Cloud, Lock, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "React", level: "Advanced", description: "Built 20+ production apps with hooks, context API" },
      { name: "Next.js", level: "Advanced", description: "SSR/SSG, API routes, middleware, ISR" },
      { name: "TypeScript", level: "Expert", description: "Type systems, generics, advanced patterns" },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first CSS, theming, responsive design" },
      { name: "WebRTC", level: "Intermediate", description: "Real-time communication applications" },
      { name: "React Native", level: "Intermediate", description: "Cross-platform mobile development" }
    ],
    color: "blue",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Backend Systems",
    icon: <Server className="h-6 w-6 text-green-600 dark:text-green-400" />,
    skills: [
      { name: "Node.js", level: "Advanced", description: "Event loop, streams, worker threads" },
      { name: "Express.js", level: "Advanced", description: "REST APIs, middleware architecture" },
      { name: "MongoDB", level: "Advanced", description: " indexing" },
      { name: "PostgreSQL", level: "Intermediate", description: "Complex queries, performance tuning" },
      { name: "Prisma", level: "Advanced", description: "Type-safe database client, migrations" },
      { name: "GraphQL", level: "Intermediate", description: "Schemas, resolvers, Apollo Server" }
    ],
    color: "green",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    skills: [
      { name: "Docker", level: "Advanced", description: "Containerization, " },
      { name: "AWS", level: "Intermediate", description: "EC2, S3, Lambda" },
      { name: "CI/CD", level: "Intermediate", description: "GitHub Actions" },
      { name: "Linux", level: "Advanced", description: "Bash scripting, system administration" },
      { name: "Kubernetes", level: "Beginner", description: "Container orchestration" }
    ],
    color: "purple",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    title: "Blockchain Development",
    icon: <HardHat className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
    skills: [
      { name: "Solidity", level: "Intermediate", description: "Smart contract development" },
      { name: "Ethereum", level: "Intermediate", description: "EVMs, ERC standards" },
      { name: "Solana", level: "Intermediate", description: "Rust programs, web3.js" },
      { name: "Web3.js", level: "Intermediate", description: "DApp frontend integration" },
      { name: "Smart Contracts", level: "Intermediate", description: "Security patterns, testing" },
    ],
    color: "orange",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  }
];

const SkillCategoryCard = ({ category }) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={category.image}
          alt={category.title}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <motion.div 
            className={`rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 p-3`}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {category.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-white">
            {category.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {category.skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-800 dark:text-${category.color}-200`}>
                  {skill.level}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div 
                  className={`bg-${category.color}-500 h-1.5 rounded-full`} 
                  style={{ width: `${getSkillWidth(skill.level)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const getSkillWidth = (level) => {
  switch(level) {
    case 'Beginner': return 30;
    case 'Intermediate': return 65;
    case 'Advanced': return 85;
    case 'Expert': return 95;
    default: return 50;
  }
};

const SkillsSection = () => {
  return (
    <div className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800/40">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center rounded-lg bg-white dark:bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200"
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <Terminal className="mr-2 h-4 w-4" />
            Technical Skills
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            My Technical Expertise
          </motion.h2>
          
          <motion.p 
            className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl"
            variants={itemVariants}
          >
            Deep knowledge across the full stack with specialized experience in modern web technologies and blockchain systems.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;