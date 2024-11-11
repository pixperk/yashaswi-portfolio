import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>Get in Touch</h2>
      <div className="flex space-x-6 mb-8">
        <motion.a
          href="https://x.com/PixPerk_"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          className={`text-gray-400 hover:text-white ${theme === 'retro' ? 'bg-gray-800' : 'bg-gray-700'} p-3 rounded-full`}
        >
          <TwitterIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://github.com/yashaswi-mishra"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          className={`text-gray-400 hover:text-white ${theme === 'retro' ? 'bg-gray-800' : 'bg-gray-700'} p-3 rounded-full`}
        >
          <GithubIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yashaswi-mishra"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          className={`text-gray-400 hover:text-white ${theme === 'retro' ? 'bg-gray-800' : 'bg-gray-700'} p-3 rounded-full`}
        >
          <LinkedinIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="mailto:yashaswi@example.com"
          whileHover={{ scale: 1.2, rotate: 360 }}
          className={`text-gray-400 hover:text-white ${theme === 'retro' ? 'bg-gray-800' : 'bg-gray-700'} p-3 rounded-full`}
        >
          <MailIcon className="w-6 h-6"  />
        </motion.a>
      </div>
      <form className="w-full max-w-md space-y-4">
        <div>
          <Label htmlFor="name" className={`text-sm font-medium text-gray-400 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Your Name"
            className={`mt-1 ${theme === 'retro' ? 'bg-gray-800 border-green-400 font-mono' : 'bg-gray-700 border-orange-400 font-sans'} focus:ring-2 focus:ring-offset-2 ${theme === 'retro' ? 'focus:ring-green-400' : 'focus:ring-orange-400'} focus:border-transparent`}
          />
        </div>
        <div>
          <Label htmlFor="email" className={`text-sm font-medium text-gray-400 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="your@email.com"
            className={`mt-1 ${theme === 'retro' ? 'bg-gray-800 border-green-400 font-mono' : 'bg-gray-700 border-orange-400 font-sans'} focus:ring-2 focus:ring-offset-2 ${theme === 'retro' ? 'focus:ring-green-400' : 'focus:ring-orange-400'} focus:border-transparent`}
          />
        </div>
        <div>
          <Label htmlFor="message" className={`text-sm font-medium text-gray-400 ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>Message</Label>
          <textarea
            id="message"
            placeholder="Your message here..."
            rows={4}
            className={`w-full mt-1 p-2 rounded-md ${theme === 'retro' ? 'bg-gray-800 border-green-400 font-mono' : 'bg-gray-700 border-orange-400 font-sans'} focus:ring-2 focus:ring-offset-2 ${theme === 'retro' ? 'focus:ring-green-400' : 'focus:ring-orange-400'} focus:border-transparent`}
          ></textarea>
        </div>
        <Button
          type="submit"
          className={`w-full ${theme === 'retro' ? 'bg-green-400 hover:bg-green-500 font-mono' : 'bg-gradient-to-r from-orange-400 to-pink-600 hover:from-orange-500 hover:to-pink-700 font-sans'} text-gray-900 font-bold py-2 px-4 rounded transition-colors`}
        >
          Send Message
        </Button>
      </form>
    </div>
  )
}