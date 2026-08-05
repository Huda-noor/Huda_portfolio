'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const certifications = [
    {
      title: 'Generative AI Mastermind',
      issuer: 'Outskills',
      year: '2024',
      skills: ['OpenAI API', 'Claude Integration', 'Prompt Engineering', 'AI Architecture'],
    },
    {
      title: 'Agentic Linux: From Commands to AI Agents',
      issuer: 'UTCLI Solutions (Imran Afzal)',
      year: '2024',
      skills: ['AI Agents', 'Agentic Automation', 'Linux Integration', 'Advanced Automation'],
    },
    {
      title: 'Oracle AI Agent Certificate',
      issuer: 'Oracle University',
      year: '2024',
      skills: ['Agent Architecture', 'Enterprise Patterns', 'Production Deployment', 'System Design'],
    },
    {
      title: 'Advanced n8n Workflows',
      issuer: 'Professional Experience',
      year: '2024',
      skills: ['Workflow Design', 'API Orchestration', 'Error Handling', 'Performance Optimization'],
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
    <section id="certifications" ref={ref} className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            Certifications
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-dark-primary rounded-lg border-2 border-accent-gold/30 hover:border-accent-gold hover:bg-dark-layer transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  <span className="text-2xl">🏆</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-accent-gold/20 text-accent-gold rounded border border-accent-gold/40 group-hover:bg-accent-gold/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
