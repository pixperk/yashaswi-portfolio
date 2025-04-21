"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Briefcase, Download, Github, Linkedin, Twitter, Code, BookOpen } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"
import type { Section } from "../Navigation"

interface IntroProps {
  setActiveSection: (section: Section) => void
  theme?: "retro" | "sunset"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const getThemeStyles = (theme: "retro" | "sunset") => {
  const isRetro = theme === "retro"
  return {
    font: isRetro ? "font-mono" : "font-sans",
    color: isRetro ? "text-green-400" : "text-orange-400",
    hoverColor: isRetro ? "hover:text-green-300" : "hover:text-orange-300",
    borderColor: isRetro ? "border-green-400" : "border-orange-400",
    buttonBg: isRetro ? "bg-green-400 text-black hover:bg-green-500" : "bg-orange-400 text-white hover:bg-orange-500",
    outlineBtn:
      isRetro
        ? "bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black"
        : "bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black",
    shadow: isRetro ? "shadow-lg shadow-green-400/50" : "",
    imgBorder: isRetro ? "border-4 border-green-400" : "border-2 border-orange-400",
    secondaryBtn:
      isRetro
        ? "bg-transparent text-green-200 border border-green-200 hover:bg-green-200 hover:text-black"
        : "bg-transparent text-orange-200 border border-orange-200 hover:bg-orange-200 hover:text-black",
  }
}

const IntroSection = ({ setActiveSection, theme = "retro" }: IntroProps) => {
  const styles = getThemeStyles(theme)

  const handleSectionChange = useCallback(
    (section: Section) => setActiveSection(section),
    [setActiveSection]
  )

  const handleResumeDownload = useCallback(() => {
    const anchor = document.createElement("a")
    anchor.href = "/resume.pdf"
    anchor.download = "Yashaswi_Kumar_Mishra_Resume.pdf"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-32">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Text Content */}
          <div className="flex-1 lg:mr-12 w-full">
            {/* Mobile Profile + Name */}
            <div className="flex items-center mb-6 lg:hidden">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image src="/profile.jpg" alt="Yashaswi" width={64} height={64} className="object-cover" priority />
              </div>
              <h1 className={`text-2xl sm:text-3xl font-bold ${styles.font}`}>Yashaswi Kumar Mishra</h1>
            </div>

            {/* Large Name */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.font}`}>
                Hey! I&apos;m <span className={`${styles.color}`}>Yashaswi Kumar Mishra</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <h2 className={`text-xl sm:text-2xl mb-4 lg:mb-6 inline-block px-1 py-1 rounded ${styles.font} ${styles.color}`}>
                Backend Developer
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants}>
              <p className={`text-gray-300 text-base sm:text-lg mb-6 leading-relaxed ${styles.font}`}>
                I build reliable backend systems with a focus on performance, scalability, and clean architecture. My work spans developer tools, infrastructure, and system design - driven by a deep curiosity for how things work under the hood.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className={`text-gray-300 text-base sm:text-lg mb-8 leading-relaxed ${styles.font}`}>
                I&apos;m comfortable across Go, Rust, and TypeScript - building structured, maintainable systems. Whether it&apos;s crafting APIs, working with distributed systems, or writing low-level logic, I bring a strong foundation and a hunger to learn fast and ship even faster.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              {([
                ["twitter", "https://twitter.com/pixperk_", Twitter],
                ["linkedin", "https://www.linkedin.com/in/yashaswi-kumar-mishra-459a53285", Linkedin],
                ["github", "https://github.com/pixperk", Github]
              ] as [string, string, React.ElementType][]).map(([name, url, Icon]) => (
                <a key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors ${styles.color} ${styles.hoverColor} ${styles.borderColor && "border"}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Explore Work CTA Buttons - Mobile */}
            <motion.div variants={itemVariants} className="lg:hidden space-y-3 mb-6">
              <div className="flex flex-wrap gap-3">
                <Button 
                  className={`flex items-center px-5 py-2 rounded-full text-sm ${styles.secondaryBtn} ${styles.font}`}
                  onClick={() => handleSectionChange("projects")}
                >
                  <Code className="mr-2 h-4 w-4" /> My Projects
                </Button>
                <Button 
                  className={`flex items-center px-5 py-2 rounded-full text-sm ${styles.secondaryBtn} ${styles.font}`}
                  onClick={() => handleSectionChange("blogs")}
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Read My Blog
                </Button>
              </div>
            </motion.div>

            {/* Mobile Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 lg:hidden">
              <Button className={`w-full py-3 rounded-full hover:scale-105 transition-all duration-300 ${styles.buttonBg} ${styles.font}`} onClick={handleResumeDownload}>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button className={`w-full py-3 rounded-full hover:scale-105 transition-all duration-300 ${styles.outlineBtn} ${styles.font}`} onClick={() => handleSectionChange("contact")}>
                <Briefcase className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Profile Picture and Buttons */}
          <motion.div variants={itemVariants} className="lg:w-1/3 mt-8 lg:mt-0 hidden lg:flex flex-col items-center">
            <div className={`w-64 h-64 rounded-3xl overflow-hidden mb-6 mx-auto ${styles.imgBorder} ${styles.shadow}`}>
              <Image src="/profile.jpg" alt="Yashaswi" width={256} height={256} className="object-cover" priority />
            </div>

            {/* Explore Work CTA Buttons - Desktop */}
            <motion.div variants={itemVariants} className="w-full flex justify-center gap-4 mb-6">
              <Button 
                className={`flex items-center px-5 py-2 rounded-full ${styles.secondaryBtn} ${styles.font}`}
                onClick={() => handleSectionChange("projects")}
              >
                <Code className="mr-2 h-4 w-4" /> My Projects
              </Button>
              <Button 
                className={`flex items-center px-5 py-2 rounded-full ${styles.secondaryBtn} ${styles.font}`}
                onClick={() => handleSectionChange("blogs")}
              >
                <BookOpen className="mr-2 h-4 w-4" /> Read My Blog
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full flex flex-col gap-4">
              <Button className={`w-full py-3 rounded-full hover:scale-105 transition-all duration-300 ${styles.buttonBg} ${styles.font}`} onClick={handleResumeDownload}>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button className={`w-full py-3 rounded-full hover:scale-105 transition-all duration-300 ${styles.outlineBtn} ${styles.font}`} onClick={() => handleSectionChange("contact")}>
                <Briefcase className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroSection