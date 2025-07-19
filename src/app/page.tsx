// Page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    document.title = 'AbstracDev'
  }, [])

  return (
    <main className="w-screen h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* 🔝 NAVIGATION */}
      <nav className="w-full absolute top-0 left-0 px-8 py-6 flex justify-between items-center text-sm z-10">
        <div className="flex space-x-6">
          <Link href="#quienes-somos" className="hover:text-gray-400 transition-colors">
            ¿Quiénes somos?
          </Link>
          <Link href="#que-hacemos" className="hover:text-gray-400 transition-colors">
            Qué hacemos
          </Link>
          <Link href="#filosofia" className="hover:text-gray-400 transition-colors">
            Filosofía
          </Link>
        </div>
        <Link
          href="#contacto"
          className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition-colors"
        >
          Contáctanos
        </Link>
      </nav>

      {/*HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <Image
            src="/logo-abstracdev.png" // 💡 reemplaza con tu imagen real en /public
            alt="AbstracDev Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold tracking-wide mb-4"
        >
          Bienvenido a AbstracDev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-gray-300 max-w-md"
        >
          Desarrollamos experiencias únicas.
        </motion.p>
      </section>
    </main>
  )
}

