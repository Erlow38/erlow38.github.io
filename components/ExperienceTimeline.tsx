'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import React from 'react'

const ExperienceTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      year: 'Fév. - Mars 2026',
      title: 'Cours de vacation',
      company: 'IUT 2 de Grenoble',
      description: 'Enseignement en parallèle de mon poste actuel chez Erplain.',
      icon: '👨‍🏫',
      color: 'from-neutral-600 to-neutral-500',
      type: 'education',
    },
    {
      year: 'Oct. 2024 - présent',
      title: 'Développeur web',
      company: 'Erplain',
      description: 'Développement de l\'application Erplain',
      icon: '💼',
      color: 'from-neutral-600 to-neutral-500',
      type: 'work',
    },
    {
      year: 'Sept. 2023 - Août 2024',
      title: 'Alternance développeur web',
      company: 'Sercel',
      description: 'Développement de l\'application de supervision dans la maintenance prédictive',
      icon: '🏆',
      color: 'from-neutral-600 to-neutral-500',
      type: 'award',
    },
    {
      year: 'Avr. - Juin 2023',
      title: 'Stage développeur web',
      company: 'LIG',
      description: "Extension de l'outil LOMET en support à l'ingénierie des méthodes",
      icon: '🔧',
      color: 'from-neutral-600 to-neutral-500',
      type: 'work',
    },
    {
      year: 'Sept. 2021 - Juil. 2024',
      title: 'BUT Informatique',
      company: 'IUT 2 de Grenoble',
      description: 'Formation en informatique',
      icon: '🎓',
      color: 'from-neutral-600 to-neutral-500',
      type: 'education',
    },
  ]

  return (
    <section id="parcours" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={isInView ? { rotate: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">⏳</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-500 bg-clip-text text-transparent">
              Mon Parcours
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-600 via-neutral-500 to-neutral-600 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-0 md:left-[calc(50%_-_24px)] w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg z-10 border-2 border-white/20`}
                >
                  {exp.icon}
                </motion.div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div
                    className="glass-effect rounded-3xl p-6 md:p-8 border border-white/[0.08] hover:border-white/20 relative overflow-visible group transition-all duration-300"
                  >
                    {/* Year badge */}
                    <div className={`absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full text-white font-black text-sm shadow-lg z-20`}>
                      {exp.year}
                    </div>

                    <div className="mb-4 pr-16">
                      <h3 className="text-xl md:text-2xl font-black text-neutral-100 mb-2">{exp.title}</h3>
                      <p className="text-neutral-400 font-semibold mb-3">{exp.company}</p>
                      <p className="text-neutral-500 text-sm md:text-base">{exp.description}</p>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline

