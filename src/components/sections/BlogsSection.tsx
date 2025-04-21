"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { blogs } from "@/lib/data"
import { Blog } from "../../../types"
import { usePagination } from "@/hooks/usePagination"

export default function BlogsSection({ theme }: { theme: "retro" | "sunset" }) {
  const { currentItems, nextPage, prevPage, currentPage, maxPage } = usePagination(blogs, 4)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const activeTheme = theme === "retro" 
    ? {
        primary: "text-green-400",
        secondary: "text-green-200",
        border: "border-green-500",
        bg: "from-gray-900 to-gray-800",
        button: "bg-green-500 hover:bg-green-600",
        font: "font-mono",
        highlight: "bg-green-500/10"
      }
    : {
        primary: "text-orange-400",
        secondary: "text-orange-200",
        border: "border-orange-500",
        bg: "from-gray-800 to-black",
        button: "bg-orange-500 hover:bg-orange-600",
        font: "font-sans",
        highlight: "bg-orange-500/10"
      }

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-between mb-12"
      >
        <h2 className={`text-4xl font-bold ${activeTheme.primary} ${activeTheme.font}`}>
          My Blog
        </h2>
        <p className={`mt-2 sm:mt-0 text-gray-400 ${activeTheme.font}`}>
          Sharing my thoughts on software development and tech
        </p>
      </motion.div>

      {blogs && blogs.length > 0 ? (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
          >
            {currentItems.map((blog: Blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                className={`rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border ${activeTheme.border} bg-gradient-to-br ${activeTheme.bg}`}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute bottom-0 right-0 ${activeTheme.button} text-black px-3 py-1 m-2 rounded-full flex items-center gap-1`}>
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-medium">{blog.minutesRead} min read</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${activeTheme.primary} ${activeTheme.font}`}>
                    {blog.title}
                  </h3>
                  
                  <p className={`text-gray-400 mb-6 ${activeTheme.font}`}>
                    {blog.excerpt}
                  </p>

                  <div className="flex justify-end">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-5 py-2 rounded-lg font-bold transition-all duration-300 ${activeTheme.button} text-black`}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {blogs.length > 4 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4 items-center mt-8"
            >
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${activeTheme.primary}`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <span className={`${activeTheme.primary} ${activeTheme.font}`}>
                Page {currentPage} of {maxPage}
              </span>
              
              <button 
                onClick={nextPage} 
                disabled={currentPage === maxPage}
                className={`p-2 rounded-full ${currentPage === maxPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${activeTheme.primary}`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-8 rounded-lg shadow-lg border text-center ${activeTheme.border} ${activeTheme.highlight}`}
        >
          <BookOpen
            className={`w-16 h-16 mx-auto mb-4 ${activeTheme.primary}`}
          />
          <p className={`text-xl font-bold ${activeTheme.primary} ${activeTheme.font}`}>
            Exciting blog posts coming soon!
          </p>
          <p className={`mt-2 ${activeTheme.font} text-gray-400`}>
            Stay tuned for insightful articles and tech discussions.
          </p>
        </motion.div>
      )}
    </section>
  )
}