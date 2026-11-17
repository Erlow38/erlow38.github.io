'use client'

import { useTranslations } from 'next-intl'

const ExperienceTimeline = () => {
  const t = useTranslations('Experience')

  const experienceKeys = ['vacation', 'erplain', 'sercel', 'lig', 'iut'] as const

  const experiences = experienceKeys.map((key) => ({
    year: t(`${key}.year`),
    title: t(`${key}.title`),
    company: t(`${key}.company`),
    description: t(`${key}.description`),
  }))

  return (
    <section id="parcours" className="py-20 md:py-28">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl text-[var(--foreground)] md:text-5xl">{t('title')}</h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="border-t border-[var(--line)]">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="grid gap-2 border-b border-[var(--line)] py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <p className="text-sm text-[var(--accent)] md:col-span-3">{exp.year}</p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl text-[var(--foreground)] md:text-3xl">{exp.title}</h3>
                <p className="mt-1 text-sm text-[var(--foreground)]">{exp.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
