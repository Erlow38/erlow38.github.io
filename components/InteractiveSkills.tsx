'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const InteractiveSkills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'Next.js', color: '#ffffff', icon: '▲' },
    { name: 'Vue.js', color: '#4FC08D', icon: '💻' },
    { name: 'Angular', color: '#DD0031', icon: '🔗' },
    { name: 'TypeScript', color: '#3178C6', icon: '⚪' },
    { name: 'JavaScript', color: '#F24E1E', icon: '🟡' },
    { name: 'HTML', color: '#FF2D20', icon: '🟠' },
    { name: 'CSS', color: '#007bff', icon: '🔵' },
    { name: 'Python', color: '#3465A4', icon: '🐍' },
    { name: 'Git', color: '#F05032', icon: '📦' },
    { name: 'REST API', color: '#FF6C37', icon: '🔌' },
    { name: 'Figma', color: '#F24E1E', icon: '🎨' },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🛠️</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies & Outils
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Une sélection des technologies avec lesquelles je travaille au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
              }}
              className="glass-effect p-4 md:p-6 rounded-3xl group cursor-pointer relative border-2 border-white/10 hover:border-purple-500/30 transition-all hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />

              {/* Content */}
              <div className="relative flex flex-col items-center justify-center gap-2 md:gap-3">
                {/* Icon */}
                <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Skill name */}
                <h3 
                  className="text-gray-300 font-semibold text-center text-xs md:text-sm transition-colors duration-300 group-hover:text-white"
                >
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveSkills

