import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatBot from './components/ChatBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zodiac Enterprise - Premium Construction Materials Supplier in GCC',
  description: 'Supplier of premium construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries.',
  metadataBase: new URL('https://www.zodiacgcc.com'),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}