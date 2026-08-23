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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setErrorMessage('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      console.log('Sending form data:', formData)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success!
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset success after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (err: any) {
      console.error('Form error:', err)
      setStatus('error')
      setErrorMessage(err.message || 'Failed to send message. Please try again.')
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
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
                <a 
                  href="mailto:huda11.03noor@gmail.com" 
                  className="text-text-secondary hover:text-accent-gold transition-colors"
                >
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
                  <a 
                    href="https://github.com/Huda-noor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-text-secondary hover:text-accent-gold transition-colors"
                  >
                    GitHub: Huda-noor
                  </a>
                  <a 
                    href="https://linkedin.com/in/huda-noor-a297512b4" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-text-secondary hover:text-accent-gold transition-colors"
                  >
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Success Message */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/30 border border-green-500/50 rounded text-green-300 flex items-center gap-2"
                  >
                    <span>✓</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/30 border border-red-500/50 rounded text-red-300 flex items-center gap-2"
                  >
                    <span>✗</span>
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Name Field */}
                <div>
                  <label className="block text-accent-gold font-cinzel mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2 bg-dark-primary border border-accent-gold/20 rounded text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-accent-gold font-cinzel mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2 bg-dark-primary border border-accent-gold/20 rounded text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-accent-gold font-cinzel mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    rows={5}
                    className="w-full px-4 py-2 bg-dark-primary border border-accent-gold/20 rounded text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-gold transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-6 py-3 bg-accent-gold text-dark-primary font-bold rounded hover:bg-accent-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' && (
                    <>
                      <span className="inline-block animate-spin">⏳</span>
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <span>✓</span>
                      Message Sent!
                    </>
                  )}
                  {status === 'idle' && 'Send Message'}
                  {status === 'error' && 'Try Again'}
                </button>

                {/* Info Text */}
                <p className="text-xs text-text-secondary text-center">
                  Your message will be sent directly to my email inbox.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}