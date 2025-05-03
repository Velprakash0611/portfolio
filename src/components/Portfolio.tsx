import React, { useState } from 'react';
import { ExternalLink, Github, Tag, ChevronRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'EDA-GPT - AI Based Research Assistant for EDA Analysis',
      description: 'An intelligent assistant that automates exploratory data analysis using RAG with ensemble retrievers for enhanced document interaction and insights generation.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Machine Learning', 'RAG', 'LangChain', 'Pandas'],
      githubLink: 'https://github.com/Velprakash0611',
      details: 'This AI-based research assistant streamlines the EDA process by automatically generating visualizations, identifying correlations, detecting outliers, and providing statistical summaries of datasets. It features an interactive chat interface powered by RAG with ensemble retrievers for enhanced document understanding and analysis.'
    },
    {
      id: 2,
      title: 'RAG based Document Chatbot',
      description: 'A retrieval-augmented generation chatbot that can answer questions based on document contents with high accuracy.',
      image: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['NLP', 'Transformers', 'RAG', 'LangChain', 'Vector Databases'],
      githubLink: 'https://github.com/Velprakash0611',
      details: 'This chatbot leverages retrieval-augmented generation (RAG) to provide accurate responses by first retrieving relevant information from documents and then generating contextually appropriate answers. It uses semantic search to find the most relevant passages and integrates them with large language models.'
    },
    {
      id: 3,
      title: 'WhatsApp Chat Analyzer',
      description: 'A tool that analyzes WhatsApp chat exports to provide insights on messaging patterns, word frequencies, and user activity.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Data Analysis', 'NLP', 'Streamlit', 'Visualization'],
      githubLink: 'https://github.com/Velprakash0611',
      details: 'The WhatsApp Chat Analyzer processes exported chat files to generate insights such as most active users, busiest times of day, common words used, sentiment analysis of messages, and communication patterns over time.'
    },
    {
      id: 4,
      title: 'BI Dashboards',
      description: 'Interactive business intelligence dashboards for data-driven decision making across various domains.',
      image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Power BI', 'Tableau', 'Data Visualization', 'SQL', 'ETL'],
      githubLink: 'https://github.com/Velprakash0611',
      details: 'These BI dashboards transform raw data into actionable insights through interactive visualizations, KPI tracking, and customizable reports. They enable stakeholders to monitor business performance, identify trends, and make data-driven decisions in real-time.'
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Portfolio</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Explore some of my recent projects in AI, machine learning, and data science.
            Each project demonstrates my skills and passion for turning data into insights.
          </p>
          
          <motion.div 
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1coW0j5dY3IW6IDtN1pIP6aZwtq8SluSX?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <motion.span 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full flex items-center"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-gray-400 text-xs">+{project.tags.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${activeProject === project.id ? 'rotate-90' : ''}`} />
                  </motion.button>
                  
                  <div className="flex space-x-2">
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                      whileHover={{ scale: 1.2 }}
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                      whileHover={{ scale: 1.2 }}
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
                
                {activeProject === project.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-800 text-gray-300 text-sm"
                  >
                    {project.details}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/Velprakash0611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            whileHover={{ x: 5 }}
          >
            More Projects
            <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;