'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CodeIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { skills } from '@/lib/data'
import { Button } from '@/components/ui/button'

type Skill = {
  name: string;
  category: string;
}

type GroupedSkills = {
  [key: string]: Skill[];
}

const groupSkillsByCategory = (skills: Skill[]): GroupedSkills => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as GroupedSkills);
}

const groupedSkills = groupSkillsByCategory(skills);
const categories = Object.keys(groupedSkills);

export default function SkillsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 1;
  const maxPage = Math.ceil(categories.length / itemsPerPage);

  const currentCategory = categories[currentPage - 1];
  const prevCategory = currentPage > 1 ? categories[currentPage - 2] : null;
  const nextCategory = currentPage < maxPage ? categories[currentPage] : null;

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className={`container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center ${theme === 'retro' ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <motion.h2 
        className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPage}
          className="flex-grow flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className={`${
              theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'
            } p-6 rounded-lg shadow-lg border transition-all duration-300`}
            variants={cardVariants}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>
              {currentCategory}
            </h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {groupedSkills[currentCategory].map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`flex items-center p-2 rounded-md ${
                    theme === 'retro' ? 'bg-gray-700' : 'bg-gray-600'
                  }`}
                  variants={skillVariants}
                >
                  <CodeIcon className={`w-5 h-5 mr-2 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
                  <span className={`text-sm ${theme === 'retro' ? 'font-mono text-green-200' : 'font-sans text-orange-200'}`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <motion.div 
        className="flex justify-center items-center mt-8 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center">
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="outline"
            size="icon"
            className={`${
              theme === 'retro' 
                ? 'text-green-400 bg-gray-800 border-green-400 hover:bg-green-900 hover:text-green-200'
                : 'text-orange-400 bg-gray-700 border-orange-400 hover:bg-orange-900 hover:text-orange-200'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {prevCategory && (
            <span className={`ml-2 text-sm ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`}>
              {prevCategory}
            </span>
          )}
        </div>
        <span className={`text-lg ${theme === 'retro' ? 'font-mono text-green-400' : 'font-sans text-orange-400'}`}>
          {currentPage} / {maxPage}
        </span>
        <div className="flex items-center">
          {nextCategory && (
            <span className={`mr-2 text-sm ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`}>
              {nextCategory}
            </span>
          )}
          <Button
            onClick={nextPage}
            disabled={currentPage === maxPage}
            variant="outline"
            size="icon"
            className={`${
              theme === 'retro' 
                ? 'text-green-400 bg-gray-800 border-green-400 hover:bg-green-900 hover:text-green-200'
                : 'text-orange-400 bg-gray-700 border-orange-400 hover:bg-orange-900 hover:text-orange-200'
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

