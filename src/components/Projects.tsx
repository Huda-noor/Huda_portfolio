'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const projects = [
    {
      title: 'Core Generator',
      description: 'AI-powered content generation system with multi-agent architecture for competitor research, strategy, writing, fact-checking, and editorial review.',
      tech: ['n8n', 'Google Gemini', 'Tavily', 'Crawl4AI', 'Google Docs API'],
      github: 'https://github.com/Huda-noor/Core_generator',
    },
    {
      title: 'Nexe Agent',
      description: 'Autonomous AI agent framework with multi-step reasoning, dynamic tool selection, and context-aware decision-making capabilities.',
      tech: ['Claude API', 'AI Agents', 'Python', 'Tool Integration'],
      github: 'https://github.com/Huda-noor/nexe-agent',
    },
    {
      title: 'n8n AEO Monitor',
      description: 'Citation tracking system monitoring Google AI Overviews for keyword presence and identifying content gaps for SEO optimization.',
      tech: ['n8n', 'DataForSEO', 'Google Sheets', 'Gmail'],
      github: '#',
    },
    {
      title: 'Blog Automation Pipeline',
      description: 'End-to-end automation system: keyword research → strategy → generation → fact-checking → WordPress publishing.',
      tech: ['n8n', 'OpenAI', 'WordPress API', 'Google Sheets'],
      github: 'https://github.com/Huda-noor/Blog_generator',
    },
    {
      title: 'API Integration Hub',
      description: 'Multi-service connector with intelligent routing, rate limiting, OAuth handling, and error recovery mechanisms.',
      tech: ['REST APIs', 'Node.js', 'Webhooks', 'Authentication'],
      github: '#',
    },
    {
      title: 'Professional Portfolio',
      description: 'Responsive cinematic portfolio with animations, mobile optimization, and production deployment to Vercel.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Huda-noor',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            Featured Projects
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-dark-primary rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 hover:bg-dark-layer transition-all group"
              >
                <h3 className="text-2xl font-bold text-accent-gold font-cinzel mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent-gold/10 text-accent-gold rounded border border-accent-gold/20">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-accent-gold hover:text-text-primary transition-colors font-cinzel"
                >
                  View on GitHub →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
