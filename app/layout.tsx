import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Bri-ight Systems | AI-Powered Software Development',
  description: 'We engineer clarity. We build intelligence. Custom web development, AI integration, and data analytics to optimize, systematize, and automate your operations.',
  generator: 'v0.app',
  keywords: ['software development', 'AI integration', 'data analytics', 'business automation', 'custom web development'],
  
}

export const viewport: Viewport = {
  themeColor: '#0A0A0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
