'use client'

import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Contact = () => {
  const t = useTranslations('Contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:ethan.ehrler@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`De: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      titleKey: 'email' as const,
      value: 'ethan.ehrler@outlook.com',
      link: 'mailto:ethan.ehrler@outlook.com',
    },
    {
      titleKey: 'phone' as const,
      value: '+33 6 16 52 07 25',
      link: 'tel:+33616520725',
    },
    {
      titleKey: 'location' as const,
      valueKey: 'locationValue' as const,
      link: null as string | null,
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Erlow38', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ethan-ehrler-b5855a251/', label: 'LinkedIn' },
    { icon: ArrowUpRight, href: 'https://erlinks.github.io/', label: t('moreNetworks') },
  ]

  const fieldClass =
    'w-full border-b border-[var(--line)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]'

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl text-[var(--foreground)] md:text-5xl">{t('title')}</h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-serif text-3xl text-[var(--foreground)]">{t('stayInTouch')}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
              {t('stayInTouchDesc')}
            </p>

            <dl className="mt-8 border-t border-[var(--line)]">
              {contactInfo.map((info) => (
                <div key={info.titleKey} className="grid grid-cols-[120px_1fr] gap-4 border-b border-[var(--line)] py-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{t(info.titleKey)}</dt>
                  <dd className="text-sm text-[var(--foreground)]">
                    {info.link ? (
                      <a href={info.link} className="transition-colors hover:text-[var(--accent)]">
                        {info.value}
                      </a>
                    ) : (
                      t(info.valueKey)
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h3 className="font-serif text-3xl text-[var(--foreground)]">{t('sendMessage')}</h3>
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder={t('namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder={t('emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder={t('subjectPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder={t('messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-5 py-2.5 text-sm text-[var(--ink)] transition-opacity hover:opacity-85"
              >
                {t('submit')}
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>

        <p className="mt-20 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
          {t('footer')} <span className="text-[var(--foreground)]">Ethan Ehrler</span>
        </p>
      </div>
    </section>
  )
}

export default Contact
