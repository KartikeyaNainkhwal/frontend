import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="border-t border-gray-200 dark:border-gray-700 py-6 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center ">
        <motion.p 
          className="text-center text-sm text-gray-600 dark:text-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          © {new Date().getFullYear()} Kartikeya Nainkhwal. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;