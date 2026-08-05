'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold font-cinzel mb-12 text-center">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-2">
                  Email
                </h3>
                <a href="mailto:huda11.03noor@gmail.com" className="text-text-secondary hover:text-accent-gold transition-colors">
                  huda11.03noor@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-2">
                  Location
                </h3>
                <p className="text-text-secondary">
                  Karachi, Sindh, Pakistan
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent-gold font-cinzel mb-2">
                  Social
                </h3>
                <div className="space-y-2">
                  <a href="https://github.com/Huda-noor" target="_blank" rel="noopener noreferrer" className="block text-text-secondary hover:text-accent-gold transition-colors">
                    GitHub: Huda-noor
                  </a>
                  <a href="https://linkedin.com/in/huda-noor-a297512b4" target="_blank" rel="noopener noreferrer" className="block text-text-secondary hover:text-accent-gold transition-colors">
                    LinkedIn: Huda Noor
                  </a>
                </div>
              </div>

              <div className="p-4 bg-dark-primary rounded-lg border border-accent-gold/20">
                <p className="text-text-secondary text-sm">
                  Available for remote work globally. Let's discuss your AI automation needs!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-accent-gold font-cinzel mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-primary border border-accent-gold/20 rounded text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-accent-gold font-cinzel mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-primary border border-accent-gold/20 rounded text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-accent-gold font-cinzel mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-dark-primary border border-accent-gold/20 rounded text-text-primary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-gold text-dark-primary font-bold rounded hover:bg-accent-gold-dark transition-colors"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
