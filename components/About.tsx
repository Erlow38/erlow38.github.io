'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Rocket, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Développement',
      description: 'React, Next.js, TypeScript, Vue.js, Angular, Python',
      emoji: '💻',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Palette size={32} />,
      title: 'Design',
      description: 'UI/UX, Figma, Adobe Creative Suite',
      emoji: '🎨',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance',
      description: 'Optimisation, SEO, Accessibilité',
      emoji: '⚡',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Agile, Git, Communication',
      emoji: '🤝',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">👋</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              À Propos de Moi
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Passionné par la création de projets innovants et de qualité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
              className="glass-effect rounded-3xl p-6 md:p-8 relative overflow-hidden border-2 border-purple-500/20 hover:border-purple-500/40 transition-all h-full group cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative text-center">
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {skill.emoji}
                </div>
                <h3 className="text-xl font-black text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

