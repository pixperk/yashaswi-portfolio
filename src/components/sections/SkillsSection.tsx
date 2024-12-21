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
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
      <motion.h2
        className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
          theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="w-full max-w-4xl flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
              theme === 'retro' ? 'bg-gray-900' : 'bg-gray-800'
            }`}
            variants={cardVariants}
          >
            <h3
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'
              }`}
            >
              {currentCategory}
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {groupedSkills[currentCategory].map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`flex items-center p-4 rounded-md shadow-sm ${
                    theme === 'retro' ? 'bg-gray-800 text-green-200' : 'bg-gray-700 text-orange-200'
                  }`}
                  variants={cardVariants}
                >
                  <CodeIcon
                    className={`w-5 h-5 mr-2 ${
                      theme === 'retro' ? 'text-green-400' : 'text-orange-400'
                    }`}
                  />
                  <span className="text-base">{skill.name}</span>
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
        <span
          className={`text-lg ${
            theme === 'retro' ? 'font-mono text-green-400' : 'font-sans text-orange-400'
          }`}
        >
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
      </motion.div>
    </div>
  );
}
