'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Journey() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const timeline = [
    {
      year: '2024',
      title: 'AI Automation Engineer',
      description: 'Started freelance career in AI automation, designing n8n workflows and AI systems.',
    },
    {
      year: '2024',
      title: 'Core Generator Development',
      description: 'Built sophisticated AI-powered content generation system with multi-agent architecture.',
    },
    {
      year: '2024',
      title: 'Nexe Agent Framework',
      description: 'Developed autonomous AI agent system with advanced reasoning capabilities.',
    },
    {
      year: '2024',
      title: 'Generative AI Mastermind Certification',
      description: 'Completed advanced training in generative AI, LLM integration, and prompt engineering.',
    },
    {
      year: '2024',
      title: 'Agentic Linux Certification',
      description: 'Mastered AI agent development and agentic automation systems (UTCLI Solutions).',
    },
    {
      year: '2024',
      title: 'Oracle AI Agent Certificate',
      description: 'Industry-recognized certification in AI agent architecture and enterprise deployment.',
    },
    {
      year: '2024',
      title: '100+ Production Workflows',
      description: 'Milestone: Deployed 100+ production n8n workflows across multiple industries.',
    },
    {
      year: '2024',
      title: 'Professional Portfolio Launch',
      description: 'Built and deployed cinematic professional portfolio showcasing AI automation expertise.',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="journey" ref={ref} className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            My Journey
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-6 relative"
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent-gold rounded-full border-2 border-dark-primary"></div>
                  {idx !== timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-accent-gold to-accent-gold/30"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-dark-layer rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 transition-colors flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-accent-gold font-cinzel">{item.year}</span>
                    <h3 className="text-xl font-bold text-text-primary font-cinzel">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
