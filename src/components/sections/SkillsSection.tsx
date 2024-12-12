'use client'

import { motion } from 'framer-motion'
import { CodeIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { skills } from '@/lib/data'
import { Skill } from '../../../types'
import { usePagination } from '@/hooks/usePagination'
import { Button } from '@/components/ui/button'

export default function SkillsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  const { currentItems, nextPage, prevPage, currentPage, maxPage } = usePagination(skills, 6)

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>
        Technical Skills
      </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentItems.map((skill: Skill, index) => (
          <motion.div
            key={skill.name}
            className={`${
              theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'
            } p-6 rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <CodeIcon className={`w-6 h-6 mr-3 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
                <span className={`text-lg font-medium ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{skill.name}</span>
              </div>
              <span className={`text-sm ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-sans'}`}>
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-3">
              <motion.div
                className={`h-3 rounded-full ${theme === 'retro' ? 'bg-green-400' : 'bg-orange-400'}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant="outline"
          size="icon"
          className={`${
            theme === 'retro' 
              ? 'text-white bg-green-500  border-green-700 hover:bg-green-900 hover:text-green-200'
              : 'text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className={`text-lg ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>
          {currentPage} / {maxPage}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === maxPage}
          variant="outline"
          size="icon"
          className={`${
            theme === 'retro' 
              ? 'text-white bg-green-500  border-green-700 hover:bg-green-900 hover:text-green-200'
              : 'text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200'
          }`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

