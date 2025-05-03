import React from 'react';
import { Code, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center gap-2 text-indigo-400 font-bold text-xl">
              <Code size={24} />
              <span>Velprakash S</span>
            </a>
            <p className="text-gray-400 mt-2">
              AI, ML, and Data Science Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Velprakash S. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-gray-800 text-indigo-400 rounded-full hover:bg-gray-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;