import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animations';
import { Award, Code, BookOpen, GraduationCap } from 'lucide-react';

const certificates = [
  {
    title: "Master Non Linear Data Structures",
    issuer: "codedamn",
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    description: "Advanced mastery of trees, graphs, and complex data organization techniques",
    date: "2023",
    color: "blue",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "https://codedamn.com/certificate/verify/112c9a0d0c200634ad28aa79ca131da0d9d5b12e"
  },
  {
    title: "Master Linear Data Structures", 
    issuer: "codedamn",
    icon: <Code className="h-6 w-6 text-green-600 dark:text-green-400" />,
    description: "Comprehensive understanding of arrays, linked lists, stacks, and queues",
    date: "2023",
    color: "green",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    url: "https://s3.amazonaws.com/user-assets.codedamn.com/667d41e51dfe780009cc0dd9/certificates/3ed9b8e39c1d5768ffaa29bf898a12d6e15e9c28.pdf"
  },
  {
    title: "0-100 Full Stack Web Development Course",
    issuer: "100xdevs",
    icon: <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    description: "Complete training in modern full stack development from basics to advanced concepts", 
    date: "2023",
    color: "purple",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    url: "https://drive.google.com/file/d/1OvquZbzm0wRyUfnlnifoedI5TywE8kZE/view?usp=drive_link"
  },
  {
    title: "Mastering Algorithms",
    issuer: "codedamn",
    icon: <GraduationCap className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
    description: "Expert-level algorithm design, analysis, and optimization techniques",
    date: "2023",
    color: "orange",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "https://codedamn.com/certificate/verify/89488fa1a15dc3cba82491af217a79a2a57a7c49"
  }
];

const CertificateCard = ({ certificate }) => {
  const handleViewCertificate = (e) => {
    e.preventDefault();
    // Special handling for Google Drive link
    if (certificate.url.includes('drive.google.com')) {
      window.open(certificate.url.replace('/view?usp=drive_link', '/preview'), '_blank', 'noopener,noreferrer');
    } 
    // Special handling for PDFs
    else if (certificate.url.endsWith('.pdf')) {
      const link = document.createElement('a');
      link.href = certificate.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Regular links
    else {
      window.open(certificate.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div 
      className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={certificate.image}
          alt={certificate.title}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <motion.div 
            className={`rounded-full bg-${certificate.color}-100 dark:bg-${certificate.color}-900/30 p-3`}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {certificate.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {certificate.title}
            </h3>
            <p className="text-sm text-gray-200">{certificate.issuer}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <p className="text-gray-600 dark:text-gray-300">{certificate.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full bg-${certificate.color}-100 dark:bg-${certificate.color}-900/30 text-${certificate.color}-800 dark:text-${certificate.color}-200`}>
                {certificate.date}
              </span>
              <button
                onClick={handleViewCertificate}
                className={`text-sm font-medium text-${certificate.color}-600 dark:text-${certificate.color}-400 hover:underline flex items-center gap-1`}
              >
                View Certificate
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  return (
    <div className="py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200"
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <Award className="mr-2 h-4 w-4" />
            Certifications
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            My Certificates
          </motion.h2>
          
          <motion.p 
            className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl"
            variants={itemVariants}
          >
            Validated expertise through comprehensive courses and rigorous assessments.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
        >
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesSection;