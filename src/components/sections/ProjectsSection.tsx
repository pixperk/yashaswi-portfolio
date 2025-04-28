"use client"

import { motion } from "framer-motion"
import { GithubIcon, EyeIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/lib/data"
import Image from "next/image"
import type { Project } from "../../../types"
import { usePagination } from "@/hooks/usePagination"
import { useState } from "react"

export default function ProjectsSection({
  theme,
}: {
  theme: "retro" | "sunset"
}) {
  const { currentItems, nextPage, prevPage, currentPage, maxPage } = usePagination(projects, 3)
  const [focusedId, setFocusedId] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const activeTheme = theme === "retro" 
    ? {
        primary: "text-green-400",
        secondary: "text-green-200",
        border: "border-green-500",
        bgGradient: "from-gray-900 via-gray-900/90 to-black",
        button: "bg-green-500 hover:bg-green-600",
        buttonDisabled: "bg-green-500/40",
        font: "font-mono",
        badge: "bg-green-700/30 text-green-100",
        highlight: "bg-green-500/10",
      }
    : {
        primary: "text-orange-400",
        secondary: "text-orange-200",
        border: "border-orange-500",
        bgGradient: "from-gray-900 via-gray-900/90 to-black",
        button: "bg-orange-500 hover:bg-orange-600",
        buttonDisabled: "bg-orange-500/40",
        font: "font-sans",
        badge: "bg-orange-700/30 text-orange-100",
        highlight: "bg-orange-500/10",
      }

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center mb-10 sm:mb-16"
      >
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${activeTheme.primary} ${activeTheme.font} text-center`}>
          Featured Projects
        </h2>
        <p className={`mt-3 text-gray-400 ${activeTheme.font} text-center max-w-xl`}>
          A showcase of my recent work and technical expertise
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12 sm:space-y-16"
        onMouseLeave={() => setFocusedId(null)}
      >
        {currentItems.map((project: Project) => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            onMouseEnter={() => setFocusedId(project.id)}
            className={`rounded-xl sm:rounded-2xl overflow-hidden border ${activeTheme.border} shadow-xl bg-gradient-to-br ${activeTheme.bgGradient} backdrop-blur-md transition-all duration-500 
              ${focusedId === null || focusedId === project.id 
                ? 'scale-100 opacity-100 shadow-xl' 
                : 'scale-95 opacity-50 blur-[1px]'}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
              <div className="relative h-52 sm:h-64 lg:h-full overflow-hidden">
                <div className={`absolute inset-0 bg-black/20 z-10 transition-opacity duration-300 ${focusedId === project.id ? 'opacity-0' : 'opacity-100'}`}></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-all duration-700 ${focusedId === project.id ? 'scale-105' : 'scale-100'}`}
                />
              </div>
              
              <div className="p-5 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 ${activeTheme.primary} ${activeTheme.font}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="mb-5 sm:mb-8">
                    <h4 className={`text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 ${activeTheme.secondary} ${activeTheme.font}`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.techStack.split(",").map((tech, index) => (
                        <span
                          key={index}
                          className={`rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs ${activeTheme.badge}`}
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full ${activeTheme.button} text-black font-medium transition-all duration-300 text-sm sm:text-base`}
                  >
                    <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full ${activeTheme.button} text-black font-medium transition-all duration-300 text-sm sm:text-base`}
                  >
                    <EyeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {projects.length > 3 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 items-center mt-12 sm:mt-16"
        >
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${activeTheme.primary}`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <span className={`${activeTheme.primary} ${activeTheme.font} text-sm sm:text-base`}>
            Page {currentPage} of {maxPage}
          </span>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === maxPage}
            className={`p-2 rounded-full ${currentPage === maxPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${activeTheme.primary}`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </motion.div>
      )}
    </section>
  )
}