"use client"

import { motion, AnimatePresence } from "framer-motion"
import { GithubIcon, EyeIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/lib/data"
import Image from "next/image"
import type { Project } from "../../../types"
import { usePagination } from "@/hooks/usePagination"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  return (
    <section className="container mx-auto my-2 px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`text-4xl font-bold mb-12 text-center ${
          theme === "retro" ? "font-mono text-green-400" : "font-sans text-orange-400"
        }`}
      >
        Featured Projects
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="space-y-12"
        >
          {currentItems.map((project: Project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                className={`rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
                  theme === "retro"
                    ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-green-500"
                    : "bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-orange-500"
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  <CardHeader className="relative h-60 lg:h-auto lg:w-1/2 overflow-hidden p-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardHeader>

                  <CardContent className="p-8 lg:w-1/2">
                    <CardTitle
                      className={`text-3xl font-bold mb-4 ${
                        theme === "retro" ? "text-green-400 font-mono" : "text-orange-400 font-sans"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.split(",").map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={`rounded-full px-3 py-1 text-sm ${
                            theme === "retro" ? "bg-green-700 text-green-100" : "bg-orange-700 text-orange-100"
                          }`}
                        >
                          {tech.trim()}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={`rounded-full transition-all duration-300 ${
                          theme === "retro"
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="w-5 h-5 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={`rounded-full transition-all duration-300 ${
                          theme === "retro"
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <EyeIcon className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex justify-center items-center mt-12 space-x-6"
      >
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          size="icon"
          className={`rounded-full transition-all duration-300 ${
            theme === "retro"
              ? "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-800"
              : "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-800"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span
          className={`text-lg font-bold ${
            theme === "retro" ? "text-green-400 font-mono" : "text-orange-400 font-sans"
          }`}
        >
          {currentPage} / {maxPage}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === maxPage}
          size="icon"
          className={`rounded-full transition-all duration-300 ${
            theme === "retro"
              ? "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-800"
              : "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-800"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  )
}

