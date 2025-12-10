'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ABDULRAFAY757',
      icon: FaGithub,
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdulrafayhimself/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:rafayibrar2001@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-emerald-400',
    },
  ]

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark opacity-50"></div>

        <motion.div
          style={{ y: y1, x: -100 }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          style={{ y: y2, x: 100 }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full"
      >
        <div className="flex flex-col items-center justify-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-glass"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Available for Hire</span>
          </motion.div>

          {/* Heading */}
          <div className="mb-8 relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
            >
              <span className="block text-white mb-2">Abdul</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Rafay.
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light text-balance"
          >
            Data Scientist & Full-Stack Engineer crafting intelligent digital experiences with modern stack and AI integration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
            >
              View Work
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/1agHO6xWYsvtGWRYdwv14n6OmZkorhD_b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-secondary w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform duration-300" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-gray-500 transition-colors duration-300 ${social.color}`}
              >
                <social.icon />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-30"></div>
      </motion.div>
    </section>
  )
}
