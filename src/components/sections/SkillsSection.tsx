"use client"

import { Button } from "@/components/ui/button"
import { skills } from "@/lib/data"
import { techLogos } from "@/lib/tech-logos"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
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

  const itemsPerPage = 1
  const maxPage = Math.ceil(categories.length / itemsPerPage)

  const currentCategory = categories[currentPage - 1]
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  const baseTextColor = theme === "retro" ? "text-green-400" : "text-orange-400"
  const baseBgColor = theme === "retro" ? "bg-gray-800" : "bg-gray-900"
  const hoverBgColor = theme === "retro" ? "hover:bg-gray-700" : "hover:bg-gray-800"
  const borderColor = theme === "retro" ? "border-green-500" : "border-orange-500"

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center space-y-12">
     

      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className={`text-2xl md:text-3xl font-semibold text-center mb-8 ${baseTextColor}`}
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
                const TechIcon : IconType  = techLogos[skill.name] || (() => null)
                return (
                  <motion.div
                    key={skill.name}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl ${baseBgColor} ${baseTextColor} ${hoverBgColor} transition-all duration-300 border ${borderColor} shadow-lg`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="mb-3">
                    <TechIcon size="40"/>
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                )
              })}
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
          variant="outline"
          size="icon"
          className={`rounded-full transition-all ${baseTextColor} ${hoverBgColor} border-2 ${borderColor}`}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <span className={`text-lg font-medium ${baseTextColor}`}>
          {currentPage} / {maxPage}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === maxPage}
          variant="outline"
          size="icon"
          className={`rounded-full transition-all ${baseTextColor} ${hoverBgColor} border-2 ${borderColor}`}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}

