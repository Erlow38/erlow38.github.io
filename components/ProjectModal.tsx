'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
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
  const t = useTranslations('ProjectModal')

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70"
          />

          <div className="fixed inset-0 z-[101] overflow-y-auto overscroll-contain">
            <div className="flex min-h-screen items-center justify-center px-4 py-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl"
              >
                <div className="max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--line)] bg-[var(--background)]">
                  <div className="border-b border-[var(--line)] p-8 md:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                          {[project.year, project.team].filter(Boolean).join(' · ')}
                        </p>
                        <h2 className="mt-3 font-serif text-4xl text-[var(--foreground)] md:text-5xl">
                          {project.title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-[var(--muted)]">{project.description}</p>
                      </div>
                      <button
                        onClick={onClose}
                        className="flex h-10 w-10 shrink-0 items-center justify-center text-[var(--foreground)]"
                        aria-label="Close"
                      >
                        <X size={20} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    {project.fullDescription && (
                      <div className="mb-10">
                        <h3 className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{t('aboutProject')}</h3>
                        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--foreground)]">
                          {project.fullDescription}
                        </p>
                      </div>
                    )}

                    {project.images && project.images.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{t('preview')}</h3>
                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                          {project.images.map((media, idx) => {
                            const isVideo = media.match(/\.(mp4|webm|mov)$/i)
                            return (
                              <div
                                key={idx}
                                className="relative aspect-video overflow-hidden rounded-xl border border-[var(--line)] bg-black/20"
                                onClick={() => !isVideo && setLightboxImage(media)}
                              >
                                {isVideo ? (
                                  <video
                                    src={media}
                                    controls
                                    loop
                                    playsInline
                                    className="h-full w-full object-cover"
                                    preload="auto"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {t('videoNotSupported')}
                                  </video>
                                ) : (
                                  <img
                                    src={media}
                                    alt={`${project.title} - ${idx + 1}`}
                                    className="h-full w-full cursor-zoom-in object-cover"
                                  />
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-6">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                        >
                          <ExternalLink size={16} strokeWidth={1.5} />
                          {t('viewDemo')}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                        >
                          <Github size={16} strokeWidth={1.5} />
                          {t('viewCode')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {lightboxImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxImage(null)}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxImage(null)
                  }}
                  className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-white"
                  aria-label="Close"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
                <img
                  src={lightboxImage}
                  alt=""
                  className="max-h-[90vh] max-w-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
