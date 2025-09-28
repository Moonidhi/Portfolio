import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'HTML5', 'Git', 'GitHub',
    'Java', 'C', 'OOPs', 'Node.js', 'Python', 'C++'
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
    <section id="about" className="py-20 section-bg-secondary bg-pattern">
      <div className="content-overlay container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-accentCoral mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-dark-text mb-4">
                Passionate Software Developer
              </h3>
              <p className="text-dark-textSecondary leading-relaxed">
                Hi, I'm Sunidhi Chauhan, a second-year Computer Science student and passionate software developer. 
                I love building modern, user-friendly web applications and solving real-world problems through technology. 
                I enjoy turning ideas into functional, aesthetic digital experiences.
              </p>
              <p className="text-dark-textSecondary leading-relaxed">
                Skilled in React, JavaScript, and TailwindCSS, I'm always exploring new technologies and learning 
                new skills to create impactful projects like CrowdSafe. Beyond coding, I enjoy collaborating with 
                others, exploring innovative solutions, and continuously challenging myself to grow as a developer.
              </p>
              <p className="text-dark-textSecondary leading-relaxed">
                Currently pursuing my Bachelor's in Computer Science at SRM University, Chennai, with a strong 
                academic record (1st Sem CGPA: 8.86, 2nd Sem CGPA: 9.81) and expected graduation in 2028.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-dark-text mb-4">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="dark-card px-4 py-3 rounded-lg text-center font-medium text-dark-text hover:text-dark-accent transition-all cursor-default dark-hover"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
