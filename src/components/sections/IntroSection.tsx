"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, Twitter, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import type { Section } from "../Navigation";
import { Button } from "@/components/ui/button";

interface IntroProps {
  setActiveSection: (section: Section) => void;
  theme?: "retro" | "sunset";
}

const IntroSection = ({ setActiveSection, theme = "retro" }: IntroProps) => {
  const handleSectionChange = useCallback(
    (section: Section) => {
      setActiveSection(section);
    },
    [setActiveSection]
  );

  const handleResumeDownload = useCallback(() => {
    const anchor = document.createElement("a");
    anchor.href = "/resume.pdf";
    anchor.download = "Yashaswi_Kumar_Mishra_Resume.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1 max-w-3xl">
            <motion.div variants={itemVariants}>
              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 ${
                  theme === "retro" ? "font-mono" : "font-sans"
                }`}
              >
                Hey! I&apos;m{" "}
                <span
                  className={
                    theme === "retro" ? "text-green-400" : "text-orange-400"
                  }
                >
                  Yashaswi Kumar Mishra
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2
                className={`text-2xl md:text-3xl mb-8 text-gray-400 ${
                  theme === "retro" ? "font-mono" : "font-sans"
                }`}
              >
                and I&apos;m a full stack TypeScript developer.
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className={`text-gray-400 text-lg mb-6 leading-relaxed ${
                  theme === "retro" ? "font-mono" : "font-sans"
                }`}
              >
                I&apos;ve been passionate about technology since childhood. What
                started with curiosity about how computers work has evolved
                into a deep expertise in modern web development. Today, I craft
                scalable applications that combine elegant design with robust
                functionality.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className={`text-gray-400 text-lg mb-8 leading-relaxed ${
                  theme === "retro" ? "font-mono" : "font-sans"
                }`}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community. I believe in writing
                clean, maintainable code that solves real-world problems.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden lg:flex gap-4 mb-8"
            >
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:ml-12 mt-12 lg:mt-0 relative"
          >
            <div
              className={`w-64 h-64 rounded-3xl overflow-hidden ${
                theme === "retro"
                  ? "border-2 border-green-400"
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

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col gap-4"
            >
              <Button
                variant="default"
                size="lg"
                className={`w-full py-6 rounded-full transition-all duration-300 hover:scale-105 ${
                  theme === "retro"
                    ? "bg-green-400 text-black hover:bg-green-500"
                    : "bg-orange-400 text-white hover:bg-orange-500"
                }`}
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`w-full py-6 rounded-full transition-all duration-300 hover:scale-105 ${
                  theme === "retro"
                    ? "bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black"
                    : "bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black"
                }`}
                onClick={() => handleSectionChange("contact")}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex lg:hidden gap-4 mt-6 justify-center"
            >
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === "retro"
                    ? "text-green-400 hover:text-green-300"
                    : "text-orange-400 hover:text-orange-300"
                }`}
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
