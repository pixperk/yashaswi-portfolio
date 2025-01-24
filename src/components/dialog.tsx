"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GithubIcon, EyeIcon } from "lucide-react"
import { Project } from "../../types"

interface ProjectDialogProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
  theme: "retro" | "sunset"
}

export function ProjectDialog({ project, open, onOpenChange, theme }: ProjectDialogProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`max-w-4xl p-0 overflow-hidden ${
          theme === "retro" ? "bg-gray-900 border-green-700" : "bg-gray-900 border-orange-700"
        }`}
      >
        <div className="relative h-[60vh] w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle
              className={`text-3xl font-bold ${
                theme === "retro" ? "text-green-400 font-mono" : "text-orange-400 font-serif"
              }`}
            >
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex space-x-4 mt-6">
            <Button
              variant="outline"
              size="lg"
              asChild
              className={`${
                theme === "retro"
                  ? "text-white bg-green-500 border-green-700 hover:bg-green-900 hover:text-green-200"
                  : "text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200"
              }`}
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className={`${
                theme === "retro"
                  ? "text-white bg-green-500 border-green-700 hover:bg-green-900 hover:text-green-200"
                  : "text-white bg-orange-500 border-orange-700 hover:bg-orange-900 hover:text-orange-200"
              }`}
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <EyeIcon className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

