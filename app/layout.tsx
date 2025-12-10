import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdul Rafay - Data Scientist | Software Engineer | Full-Stack Developer',
  description: 'Professional portfolio of Abdul Rafay - Data Scientist, Machine Learning Engineer, and Full Stack Developer with 3+ years of experience',
  keywords: 'Data Scientist, Machine Learning Engineer, Full Stack Developer, AI Engineer, Python, FastAPI, React, Next.js, TensorFlow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

