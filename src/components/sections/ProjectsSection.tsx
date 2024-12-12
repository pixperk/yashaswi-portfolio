'use client'

import { motion } from 'framer-motion'
import { GithubIcon, EyeIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/lib/data'
import Image from 'next/image'
import { Project } from '../../../types'
import { usePagination } from '@/hooks/usePagination'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ProjectsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  const { currentItems, nextPage, prevPage, currentPage, maxPage } = usePagination(projects, 4)

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className={`text-4xl font-bold mb-12 text-center ${
        theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'
      }`}>
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {currentItems.map((project: Project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
              theme === 'retro' 
                ? 'bg-gray-900 border-green-700 hover:bg-gray-800' 
                : 'bg-gray-900 border-orange-700 hover:bg-gray-800'
            }`}>
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className={`text-2xl font-bold mb-4 ${
                  theme === 'retro' ? 'text-green-500 font-mono' : 'text-orange-500 font-sans'
                }`}>
                  {project.title}
                </CardTitle>
                <p className={`text-gray-300 mb-4 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.split(',').map((tech, index) => (
                    <Badge key={index} variant="secondary" className={`${
                      theme === 'retro' 
                        ? 'bg-green-900 text-green-100 hover:bg-green-800' 
                        : 'bg-orange-900 text-orange-100 hover:bg-orange-800'
                    }`}>
                      {tech.trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`${
                      theme === 'retro' 
                        ? 'text-white bg-green-500  border-green-700 hover:bg-green-900 hover:text-green-200'
                        : 'text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200'
                    }`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`${
                      theme === 'retro' 
                        ? 'text-white bg-green-500  border-green-700 hover:bg-green-900 hover:text-green-200'
                        : 'text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200'
                    }`}
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <EyeIcon className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-12 space-x-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          size="icon"
          className={`${
            theme === 'retro' 
              ? 'text-white bg-green-500  border-green-700 hover:bg-green-900 hover:text-green-200'
              : 'text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className={`text-lg ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-sans'}`}>
          {currentPage} / {maxPage}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === maxPage}
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

