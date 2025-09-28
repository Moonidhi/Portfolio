import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="home" className="min-h-screen flex items-center justify-center animated-gradient floating-particles">
      <div className="content-overlay container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-dark-text mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sunidhi Chauhan</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-textSecondary mb-8 font-light"
          >
            Frontend Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I create beautiful, responsive, and user-centered web experiences
            using modern frontend technologies. Passionate about clean code and intuitive design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/Moonidhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-dark-accent transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://linkedin.com/in/sunidhi-chauhan-12694b324"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-dark-accent transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:sunidhi6777@gmail.com"
              className="text-dark-textSecondary hover:text-dark-accent transition-colors"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-dark-textSecondary hover:text-dark-accent transition-colors font-medium"
            >
              <FaDownload size={16} />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
