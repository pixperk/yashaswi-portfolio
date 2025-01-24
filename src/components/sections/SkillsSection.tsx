'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CodeIcon, DatabaseIcon, CpuIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { skills } from '@/lib/data'
import { Button } from '@/components/ui/button'

type Skill = {
  name: string
  category: string
}

type GroupedSkills = {
  [key: string]: Skill[]
}

// Mapping categories to different icons
const categoryIcons: Record<string, JSX.Element> = {
  'Programming Languages': <CodeIcon className="w-6 h-6" />,
  'Frameworks & Libraries': <DatabaseIcon className="w-6 h-6" />,
  'Technologies & Tools': <CpuIcon className="w-6 h-6" />,
}

const groupSkillsByCategory = (skills: Skill[]): GroupedSkills => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as GroupedSkills)
}

const groupedSkills = groupSkillsByCategory(skills)
const categories = Object.keys(groupedSkills)

export default function SkillsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 1
  const maxPage = Math.ceil(categories.length / itemsPerPage)

  const currentCategory = categories[currentPage - 1]
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col items-center space-y-10">
      <motion.h2
        className={`text-5xl font-extrabold text-center tracking-wide drop-shadow-lg ${
          theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'
        }`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="w-full bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg p-10 transition-all duration-500 overflow-hidden flex flex-col items-center border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.h3
              className={`text-3xl font-bold text-center border-b-4 pb-2 px-6 ${
                theme === 'retro' ? 'text-green-300 border-green-500' : 'text-orange-300 border-orange-500'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentCategory}
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {groupedSkills[currentCategory].map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`flex items-center space-x-4 px-6 py-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    theme === 'retro' ? 'bg-gray-900 text-green-300' : 'bg-gray-800 text-orange-300'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {categoryIcons[currentCategory] || <CodeIcon className="w-6 h-6" />}
                  <span className="text-lg font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="flex justify-center items-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant="ghost"
          size="icon"
          className={`rounded-full transition-all transform hover:scale-110 ${
            theme === 'retro' ? 'text-white bg-green-600 hover:bg-green-700' : 'text-white bg-orange-600 hover:bg-orange-700'
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span className={`text-lg font-semibold px-6 py-2 rounded-full shadow-md ${theme === 'retro' ? 'bg-green-900 text-green-300' : 'bg-orange-900 text-orange-300'}`}>
          {currentPage} / {maxPage}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === maxPage}
          variant="ghost"
          size="icon"
          className={`rounded-full transition-all transform hover:scale-110 ${
            theme === 'retro' ? 'text-white bg-green-600 hover:bg-green-700' : 'text-white bg-orange-600 hover:bg-orange-700'
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  )
}
