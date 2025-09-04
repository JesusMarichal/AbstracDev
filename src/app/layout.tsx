import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AbstracDev',
  description: 'Empresa especializada en el desarrollo de software centrado en el usuario. Diseñamos soluciones digitales intuitivas y eficientes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

