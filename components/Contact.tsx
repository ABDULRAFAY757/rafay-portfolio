'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rafayibrar2001@gmail.com',
      href: 'mailto:rafayibrar2001@gmail.com',
      color: 'text-pink-500',
      bg: 'bg-pink-500/10'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'abdulrafayhimself',
      href: 'https://www.linkedin.com/in/abdulrafayhimself/',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'ABDULRAFAY757',
      href: 'https://github.com/ABDULRAFAY757',
      color: 'text-gray-200',
      bg: 'bg-gray-500/10'
    },
  ]

  return (
    <section id="contact" className="section-container relative overflow-hidden bg-dark">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to opportunities, collaborations, and tech discussions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="prose prose-invert">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Ready to start a project?
                </h3>
                <p className="text-gray-400 text-lg mb-8">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${info.bg} ${info.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className="text-2xl" />
                    </div>
                    <span className="text-sm text-gray-400 mb-1">{info.label}</span>
                    <span className="font-medium text-white truncate">{info.value}</span>
                  </a>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary animate-pulse">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-white font-medium">Currently based in</p>
                  <p className="text-gray-300">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

