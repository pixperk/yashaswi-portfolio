import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yashaswi Kumar Mishra - Portfolio',
  description: 'Full Stack Developer & Tech Enthusiast',
  icons: [{ rel:"icon", url: "/profile.jpg" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Toaster/>
      </body>
    </html>
  )
}