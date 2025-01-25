"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Briefcase, Download, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"
import type { Section } from "../Navigation"

interface IntroProps {
  setActiveSection: (section: Section) => void
  theme?: "retro" | "sunset"
}

const IntroSection = ({ setActiveSection, theme = "retro" }: IntroProps) => {
  const handleSectionChange = useCallback(
    (section: Section) => {
      setActiveSection(section)
    },
    [setActiveSection],
  )

  const handleResumeDownload = useCallback(() => {
    const anchor = document.createElement("a")
    anchor.href = "/resume.pdf"
    anchor.download = "Yashaswi_Kumar_Mishra_Resume.pdf"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }, [])

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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-32">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1 lg:mr-12 w-full">
            <div className="flex items-center mb-6 lg:hidden">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 ">
                <Image
                  src="/profile.jpg"
                  alt="Yashaswi Kumar Mishra"
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className={`text-2xl sm:text-3xl font-bold ${theme === "retro" ? "font-mono" : "font-sans"}`}>
                Yashaswi Kumar Mishra
              </h1>
            </div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${
                  theme === "retro" ? "font-mono text-3xl md:text-4xl" : "font-sans"
                }`}
              >
                Hey! I&apos;m{" "}
                <span className={theme === "retro" ? "text-green-400 text-4xl md:text-5xl" : "text-orange-400"}>
                  Yashaswi Kumar Mishra
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2
                className={`text-xl sm:text-2xl md:text-2xl mb-4 lg:mb-6 ${
                  theme === "retro"
                    ? "font-mono text-lg sm:text-xl md:text-xl bg-green-400 text-black"
                    : "font-sans bg-orange-400 text-white"
                } inline-block px-2 py-1 rounded`}
              >
                Full Stack TypeScript Developer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className={`text-gray-300 text-base sm:text-lg mb-6 leading-relaxed ${
                  theme === "retro" ? "font-mono text-[15px] sm:text-[16px]" : "font-sans"
                }`}
              >
                I&apos;ve been passionate about technology since childhood. What started with curiosity about how
                computers work has evolved into a deep expertise in modern web development. Today, I craft scalable
                applications that combine elegant design with robust functionality.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className={`text-gray-300 text-base sm:text-lg mb-8 leading-relaxed ${
                  theme === "retro" ? "font-mono text-[15px] sm:text-[16px]" : "font-sans"
                }`}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable
                code that solves real-world problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              <a
                href="https://twitter.com/pixperk_"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300 border border-green-400"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashaswi-kumar-mishra-459a53285"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300 border border-green-400"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/pixperk"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300 border border-green-400"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 lg:hidden">
              <Button
                variant="default"
                size="lg"
                className={`w-full py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  theme === "retro"
                    ? "bg-green-400 text-black hover:bg-green-500 font-mono text-sm"
                    : "bg-orange-400 text-white hover:bg-orange-500"
                }`}
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`w-full py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  theme === "retro"
                    ? "bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black font-mono text-sm"
                    : "bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black"
                }`}
                onClick={() => handleSectionChange("contact")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/3 mt-8 lg:mt-0 relative flex-col items-center hidden lg:flex"
          >
            <div
              className={`w-64 h-64 rounded-3xl overflow-hidden mx-auto mb-6 ${
                theme === "retro"
                  ? "border-4 border-green-400 shadow-lg shadow-green-400/50"
                  : "border-2 border-orange-400"
              }`}
            >
              <Image
                src="/profile.jpg"
                alt="Yashaswi Kumar Mishra"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>

            <motion.div variants={itemVariants} className="w-full flex flex-col gap-4">
              <Button
                variant="default"
                size="lg"
                className={`w-full py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 ${
                  theme === "retro"
                    ? "bg-green-400 text-black hover:bg-green-500 font-mono text-sm"
                    : "bg-orange-400 text-white hover:bg-orange-500"
                }`}
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`w-full py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 ${
                  theme === "retro"
                    ? "bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black font-mono text-sm"
                    : "bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black"
                }`}
                onClick={() => handleSectionChange("contact")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroSection

