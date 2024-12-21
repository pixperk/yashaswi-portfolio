import { skills } from '@/lib/data'
import { AnimatePresence, motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Section } from './Navigation'

interface CLIProps {
  theme: 'retro' | 'sunset'
  setActiveSection: Dispatch<SetStateAction<Section>>
  setTheme: (theme: 'retro' | 'sunset') => void
  setCliMode: (mode: boolean) => void
}

export default function CLI({ theme, setActiveSection, setTheme, setCliMode }: CLIProps) {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState<string[]>([
    "Welcome to Yashaswi Kumar Mishra's Portfolio CLI!",
    "Type 'help' for a list of available commands.",
  ])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight
  }, [output])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return

    const newOutput = [...output, `$ ${trimmedCommand}`]
    setHistory([...history, trimmedCommand])
    setHistoryIndex(history.length + 1)

    switch (trimmedCommand.toLowerCase()) {
      case 'help':
        newOutput.push(
          'Available commands:',
          '  intro - View introduction',
          '  projects - View projects',
          '  skills - View skills',
          '  experience - View work experience',
          '  education - View education',
          '  blogs - View blogs',
          '  contact - View contact information',
          '  theme [retro|sunset] - Change theme',
          '  resume - Download resume',
          '  clear - Clear the console',
          '  exit - Exit CLI mode'
        )
        break
      case 'intro':
      case 'projects':
      case 'experience':
      case 'education':
      case 'blogs':
      case 'contact':
        setActiveSection(trimmedCommand.toLowerCase() as Section)
        newOutput.push(`Navigated to ${trimmedCommand} section`)
        setTimeout(() => setCliMode(false), 1000)
        break
      case 'skills':
        newOutput.push('Skills:')
        skills.forEach(skill => {
          newOutput.push(`${skill.name}: ${skill.level}%`)
        })
        break
      case 'theme retro':
        setTheme('retro')
        newOutput.push('Theme changed to retro')
        break
      case 'theme sunset':
        setTheme('sunset')
        newOutput.push('Theme changed to sunset')
        break
      case 'resume':
        newOutput.push('Downloading resume...')
        setTimeout(() => {
          const link = document.createElement('a')
          link.href = '/resume.pdf' // Path to resume file in the public folder
          link.download = 'resume.pdf'
          link.click()
          newOutput.push('Resume downloaded successfully!')
          setOutput([...newOutput])
        }, 1000)
        break
      case 'clear':
        setOutput([])
        setCommand('')
        return
      case 'exit':
        newOutput.push('Exiting CLI mode...')
        setTimeout(() => setCliMode(false), 1000)
        break
      default:
        newOutput.push(`Command not recognized: ${trimmedCommand}. Type 'help' for a list of available commands.`)
    }

    setOutput(newOutput)
    setCommand('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      const newIndex = Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setCommand(history[newIndex] || '')
    } else if (e.key === 'ArrowDown') {
      const newIndex = Math.min(history.length, historyIndex + 1)
      setHistoryIndex(newIndex)
      setCommand(history[newIndex] || '')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${theme === 'retro' ? 'bg-gray-900 border-green-400 font-mono' : 'bg-gray-800 border-orange-400 font-sans'} border-2 rounded-lg p-4 text-sm h-[calc(100vh-8rem)] flex flex-col`}
      role="application"
      aria-label="Portfolio CLI"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Terminal className={`w-5 h-5 mr-2 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
          <span className={`font-bold ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`}>Portfolio CLI</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div ref={outputRef} className="flex-grow overflow-y-auto mb-4 custom-scrollbar" role="log" aria-live="polite">
        <AnimatePresence>
          {output.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={line.startsWith('$') ? 'text-gray-400' : `${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form onSubmit={handleCommand} className="flex items-center">
        <span className={`${theme === 'retro' ? 'text-green-400' : 'text-orange-400'} mr-2`}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`flex-grow bg-transparent focus:outline-none ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`}
          placeholder="Type a command..."
        />
      </form>
    </motion.div>
  )
}
