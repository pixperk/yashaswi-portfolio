import { motion } from 'framer-motion'
import { GithubIcon, EyeIcon } from 'lucide-react'
import { projects } from '@/lib/data'
import Image from 'next/image'
import { Project } from '../../../types'

export default function ProjectsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project : Project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className={`${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border`}
          >
            <div className="flex items-center mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="rounded-lg mr-4"
              />
              <h3 className={`text-xl font-semibold ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{project.title}</h3>
            </div>
            <p className={`text-gray-400 mb-4 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{project.description}</p>
            <div className="flex justify-between items-center">
              <span className={`text-sm text-gray-500 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{project.techStack}</span>
              <div className="flex space-x-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center ${theme === 'retro' ? 'text-green-400 hover:text-green-300' : 'text-orange-400 hover:text-orange-300'}`}
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center ${theme === 'retro' ? 'text-green-400 hover:text-green-300' : 'text-orange-400 hover:text-orange-300'}`}
                >
                  <EyeIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}