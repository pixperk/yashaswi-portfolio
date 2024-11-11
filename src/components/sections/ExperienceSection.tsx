import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react'
import { experiences } from '@/lib/data'
import { Experience } from '../../../types'

export default function ExperienceSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp:Experience, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border`}
          >
            <div className="flex items-center mb-4">
              <BriefcaseIcon className={`w-6 h-6 mr-2 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
              <h3 className={`text-xl font-semibold ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{exp.title}</h3>
            </div>
            <p className={`text-gray-400 mb-2 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{exp.company}</p>
            <div className={`flex items-center text-gray-500 mb-4 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>{exp.period}</span>
            </div>
            <p className={`text-gray-300 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}