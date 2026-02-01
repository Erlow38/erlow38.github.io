'use client'

import { motion } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code, Mail, GraduationCap } from 'lucide-react'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projets', href: '#projects', icon: Briefcase },
    { name: 'Parcours', href: '#parcours', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-0 right-0 z-50 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="glass-effect rounded-full border-2 border-white/10 shadow-2xl px-4 md:px-6 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-lg md:text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hidden sm:inline">
              Ethan Ehrler
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 group"
                >
                  <Icon size={16} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="lg:hidden text-white w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden mt-4 glass-effect rounded-3xl border-2 border-white/10 shadow-2xl p-4 backdrop-blur-xl"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navigation
