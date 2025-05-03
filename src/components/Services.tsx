import React from 'react';
import { Database, BarChart, BrainCircuit, Briefcase, Code, Presentation, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Extract valuable insights from complex datasets using statistical methods and visualizations.',
      icon: <BarChart className="text-indigo-400" size={36} />,
      details: ['Statistical Analysis', 'Data Cleaning', 'Exploratory Data Analysis', 'Visualization']
    },
    {
      title: 'Machine Learning',
      description: 'Implement ML models to solve complex problems and make data-driven predictions.',
      icon: <BrainCircuit className="text-indigo-400" size={36} />,
      details: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering']
    },
    {
      title: 'Business Analysis',
      description: 'Transform business requirements into data requirements and actionable insights.',
      icon: <Briefcase className="text-indigo-400" size={36} />,
      details: ['Requirement Analysis', 'Process Optimization', 'KPI Development', 'Stakeholder Management']
    },
    {
      title: 'Data Science Solutions',
      description: 'End-to-end solutions from data collection to model deployment and monitoring.',
      icon: <Database className="text-indigo-400" size={36} />,
      details: ['ETL Pipelines', 'Predictive Analytics', 'Recommendation Systems', 'Custom Algorithms']
    },
    {
      title: 'AI Implementations',
      description: 'Cutting-edge AI solutions to automate tasks and enhance decision-making.',
      icon: <Code className="text-indigo-400" size={36} />,
      details: ['NLP Applications', 'Computer Vision', 'Deep Learning Models', 'AI Integration']
    },
    {
      title: 'Dashboard Development',
      description: 'Interactive and insightful dashboards for data visualization and monitoring.',
      icon: <Presentation className="text-indigo-400" size={36} />,
      details: ['Power BI', 'Tableau', 'Interactive Reports', 'Real-time Monitoring']
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Services</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            I offer a range of services in data science, AI, and business analysis, leveraging my skills
            to deliver tailored solutions that meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-lg border-b-2 border-indigo-500 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-indigo-500/10 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <ArrowRight size={16} className="text-indigo-400 mt-1 mr-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-all duration-300 group-hover:translate-x-1"
              >
                Request Service
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;