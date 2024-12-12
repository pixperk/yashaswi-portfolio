'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'

export default function IntroSection({ theme = 'retro' }: { theme?: 'retro' | 'sunset' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 ${
          theme === 'retro' ? 'border-4 border-green-400' : 'border-4 border-orange-400'
        }`}
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          layout="fill"
          className="object-cover"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`text-4xl md:text-6xl font-bold mb-4 ${
          theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'
        }`}
      >
        Yashaswi Kumar Mishra
      </motion.h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`text-xl md:text-2xl text-gray-400 mb-8 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}
      >
        Full Stack TypeScript Developer
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={`max-w-2xl text-gray-300 leading-relaxed ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}
      >
      Passionate about creating efficient, innovative solutions to challenging problems. With skills across both front-end and back-end, I deliver clean, scalable code that drives powerful, engaging digital experiences. 
      </motion.p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12"
      >
        <ChevronDownIcon className={`w-6 h-6 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
      </motion.div>
      <div>View Projects</div>
    </div>
  )
}