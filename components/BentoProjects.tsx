'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Rocket } from 'lucide-react'
import ProjectModal from './ProjectModal'

const BentoProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Rocket Decals',
      description: 'Site web et communauté Discord pour commander et télécharger des stickers personnalisés pour Rocket League',
      emoji: '🚗',
      color: 'from-violet-500 to-purple-600',
      tags: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'Blender'],
      size: 'large',
      fullDescription: 'Rocket Decals est un projet alliant site web et communauté Discord, permettant aux joueurs de Rocket League de commander et télécharger leurs propres stickers personnalisés, directement utilisables via BakkesMod et AlphaConsole.',
      images: ['/projects/rocket-decals/1.png', '/projects/rocket-decals/2.png'],
      demoUrl: 'https://rocket-decals.com',
      githubUrl: 'https://github.com/Rocket-Decals/rocket-decals.github.io',
      year: '2025',
      team: 'Solo',
    },
    {
      title: 'Flux Particulaire',
      description: 'Site web pour visualiser des flux de particules entre plusieurs fenêtres de navigateur en temps réel',
      emoji: '🌌',
      color: 'from-blue-500 to-cyan-600',
      tags: ['HTML', 'CSS', 'JavaScript', 'BroadcastChannel API'],
      size: 'small',
      fullDescription: 'Flux Particulaires est un site web permettant de visualiser des flux de particules entre plusieurs fenêtres de navigateur en temps réel.',
      images: ['/projects/flux-particulaire/1.mp4', '/projects/flux-particulaire/2.png'],
      demoUrl: 'https://www.ethan-ehrler.fr/flux-particulaire/',
      githubUrl: 'https://github.com/Erlow38/erlos',
      year: '2025',
      team: 'Solo',
    },
    {
      title: 'ErlOS',
      description: 'Gestionnaire de raccourcis imitant l\'interface d\'un OS',
      emoji: '💻​',
      color: 'from-pink-500 to-rose-600',
      tags: ['HTML', 'CSS', 'TypeScript', 'React'],
      size: 'small',
      fullDescription: 'ErlOS est un gestionnaire de raccourcis imitant l\'interface d\'un OS, permettant de créer, modifier et supprimer des raccourcis. Il permet également de créer des graphiques, jouer au démineur, contient divers outils de personnalisation et plus encore.',
      images: ['/projects/erlos/1.png', '/projects/erlos/2.png'],
      demoUrl: 'https://www.ethan-ehrler.fr/erlos/',
      githubUrl: 'https://github.com/Erlow38/erlos',
      year: '2024',
      team: 'Solo',
    },
    {
      title: 'Erplain',
      description: 'Solution de gestion tout-en-un',
      emoji: '📦​',
      color: 'from-green-500 to-emerald-600',
      tags: ['HTML', 'CSS', 'TypeScript', 'Vue.js', 'Laravel', 'GraphQL'],
      size: 'medium',
      fullDescription: 'Erplain est une solution de gestion tout-en-un conçue pour les petites et moyennes entreprises : elle centralise les ventes B2B, la gestion des stocks, les achats, les devis, bons de commande et factures. Elle permet un suivi en temps réel des niveaux de stock, automatise les réassorts et s’intègre avec des plateformes comme Shopify, QuickBooks Online ou Stripe.',
      images: ['/projects/erplain/1.png'],
      demoUrl: 'https://www.erplain.com/fr',
      year: '2024',
      team: '6 personnes',
    },
    {
      title: 'Supervision',
      description: 'Application de supervision dans la maintenance prédictive',
      emoji: '🔍​',
      color: 'from-orange-500 to-red-600',
      tags: ['HTML', 'CSS', 'TypeScript', 'React', 'Python'],
      size: 'medium',
      fullDescription: "Dans le cadre de mon alternance au sein de Sercel, j'ai eu l'occasion de travailler sur le projet Supervision. Les structures comme les éoliennes ou les ponts sont des structures très coûteuses qui finissent par se fragiliser, c'est pourquoi il est important de s'assurer de leur bonne intégrité. La solution de monitoring de Sercel offre la possibilité d'estimer la durée de vie d'une structure et de voir de nombreuses informations sur celle-ci. Cela est possible grâce à la solution de capteurs câblés en série (S-Morpho), de calcul de monitoring et de l'application de Supervision permettant de consulter de nombreux indicateurs sous forme de tableaux de bord.",
      images: ['/projects/supervision/1.png', '/projects/supervision/2.png'],
      year: '2023',
      team: '8 personnes',
    },
    {
      title: 'LOMET',
      description: 'Modélisateur de méthodologie de travail',
      emoji: '🎯​',
      color: 'from-green-500 to-emerald-600',
      tags: ['HTML', 'CSS', 'TypeScript', 'React', 'JointJS', 'Expressjs'],
      size: 'medium',
      fullDescription: 'LOMET est un modélisateur de méthodologie de travail permettant de réprésenter graphiquement celle-ci.',
      images: ['/projects/lomet/1.png', '/projects/lomet/2.png'],
      demoUrl: 'https://drive.google.com/file/d/1hpgYSliFsI8sSBSgMkX8zmwMjnmBtkAQ/view?usp=sharing',
      year: '2023',
      team: '2 personnes',
    },
    {
      title: 'Erlinks',
      description: 'Site de gestion de liens personnels',
      emoji: '🔗​',
      color: 'from-pink-500 to-rose-600',
      tags: ['HTML', 'CSS', 'JavaScript'],
      size: 'small',
      fullDescription: 'Erlinks est un site de gestion de liens personnels inspiré de Linktree.',
      images: ['/projects/erlinks/1.png', '/projects/erlinks/2.png'],
      demoUrl: 'https://erlinks.github.io/',
      githubUrl: 'https://github.com/erlinks/erlinks.github.io',
      year: '2025',
      team: 'Solo',
    },
    {
      title: 'Intemporal',
      description: 'Site de vente aux enchères de montres',
      emoji: '🕒​',
      color: 'from-indigo-500 to-blue-600',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQLite', 'UML', 'WebSocket'],
      size: 'small',
      fullDescription: 'Dans le cadre de ma formation à l\'IUT 2 de Grenoble, j\'ai eu l\'occasion de travailler sur le projet Intemporal. Ce projet était un site de vente aux enchères de montres, permettant de vendre et d\'acheter des montres.',
      images: ['/projects/intemporal/1.png', '/projects/intemporal/2.png', '/projects/intemporal/3.png', '/projects/intemporal/4.png'],
      demoUrl: 'https://docs.google.com/document/d/1ocvxQ9nPROopoYBKqNfltIVitiJN1vFm_hQEb5EWIsM/edit?tab=t.0#heading=h.z6ne0og04bp5',
      year: '2023',
      team: '6 personnes',
    },
  ]

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
              Projets Sélectionnés
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Une collection de projets variés et innovants
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px] max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setExpandedProject(index)}
              onHoverEnd={() => setExpandedProject(null)}
              className={`${getSizeClasses(project.size)} relative group cursor-pointer`}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{
                  rotateY: expandedProject === index ? 5 : 0,
                  z: expandedProject === index ? 50 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`w-full h-full bg-gradient-to-br ${project.color} rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20 z-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                </div>

                {/* Content that will be blurred */}
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
                  {/* Spacer for buttons */}
                  <div className="h-[60px] md:h-[70px]"></div>
                </div>

                {/* Blur overlay that covers entire card */}
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-[3px] z-[15] rounded-3xl pointer-events-none"
                  />
                )}

                {/* Action button - shown on hover - always on top */}
                <motion.button
                  onClick={() => setSelectedProject(index)}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: expandedProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/30 backdrop-blur-md hover:bg-white/40 text-white rounded-xl py-2.5 md:py-3 px-4 flex items-center justify-center gap-2 text-sm md:text-base font-bold transition-colors shadow-lg border border-white/20 z-[20]"
                >
                  <Eye size={18} className="flex-shrink-0" />
                  <span>Voir les détails</span>
                </motion.button>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: expandedProject === index ? ['0%', '200%'] : '0%',
                  }}
                  transition={{ duration: 0.8 }}
                />

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="https://github.com/Erlow38" // 👈 Mettez votre lien GitHub ou autre ici
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full text-white font-bold text-lg shadow-2xl items-center gap-3"
          >
            <Rocket size={24} />
            Voir tous les projets
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
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

