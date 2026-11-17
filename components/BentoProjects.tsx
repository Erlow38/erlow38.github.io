'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ProjectModal from './ProjectModal'

const BentoProjects = () => {
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
    { tags: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'Blender'], size: 'large' as const, images: ['/projects/rocket-decals/1.png', '/projects/rocket-decals/2.png'], demoUrl: 'https://rocket-decals.com', githubUrl: 'https://github.com/Rocket-Decals/rocket-decals.github.io', year: '2025', teamKey: 'people2' as const },
    { tags: ['HTML', 'CSS', 'JavaScript', 'BroadcastChannel API'], size: 'small' as const, images: ['/projects/flux-particulaire/1.mp4', '/projects/flux-particulaire/2.png'], demoUrl: 'https://www.ethan-ehrler.fr/flux-particulaire/', githubUrl: 'https://github.com/Erlow38/flux-particulaire', year: '2025', teamKey: 'solo' as const },
    { tags: ['HTML', 'CSS', 'TypeScript', 'React'], size: 'small' as const, images: ['/projects/erlos/1.png', '/projects/erlos/2.png'], demoUrl: 'https://www.ethan-ehrler.fr/erlos/', githubUrl: 'https://github.com/Erlow38/erlos', year: '2024', teamKey: 'solo' as const },
    { tags: ['HTML', 'CSS', 'TypeScript', 'Vue.js', 'Laravel', 'GraphQL'], size: 'medium' as const, images: ['/projects/erplain/1.png'], demoUrl: 'https://www.erplain.com/fr', year: '2024', teamKey: 'people6' as const },
    { tags: ['HTML', 'CSS', 'TypeScript', 'React', 'Python'], size: 'medium' as const, images: ['/projects/supervision/1.png', '/projects/supervision/2.png'], year: '2023', teamKey: 'people8' as const },
    { tags: ['HTML', 'CSS', 'TypeScript', 'React', 'JointJS', 'Expressjs'], size: 'medium' as const, images: ['/projects/lomet/1.png', '/projects/lomet/2.png'], demoUrl: 'https://drive.google.com/file/d/1hpgYSliFsI8sSBSgMkX8zmwMjnmBtkAQ/view?usp=sharing', year: '2023', teamKey: 'people2' as const },
    { tags: ['HTML', 'CSS', 'JavaScript'], size: 'small' as const, images: ['/projects/erlinks/1.png', '/projects/erlinks/2.png'], demoUrl: 'https://erlinks.github.io/', githubUrl: 'https://github.com/erlinks/erlinks.github.io', year: '2025', teamKey: 'solo' as const },
    { tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQLite', 'UML', 'WebSocket'], size: 'small' as const, images: ['/projects/intemporal/1.png', '/projects/intemporal/2.png', '/projects/intemporal/3.png', '/projects/intemporal/4.png', '/projects/intemporal/5.jpg'], demoUrl: 'https://docs.google.com/document/d/1ocvxQ9nPROopoYBKqNfltIVitiJN1vFm_hQEb5EWIsM/edit?tab=t.0#heading=h.z6ne0og04bp5', year: '2023', teamKey: 'people6' as const },
  ]

  const projectTitles = ['Rocket Decals', 'Flux Particulaire', 'ErlOS', 'Erplain', 'Supervision', 'LOMET', 'Erlinks', 'Intemporal']

  const projects = projectKeys.map((key, i) => ({
    title: projectTitles[i],
    description: t(`${key}.description`),
    fullDescription: t(`${key}.fullDescription`),
    tags: projectsData[i].tags,
    size: projectsData[i].size,
    images: projectsData[i].images,
    cover: projectsData[i].images.find((src) => !/\.(mp4|webm|mov)$/i.test(src)),
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
    <section id="projects" className="py-20 md:py-28">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl text-[var(--foreground)] md:text-5xl">{t('title')}</h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-12 gap-3 md:auto-rows-[240px] md:gap-4">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(index)}
              className={`${getSizeClasses(project.size)} group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-left`}
            >
              {project.cover && (
                <img
                  src={project.cover}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
              <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/70">{project.year}</p>
                <h3 className="mt-1 font-serif text-2xl text-white md:text-3xl">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/75">{project.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/Erlow38"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {t('viewAll')}
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
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
