import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black -z-10"></div>
      
      {/* Animated dots/particles background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute rounded-full bg-cyan-500"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ 
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-cyan-400">Velprakash S</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            AI, ML, and Data Science Enthusiast
          </motion.p>
          <motion.p 
            className="text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A curious mind fueled by algorithms and possibilities. 
            With a passion for AI, ML, and data science, I dive into raw data, uncover patterns, 
            and build smart solutions that speak the language of tomorrow. 
            Let's shape the future — one dataset at a time.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a 
              href="#portfolio" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/velprakash-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://github.com/Velprakash0611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="mailto:velprakash6113@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.img 
              src="public/profiel.jpg"
              alt="Velprakash S" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
