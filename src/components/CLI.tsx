import { projects } from "@/lib/data"
import { AnimatePresence, motion } from "framer-motion"
import { Terminal } from "lucide-react"
import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react"
import type { Section } from "./Navigation"

interface CLIProps {
  theme: "retro" | "sunset"
  setActiveSection: Dispatch<SetStateAction<Section>>
  setTheme: (theme: "retro" | "sunset") => void
  setCliMode: (mode: boolean) => void
}

export default function CLI({ theme, setActiveSection, setTheme, setCliMode }: CLIProps) {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Type 'help' for a list of available commands."
  ])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [highlightedSuggestion, setHighlightedSuggestion] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const commands = [
    "help",
    "intro",
    "projects",
    "skills",
    "experience",
    "education",
    "blogs",
    "contact",
    "latest_project",
    "theme retro",
    "theme sunset",
    "resume",
    "clear",
    "exit",
  ]

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight
  }, [output])

  useEffect(() => {
    const matchingCommands = commands.filter((cmd) => cmd.startsWith(command.toLowerCase()))
    setSuggestions(matchingCommands)
    setHighlightedSuggestion(matchingCommands[0] || "")

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    if (command) {
      setIsTyping(true)
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false)
      }, 1000)
    } else {
      setIsTyping(false)
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [command])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return

    const newOutput = [...output, `$ ${trimmedCommand}`]
    setHistory([...history, trimmedCommand])
    setHistoryIndex(history.length + 1)

    const [baseCommand, ...args] = trimmedCommand.toLowerCase().split(" ")

    switch (baseCommand) {
      case "help":
        newOutput.push(
          "Available commands:",
          ...commands.map((cmd) => `  ${cmd}`),
          "Press 'Tab' to autocomplete commands.",
        )
        break
      case "intro":
      case "projects":
      case "experience":
      case "education":
      case "blogs":
      case "skills":
      case "contact":
        setActiveSection(baseCommand as Section)
        newOutput.push(`Navigating to ${baseCommand} section...`)
        setTimeout(() => setCliMode(false), 1000)
        break
      case "latest_project":
        newOutput.push(`Latest Project: ${projects[0].title}`, projects[0].description)
        break
      case "theme":
        if (args[0] === "retro" || args[0] === "sunset") {
          setTheme(args[0] as "retro" | "sunset")
          newOutput.push(`Theme changed to ${args[0]}.`)
        } else {
          newOutput.push("Invalid theme. Available themes: retro, sunset.")
        }
        break
      case "resume":
        newOutput.push("Downloading resume...")
        setTimeout(() => {
          const link = document.createElement("a")
          link.href = "/resume.pdf"
          link.download = "resume.pdf"
          link.click()
          newOutput.push("Resume downloaded successfully!")
          setOutput([...newOutput])
        }, 1000)
        break
      case "clear":
        setOutput([])
        setCommand("")
        return
      case "exit":
        newOutput.push("Exiting CLI mode...")
        setTimeout(() => setCliMode(false), 1000)
        break
      default:
        newOutput.push(
          `Command not recognized: '${trimmedCommand}'.`,
          "Type 'help' for available commands or press 'Tab' to autocomplete.",
        )
    }

    setOutput(newOutput)
    setCommand("")
    setSuggestions([])
    setHighlightedSuggestion("")
    setIsTyping(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      const newIndex = Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setCommand(history[newIndex] || "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const newIndex = Math.min(history.length, historyIndex + 1)
      setHistoryIndex(newIndex)
      setCommand(history[newIndex] || "")
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (suggestions.length === 1) {
        setCommand(suggestions[0])
        setHighlightedSuggestion("")
      } else if (suggestions.length > 1) {
        const commonPrefix = suggestions.reduce((a, b) =>
          a
            .split("")
            .filter((char, i) => char === b[i])
            .join(""),
        )
        setCommand(commonPrefix)
        setHighlightedSuggestion(suggestions[0])
        setOutput([...output, `Suggestions: ${suggestions.join(", ")}`])
      }
    }
    setIsTyping(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${
        theme === "retro" ? "bg-black border-green-500 text-green-500" : "bg-gray-900 border-orange-500 text-orange-500"
      } border-2 rounded-lg p-4 text-sm h-[calc(100vh-8rem)] flex flex-col relative z-40 mt-16 font-mono`}
      role="application"
      aria-label="Portfolio CLI"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Terminal className="w-5 h-5 mr-2" />
          <span className="font-bold">Portfolio CLI</span>
        </div>
        <div className="text-xs">Press &apos;Tab&apos; to autocomplete</div>
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
              className={line.startsWith("$") ? "text-gray-500" : ""}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form onSubmit={handleCommand} className="flex items-center relative">
        <span className="mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent focus:outline-none"
          placeholder="Type a command..."
        />
        {isTyping && highlightedSuggestion && (
          <div className="absolute left-0 ml-6 pointer-events-none">
            <span className="opacity-0">{command}</span>
            <span className={`${theme === "retro" ? "text-green-700" : "text-orange-700"}`}>
              {highlightedSuggestion.slice(command.length)}
            </span>
          </div>
        )}
      </form>
    </motion.div>
  )
}

