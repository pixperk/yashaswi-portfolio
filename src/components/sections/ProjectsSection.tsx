"use client"

import { motion } from "framer-motion"
import { GithubIcon, EyeIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/lib/data"
import Image from "next/image"
import type { Project } from "../../../types"
import { usePagination } from "@/hooks/usePagination"

export default function ProjectsSection({
  theme,
}: {
  theme: "retro" | "sunset"
}) {
  const { currentItems, nextPage, prevPage, currentPage, maxPage } = usePagination(projects, 3)

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
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center mb-16"
      >
        <h2 className={`text-4xl md:text-5xl font-bold ${activeTheme.primary} ${activeTheme.font} text-center`}>
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
        className="space-y-16"
      >
        {currentItems.map((project: Project) => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl overflow-hidden border ${activeTheme.border} shadow-xl bg-gradient-to-br ${activeTheme.bgGradient} backdrop-blur-md transition-all duration-300 hover:shadow-2xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${activeTheme.primary} ${activeTheme.font}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className={`text-sm uppercase tracking-wider mb-3 ${activeTheme.secondary} ${activeTheme.font}`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.split(",").map((tech, index) => (
                        <span
                          key={index}
                          className={`rounded-full px-3 py-1 text-xs ${activeTheme.badge}`}
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <motion.a
                    whileTap={{ rotate: 10 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-6 py-2 rounded-full ${activeTheme.button} text-black font-medium transition-all duration-300`}
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a
                    whileTap={{ rotate: 10 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-6 py-2 rounded-full ${activeTheme.button} text-black font-medium transition-all duration-300`}
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
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
          className="flex justify-center gap-4 items-center mt-16"
        >
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${activeTheme.primary}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <span className={`${activeTheme.primary} ${activeTheme.font}`}>
            Page {currentPage} of {maxPage}
          </span>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === maxPage}
            className={`p-2 rounded-full ${currentPage === maxPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${activeTheme.primary}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </section>
  )
}