'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'py-4'
          : 'py-6'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'px-4' : 'px-4'
        }`}>
        <div
          className={`relative mx-auto flex justify-between items-center h-16 md:h-14 px-6 rounded-2xl transition-all duration-500 ${scrolled
              ? 'bg-dark/70 backdrop-blur-xl border border-white/10 shadow-lg shadow-primary/5 max-w-5xl'
              : 'bg-transparent max-w-7xl'
            }`}
        >
          <Link href="/" className="relative group z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-white tracking-wider"
            >
              AR<span className="text-primary">.</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center bg-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-sm text-gray-300 font-medium hover:text-white transition-colors duration-300 group rounded-full hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium bg-white text-dark rounded-full hover:bg-gray-100 transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>

        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-4 right-4 md:hidden bg-dark/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl z-40 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 px-4 text-gray-300 font-medium hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
