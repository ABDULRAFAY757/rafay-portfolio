'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    title: 'AI & Automation Engineer',
    company: 'Bave Holdings LLC',
    location: 'California, US (Remote)',
    period: 'Oct 2025 – Present',
    type: 'Full-time',
    description: [
      'Developed YourFrontDeskAI, a 24/7 AI voice assistant for clinics and hospitals.',
      'Designed hands-free automation workflows using n8n, Twilio, and Retell AI.',
      'Implemented NLP pipelines and multi-agent systems to optimize operational efficiency.'
    ],
    technologies: ['FastAPI', 'NLP', 'Twilio', 'n8n', 'Retell AI'],
  },
  {
    title: 'Data Scientist',
    company: 'Verso',
    location: 'Riyadh, SA (Remote)',
    period: 'Nov 2024 – Oct 2025',
    type: 'Full-time',
    description: [
      'Built Medivo, a healthcare billing solution with real-time chatbot support.',
      'Launched Email Verification System microservices with 99.9% uptime.',
      'Set up ETL pipelines for analytics and ML models.'
    ],
    technologies: ['FastAPI', 'Python', 'ETL', 'Microservices', 'AWS'],
  },
  {
    title: 'Software Engineer',
    company: 'Techlign',
    location: 'Islamabad, Pakistan',
    period: 'Jun 2024 – Dec 2024',
    type: 'Full-time',
    description: [
      'Built scalable web apps using ASP.NET Core and React.js.',
      'Optimized backend APIs with RBAC and JWT authentication.',
      'Designed efficient database schemas for high availability.'
    ],
    technologies: ['ASP.NET Core', 'React', 'SQL', 'Microservices'],
  },
  {
    title: 'Jr. Machine Learning Engineer',
    company: 'Omdena',
    location: 'Silicon Valley, US (Remote)',
    period: 'Jan 2023 – Jun 2024',
    type: 'Contract',
    description: [
      'Led data-driven analysis for Los Angeles Metropolitan Area.',
      'Engineered CNN-based disease detection models with 92% accuracy.',
      'Contributing to AI-driven global initiatives across 5 local chapters.'
    ],
    technologies: ['TensorFlow', 'OpenCV', 'Python', 'Deep Learning'],
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-container bg-dark relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            My career path and key contributions to the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark border-2 border-primary rounded-full z-10 shadow-glow">
                  <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  }`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm group hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary flex items-center gap-2">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-gray-300">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="text-lg text-gray-400 mb-4 flex items-center gap-2">
                      <FaBriefcase className="text-sm" /> {exp.company}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-400 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
