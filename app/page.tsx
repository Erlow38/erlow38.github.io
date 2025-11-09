'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import InteractiveSkills from '@/components/InteractiveSkills'
import BentoProjects from '@/components/BentoProjects'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <CustomCursor /> */}
      <Navigation />
      <Hero />
      <About />
      <InteractiveSkills />
      <BentoProjects />
      <ExperienceTimeline />
      <Contact />
    </main>
  )
}

