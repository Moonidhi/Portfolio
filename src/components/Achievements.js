import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaAward, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: FaCertificate,
      title: 'Infosys Certified Certification',
      organization: 'Infosys',
      description: 'Fundamentals of Information Security - Comprehensive understanding of cybersecurity principles, threat analysis, and security protocols.',
      date: 'May 19, 2024',
      category: 'Certification',
    },
    {
      icon: FaCertificate,
      title: 'Oracle AI Foundations Associate',
      organization: 'Oracle',
      description: 'AI Foundations Associate certification covering artificial intelligence fundamentals, machine learning concepts, and AI applications.',
      date: 'Aug 24, 2025',
      category: 'Certification',
    },
    {
      icon: FaMedal,
      title: 'BrainBrew 25 Ideathon',
      organization: 'BrainBrew',
      description: 'Host & Visual Designer for BrainBrew 25 Ideathon, showcasing leadership skills and creative design capabilities.',
      date: 'Jan 29, 2025',
      category: 'Recognition',
    },
    {
      icon: FaTrophy,
      title: 'Hackathon at IIT Madras',
      organization: 'IIT Madras',
      description: 'Participant in prestigious hackathon at IIT Madras, demonstrating problem-solving skills and technical expertise.',
      date: 'Apr 13, 2025',
      category: 'Competition',
    },
    {
      icon: FaAward,
      title: 'Student Ambassador Program',
      organization: 'etsUpgrade',
      description: 'Selected as Student Ambassador for etsUpgrade, representing the organization and promoting educational initiatives.',
      date: 'July 2025',
      category: 'Recognition',
    },
    {
      icon: FaAward,
      title: 'GSsoc 25 Contributor',
      organization: 'Google Summer of Code',
      description: 'Selected as a contributor for Google Summer of Code 2025, showcasing commitment to open-source development and community contribution.',
      date: '2025',
      category: 'Recognition',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Certification':
        return 'bg-green-100 text-green-800';
      case 'Recognition':
        return 'bg-purple-100 text-purple-800';
      case 'Competition':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="achievements" className="py-20 section-bg-tertiary bg-pattern">
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
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-accentCoral mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-textSecondary max-w-2xl mx-auto">
              Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="dark-card rounded-xl p-6 hover:bg-dark-tertiary transition-colors group hover-lift"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-dark-accent to-dark-accentCoral rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <achievement.icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-dark-text">
                        {achievement.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(achievement.category)}`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-dark-accent mb-2">
                      {achievement.organization}
                    </p>
                    
                    <p className="text-dark-textSecondary text-sm leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    
                    <p className="text-xs text-dark-textSecondary font-medium">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-dark-accent to-dark-accentCoral rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Certification Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '6', label: 'Certifications & Achievements' },
                { number: '2', label: 'Professional Certifications' },
                { number: '100%', label: 'Commitment to Learning' },
                { number: '3+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
