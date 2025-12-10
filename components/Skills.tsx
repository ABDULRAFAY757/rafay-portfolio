'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaJs, FaReact, FaGitAlt, FaDatabase, FaBuilding, FaBoxOpen, FaCloud } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiTensorflow, SiAmazonaws, SiDocker, SiDjango, SiPhp, SiDotnet, SiLaravel, SiFastapi } from 'react-icons/si'

const skills = [
  {
    category: 'Backend & APIs',
    icon: <FaCloud className="text-4xl text-primary" />,
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
      { name: 'Django', icon: SiDjango, color: 'text-green-600' },
      { name: 'Python', icon: FaPython, color: 'text-blue-500' },
      { name: 'Node.js', icon: FaJs, color: 'text-green-500' }, // Replaced with Node concept or stick to JS
      { name: 'ASP.NET Core', icon: SiDotnet, color: 'text-purple-600' },
      { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
    ],
  },
  {
    category: 'Frontend & UI',
    icon: <FaReact className="text-4xl text-secondary" />,
    items: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    ],
  },
  {
    category: 'AI & Data Science',
    icon: <SiTensorflow className="text-4xl text-orange-500" />,
    items: [
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
      { name: 'OpenCV', icon: FaPython, color: 'text-green-500' },
      { name: 'NLP', icon: FaPython, color: 'text-purple-400' },
      { name: 'Scikit-learn', icon: FaPython, color: 'text-orange-300' },
      { name: 'Pandas', icon: FaPython, color: 'text-blue-400' },
    ],
  },
  {
    category: 'Database & Cloud',
    icon: <FaDatabase className="text-4xl text-accent" />,
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
      { name: 'MySQL', icon: SiMysql, color: 'text-orange-500' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-container relative overflow-hidden bg-dark">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A robust set of technologies I use to build scalable and intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 group">
                    <span className={`text-xl ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon />
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
