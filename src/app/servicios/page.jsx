'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FaCode, FaMobileAlt, FaLightbulb, FaCheckCircle, FaArrowLeft, FaChevronDown } from 'react-icons/fa'

export default function ServicesPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 relative overflow-x-hidden">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left z-[60]"
                style={{ scaleX }}
            />
            {/* Botón Volver */}
            <Link href="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-gray-800 hover:text-blue-600 transition-all hover:scale-105">
                <FaArrowLeft />
                <span className="font-semibold">Volver al inicio</span>
            </Link>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
                    >
                        Soluciones que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Escalan</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        No solo escribimos código; construimos el futuro digital de tu empresa con estrategias sólidas y tecnologías de vanguardia.
                    </motion.p>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 flex flex-col items-center justify-center cursor-pointer relative z-20"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-light">Descubre más</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaChevronDown className="text-white text-2xl opacity-70" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Servicios Detallados */}
            <section className="py-20 px-6">
                <motion.div
                    className="max-w-7xl mx-auto space-y-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >

                    {/* Desarrollo Web */}
                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                <FaCode size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Desarrollo Web Full-Stack</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Desde landing pages de alto impacto hasta complejas aplicaciones web progresivas (PWA) y plataformas SAAS. Utilizamos las últimas tecnologías para garantizar velocidad, seguridad y SEO.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Next.js & React para interfaces rápidas', 'Arquitectura Serverless y Cloud', 'Diseño UX/UI centrado en conversión', 'Integración de Pasarelas de Pago'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Plan Inicial</span>
                                        <div className="text-3xl font-bold text-gray-900 mt-1">Desde $500</div>
                                    </div>
                                    <Link href="/#contacto" className="text-blue-600 font-semibold hover:underline">
                                        Cotizar ahora →
                                    </Link>
                                </div>
                                <p className="text-sm text-gray-500">Incluye: Landing page, SEO técnico, Hosting incluido por 1 año.</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] bg-gradient-to-tr from-gray-200 to-gray-100 rounded-3xl overflow-hidden shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
                            {/* Placeholder abstracto o imagen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent flex items-center justify-center">
                                <span className="text-9xl font-bold text-gray-300/30">WEB</span>
                            </div>
                        </div>
                    </motion.div>


                    {/* Aplicaciones Móviles */}
                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] md:h-[500px] bg-gradient-to-tr from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl -skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent flex items-center justify-center">
                                <span className="text-9xl font-bold text-gray-700/30">APP</span>
                            </div>
                        </div>

                        <div>
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                                <FaMobileAlt size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Desarrollo de Apps Móviles</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Lleva tu negocio al bolsillo de tus clientes. Desarrollamos aplicaciones nativas y multiplataforma robustas, intuitivas y listas para escalar en App Store y Google Play.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Desarrollo Híbrido (React Native / Flutter)', 'Notificaciones Push inteligentes', 'Geolocalización y Mapas', 'Modo Offline y Sincronización'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <FaCheckCircle className="text-purple-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Proyecto App</span>
                                        <div className="text-3xl font-bold text-gray-900 mt-1">Desde $2,000</div>
                                    </div>
                                    <Link href="/#contacto" className="text-purple-600 font-semibold hover:underline">
                                        Agendar Demo →
                                    </Link>
                                </div>
                                <p className="text-sm text-gray-500">Incluye: Diseño UI/UX, publicación en tiendas, panel administrativo.</p>
                            </div>
                        </div>
                    </motion.div>


                    {/* Consultoría */}
                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                                <FaLightbulb size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultoría & Transformación Digital</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                No necesitas solo software; necesitas una hoja de ruta. Analizamos tus procesos actuales y diseñamos estrategias tecnológicas para optimizar operaciones y reducir costos.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Auditoría Tecnológica', 'Optimización de Procesos', 'Arquitectura de Software', 'Automatización con IA'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <FaCheckCircle className="text-orange-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Consultoría</span>
                                        <div className="text-3xl font-bold text-gray-900 mt-1">Desde $150/h</div>
                                    </div>
                                    <Link href="/#contacto" className="text-orange-600 font-semibold hover:underline">
                                        Contactar experto →
                                    </Link>
                                </div>
                                <p className="text-sm text-gray-500">Incluye: Análisis inicial, reporte de mejoras y hoja de ruta tecnológica.</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] bg-gradient-to-tr from-gray-100 to-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent flex items-center justify-center">
                                <span className="text-9xl font-bold text-gray-400/20">CONS</span>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-black text-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">¿Listo para empezar tu próximo gran proyecto?</h2>
                    <p className="text-xl text-gray-400 mb-10">Déjanos ser tu socio tecnológico.</p>
                    <Link
                        href="/#contacto"
                        className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Hablemos Hoy
                    </Link>
                </div>
            </section>

        </main>
    )
}
