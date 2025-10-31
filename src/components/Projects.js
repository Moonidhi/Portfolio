import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Crowdsafe',
      description: 'A Python-based application focused on crowd safety and management. Features real-time monitoring, safety alerts, and crowd density analysis for public events and venues.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/Moonidhi/Crowdsafe',
      live: '#',
      featured: true,
    },
    {
      title: 'Civic Issue Manager',
      description: 'A web-based platform that allows citizens to report and track civic issues like potholes, garbage overflow, and streetlight failures, helping local authorities respond efficiently.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/Moonidhi/DSA',
      live: '#',
      featured: true,
    },
    {
      title: 'Recursion Practice',
      description: 'A focused repository containing practice codes for recursion problems in Data Structures and Algorithms. Includes various recursion patterns and optimization techniques.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['C++', 'Recursion', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/Moonidhi/Recursion-DSA',
      live: '#',
      featured: false,
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and TailwindCSS, featuring smooth animations, clean design, and professional presentation.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
      github: 'https://github.com/Moonidhi/Portfolio',
      live: '#',
      featured: false,
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, real-time updates, and intuitive user interface for productivity enhancement.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using modern web APIs with clean, intuitive design.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['JavaScript', 'API Integration', 'CSS3', 'Responsive Design'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

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
    <section id="projects" className="py-20 section-bg-primary floating-particles">
      <div className="content-overlay container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-accentCoral mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-textSecondary max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-dark-text mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="dark-card rounded-xl shadow-dark overflow-hidden hover:shadow-accent-lg transition-all hover-lift hover-glow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-secondary/90 backdrop-blur-sm p-2 rounded-full hover:bg-dark-tertiary transition-colors"
                      >
                        <FaGithub className="text-dark-text" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-secondary/90 backdrop-blur-sm p-2 rounded-full hover:bg-dark-tertiary transition-colors"
                      >
                        <FaExternalLinkAlt className="text-dark-text" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-dark-text mb-3">
                      {project.title}
                    </h4>
                    <p className="text-dark-textSecondary mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-accent/20 text-dark-accent text-sm rounded-full border border-dark-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
