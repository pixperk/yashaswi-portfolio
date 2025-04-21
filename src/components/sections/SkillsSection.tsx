"use client"

import { skills } from "@/lib/data"
import { techLogos } from "@/lib/tech-logos"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { IconType } from "react-icons"

type Skill = {
  name: string
  category: string
}

type GroupedSkills = {
  [key: string]: Skill[]
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

export default function SkillsSection({ theme }: { theme: "retro" | "sunset" }) {
  const [currentPage, setCurrentPage] = useState(1)

  const maxPage = categories.length
  const currentCategory = categories[currentPage - 1]
  
  const nextPage = () => setCurrentPage((prev) => prev === maxPage ? 1 : prev + 1)
  const prevPage = () => setCurrentPage((prev) => prev === 1 ? maxPage : prev - 1)

  // Auto-rotate categories every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage()
    }, 20000)
    
    return () => clearInterval(interval)
  }, [currentPage])

  const activeTheme = theme === "retro" 
    ? {
        primary: "text-green-400",
        secondary: "text-green-200",
        border: "border-green-500",
        bg: "bg-gray-800",
        bgGradient: "from-gray-900 to-gray-800",
        button: "bg-green-500 hover:bg-green-600",
        hoverBg: "hover:bg-gray-700",
        font: "font-mono",
        highlight: "bg-green-500/10"
      }
    : {
        primary: "text-orange-400",
        secondary: "text-orange-200",
        border: "border-orange-500",
        bg: "bg-gray-900",
        bgGradient: "from-gray-800 to-black",
        button: "bg-orange-500 hover:bg-orange-600",
        hoverBg: "hover:bg-gray-800",
        font: "font-sans",
        highlight: "bg-orange-500/10"
      }

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center mb-12"
      >
        <h2 className={`text-4xl md:text-5xl font-bold ${activeTheme.primary} ${activeTheme.font} text-center`}>
          Technical Skills
        </h2>
        <p className={`mt-3 text-gray-400 ${activeTheme.font} text-center max-w-xl`}>
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className={`text-2xl md:text-3xl font-semibold text-center mb-8 ${activeTheme.primary} ${activeTheme.font}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentCategory}
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
              {groupedSkills[currentCategory].map((skill) => {
                const TechIcon: IconType = techLogos[skill.name] || (() => null)
                return (
                  <motion.div
                    key={skill.name}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${activeTheme.bgGradient} transition-all duration-300 border ${activeTheme.border} shadow-lg h-32`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex justify-center items-center h-16 mb-2">
                      <TechIcon size={40} />
                    </div>
                    <span className={`text-sm font-medium text-center ${activeTheme.secondary}`}>{skill.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {categories.length > 1 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 items-center mt-12"
        >
          <button 
            onClick={prevPage}
            className={`p-2 rounded-full hover:bg-gray-700 ${activeTheme.primary}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <span className={`${activeTheme.primary} ${activeTheme.font}`}>
            Page {currentPage} of {maxPage}
          </span>
          
          <button 
            onClick={nextPage}
            className={`p-2 rounded-full hover:bg-gray-700 ${activeTheme.primary}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </section>
  )
}