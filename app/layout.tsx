import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ethan Ehrler | Web Designer & Développeur',
  description: 'Portfolio de Ethan Ehrler, web designer et développeur',
  keywords: 'web design, portfolio, développeur, designer, créatif',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {/* Fixed background - Y2K metallic orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-500/6 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

