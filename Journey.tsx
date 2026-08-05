"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface JourneyItem {
  year: string;
  title: string;
  category: "learning" | "achievement" | "project";
  icon: string;
  description: string;
  details?: string[];
}

const journeyData: JourneyItem[] = [
  {
    year: "2024",
    title: "AI Automation Engineering",
    category: "learning",
    icon: "🤖",
    description: "Deep dive into AI agent development and agentic automation systems",
    details: [
      "Mastered n8n workflow automation",
      "Developed multi-agent AI systems",
      "Integrated generative AI models",
      "Built complex automation pipelines",
    ],
  },
  {
    year: "2024",
    title: "Generative AI Mastermind",
    category: "learning",
    icon: "🧠",
    description: "Advanced program by Outskills covering cutting-edge AI technologies",
    details: [
      "OpenAI & Claude API integration",
      "Prompt engineering techniques",
      "AI system architecture",
      "Production AI deployment",
    ],
  },
  {
    year: "2024",
    title: "Agentic Linux - From Commands to AI Agents",
    category: "learning",
    icon: "💻",
    description: "Comprehensive training by UTCLI Solutions with Imran Afzal",
    details: [
      "Command-line to AI bridge",
      "Agentic automation principles",
      "Advanced Linux automation",
      "AI-driven system management",
    ],
  },
  {
    year: "2024",
    title: "Core Generator Development",
    category: "project",
    icon: "📝",
    description: "Built sophisticated AI-powered content generation workflow",
    details: [
      "Multi-agent content pipeline",
      "Competitor research automation",
      "Fact-checking integration",
      "Editorial QA workflow",
    ],
  },
  {
    year: "2024",
    title: "Nexe Agent Framework",
    category: "project",
    icon: "🧠",
    description: "Developed autonomous AI agent system with tool integration",
    details: [
      "Multi-step reasoning engine",
      "Dynamic tool selection",
      "Context-aware decisions",
      "Error recovery systems",
    ],
  },
  {
    year: "2024",
    title: "Oracle AI Agent Certificate",
    category: "learning",
    icon: "🏆",
    description: "Certified in AI agent development and deployment",
    details: [
      "Oracle AI technologies",
      "Agent architecture patterns",
      "Industry best practices",
      "Certification completion",
    ],
  },
  {
    year: "2024",
    title: "n8n Workflow Mastery",
    category: "achievement",
    icon: "⚡",
    description: "Developed 100+ production workflows across various industries",
    details: [
      "Complex workflow design",
      "API orchestration",
      "Error handling patterns",
      "Performance optimization",
    ],
  },
  {
    year: "2024",
    title: "AI Automation Architecture",
    category: "achievement",
    icon: "🏗️",
    description: "Designed scalable automation systems for enterprise clients",
    details: [
      "System architecture design",
      "Integration planning",
      "Automation strategy",
      "Implementation oversight",
    ],
  },
];

const JourneyCard: React.FC<{ item: JourneyItem; index: number }> = ({ item, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const categoryColors = {
    learning: "bg-blue-500/10 border-blue-500/30",
    achievement: "bg-green-500/10 border-green-500/30",
    project: "bg-accent/10 border-accent/30",
  };

  const categoryLabels = {
    learning: "Learning",
    achievement: "Achievement",
    project: "Project",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}
    >
      <div className="mb-12">
        {/* Content Box */}
        <motion.div
          className={`p-6 rounded-lg backdrop-blur-sm border transition-all hover:border-accent/60 ${categoryColors[item.category]}`}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {/* Year and Category */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <div className="text-accent font-cinzel text-sm tracking-widest uppercase">
                {item.year}
              </div>
              <div className="text-xs text-accent/60 font-mono">
                {categoryLabels[item.category]}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-cinzel text-cinematic-text-light mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-cinematic-text-muted text-sm leading-relaxed mb-3">
            {item.description}
          </p>

          {/* Details */}
          {item.details && (
            <ul className="space-y-1 text-xs text-cinematic-text-muted/80">
              {item.details.map((detail, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-accent mt-0.5">▸</span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Timeline Dot */}
        <div className="absolute w-6 h-6 bg-accent rounded-full border-4 border-cinematic-dark top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2">
          <motion.div
            className="absolute inset-0 bg-accent rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ opacity: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="journey" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="text-accent font-cinzel text-sm tracking-widest uppercase">
            🚀 Professional Path
          </motion.span>
          <motion.h2 className="text-display font-cinzel-deco text-cinematic-text-light mt-2 mb-4">
            My Journey
          </motion.h2>
          <motion.p className="text-cinematic-text-muted max-w-2xl mx-auto">
            A timeline of learning, achievements, and projects that shaped my expertise in AI automation engineering.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent transform -translate-x-1/2" />

          {/* Journey items */}
          <div className="space-y-8 md:space-y-16">
            {journeyData.map((item, index) => (
              <JourneyCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-accent/20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "8+", label: "Learning Programs" },
            { number: "100+", label: "Workflows Built" },
            { number: "2024", label: "Year of Focus" },
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
            Constantly learning and pushing the boundaries of AI automation.
          </p>
          <p className="text-accent font-cinzel text-sm tracking-widest uppercase">
            Currently focused on advancing AI agent capabilities and automation architecture
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
