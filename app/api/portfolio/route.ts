import { NextResponse } from 'next/server'

export async function GET() {
  const portfolioData = {
    personal: {
      name: 'Abdul Rafay',
      title: 'Data Scientist | Software Engineer | Full-Stack Developer, Microservices',
      email: 'rafayibrar2001@gmail.com',
      phone: '+966 59 95 19592',
      location: 'Riyadh, Saudi Arabia',
      github: 'https://github.com/ABDULRAFAY757',
      linkedin: 'https://www.linkedin.com/in/abdulrafayhimself/',
    },
    about: {
      summary:
        'Analytical and detail-oriented Data Scientist & Full Stack Engineer with 3+ years of experience in backend architecture, machine learning, AI automation, and full-stack development.',
      description:
        'Skilled in building scalable APIs, deploying data-driven applications, integrating AI automation, and developing workflow solutions to enhance operational efficiency and business intelligence.',
    },
    skills: {
      languages: ['Python', 'JavaScript', 'TypeScript', 'C#', 'PHP'],
      backend: ['FastAPI', 'Django', 'ASP.NET Core', 'Laravel', 'RESTful APIs'],
      frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
      databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Entity Framework'],
      ai: ['TensorFlow', 'OpenCV', 'scikit-learn', 'NLP', 'Computer Vision'],
      tools: ['AWS', 'Docker', 'Git/GitHub', 'n8n', 'Power BI'],
    },
    experience: [
      {
        title: 'AI & Automation Engineer',
        company: 'Bave Holdings LLC',
        location: 'Riyadh, KSA',
        period: 'Oct 2025 – Present',
        type: 'Full-time',
      },
      {
        title: 'Data Scientist',
        company: 'Verso',
        location: 'Cheyenne, US',
        period: 'Nov 2024 – Oct. 2025',
        type: 'Full-time',
      },
      {
        title: 'Full Stack Engineer',
        company: 'Techlign',
        location: 'Islamabad, Pakistan',
        period: 'June 2024-Oct. 2024',
        type: 'Full-time',
      },
      {
        title: 'Jr. Machine Learning Engineer',
        company: 'Omdena',
        location: 'Silicon Valley, California, US',
        period: 'Jan 2023–June 2024',
        type: 'Remote',
      },
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Computer Science',
    },
    certifications: [
      'Google Certified Data Analyst',
      'Microsoft Power BI Data Analyst (Professional)',
      'Google Business Intelligence Certificate',
      'AWS: Getting Started with Data Analytics',
      'DataCamp: Data Analysis in Excel | Data Analyst Associate',
      'Letter of Recommendation – Omdena',
    ],
  }

  return NextResponse.json(portfolioData)
}
