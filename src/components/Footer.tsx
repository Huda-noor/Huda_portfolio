'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-primary border-t border-accent-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent-gold font-cinzel mb-2">
              Huda Noor
            </h3>
            <p className="text-text-secondary text-sm">
              AI Automation Engineer & AI Agent Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent-gold font-cinzel font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-text-secondary hover:text-accent-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-text-secondary hover:text-accent-gold transition-colors">About</a></li>
              <li><a href="#projects" className="text-text-secondary hover:text-accent-gold transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-text-secondary hover:text-accent-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-accent-gold font-cinzel font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/Huda-noor" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-gold transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/huda-noor-a297512b4" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-gold transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:huda11.03noor@gmail.com" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Scroll to Top */}
          <div className="flex flex-col items-end">
            <button
              onClick={scrollToTop}
              className="text-accent-gold hover:text-text-primary transition-colors"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-accent-gold/20 pt-8 text-center text-text-secondary text-sm"
        >
          <p>
            © {currentYear} Huda Noor. All rights reserved. Built with Next.js, React, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
