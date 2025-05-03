import React, { useState, useRef } from 'react';
import { MapPin, Mail, Phone, Send, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY  // Replace with your EmailJS public key
        );
        
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have a question or want to work together? Feel free to reach out to me directly or use the contact form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-cyan-500/10 rounded-full mr-4">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a 
                    href="mailto:velprakash6113@gmail.com" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    velprakash6113@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-cyan-500/10 rounded-full mr-4">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <a 
                    href="tel:+919150622307" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    +91 91506 22307
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-cyan-500/10 rounded-full mr-4">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-400">Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.linkedin.com/in/velprakash-s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/Velprakash0611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:velprakash6113@gmail.com"
                className="p-3 bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Hello, I would like to discuss..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md flex items-center justify-center w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
              
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500 text-emerald-400 px-4 py-3 rounded-md"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;