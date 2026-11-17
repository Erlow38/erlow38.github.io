'use client'

import { useTranslations } from 'next-intl'

const InteractiveSkills = () => {
  const t = useTranslations('Skills')

  const groups = [
    { title: t('interface'), items: ['React', 'Next.js', 'Vue.js', 'Angular', 'HTML', 'CSS'] },
    { title: t('languages'), items: ['TypeScript', 'JavaScript', 'Python', 'Laravel'] },
    { title: t('tools'), items: ['Git', 'REST API', 'Figma'] },
  ]

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl text-[var(--foreground)] md:text-5xl">{t('title')}</h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{group.title}</p>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-[var(--line)] pb-3 text-sm text-[var(--foreground)] last:border-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveSkills
