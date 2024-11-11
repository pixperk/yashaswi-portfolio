import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { blogs } from '@/lib/data'
import { Blog } from '../../../types'

export default function BlogsSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>Blogs</h2>
      {blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog:Blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'retro' ? 'font-mono text-green-400' : 'font-sans text-orange-400'}`}>{blog.title}</h3>
              <p className={`text-gray-400 mb-4 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{blog.excerpt}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block ${theme === 'retro' ? 'bg-green-400 hover:bg-green-500 text-gray-900' : 'bg-orange-400 hover:bg-orange-500 text-gray-900'} font-bold py-2 px-4 rounded transition-colors`}
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border text-center`}
        >
          <BookOpen className={`w-16 h-16 mx-auto mb-4 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
          <p className={`text-xl ${theme === 'retro' ? 'font-mono text-green-400' : 'font-sans text-orange-400'}`}>Exciting blog posts coming soon!</p>
          <p className={`mt-2 ${theme === 'retro' ? 'font-mono text-gray-400' : 'font-sans text-gray-300'}`}>Stay tuned for insightful articles and tech discussions.</p>
        </motion.div>
      )}
    </div>
  )
}