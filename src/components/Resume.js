import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume PDF to the public folder
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 animated-gradient-accent">
      <div className="content-overlay container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Download My Resume
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a detailed overview of my experience, skills, and achievements in a professional format.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <FaFilePdf size={32} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Resume
            </h3>
            
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              A comprehensive document showcasing my professional journey, 
              technical expertise, and career achievements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm text-blue-100">
              <div>
                <div className="font-semibold text-white mb-1">Experience</div>
                <div>3+ Years</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Projects</div>
                <div>50+ Completed</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Skills</div>
                <div>15+ Technologies</div>
              </div>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              <FaDownload size={20} />
              Download Resume (PDF)
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-blue-100 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
