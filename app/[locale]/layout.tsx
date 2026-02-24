import type { Metadata } from 'next'
import { Suspense } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`../../messages/${locale}.json`)).default
  const layout = messages.Layout as { title: string; description: string; keywords: string }
  return {
    title: layout.title,
    description: layout.description,
    keywords: layout.keywords,
    icons: {
      icon: '/images/logo.png',
      shortcut: '/images/logo.png',
      apple: '/images/logo.png',
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages ?? {}}>
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </NextIntlClientProvider>
  )
}
