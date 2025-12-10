'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

const projects = [
  {
    title: 'Multi-Agent AI Platform',
    description: 'Production-ready Multi-Agent AI Platform combining market research, real-time news, and stock analysis. Three AI agents work in parallel.',
    technologies: ['FastAPI', 'React', 'OpenAI', 'Docker', 'AWS'],
    github: 'https://github.com/ABDULRAFAY757/Multi-Agent',
    demo: '#',
    featured: true,
    size: 'large', // Spans 2 cols
    color: 'from-violet-600 to-indigo-600'
  },
  {
    title: 'YourFrontDeskAI',
    description: '24/7 AI voice assistant for clinics. Handles appointment booking and patient interactions completely hands-free.',
    technologies: ['Python', 'n8n', 'Twilio', 'Retell AI'],
    github: 'https://github.com/ABDULRAFAY757',
    demo: '#',
    featured: true,
    size: 'medium',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Clarya Email Verification',
    description: 'Email Verification System MVP using microservices. Achieved 99.9% uptime for lead generation at scale.',
    technologies: ['FastAPI', 'Microservices', 'Redis'],
    github: 'https://github.com/ABDULRAFAY757',
    demo: '#',
    featured: true,
    size: 'medium',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Business Nexus',
    description: 'Platform connecting businesses and entrepreneurs with automated bidding and secure transactions.',
    technologies: ['Django', 'PostgreSQL', 'React'],
    github: 'https://github.com/ABDULRAFAY757/BusinessNexus',
    demo: '#',
    featured: true,
    size: 'large',
    color: 'from-amber-500 to-orange-500'
  },
]

const otherProjects = [
  {
    title: 'Credit Risk Analysis',
    description: 'Financial risk modeling for Bondora P2P lending platform.',
    technologies: ['Python', 'ML', 'Risk Modeling'],
    github: 'https://github.com/Technocolabs100/Financial-risk-modelling-of-leading-European-P2P-lending-platform-Bondora',
  },
  {
    title: 'Mango Leaf Disease Detection',
    description: 'CNN-based disease detection model with 92% accuracy.',
    technologies: ['TensorFlow', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/ABDULRAFAY757/dhaka-bangladesh-mango-leaf',
  },
  {
    title: 'Los Angeles Urban Data',
    description: 'Data analysis for LA Metropolitan Area urban planning.',
    technologies: ['Python', 'Data Viz', 'Power BI'],
    github: 'https://github.com/ABDULRAFAY757',
  },
  {
    title: 'Nepali Language NLP',
    description: 'NLP toolkit for processing Nepali language data.',
    technologies: ['NLP', 'Python', 'Spacy'],
    github: 'https://github.com/ABDULRAFAY757',
  },
  {
    title: 'Power BI Repository',
    description: 'Collection of business intelligence dashboards.',
    technologies: ['Power BI', 'SQL', 'DAX'],
    github: 'https://github.com/ABDULRAFAY757/Power-BI',
  },
  {
    title: 'Employee Management',
    description: 'Django-based CRUD app for HR operations.',
    technologies: ['Django', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/ABDULRAFAY757',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-container relative">
      <div className="absolute top-0 left-0 w-full h-full bg-dark overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects that demonstrate my expertise in AI, Full-Stack, and Data Science.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid layout for Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-3xl p-8 border border-white/5 bg-dark-lighter/50 hover:bg-white/5 transition-all duration-500 hover:border-white/10 ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                    <FaStar className="text-white text-xl" />
                  </div>
                  <div className="flex gap-3 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"><FaGithub /></a>
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"><FaExternalLinkAlt /></a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-6 line-clamp-3">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid for Other Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <FaGithub className="text-2xl text-gray-500 group-hover:text-primary transition-colors" />
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
              <h4 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs text-gray-500 font-mono">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ABDULRAFAY757"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FaGithub /> View Full Project Archive
          </a>
        </div>
      </motion.div>
    </section>
  )
}
