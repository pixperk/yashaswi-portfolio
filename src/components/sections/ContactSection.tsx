"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon, SendHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const socialLinks = [
  { icon: TwitterIcon, href: "https://x.com/PixPerk_", label: "Twitter" },
  { icon: GithubIcon, href: "https://github.com/pixperk", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/yashaswi-kumar-mishra-459a53285/", label: "LinkedIn" },
  { icon: MailIcon, href: "mailto:mishrayashaswikumar@gmail.com", label: "Email" },
]

interface FormValues {
  name: string
  email: string
  message: string
}

export default function ContactSection({ theme }: { theme: "retro" | "sunset" }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<keyof FormValues | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormValues({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        toast.error(`Error: ${errorData.error}`)
      }
    } catch (error) {
      toast.error("Error: Failed to send message.")
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const isRetro = theme === "retro"

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div
          className={`grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl ${
            isRetro ? "bg-gray-900 border border-green-500/20" : "bg-gray-900 border border-orange-500/20"
          }`}
        >
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isRetro ? "text-green-400 font-mono" : "text-orange-400 font-serif"
              }`}
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg"
            >
              Send me a message here.
              <br />I will receive your message instantly via email.
            </motion.p>

            <div className="space-y-4">
              <p className={`text-lg font-semibold ${isRetro ? "text-green-400" : "text-orange-400"}`}>Find me on</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 rounded-xl border ${
                      isRetro
                        ? "bg-gray-800 border-green-500/20 hover:border-green-500/40"
                        : "bg-gray-800 border-orange-500/20 hover:border-orange-500/40"
                    }`}
                  >
                    <social.icon
                      className={`w-5 h-5 ${isRetro ? "text-green-400" : "text-orange-400"}`}
                      aria-label={social.label}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {(Object.keys(formValues) as Array<keyof FormValues>).map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <AnimatePresence>
                    {(focusedField === field || formValues[field]) && (
                      <motion.label
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute -top-6 left-2 text-sm ${isRetro ? "text-green-400" : "text-orange-400"}`}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </motion.label>
                    )}
                  </AnimatePresence>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formValues[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      placeholder={`Your ${field}`}
                      className={`w-full p-3 rounded-xl border bg-gray-800 placeholder-gray-500 ${
                        isRetro
                          ? "border-green-500/20 focus:border-green-500/40 font-mono"
                          : "border-orange-500/20 focus:border-orange-500/40 font-sans"
                      }`}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formValues[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={`Your ${field}`}
                      className={`w-full p-3 rounded-xl border bg-gray-800 placeholder-gray-500 ${
                        isRetro
                          ? "border-green-500/20 focus:border-green-500/40 font-mono"
                          : "border-orange-500/20 focus:border-orange-500/40 font-sans"
                      }`}
                    />
                  )}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-3 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 ${
                    isRetro
                      ? "bg-green-500 hover:bg-green-600 text-gray-900 font-mono"
                      : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-sans"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isLoading ? "Sending..." : "Send Message"}
                    <SendHorizontal className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

