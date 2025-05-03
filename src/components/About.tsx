import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      title: 'Business Analyst Intern',
      company: 'Labmentix',
      period: 'February 2025 - May 2025',
      icon: <Briefcase className="text-cyan-400" />
    },
    {
      title: 'Data Science Intern',
      company: 'Coding Raja Technologies',
      period: 'July 2024',
      icon: <Briefcase className="text-cyan-400" />
    },
    {
      title: 'Machine Learning Intern',
      company: 'YBI Foundations',
      period: 'June 2024',
      icon: <Briefcase className="text-cyan-400" />
    },
    {
      title: 'IT Intern',
      company: 'Sun TV Network Limited',
      period: 'February 2023',
      icon: <Briefcase className="text-cyan-400" />
    }
  ];

  const education = [
    {
      degree: 'B.Tech in AI and Data Science',
      institution: 'Engineering College',
      period: '2021 - 2025',
      icon: <GraduationCap className="text-emerald-400" />
    }
  ];

  const skills = [
    'Python', 'Machine Learning', 'Data Analysis', 
    'SQL', 'Power BI', 'Deep Learning', 
    'Natural Language Processing', 'Business Analysis'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            A passionate and dedicated AI, ML, and Data Science enthusiast with hands-on experience in
            various domains. Currently a fresher B.Tech graduate, constantly upskilling with the latest technologies
            and actively seeking opportunities in these domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <GraduationCap className="mr-2 text-cyan-400" size={24} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 8 }}
                  className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-emerald-400"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-gray-800 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                      <p className="text-gray-400">{item.institution}</p>
                      <p className="text-cyan-400 text-sm mt-1">{item.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Award className="mr-2 text-cyan-400" size={24} />
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 text-gray-200 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Briefcase className="mr-2 text-cyan-400" size={24} />
            Work Experience
          </h3>
          
          <div className="relative border-l-2 border-cyan-500 pl-8 ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="relative bg-gray-900/50 p-6 rounded-lg shadow-lg"
              >
                <div className="absolute -left-12 mt-1 p-2 bg-black rounded-full border-2 border-cyan-500">
                  {exp.icon}
                </div>
                <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                <p className="text-cyan-400">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;