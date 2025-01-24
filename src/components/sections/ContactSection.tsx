"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon, SendHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const socialLinks = [
  {
    icon: TwitterIcon,
    href: "https://x.com/PixPerk_",
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/pixperk",
    label: "GitHub",
    color: "#333",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/yashaswi-kumar-mishra-459a53285/",
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    icon: MailIcon,
    href: "mailto:mishrayashaswikumar@gmail.com",
    label: "Email",
    color: "#EA4335",
  },
]

export default function ContactSection({ theme }: { theme: "retro" | "sunset" }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

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

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <div
            className={`grid md:grid-cols-2 gap-12 p-8 rounded-2xl h-full ${
              theme === "retro" ? "bg-gray-900 border border-green-500/20" : "bg-gray-900 border border-orange-500/20"
            }`}
          >
            {/* Left side - Contact Info */}
            <div className="space-y-8 overflow-auto  px-2 ">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-5xl font-boldmb-4 ${
                    theme === "retro" ? "text-green-400 font-mono" : "text-orange-400 font-serif"
                  }`}
                >
                  Let&apos;s Connect
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg"
                >
                  Send me a message here.<br />I will receive your message instantly via email.
                </motion.p>
              </div>

              <div className="space-y-6">
                <p className={`text-xl font-semibold ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                  Find me on
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`p-4 rounded-xl border ${
                        theme === "retro"
                          ? "bg-gray-800 border-green-500/20 hover:border-green-500/40"
                          : "bg-gray-800 border-orange-500/20 hover:border-orange-500/40"
                      }`}
                    >
                      <social.icon className={`w-6 h-6 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="overflow-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "message"].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <AnimatePresence>
                      {(focusedField === field || formValues[field as keyof typeof formValues]) && (
                        <motion.label
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className={`absolute -top-6 left-2 text-sm ${
                            theme === "retro" ? "text-green-400" : "text-orange-400"
                          }`}
                        >
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </motion.label>
                      )}
                    </AnimatePresence>
                    {field === "message" ? (
                      <textarea
                        name={field}
                        value={formValues[field as keyof typeof formValues]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        placeholder={`Your ${field}`}
                        className={`w-full p-4 rounded-xl border bg-gray-800 placeholder-gray-500 ${
                          theme === "retro"
                            ? "border-green-500/20 focus:border-green-500/40 font-mono"
                            : "border-orange-500/20 focus:border-orange-500/40 font-sans"
                        }`}
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formValues[field as keyof typeof formValues]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={`Your ${field}`}
                        className={`w-full p-4 rounded-xl border bg-gray-800 placeholder-gray-500 ${
                          theme === "retro"
                            ? "border-green-500/20 focus:border-green-500/40 font-mono"
                            : "border-orange-500/20 focus:border-orange-500/40 font-sans"
                        }`}
                      />
                    )}
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full p-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                      theme === "retro"
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
    </div>
  )
}


