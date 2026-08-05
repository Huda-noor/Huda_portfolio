'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-dark-primary flex items-center justify-center overflow-hidden pt-20">
      <Particles />

      <div className="max-w-6xl mx-auto px-4 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-accent-gold-dark/30 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-2 border-accent-gold/50 overflow-hidden">
                <div className="w-full h-full bg-dark-layer flex items-center justify-center">
                  <span className="text-accent-gold text-lg">Your Photo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-accent-gold font-cinzel"
          >
            Huda Noor
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 font-eb-garamond"
          >
            AI Automation Engineer & AI Agent Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto"
          >
            Building intelligent automation systems, AI agents, and generative AI solutions. 100+ production n8n workflows deployed with 80%+ efficiency improvements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent-gold text-dark-primary font-bold rounded-lg hover:bg-accent-gold-dark transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-accent-gold text-accent-gold font-bold rounded-lg hover:bg-accent-gold/10 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a href="https://github.com/Huda-noor" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-text-primary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/huda-noor-a297512b4" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-text-primary transition-colors">
              LinkedIn
            </a>
            <a href="mailto:huda11.03noor@gmail.com" className="text-accent-gold hover:text-text-primary transition-colors">
              Email
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent-gold"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
