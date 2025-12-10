'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaChartBar, FaBrain } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: FaCode,
      title: "Full Stack Dev",
      desc: "Building scalable web apps with Next.js, React & ASP.NET Core.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: FaChartBar,
      title: "Data Science",
      desc: "Transforming raw data into actionable insights using Python & Power BI.",
      color: "text-green-400",
      bg: "bg-green-400/10"
    },
    {
      icon: FaBrain,
      title: "AI & ML",
      desc: "Developing intelligent models with TensorFlow, OpenCV & NLP.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ]

  return (
    <section id="about" className="section-container relative overflow-hidden bg-dark">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Exploring the intersection of Data Science, AI, and Modern Web Development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="prose prose-invert prose-lg">
              <p className="text-gray-300 leading-relaxed">
                I'm <span className="text-white font-semibold">Abdul Rafay</span>, a passionate <span className="text-primary">Data Scientist</span> and <span className="text-secondary">Full Stack Developer</span> with a strong foundation in building intelligent systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a degree in Computer Science and experience across diverse domains, I thrive on solving complex problems. From identifying trends that boost revenue to developing NLP models for intent classification, I love translating raw data into meaningful insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Education</p>
                  <p className="text-white font-medium">BS Computer Science</p>
                  <p className="text-xs text-gray-500">COMSATS University</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Riyadh, Saudi Arabia</p>
                  <p className="text-xs text-gray-500">Remote Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="grid gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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

