'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const services = [
    {
      icon: '⚡',
      title: 'AI Automation',
      description: 'Intelligent automated workflows with AI-powered decision making and multi-agent orchestration.',
    },
    {
      icon: '🔧',
      title: 'n8n Workflows',
      description: 'Custom workflow design connecting applications, APIs, and AI models for seamless automation.',
    },
    {
      icon: '🤖',
      title: 'AI Agents',
      description: 'Autonomous agents with multi-step reasoning and dynamic tool integration capabilities.',
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Multi-service orchestration and secure integration of disparate business systems.',
    },
    {
      icon: '💡',
      title: 'Generative AI',
      description: 'AI-powered content generation using cutting-edge language models and prompt engineering.',
    },
    {
      icon: '📱',
      title: 'Web Development',
      description: 'Modern responsive websites and applications built with Next.js and React.',
    },
    {
      icon: '📊',
      title: 'Social Media Automation',
      description: 'Automated content generation and publishing workflows for social platforms.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Professional digital experiences with stunning visual design and interactions.',
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
    <section id="services" ref={ref} className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            Services
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-dark-layer rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 hover:bg-dark-secondary transition-all text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-accent-gold font-cinzel mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
