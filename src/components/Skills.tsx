'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const skillCategories = [
    {
      title: '⚡ AI & Automation',
      skills: ['n8n', 'AI Agents', 'Agentic Automation', 'Workflow Orchestration', 'Multi-step Reasoning', 'Prompt Engineering'],
    },
    {
      title: '🧬 AI Models',
      skills: ['OpenAI (GPT-4)', 'Google Gemini', 'Anthropic Claude', 'Hugging Face', 'Replicate'],
    },
    {
      title: '💻 Development',
      skills: ['JavaScript', 'Python', 'React', 'Next.js', 'HTML/CSS', 'REST APIs', 'Webhooks'],
    },
    {
      title: '🔧 Tools & Platforms',
      skills: ['GitHub', 'Google Sheets', 'Google Docs', 'WordPress', 'DataForSEO', 'Tavily', 'Crawl4AI'],
    },
    {
      title: '🎭 Design',
      skills: ['UI/UX Design', 'Responsive Design', 'Interaction Design', 'Tailwind CSS', 'Framer Motion'],
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
    <section id="skills" ref={ref} className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            Skills & Expertise
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-dark-layer rounded-lg border border-accent-gold/20 hover:border-accent-gold/50 hover:bg-dark-secondary transition-all"
              >
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-primary rounded-full text-sm text-text-secondary border border-accent-gold/20 hover:border-accent-gold/50 transition-colors"
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
