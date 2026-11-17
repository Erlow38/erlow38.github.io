'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Navigation')
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname?.startsWith('/en') ? 'en' : 'fr'
  const otherLocale = currentLocale === 'fr' ? 'en' : 'fr'

  const navItems = [
    { name: t('home'), href: '#hero' },
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('journey'), href: '#parcours' },
    { name: t('contact'), href: '#contact' },
  ]

  const switchLocale = (locale: 'fr' | 'en') => {
    router.replace(`/${locale}`)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[var(--background)]">
      <div className="shell flex h-16 items-center justify-between">
        <a href="/cv/cv.pdf" download="Ethan-Ehrler-CV.pdf" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
          <span className="font-serif text-lg tracking-tight text-[var(--foreground)]">
            Ethan Ehrler
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => switchLocale(otherLocale)}
            className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label={otherLocale === 'en' ? 'English' : 'Français'}
          >
            {otherLocale}
          </button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t('closeMenu') : t('openMenu')}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center text-[var(--foreground)] lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="shell border-t border-[var(--line)] bg-[var(--background)] py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm text-[var(--foreground)]"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => switchLocale(otherLocale)}
            className="mt-2 w-full border-t border-[var(--line)] py-3 text-left text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
            aria-label={otherLocale === 'en' ? 'English' : 'Français'}
          >
            {otherLocale === 'en' ? 'English' : 'Français'}
          </button>
        </nav>
      )}
    </header>
  )
}

export default Navigation
