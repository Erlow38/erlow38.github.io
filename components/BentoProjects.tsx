'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Eye, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ProjectModal from './ProjectModal'

const BentoProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const t = useTranslations('Projects')

  const projectKeys = [
    'rocketDecals',
    'fluxParticulaire',
    'erlos',
    'erplain',
    'supervision',
    'lomet',
    'erlinks',
    'intemporal',
  ] as const

  const projectsData = [
    { emoji: '🚗', color: 'from-violet-500 to-purple-600', tags: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'Blender'], size: 'large' as const, images: ['/projects/rocket-decals/1.png', '/projects/rocket-decals/2.png'], demoUrl: 'https://rocket-decals.com', githubUrl: 'https://github.com/Rocket-Decals/rocket-decals.github.io', year: '2025', teamKey: 'people2' as const },
    { emoji: '🌌', color: 'from-blue-500 to-cyan-600', tags: ['HTML', 'CSS', 'JavaScript', 'BroadcastChannel API'], size: 'small' as const, images: ['/projects/flux-particulaire/1.mp4', '/projects/flux-particulaire/2.png'], demoUrl: 'https://www.ethan-ehrler.fr/flux-particulaire/', githubUrl: 'https://github.com/Erlow38/flux-particulaire', year: '2025', teamKey: 'solo' as const },
    { emoji: '💻​', color: 'from-pink-500 to-rose-600', tags: ['HTML', 'CSS', 'TypeScript', 'React'], size: 'small' as const, images: ['/projects/erlos/1.png', '/projects/erlos/2.png'], demoUrl: 'https://www.ethan-ehrler.fr/erlos/', githubUrl: 'https://github.com/Erlow38/erlos', year: '2024', teamKey: 'solo' as const },
    { emoji: '📦​', color: 'from-green-500 to-emerald-600', tags: ['HTML', 'CSS', 'TypeScript', 'Vue.js', 'Laravel', 'GraphQL'], size: 'medium' as const, images: ['/projects/erplain/1.png'], demoUrl: 'https://www.erplain.com/fr', year: '2024', teamKey: 'people6' as const },
    { emoji: '🔍​', color: 'from-orange-500 to-red-600', tags: ['HTML', 'CSS', 'TypeScript', 'React', 'Python'], size: 'medium' as const, images: ['/projects/supervision/1.png', '/projects/supervision/2.png'], year: '2023', teamKey: 'people8' as const },
    { emoji: '🎯​', color: 'from-green-500 to-emerald-600', tags: ['HTML', 'CSS', 'TypeScript', 'React', 'JointJS', 'Expressjs'], size: 'medium' as const, images: ['/projects/lomet/1.png', '/projects/lomet/2.png'], demoUrl: 'https://drive.google.com/file/d/1hpgYSliFsI8sSBSgMkX8zmwMjnmBtkAQ/view?usp=sharing', year: '2023', teamKey: 'people2' as const },
    { emoji: '🔗​', color: 'from-pink-500 to-rose-600', tags: ['HTML', 'CSS', 'JavaScript'], size: 'small' as const, images: ['/projects/erlinks/1.png', '/projects/erlinks/2.png'], demoUrl: 'https://erlinks.github.io/', githubUrl: 'https://github.com/erlinks/erlinks.github.io', year: '2025', teamKey: 'solo' as const },
    { emoji: '🕒​', color: 'from-indigo-500 to-blue-600', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQLite', 'UML', 'WebSocket'], size: 'small' as const, images: ['/projects/intemporal/1.png', '/projects/intemporal/2.png', '/projects/intemporal/3.png', '/projects/intemporal/4.png', '/projects/intemporal/5.jpg'], demoUrl: 'https://docs.google.com/document/d/1ocvxQ9nPROopoYBKqNfltIVitiJN1vFm_hQEb5EWIsM/edit?tab=t.0#heading=h.z6ne0og04bp5', year: '2023', teamKey: 'people6' as const },
  ]

  const projectTitles = ['Rocket Decals', 'Flux Particulaire', 'ErlOS', 'Erplain', 'Supervision', 'LOMET', 'Erlinks', 'Intemporal']

  const projects = projectKeys.map((key, i) => ({
    title: projectTitles[i],
    description: t(`${key}.description`),
    fullDescription: t(`${key}.fullDescription`),
    emoji: projectsData[i].emoji,
    color: projectsData[i].color,
    tags: projectsData[i].tags,
    size: projectsData[i].size,
    images: projectsData[i].images,
    demoUrl: projectsData[i].demoUrl,
    githubUrl: projectsData[i].githubUrl,
    year: projectsData[i].year,
    team: t(`team.${projectsData[i].teamKey}`),
  }))

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-12 md:col-span-6 row-span-2'
      case 'medium':
        return 'col-span-12 md:col-span-6 lg:col-span-4 row-span-1'
      default:
        return 'col-span-12 md:col-span-6 row-span-1'
    }
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
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
            <span className="text-6xl">💼</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px] max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setExpandedProject(index)}
              onMouseLeave={() => setExpandedProject(null)}
              className={`${getSizeClasses(project.size)} relative group cursor-pointer`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${project.color} rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-purple-500/20`}
              >
                <div className="absolute inset-0 opacity-20 z-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                </div>

                <div className="relative h-full flex flex-col p-1 z-[5]">
                  <div className="flex-1 min-h-0">
                    <motion.div
                      animate={{ scale: expandedProject === index ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-5xl mb-2 md:mb-3 inline-block"
                    >
                      {project.emoji}
                    </motion.div>
                    <h3 className="text-lg md:text-2xl font-black text-white mb-1 md:mb-2 line-clamp-1 md:line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm mb-2 md:mb-3 line-clamp-1 md:line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-[60px] md:h-[70px]"></div>
                </div>

                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/20 transition-all duration-300 z-[15] rounded-3xl pointer-events-none" />

                <button
                  onClick={() => setSelectedProject(index)}
                  className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/30 backdrop-blur-md hover:bg-white/40 active:scale-95 text-white rounded-xl py-2.5 md:py-3 px-4 flex items-center justify-center gap-2 text-sm md:text-base font-bold transition-all shadow-lg border border-white/20 z-[20] opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <Eye size={18} className="flex-shrink-0" />
                  <span>{t('seeDetails')}</span>
                </button>

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="https://github.com/Erlow38"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full text-white font-bold text-lg shadow-2xl items-center gap-3"
          >
            <Rocket size={24} />
            {t('viewAll')}
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </section>
  )
}

export default BentoProjects
