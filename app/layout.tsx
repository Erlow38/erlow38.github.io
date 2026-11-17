import './globals.css'
import { Inter, Instrument_Serif } from 'next/font/google'
import LocaleLang from '@/components/LocaleLang'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  title: 'Ethan Ehrler | Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        <LocaleLang />
        {children}
      </body>
    </html>
  )
}
