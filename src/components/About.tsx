'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" ref={ref} className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                I'm an AI Automation Engineer and AI Agent Developer specializing in building intelligent automation systems that leverage the power of generative AI and modern workflow orchestration.
              </p>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                With expertise in n8n, AI agents, and LLM integration, I've designed and deployed over 100 production workflows that deliver significant efficiency improvements for businesses.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My focus is on creating sophisticated automation solutions that combine multiple technologies—from API orchestration to multi-agent AI systems—to solve real-world business challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-6 bg-dark-primary rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-2">
                  What I Build
                </h3>
                <p className="text-text-secondary">
                  Intelligent workflows, AI agents, automation systems, and generative AI solutions that transform business processes.
                </p>
              </div>

              <div className="p-6 bg-dark-primary rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-2">
                  My Focus
                </h3>
                <p className="text-text-secondary">
                  n8n workflow design, AI agent development, LLM integration, and creating scalable automation architectures.
                </p>
              </div>

              <div className="p-6 bg-dark-primary rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-2">
                  Impact
                </h3>
                <p className="text-text-secondary">
                  100+ production workflows, 80%+ efficiency improvements, serving diverse industries from content generation to business automation.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
