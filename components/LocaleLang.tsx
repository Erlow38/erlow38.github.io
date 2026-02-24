'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function LocaleLang() {
  const pathname = usePathname()
  useEffect(() => {
    const locale = pathname?.startsWith('/en') ? 'en' : 'fr'
    document.documentElement.lang = locale
  }, [pathname])
  return null
}
