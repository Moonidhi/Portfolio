import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sunidhi6777@gmail.com',
      href: 'mailto:sunidhi6777@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9939469666',
      href: 'tel:+919939469666',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Chennai, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Moonidhi',
      color: 'hover:text-gray-900',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sunidhi-chauhan-12694b324',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:sunidhi6777@gmail.com',
      color: 'hover:text-red-600',
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
    <section id="contact" className="py-20 section-bg-primary floating-particles">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-accentCoral mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-textSecondary max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-dark-text mb-6">
                  Let's Connect
                </h3>
                <p className="text-dark-textSecondary leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to discuss a potential collaboration, 
                  or just want to say hello, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 dark-card rounded-lg hover:shadow-accent transition-shadow group hover-lift"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-dark-accent to-dark-accentCoral rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <info.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-dark-textSecondary">{info.label}</p>
                      <p className="text-dark-text font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-dark-text mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 dark-card rounded-lg flex items-center justify-center text-dark-textSecondary shadow-accent hover:shadow-coral transition-all ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="dark-card rounded-xl p-8 shadow-accent">
                <h3 className="text-2xl font-semibold text-dark-text mb-6">
                  Send a Message
                </h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-textSecondary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-all text-dark-text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-textSecondary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-all text-dark-text"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-textSecondary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-all text-dark-text"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-textSecondary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-all resize-none text-dark-text"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                    >
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
