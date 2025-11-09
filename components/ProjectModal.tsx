'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Calendar, Users, ZoomIn } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    emoji: string
    color: string
    tags: string[]
    fullDescription?: string
    images?: string[]
    demoUrl?: string
    githubUrl?: string
    year?: string
    team?: string
  }
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null)
        } else {
          onClose()
        }
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose, lightboxImage])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] overflow-y-auto overscroll-contain">
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl"
              >
              <div className={`glass-effect rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto`}>
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${project.color} p-8 md:p-12 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
                  
                  <div className="relative">
                    {/* Close button */}
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute -top-2 -right-2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border-2 border-white/20"
                    >
                      <X size={20} />
                    </motion.button>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, type: 'spring' }}
                      className="text-7xl mb-4"
                    >
                      {project.emoji}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                      {project.title}
                    </h2>
                    <p className="text-white/90 text-lg mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 bg-black/40 backdrop-blur-xl">
                  {/* Project details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {project.year && (
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                          <Calendar className="text-purple-400" size={24} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide">Année</p>
                          <p className="text-white font-semibold">{project.year}</p>
                        </div>
                      </div>
                    )}
                    {project.team && (
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                          <Users className="text-pink-400" size={24} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide">Équipe</p>
                          <p className="text-white font-semibold">{project.team}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Full description */}
                  {project.fullDescription && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-4">À propos du projet</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>
                  )}

                  {/* Media Gallery (Images & Videos) */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-4">Aperçu</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((media, idx) => {
                          const isVideo = media.match(/\.(mp4|webm|mov)$/i)
                          
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="rounded-2xl overflow-hidden border-2 border-white/10 hover:border-purple-500/40 transition-colors bg-black/20 aspect-video relative group cursor-pointer"
                              onClick={() => !isVideo && setLightboxImage(media)}
                            >
                              {isVideo ? (
                                <video 
                                  src={media}
                                  controls
                                  loop
                                  playsInline
                                  className="w-full h-full object-cover"
                                  preload="auto"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Votre navigateur ne supporte pas les vidéos.
                                </video>
                              ) : (
                                <>
                                  <img 
                                    src={media} 
                                    alt={`${project.title} - ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                  {/* Zoom overlay */}
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                      <ZoomIn className="text-white" size={24} />
                                    </div>
                                  </div>
                                </>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-w-[200px] px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl text-white font-black hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
                      >
                        <ExternalLink size={20} />
                        <span>Voir la démo</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-w-[200px] px-6 py-4 glass-effect border-2 border-white/20 rounded-2xl text-white font-bold hover:border-purple-500/50 transition-all flex items-center justify-center gap-3"
                      >
                        <Github size={20} />
                        <span>Voir le code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Lightbox for full-size images */}
          <AnimatePresence>
            {lightboxImage && (
              <>
                {/* Lightbox backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setLightboxImage(null)}
                  className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[200] flex items-center justify-center p-4"
                >
                  {/* Close button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxImage(null)
                    }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border-2 border-white/20 z-10"
                  >
                    <X size={24} />
                  </motion.button>

                  {/* Full-size image */}
                  <motion.img
                    src={lightboxImage}
                    alt="Full size preview"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

