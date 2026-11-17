'use client'

import { Code, Palette, Gauge, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

const About = () => {
  const t = useTranslations('About')

  const skills = [
    { icon: Code, titleKey: 'development' as const, descKey: 'developmentDesc' as const },
    { icon: Palette, titleKey: 'design' as const, descKey: 'designDesc' as const },
    { icon: Gauge, titleKey: 'performance' as const, descKey: 'performanceDesc' as const },
    { icon: Users, titleKey: 'collaboration' as const, descKey: 'collaborationDesc' as const },
  ]

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl text-[var(--foreground)] md:text-5xl">{t('title')}</h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <article
                key={skill.titleKey}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <Icon size={18} strokeWidth={1.5} className="text-[var(--accent)]" />
                <h3 className="mt-6 font-serif text-2xl text-[var(--foreground)]">{t(skill.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t(skill.descKey)}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
