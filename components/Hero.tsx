'use client'

import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

const CAREER_START = new Date(2023, 8, 1)

function yearsOfExperience(from: Date, now = new Date()) {
  let years = now.getFullYear() - from.getFullYear()
  const beforeAnniversary =
    now.getMonth() < from.getMonth() ||
    (now.getMonth() === from.getMonth() && now.getDate() < from.getDate())
  if (beforeAnniversary) years -= 1
  return Math.max(0, years)
}

const Hero = () => {
  const t = useTranslations('Hero')
  const years = yearsOfExperience(CAREER_START)

  const links = [
    { href: 'https://github.com/Erlow38', label: 'GitHub', icon: Github, external: true },
    { href: 'https://www.linkedin.com/in/ethan-ehrler-b5855a251/', label: 'LinkedIn', icon: Linkedin, external: true },
    { href: 'mailto:ethan.ehrler@outlook.com', label: 'Email', icon: Mail, external: false },
    { href: 'https://erlinks.github.io/', label: t('moreNetworks'), icon: ArrowUpRight, external: true },
  ]

  return (
    <section id="hero" className="relative flex min-h-screen items-center pb-10 pt-28">
      <div className="shell relative z-10">
        <div className="grid auto-rows-[108px] grid-cols-12 gap-3 sm:auto-rows-[120px] md:auto-rows-[132px] md:gap-4">
          <div className="col-span-12 row-span-3 flex flex-col justify-between rounded-2xl bg-[var(--paper)] p-6 text-[var(--ink)] md:col-span-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink)]/55">{t('brand')}</p>
            <div>
              <h1 className="font-serif text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
                {t('title1')}
                <br />
                <span className="italic text-[var(--ink)]/55">{t('title2')}</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink)]/75 md:text-base">
                {t('intro')}
              </p>
            </div>
          </div>

          <a
            href="/cv/cv.pdf"
            download="Ethan-Ehrler-CV.pdf"
            className="col-span-6 row-span-2 flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)] md:col-span-4 md:p-6"
          >
            <span className="font-serif text-5xl text-[var(--paper)] md:text-6xl">EE</span>
            <span className="min-w-0">
              <span className="block text-sm text-[var(--foreground)]">Ethan Ehrler</span>
              <span className="mt-0.5 block text-[10px] leading-tight text-[var(--muted)] sm:text-xs">
                {t('cv')}
              </span>
            </span>
          </a>

          <div className="col-span-6 row-span-2 flex flex-col justify-end rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 md:col-span-4 md:row-span-1 md:p-6">
            <p className="font-serif text-4xl leading-none text-[var(--foreground)]" suppressHydrationWarning>
              {years}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{t('experienceYears', { count: years })}</p>
          </div>

          <div className="col-span-12 row-span-2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 md:col-span-5 md:p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t('techStack')}</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Python', 'Figma'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-sm text-[var(--foreground)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 row-span-2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 md:col-span-3 md:p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t('contact')}</p>
            <div className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2.5 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                  >
                    <Icon size={15} strokeWidth={1.5} className="text-[var(--muted)]" />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>

          <a
            href="#projects"
            className="col-span-12 row-span-1 flex flex-col justify-between rounded-2xl border border-[var(--line)] p-6 text-[var(--foreground)] transition-colors hover:border-[var(--accent)] md:col-span-4 md:row-span-2"
          >
            <span className="text-sm">{t('seeProjects')}</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
