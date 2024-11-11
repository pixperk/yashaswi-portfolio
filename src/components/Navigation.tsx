"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Terminal, X } from "lucide-react"; // Import Terminal icon
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export type Section =
  | "intro"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "blogs"
  | "contact";

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  theme: "retro" | "sunset";
  setTheme: (theme: "retro" | "sunset") => void;
  cliMode: boolean;
  setCliMode: (mode: boolean) => void;
}




const navItems: { title: string; section: Section }[] = [
  { title: "Intro", section: "intro" },
  { title: "Projects", section: "projects" },
  { title: "Skills", section: "skills" },
  { title: "Experience", section: "experience" },
  { title: "Education", section: "education" },
  { title: "Blogs", section: "blogs" },
  { title: "Contact", section: "contact" },
];

export default function Navigation({
  activeSection,
  setActiveSection,
  theme,
  setTheme,
  cliMode,
  setCliMode,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "retro" ? "sunset" : "retro");
  };

  const toggleCliMode = () => {
    setCliMode(!cliMode);
    if (!cliMode) setActiveSection("intro");
  };

  return (
    <TooltipProvider>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          theme === "retro" ? "bg-gray-800" : "bg-gray-900"
        } border-b ${
          theme === "retro" ? "border-green-700" : "border-orange-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={`text-2xl font-bold ${
                  theme === "retro" ? "text-green-400" : "text-orange-400"
                }`}
              >
                YKM
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.slice(0, 5).map((item) => (
                <Button
                  key={item.section}
                  variant="ghost"
                  onClick={() => handleSectionChange(item.section)}
                  className={`${
                    activeSection === item.section
                      ? theme === "retro"
                        ? "text-green-400 bg-gray-700"
                        : "text-orange-400 bg-gray-800"
                      : theme === "retro"
                      ? "text-gray-300 hover:text-green-300 hover:bg-gray-700"
                      : "text-gray-300 hover:text-orange-300 hover:bg-gray-800"
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out`}
                >
                  {item.title}
                </Button>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${
                      theme === "retro"
                        ? "text-gray-300 hover:text-green-300 hover:bg-gray-700"
                        : "text-gray-300 hover:text-orange-300 hover:bg-gray-800"
                    } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out`}
                  >
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`${
                    theme === "retro"
                      ? "bg-gray-800 text-green-400"
                      : "bg-gray-900 text-orange-400"
                  } rounded-md shadow-lg`}
                >
                  {navItems.slice(5).map((item) => (
                    <DropdownMenuItem
                      key={item.section}
                      onSelect={() => handleSectionChange(item.section)}
                      className={`${
                        theme === "retro"
                          ? "hover:bg-gray-700 hover:text-green-300"
                          : "hover:bg-gray-800 hover:text-orange-300"
                      } px-3 py-2 text-sm`}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm ${
                        theme === "retro" ? "text-green-400" : "text-orange-400"
                      }`}
                    >
                      {theme === "retro" ? "Retro" : "Sunset"}
                    </span>
                    <Switch
                      checked={theme === "sunset"}
                      onCheckedChange={toggleTheme}
                      className={`${
                        theme === "retro" ? "bg-green-700" : "bg-orange-700"
                      }`}
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
                      className={`cursor-pointer h-6 w-6 p-1 rounded-md transition-all duration-200
      ${
        cliMode
          ? "bg-gray-600 text-white border border-gray-500 shadow-md"
          : "text-gray-400"
      }
    `}
                    />
                    {cliMode && (
                      <span className="text-xs text-gray-300 mt-1">
                        CLI Mode
                      </span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle CLI mode</p>
                </TooltipContent>
              </Tooltip>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`text-gray-300 hover:text-white transition-all duration-200 ease-in-out ${
                    theme === "retro"
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed inset-y-0 right-0 w-64 z-50 ${
              theme === "retro" ? "bg-gray-800" : "bg-gray-900"
            } p-6 shadow-lg`}
          >
            <div className="flex justify-end mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className={`text-gray-300 hover:text-white transition-all duration-200 ease-in-out ${
                  theme === "retro" ? "hover:bg-gray-700" : "hover:bg-gray-800"
                }`}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-5rem)]">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.section}
                    variant="ghost"
                    onClick={() => handleSectionChange(item.section)}
                    className={`${
                      activeSection === item.section
                        ? theme === "retro"
                          ? "text-green-400 bg-gray-700"
                          : "text-orange-400 bg-gray-800"
                        : theme === "retro"
                        ? "text-gray-300 hover:text-green-300 hover:bg-gray-700"
                        : "text-gray-300 hover:text-orange-300 hover:bg-gray-800"
                    } block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 ease-in-out`}
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile sidebar */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
}
