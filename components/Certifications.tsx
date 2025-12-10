'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAward, FaTrophy } from 'react-icons/fa'

const certifications = [
  {
    name: 'Google Certified Data Analytics Professional',
    issuer: 'Google via Coursera',
    icon: FaCertificate,
    date: 'Dec 2022',
  },
  {
    name: 'Omdena - Letter of Recommendation',
    issuer: 'Omdena',
    icon: FaAward,
    date: 'Aug 2023',
  },
  {
    name: 'Los Angeles, USA Chapter – Analyzing Open Data',
    issuer: 'Omdena Inc.',
    icon: FaCertificate,
    date: 'Jun 2023',
  },
  {
    name: 'DataCamp Data Analyst Professional',
    issuer: 'DataCamp',
    icon: FaCertificate,
    date: 'Mar 2023',
  },
  {
    name: 'DataCamp Data Analyst Associate',
    issuer: 'DataCamp',
    icon: FaCertificate,
    date: 'Feb 2023',
  },
  {
    name: 'Data Analysis in Excel',
    issuer: 'DataCamp',
    icon: FaCertificate,
    date: 'Feb 2023',
  },
  {
    name: 'AWS: Getting Started with Data Analytics',
    issuer: 'Amazon Web Services',
    icon: FaCertificate,
    date: '2023',
  },
  {
    name: 'Google Business Intelligence Certificate',
    issuer: 'Google',
    icon: FaCertificate,
    date: '2023',
  },
  {
    name: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    icon: FaCertificate,
    date: '2023',
  },
  {
    name: 'Introduction to Data Science in Python',
    issuer: 'DataCamp',
    icon: FaCertificate,
    date: 'Sep 2022',
  },
  {
    name: 'Intermediate Python',
    issuer: 'DataCamp',
    icon: FaCertificate,
    date: '2022',
  },
  {
    name: 'Intermediate SQL',
    issuer: 'DataCamp',
    icon: FaCertificate,
    date: '2022',
  },
  {
    name: 'Google Analytics Certification',
    issuer: 'Google',
    icon: FaCertificate,
    date: '2022',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications and recognitions from leading organizations
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="card text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <cert.icon className="text-3xl text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary min-h-[3rem] flex items-center justify-center">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <FaTrophy className="text-yellow-600 text-2xl" />
              <div className="text-left">
                <p className="font-bold text-gray-800">GitHub Achievements</p>
                <p className="text-sm text-gray-600">Pull Shark • Quickdraw</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-lg border border-blue-200">
              <FaAward className="text-blue-600 text-2xl" />
              <div className="text-left">
                <p className="font-bold text-gray-800">Omdena Chapters</p>
                <p className="text-sm text-gray-600">Completed 5 Local Chapters</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
