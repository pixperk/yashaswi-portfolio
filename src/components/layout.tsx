import Link from "next/link"
import { MoonIcon } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Yashaswi Kumar Mishra
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="hover:text-purple-400 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <MoonIcon className="w-5 h-5 text-purple-400" />
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          © {new Date().getFullYear()} Yashaswi Kumar Mishra. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

