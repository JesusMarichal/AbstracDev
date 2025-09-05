'use client'
import styles from './styles/page.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
      const sections = ['quienes-somos', 'que-hacemos', 'contacto']
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setFormStatus('Por favor, completa todos los campos.')
        return
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setFormStatus('Por favor, ingresa un email válido.')
        return
      }
      setFormStatus('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus(''), 5000)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setFormStatus('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className={`${inter.className} w-screen min-h-screen relative overflow-x-hidden`} style={{ background: "#fff" }}>
      {/* NAVIGATION */}
      {/* NAVIGATION */}
<motion.nav
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full fixed top-0 left-0 z-50 h-16 flex items-center justify-between bg-black/80 backdrop-blur-sm shadow-md px-6"
>
  {/* LOGO */}
  <Link href="/" className="flex items-center h-full">
    <Image
      src="/images/logo(blanco).png"
      alt="ABSTRACDEV"
      width={300}
      height={300}
      className={`mr-2 object-contain ${styles.logo}`}
    />
  </Link>

  {/* LINKS DESKTOP */}
  <div className="hidden md:flex space-x-6 items-center">
    {['quienes-somos', 'servicios', 'filosofia'].map((id) => (
      <Link
        key={id}
        href={`#${id}`}
        className={`transition-colors ${styles.navLink} ${
          activeSection === id ? styles.navLinkActive : ''
        } ${activeSection === id ? 'font-semibold' : ''} hover:text-white`}
      >
        {id === 'quienes-somos' && '¿Quiénes somos?'}
        {id === 'servicios' && 'Servicios'}
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

  {/* BOTÓN MENÚ MÓVIL */}
  <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
    <svg
      className="w-6 h-6 text-white"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>

  {/* MENÚ MÓVIL */}
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden"
    >
      {['quienes-somos', 'servicios', 'contacto'].map((id) => (
        <Link
          key={id}
          href={`#${id}`}
          className="text-white text-lg hover:text-gray-300 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {id === 'quienes-somos' && '¿Quiénes somos?'}
          {id === 'servicios' && 'Servicios'}
          {id === 'contacto' && 'Contáctanos'}
        </Link>
      ))}
    </motion.div>
  )}
</motion.nav>
      {/* INICIO SECCION HERO */}
      <section
        className="relative flex flex-col items-center justify-center px-4 text-center h-[550px] md:h-[400px] lg:h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url('/images/foto_fondo.jpg')", // FOTO DE FONDO(INICIO)
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div> {/* Capa oscura para mejor contraste */}
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

      {/* SECCIÓN: QUIÉNES SOMOS */}
      <section id="quienes-somos" className="pt-10 pb-20 px-4 bg-black">
  <motion.section
    id="quienes-somos"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
    }}
    className="py-8 px-4 md:px-8 max-w-6xl mx-auto"
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } }
      }}
      className="text-center mb-16"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } }
        }}
        className="text-2xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-700 drop-shadow-[0_2px_12px_rgba(0,176,255,0.25)]"
      >
        ¿Quiénes somos?
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } }
        }}
        className="origin-left w-28 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 mx-auto mb-10 rounded-full"
      />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Columna izquierda */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.3, ease: "easeOut" } }
          }}
          className="relative h-64 md:h-80 mb-10 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,150,255,0.2)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Equipo de desarrolladores trabajando juntos"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } }
          }}
          className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8"
        >
          Somos un equipo apasionado de desarrolladores, diseñadores unidos por una visión común: crear tecnología que realmente importe.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5, ease: "easeOut" } }
          }}
          className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8"
        >
          Fundada con la misión de democratizar el acceso a soluciones tecnológicas de calidad, AbstracDev nació de la necesidad de ofrecer desarrollo de software que no solo funcione, sino que inspire.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6, ease: "easeOut" } }
          }}
          className="text-lg md:text-xl text-gray-100 leading-relaxed"
        >
          Nuestro enfoque centrado en el usuario nos permite crear experiencias digitales que conectan, simplifican y potencian el crecimiento de nuestros clientes.
        </motion.p>
      </motion.div>

      {/* Columna derecha */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
        }}
        className="bg-gradient-to-br from-blue-600 via-blue-800 to-black p-8 rounded-2xl shadow-[0_0_30px_rgba(0,150,255,0.3)] mt-10 md:mt-0"
      >
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } }
          }}
          className="text-2xl font-bold mb-4 text-blue-300"
        >
          Nuestra Misión
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5, ease: "easeOut" } }
          }}
          className="text-gray-100 leading-relaxed mb-8"
        >
          Transformar ideas complejas en soluciones digitales simples, elegantes y efectivas que impulsen el éxito de nuestros clientes y contribuyan positivamente a la sociedad digital.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.6, ease: "easeOut" } }
          }}
          className="relative h-48 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,150,255,0.25)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Oficina moderna con tecnología"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
</section>

      {/* SECCIÓN: SERVICIOS */}
      <section id="servicios" className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Título */}
    <h2
      className="text-4xl md:text-5xl font-extrabold text-center mb-4 
                 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 
                 drop-shadow-[0_2px_8px_rgba(0,150,255,0.25)]"
    >
      NUESTROS SERVICIOS
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 
                    mx-auto mb-10 rounded-full shadow-[0_0_12px_rgba(0,150,255,0.4)]" />

    {/* Descripción */}
    <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
      Impulsamos tu negocio con soluciones digitales de alto rendimiento. Integramos tecnología, diseño y estrategia para que tu marca crezca de forma sólida.
    </p>

    {/* Servicios */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Servicio 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-2xl shadow-lg border-t-4 border-transparent 
                   hover:border-blue-500 hover:shadow-[0_8px_32px_rgba(0,150,255,0.25)] 
                   transition-all duration-300 p-8 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full 
                        bg-gradient-to-b from-blue-400 to-blue-700 mb-6 
                        shadow-[0_0_20px_rgba(0,150,255,0.3)]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 9h18" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 text-black hover:text-blue-600 transition-colors">
          Desarrollo Web
        </h3>
        <p className="text-gray-700">
          Creamos sitios y aplicaciones web modernos, funcionales y optimizados para ofrecer la mejor experiencia al usuario.
        </p>
      </motion.div>

      {/* Servicio 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-2xl shadow-lg border-t-4 border-transparent 
                   hover:border-blue-500 hover:shadow-[0_8px_32px_rgba(0,150,255,0.25)] 
                   transition-all duration-300 p-8 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full 
                        bg-gradient-to-b from-blue-400 to-blue-700 mb-6 
                        shadow-[0_0_20px_rgba(0,150,255,0.3)]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 text-black hover:text-blue-600 transition-colors">
          Aplicaciones Móviles
        </h3>
        <p className="text-gray-700">
          Desarrollamos apps nativas y multiplataforma para Android y iOS, conectando con tus usuarios de manera intuitiva y eficiente.
        </p>
      </motion.div>

      {/* Servicio 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-2xl shadow-lg border-t-4 border-transparent 
                   hover:border-blue-500 hover:shadow-[0_8px_32px_rgba(0,150,255,0.25)] 
                   transition-all duration-300 p-8 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full 
                        bg-gradient-to-b from-blue-400 to-blue-700 mb-6 
                        shadow-[0_0_20px_rgba(0,150,255,0.3)]">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 17v-2a4 4 0 0 1 8 0v2" />
            <circle cx="12" cy="7" r="4" />
            <rect x="2" y="17" width="20" height="5" rx="2" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 text-black hover:text-blue-600 transition-colors">
          Consultoría Digital
        </h3>
        <p className="text-gray-700">
          Asesoramos en la transformación digital de tu empresa, optimizando procesos y maximizando el potencial tecnológico.
        </p>
      </motion.div>
    </div>
  </div>
</section>
      {/* SECCIÓN: CONTACTO */}
<section id="contacto" className="py-20 px-4 bg-white relative">
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="py-20 px-4 md:px-8 relative z-10"
  >
    <div className="max-w-6xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Contáctanos
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"
        />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Nos encantaría escucharlo y ayudarte a hacerlo realidad.
        </p>
      </div>

      {/* Imagen + Info */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200"
        >
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Oficina moderna para contacto y reuniones"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hablemos de tu proyecto</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada idea merece atención personalizada. Estamos aquí para convertir tus conceptos en soluciones digitales.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">¿Qué puedes esperar?</h4>
            <ul className="space-y-3 text-gray-600">
              {[
                "Respuesta en menos de 24 horas",
                "Consulta inicial gratuita",
                "Propuesta personalizada",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-200 relative overflow-hidden"
      >
        {/* Decoración sutil */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <form onSubmit={handleFormSubmit} className="space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  👤
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300"
                  placeholder="tu@email.com"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  📧
                </span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>
          </div>

          {formStatus && (
            <div
              className={`p-4 rounded-lg text-sm ${
                formStatus.includes("exitosamente")
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {formStatus}
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-gray-900 hover:to-black transition-all duration-300"
            >
              🚀 Enviar Mensaje
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  </motion.section>
</section>


{/* FOOTER */}
<footer className="py-8 text-center text-gray-500 bg-black border-t border-zinc-800">
  <div className="max-w-6xl mx-auto px-4">
    <p className="mb-4 text-sm md:text-base">
      © {new Date().getFullYear()} AbstracDev. Todos los derechos reservados.
    </p>
    <div className="flex justify-center space-x-6 text-sm md:text-base">
      <Link 
        href="https://github.com/abstracdev" 
        target="_blank" 
        className="flex items-center space-x-2 hover:text-white transition-colors duration-300 font-semibold"
      >
        <FaGithub className="w-4 h-4" />
        <span>GitHub</span>
      </Link>
      <Link 
        href="https://instagram.com/abstracdev" 
        target="_blank" 
        className="flex items-center space-x-2 hover:text-white transition-colors duration-300 font-semibold"
      >
        <FaInstagram className="w-4 h-4" />
        <span>Instagram</span>
      </Link>
      <Link 
        href="https://linkedin.com/company/abstracdev" 
        target="_blank" 
        className="flex items-center space-x-2 hover:text-white transition-colors duration-300 font-semibold"
      >
        <FaLinkedin className="w-4 h-4" />
        <span>LinkedIn</span>
      </Link>
    </div>
  </div>
</footer>
    </main>
  )
}