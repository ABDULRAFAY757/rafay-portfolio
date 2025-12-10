'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ABDULRAFAY757',
      icon: FaGithub,
      color: 'text-gray-400 hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdulrafayhimself/',
      icon: FaLinkedin,
      color: 'text-gray-400 hover:text-blue-500',
    },
    {
      name: 'Email',
      url: 'mailto:rafayibrar2001@gmail.com',
      icon: FaEnvelope,
      color: 'text-gray-400 hover:text-pink-500',
    },
  ]

  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-12">

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              AR<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Building scalable, intelligent, and user-centric solutions.
              Let's turn your innovative ideas into reality.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Experience'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Riyadh, Saudi Arabia <br />
              All hours (Remote)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Abdul Rafay. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Crafted with <FaHeart className="text-red-500/80 animate-pulse" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
