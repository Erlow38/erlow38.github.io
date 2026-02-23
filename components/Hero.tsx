'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Sparkles, Zap, Code2, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-32 pb-10 flex items-center">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}
      />

      <div className="container mx-auto px-4 md:px-6 w-full relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[100px] sm:auto-rows-[120px] md:auto-rows-[140px] max-w-7xl mx-auto">
          
          {/* Main Title Card - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8 row-span-3 md:row-span-3 rounded-3xl p-6 md:p-8 relative overflow-hidden group border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.5)]"
            style={{
              background: 'linear-gradient(145deg, #171717 0%, #262626 20%, #404040 45%, #525252 55%, #262626 80%, #0a0a0a 100%)',
            }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-60" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Sparkles className="text-neutral-300" size={18} />
                <span className="text-neutral-400 font-mono text-xs md:text-sm">Erlow</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-4 leading-tight bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Designer<br />
                <span className="text-neutral-500">& Développeur</span>
              </h1>
              <p className="text-neutral-300 text-sm md:text-base lg:text-lg max-w-xl">
              Développeur web passionné par le design et l’expérience utilisateur. J’aime créer des interfaces modernes, fluides et esthétiques. J’apporte une touche unique à chaque projet 🚀
              </p>
            </div>

            {/* Chrome highlight */}
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"
            />
          </motion.div>

          {/* Profile Image Card - chrome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-4 row-span-2 rounded-3xl p-6 relative overflow-hidden group border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            style={{
              background: 'linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 40%, #404040 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-8xl transition-transform duration-300 group-hover:scale-110">👨‍💻</div>
            </div>
            <div className="absolute bottom-4 left-4 text-neutral-200 font-bold">Ethan Ehrler</div>
          </motion.div>

          {/* Stats Card - chrome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-4 row-span-2 md:row-span-1 glass-effect rounded-3xl p-6 relative overflow-hidden border border-white/[0.08]"
          >
            <div className="flex flex-col md:flex-row items-center justify-between h-full">
              <div>
                <div className="text-3xl md:text-3xl font-black text-neutral-100">30+</div>
                <div className="text-sm text-neutral-500">Projets réalisés</div>
              </div>
              <Code2 className="text-neutral-400 mt-4 md:mt-0" size={32} />
            </div>
          </motion.div>

          {/* Skills Preview - chrome bento */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onHoverStart={() => setHoveredCard('skills')}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-12 md:col-span-5 row-span-2 glass-effect rounded-3xl p-6 relative overflow-hidden border border-white/[0.08] group"
          >
            <div className="text-neutral-100 font-bold mb-4 flex items-center gap-2 text-base">
              <Zap className="text-neutral-400" size={20} />
              Stack Technique
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Python', 'Figma'].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-3 py-1 bg-white/5 text-neutral-300 rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <motion.div
              animate={{ rotate: hoveredCard === 'skills' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-5 -right-5 text-9xl opacity-[0.07] text-white"
            >
              ⚡
            </motion.div>
          </motion.div>

          {/* Contact Links - chrome bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-12 md:col-span-3 row-span-3 md:row-span-2 glass-effect rounded-3xl p-6 relative overflow-hidden border border-white/[0.08]"
          >
            <div className="text-neutral-100 font-bold mb-4 text-lg">Contact</div>
            <div className="space-y-3 md:space-y-3">
              <a
                href="https://github.com/Erlow38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-neutral-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-neutral-300">
                  <Github size={20} />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-ehrler-b5855a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-neutral-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-neutral-300">
                  <Linkedin size={20} />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:ethan.ehrler@outlook.com"
                className="flex items-center gap-3 text-neutral-400 hover:text-neutral-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-neutral-300">
                  <Mail size={20} />
                </div>
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://erlinks.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-neutral-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-neutral-300">
                  <MoreHorizontal size={20} />
                </div>
                <span className="font-medium">Plus de réseaux</span>
              </a>
            </div>
          </motion.div>

          {/* CTA Card - chrome */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-12 md:col-span-4 row-span-1 rounded-3xl p-6 relative overflow-hidden group cursor-pointer border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            style={{
              background: 'linear-gradient(135deg, #262626 0%, #404040 50%, #2d2d2d 100%)',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-neutral-100 font-bold text-lg">Voir mes projets →</span>
              <span className="text-2xl">✨</span>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  )
}

export default Hero

