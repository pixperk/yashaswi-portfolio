'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, Download, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { Section } from '../Navigation'
import { Button } from '@/components/ui/button'

interface IntroProps {
  setActiveSection: (section: Section) => void
  theme?: 'retro' | 'sunset'
}

export default function IntroSection({ setActiveSection, theme = 'retro' }: IntroProps) {
  const projectsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects')
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [setActiveSection])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
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
          className={`text-xl md:text-2xl text-gray-400 mb-8 ${
            theme === 'retro' ? 'font-mono' : 'font-sans'
          }`}
        >
          Full Stack TypeScript Developer
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`max-w-2xl text-gray-300 leading-relaxed mb-12 ${
            theme === 'retro' ? 'font-mono' : 'font-sans'
          }`}
        >
          Passionate about creating efficient, innovative solutions to challenging problems. With skills across both front-end and back-end, I deliver clean, scalable code that drives powerful, engaging digital experiences.
        </motion.p>

        {/* Updated Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <Button
            variant="default"
            size="lg"
            className={`
              text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out
              ${theme === 'retro'
                ? 'bg-green-400 text-black hover:bg-green-500 hover:shadow-green-300/50'
                : 'bg-orange-400 text-white hover:bg-orange-500 hover:shadow-orange-300/50'
              }
              transform hover:scale-105 hover:shadow-xl
            `}
            onClick={() => {
              console.log('Downloading resume...')
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            variant="default"
            size="lg"
            className={`
              text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out
              ${theme === 'retro'
                ? 'bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black'
                : 'bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black'
              }
              transform hover:scale-105 hover:shadow-xl
            `}
            onClick={() => setActiveSection('contact')}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4"
        >
          <ChevronDownIcon className={`w-6 h-6 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
        </motion.div>
      </div>

      {/* Projects Skeleton Section */}
      <div ref={projectsRef} className="h-screen">
        <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`${
                theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'
              } p-6 rounded-lg shadow-lg border`}
            >
              <div className="flex items-center mb-4">
                <div className="w-[100px] h-[100px] bg-gray-600 rounded-lg mr-4" />
                <div className="h-6 bg-gray-600 rounded w-3/4" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-600 rounded w-full" />
                <div className="h-4 bg-gray-600 rounded w-5/6" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-4 bg-gray-600 rounded w-1/3" />
                <div className="flex space-x-2">
                  <div className="w-5 h-5 bg-gray-600 rounded-full" />
                  <div className="w-5 h-5 bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

