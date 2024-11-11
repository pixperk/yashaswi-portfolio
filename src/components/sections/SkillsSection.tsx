import { motion } from 'framer-motion'
import { CodeIcon } from 'lucide-react'
import { skills } from '@/lib/data'
import { Skill } from '../../../types'

export default function SkillsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill:Skill) => (
          <div key={skill.name} className={`${theme === 'retro' ? 'bg-gray-800' : 'bg-gray-700'} p-4 rounded-lg`}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CodeIcon className="w-6 h-6 mr-2" />
                <span className={`font-medium ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{skill.name}</span>
              </div>
              <span className={`text-sm text-gray-400 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className={`h-2.5 rounded-full ${theme === 'retro' ? 'bg-green-400' : 'bg-orange-400'}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}