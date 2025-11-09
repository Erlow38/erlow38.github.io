'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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
      emoji: '📧',
      title: 'Email',
      value: 'ethan.ehrler@outlook.com',
      link: 'mailto:ethan.ehrler@outlook.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      emoji: '📱',
      title: 'Téléphone',
      value: '+33 6 16 52 07 25',
      link: 'tel:+33612345678',
      color: 'from-green-500 to-emerald-500',
    },
    {
      emoji: '📍',
      title: 'Localisation',
      value: 'Grenoble, France',
      link: null,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/Erlow38', label: 'GitHub', color: 'from-purple-500 to-pink-500' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/ethan-ehrler-b5855a251/', label: 'LinkedIn', color: 'from-blue-500 to-cyan-500' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">💌</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Travaillons Ensemble
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Discutons autour d&apos;un café ☕
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 md:p-8 rounded-3xl border-2 border-purple-500/20">
              <h3 className="text-2xl md:text-3xl font-black mb-3 text-white">
                Restons en contact 🤙
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Que ce soit pour un projet, une question ou simplement pour discuter !
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                  className="glass-effect p-6 rounded-3xl border-2 border-white/10 hover:border-purple-500/40 transition-colors relative overflow-hidden group"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="text-4xl">
                      {info.emoji}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-semibold hover:text-purple-400 transition-colors text-sm md:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm md:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-3xl border-2 border-white/10">
              <h4 className="text-white font-black mb-4 text-lg">Réseaux Sociaux</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: 'spring' }}
                    className={`flex-1 glass-effect p-4 rounded-2xl flex items-center justify-center border-2 border-white/10 hover:border-purple-500/40 transition-colors relative overflow-hidden group`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative text-white group-hover:text-purple-300 transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-6 md:p-8 rounded-3xl space-y-5 border-2 border-purple-500/20 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />
              
              <div className="relative">
                <h3 className="text-2xl font-black text-white mb-6">Envoyez-moi un message 📨</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect border-2 border-white/10 rounded-2xl text-white focus:border-purple-500/50 focus:outline-none transition-colors placeholder:text-gray-500"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect border-2 border-white/10 rounded-2xl text-white focus:border-purple-500/50 focus:outline-none transition-colors placeholder:text-gray-500"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect border-2 border-white/10 rounded-2xl text-white focus:border-purple-500/50 focus:outline-none transition-colors placeholder:text-gray-500"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass-effect border-2 border-white/10 rounded-2xl text-white focus:border-purple-500/50 focus:outline-none transition-colors resize-none placeholder:text-gray-500"
                      placeholder="Parlez-moi de votre projet..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl text-white font-black hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    <span>Envoyer le message</span>
                    <Send size={22} />
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 md:mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm md:text-base">
            © Portfolio conçu et développé par <span className="text-purple-400">Ethan Ehrler</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

