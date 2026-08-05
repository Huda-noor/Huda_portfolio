"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  description: string;
  year: string;
  skills: string[];
  verified?: boolean;
}

const certificationsData: Certification[] = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskills",
    icon: "🧠",
    description: "Advanced program covering cutting-edge generative AI technologies, LLM integration, and prompt engineering",
    year: "2024",
    skills: ["OpenAI API", "Claude Integration", "Prompt Engineering", "AI System Design", "Deployment"],
    verified: true,
  },
  {
    title: "Agentic Linux: From Commands to AI Agents",
    issuer: "UTCLI Solutions",
    icon: "💻",
    description: "Comprehensive training with Imran Afzal on building AI agents, agentic automation, and advanced Linux integration",
    year: "2024",
    skills: ["AI Agents", "Linux Automation", "Agentic Systems", "Command Automation", "System Design"],
    verified: true,
  },
  {
    title: "Oracle AI Agent Certificate",
    issuer: "Oracle",
    icon: "🏆",
    description: "Industry-recognized certification in AI agent development, deployment patterns, and best practices",
    year: "2024",
    skills: ["Agent Architecture", "Oracle AI", "Best Practices", "Production Deployment", "Enterprise Systems"],
    verified: true,
  },
  {
    title: "Advanced n8n Workflows",
    issuer: "Professional Experience",
    icon: "⚡",
    description: "Mastery through building 100+ production workflows across multiple industries and use cases",
    year: "2024",
    skills: ["Workflow Design", "API Integration", "Error Handling", "Performance Optimization", "Complex Automation"],
    verified: true,
  },
];

const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className="h-full p-6 rounded-lg bg-gradient-to-br from-cinematic-dark/60 to-cinematic-layer/60 border border-accent/20 backdrop-blur-sm hover:border-accent/60 transition-all overflow-hidden">
        
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 rounded-lg blur-lg -z-10"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="text-4xl">{cert.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-cinzel text-cinematic-text-light mb-1 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <p className="text-accent font-cinzel text-sm tracking-wider">{cert.issuer}</p>
            </div>
          </div>
          {cert.verified && (
            <motion.div
              className="flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs text-green-400 font-cinzel">✓ VERIFIED</span>
            </motion.div>
          )}
        </div>

        {/* Year */}
        <p className="text-cinematic-text-muted/60 text-xs font-mono mb-3">{cert.year}</p>

        {/* Description */}
        <p className="text-cinematic-text-muted text-sm leading-relaxed mb-4">
          {cert.description}
        </p>

        {/* Divider */}
        <div className="mb-4 h-px bg-gradient-to-r from-accent/20 to-transparent" />

        {/* Skills */}
        <div className="mb-4">
          <p className="text-accent font-cinzel text-xs tracking-widest uppercase mb-3">
            Skills & Knowledge
          </p>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <motion.span
                key={skill}
                className="px-3 py-1 text-xs bg-cinematic-dark/80 border border-accent/30 rounded text-accent font-mono"
                whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Badge */}
        <motion.div
          className="inline-block px-4 py-2 bg-accent/10 border border-accent/40 rounded text-accent text-xs font-cinzel tracking-widest uppercase"
          whileHover={{ scale: 1.05 }}
        >
          Certified & Current
        </motion.div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="text-accent font-cinzel text-sm tracking-widest uppercase">
            🏆 Credentials
          </motion.span>
          <motion.h2 className="text-display font-cinzel-deco text-cinematic-text-light mt-2 mb-4">
            Certifications & Learning
          </motion.h2>
          <motion.p className="text-cinematic-text-muted max-w-2xl mx-auto">
            Industry-recognized certifications and advanced training programs that validate expertise in AI automation and development.
          </motion.p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* Summary section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-accent/20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "4", label: "Active Certifications" },
            { number: "2024", label: "Year of Certification" },
            { number: "100+", label: "Skills Acquired" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-cinzel-deco text-accent mb-2">{stat.number}</div>
              <div className="text-cinematic-text-muted font-cinzel tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-cinematic-text-muted mb-6">
            Continuous learning and professional development are core to my practice. These certifications demonstrate commitment to mastery in AI automation engineering.
          </p>
          <p className="text-accent font-cinzel text-sm tracking-widest uppercase">
            All certifications verified and current as of 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
