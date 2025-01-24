"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export type Section = "intro" | "projects" | "skills" | "experience" | "education" | "blogs" | "contact"

interface NavigationProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
  theme: "retro" | "sunset"
  setTheme: (theme: "retro" | "sunset") => void
  cliMode: boolean
  setCliMode: (mode: boolean) => void
}

const navItems: { title: string; section: Section }[] = [
  { title: "About", section: "intro" },
  { title: "Projects", section: "projects" },
  { title: "Skills", section: "skills" },
  { title: "Experience", section: "experience" },
  { title: "Education", section: "education" },
  { title: "Blogs", section: "blogs" },
  { title: "Contact", section: "contact" },
]

export default function Navigation({
  activeSection,
  setActiveSection,
  theme,
  setTheme,
  cliMode,
  setCliMode,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "retro" ? "sunset" : "retro")
  }

  const toggleCliMode = () => {
    setCliMode(!cliMode)
    if (!cliMode) setActiveSection("intro")
  }

  return (
    <TooltipProvider>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
          isScrolled ? "md:top-4" : "md:top-8"
        }`}
      >
        <nav
          className={`mx-auto max-w-7xl rounded-full shadow-lg transition-all duration-300 ${
            isScrolled
              ? theme === "retro"
                ? "bg-gray-700/80 backdrop-blur-md shadow-lg shadow-green-500/10"
                : "bg-gray-600/80 backdrop-blur-md shadow-lg shadow-orange-500/10"
              : theme === "retro"
                ? "bg-gray-700/60"
                : "bg-gray-600/60"
          }`}
          
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Name */}
              <div
                className="flex items-center space-x-3 group cursor-pointer"
                onClick={() => setActiveSection("intro")}
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/20 transition-all duration-200 group-hover:ring-white/40">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => setActiveSection(item.section)}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      activeSection === item.section
                        ? theme === "retro"
                          ? "text-green-400"
                          : "text-orange-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.title}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                        theme === "retro" ? "bg-green-400" : "bg-orange-400"
                      } ${activeSection === item.section ? "w-full" : ""}`}
                    />
                  </button>
                ))}
              </div>

              {/* Theme and CLI Controls */}
              <div className="hidden md:flex items-center space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                        {theme === "retro" ? "Retro" : "Sunset"}
                      </span>
                      <Switch
                        checked={theme === "sunset"}
                        onCheckedChange={toggleTheme}
                        className={`${theme === "retro" ? "bg-green-700" : "bg-orange-700"}`}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle theme</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center">
                      <Terminal
                        onClick={toggleCliMode}
                        className={`cursor-pointer h-6 w-6 p-1 rounded-md transition-all duration-200 ${
                          cliMode
                            ? theme === "retro"
                              ? "bg-green-900 text-green-400 border border-green-700"
                              : "bg-orange-900 text-orange-400 border border-orange-700"
                            : "text-gray-400"
                        }`}
                      />
                      {cliMode && (
                        <span className={`text-xs mt-1 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                          CLI Mode
                        </span>
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle CLI mode</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <Terminal
                  onClick={toggleCliMode}
                  className={`cursor-pointer h-6 w-6 p-1 rounded-md transition-all duration-200 ${
                    cliMode
                      ? theme === "retro"
                        ? "bg-green-900 text-green-400 border border-green-700"
                        : "bg-orange-900 text-orange-400 border border-orange-700"
                      : "text-gray-400"
                  }`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-white"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, height: "auto" },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden rounded-b-3xl ${
              theme === "retro" ? "bg-gray-900/95" : "bg-gray-800/95"
            }`}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    setActiveSection(item.section)
                    setIsOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    activeSection === item.section
                      ? theme === "retro"
                        ? "text-green-400 bg-green-900/30"
                        : "text-orange-400 bg-orange-900/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.title}
                </button>
              ))}
              <div className="px-3 py-2 border-t border-gray-700 mt-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                    {theme === "retro" ? "Retro" : "Sunset"} Theme
                  </span>
                  <Switch
                    checked={theme === "sunset"}
                    onCheckedChange={toggleTheme}
                    className={`${theme === "retro" ? "bg-green-700" : "bg-orange-700"}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </nav>
      </motion.div>
    </TooltipProvider>
  )
}

