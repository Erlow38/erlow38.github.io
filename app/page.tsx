'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()
  useEffect(() => {
    const preferred = typeof navigator !== 'undefined' && navigator.language?.startsWith('en')
      ? 'en'
      : 'fr'
    router.replace(`/${preferred}`)
  }, [router])
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-400">Chargement…</p>
    </main>
  )
}
