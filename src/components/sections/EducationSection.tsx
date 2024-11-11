import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '@/lib/data'
import { Education } from '../../../types'

export default function EducationSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>Education</h2>
      {education.length > 0 ? (
        <div className="space-y-8">
          {education.map((edu:Education, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border`}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className={`w-6 h-6 mr-2 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
                <h3 className={`text-xl font-semibold ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{edu.degree}</h3>
              </div>
              <p className={`text-gray-400 mb-2 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{edu.institution}</p>
              <div className={`flex items-center text-gray-500 mb-4 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>
                <Calendar className="w-4 h-4 mr-2" />
                <span>{edu.period}</span>
              </div>
              <p className={`text-gray-300 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border text-center`}
        >
          <GraduationCap className={`w-16 h-16 mx-auto mb-4 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
          <p className={`text-xl ${theme === 'retro' ? 'font-mono text-green-400' : 'font-sans text-orange-400'}`}>Education details coming soon!</p>
        </motion.div>
      )}
    </div>
  )
}