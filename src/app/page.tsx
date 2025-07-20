'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['quienes-somos', 'que-hacemos', 'filosofia', 'contacto']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top < window.innerHeight / 2) {
            setActiveSection(id)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validación básica
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setFormStatus('Por favor, completa todos los campos.')
        return
      }

      // Validación de email básica
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setFormStatus('Por favor, ingresa un email válido.')
        return
      }

      // Simulación de envío exitoso
      setFormStatus('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
      setFormData({ name: '', email: '', message: '' })
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setFormStatus(''), 5000)
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setFormStatus('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className={`${inter.className} w-screen min-h-screen text-white bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2d2d2d] relative overflow-x-hidden`}>

      {/*NAVIGATION */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between bg-black bg-opacity-70 backdrop-blur-md shadow-md"
      >
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
            AbstracDev
          </span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {['quienes-somos', 'que-hacemos', 'filosofia'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                activeSection === id ? 'text-white font-semibold' : 'text-gray-400'
              } hover:text-white`}
            >
              {id === 'quienes-somos' && '¿Quiénes somos?'}
              {id === 'que-hacemos' && 'Qué hacemos'}
              {id === 'filosofia' && 'Filosofía'}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="ml-4 bg-white text-black px-4 py-2 rounded-lg font-medium shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform duration-300"
          >
            Contáctanos
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden"
          >
            {['quienes-somos', 'que-hacemos', 'filosofia', 'contacto'].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className="text-white text-lg hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {id === 'quienes-somos' && '¿Quiénes somos?'}
                {id === 'que-hacemos' && 'Qué hacemos'}
                {id === 'filosofia' && 'Filosofía'}
                {id === 'contacto' && 'Contáctanos'}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/*HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center h-screen px-4 text-center">
        <div className="hero-bg animate-pulse-slow"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg relative z-10"
        >
          Transformamos ideas complejas en soluciones simples.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-xl text-gray-300 max-w-xl relative z-10"
        >
          Somos una empresa especializada en el desarrollo de software centrado en el usuario. Diseñamos soluciones digitales intuitivas y eficientes que se adaptan a las necesidades reales de cada proyecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 relative z-10"
        >
          <Link
            href="#quienes-somos"
            className="bg-white text-black px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300"
          >
            Conoce más
          </Link>
        </motion.div>
      </section>

      {/* QUIENES SOMOS SECTION */}
      <motion.section
        id="quienes-somos"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Quiénes somos?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-64 md:h-80 mb-8 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipo de desarrolladores trabajando juntos"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales unidos por una visión común: crear tecnología que realmente importe.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Fundada con la misión de democratizar el acceso a soluciones tecnológicas de calidad, AbstracDev nació de la necesidad de ofrecer desarrollo de software que no solo funcione, sino que inspire.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Nuestro enfoque centrado en el usuario nos permite crear experiencias digitales que conectan, simplifican y potencian el crecimiento de nuestros clientes.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformar ideas complejas en soluciones digitales simples, elegantes y efectivas que impulsen el éxito de nuestros clientes y contribuyan positivamente a la sociedad digital.
            </p>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Oficina moderna con tecnología"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* QUE HACEMOS SECTION */}
      <motion.section
        id="que-hacemos"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Qué hacemos</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black bg-opacity-50 p-8 rounded-2xl hover:bg-opacity-70 transition-all duration-300"
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Desarrollo web con código en pantalla"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desarrollo Web</h3>
              <p className="text-gray-300 leading-relaxed">
                Creamos aplicaciones web modernas, responsivas y optimizadas que ofrecen experiencias excepcionales en todos los dispositivos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black bg-opacity-50 p-8 rounded-2xl hover:bg-opacity-70 transition-all duration-300"
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Aplicaciones móviles en smartphone"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Aplicaciones Móviles</h3>
              <p className="text-gray-300 leading-relaxed">
                Desarrollamos apps nativas y multiplataforma que conectan con tus usuarios de manera intuitiva y eficiente.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black bg-opacity-50 p-8 rounded-2xl hover:bg-opacity-70 transition-all duration-300"
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Consultoría digital con gráficos y análisis"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoría Digital</h3>
              <p className="text-gray-300 leading-relaxed">
                Asesoramos en la transformación digital de tu empresa, optimizando procesos y maximizando el potencial tecnológico.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FILOSOFIA SECTION */}
      <motion.section
        id="filosofia"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestra Filosofía</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Simplicidad</h3>
              <p className="text-gray-300 leading-relaxed">
                Creemos que las mejores soluciones son las más simples. Eliminamos la complejidad innecesaria para crear experiencias claras y directas.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Innovación</h3>
              <p className="text-gray-300 leading-relaxed">
                Mantenemos una mentalidad de crecimiento constante, adoptando nuevas tecnologías y metodologías que agreguen valor real.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Colaboración</h3>
              <p className="text-gray-300 leading-relaxed">
                Trabajamos como socios de nuestros clientes, no solo como proveedores. Su éxito es nuestro éxito.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipo colaborando en proyectos innovadores"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6">Nuestros Valores</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Transparencia en cada proceso y comunicación</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Calidad sin compromisos en cada entrega</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Responsabilidad social y ambiental</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Aprendizaje y mejora continua</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CONTACTO SECTION */}
      <motion.section
        id="contacto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Contáctanos</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar tu idea y ayudarte a hacerla realidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Oficina moderna para contacto y reuniones"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Hablemos de tu proyecto</h3>
                <p className="text-gray-300">
                  Estamos aquí para convertir tus ideas en realidad digital. Cada proyecto es único y merece una atención personalizada.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">¿Qué puedes esperar?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Consulta inicial gratuita</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Propuesta personalizada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-50 p-8 md:p-12 rounded-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              {formStatus && (
                <div className={`p-4 rounded-lg ${
                  formStatus.includes('exitosamente') 
                    ? 'bg-green-900 text-green-300 border border-green-700' 
                    : 'bg-red-900 text-red-300 border border-red-700'
                }`}>
                  {formStatus}
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/*FOOTER */}
      <footer className="py-8 text-center text-gray-500 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} AbstracDev. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-8 text-lg">
            <Link 
              href="https://github.com/abstracdev" 
              target="_blank" 
              className="hover:text-white transition-colors duration-300 font-semibold"
            >
              GitHub
            </Link>
            <Link 
              href="https://instagram.com/abstracdev" 
              target="_blank" 
              className="hover:text-white transition-colors duration-300 font-semibold"
            >
              Instagram
            </Link>
            <Link 
              href="https://linkedin.com/company/abstracdev" 
              target="_blank" 
              className="hover:text-white transition-colors duration-300 font-semibold"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}


