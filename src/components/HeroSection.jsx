import { motion } from 'framer-motion';
import { itemVariants, hoverEffect, tapEffect } from './animations';

const HeroSection = () => {
  return (
    <div className="py-8 md:py-24 lg:py-32 flex flex-col items-center text-center">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
        <motion.h1 
          className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kartikeya Nainkhwal</span>
        </motion.h1>
        
        <motion.p 
          className="max-w-[42rem] leading-normal text-gray-600 dark:text-gray-300 sm:text-xl sm:leading-8"
          variants={itemVariants}
        >
          I design and develop stunning, responsive, and user-friendly web applications using modern technologies. With expertise in DevOps and blockchain, I create scalable, secure, and efficient solutions that enhance user experience and performance.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="flex items-center justify-center px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;