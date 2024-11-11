import { motion } from 'framer-motion'

export default function CursorFollower({ mousePosition, theme }: { mousePosition: { x: number; y: number }, theme: 'retro' | 'sunset' }) {
  const cursorColor = theme === 'retro' ? 'bg-green-400' : 'bg-orange-400'
  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-4 h-4 rounded-full ${cursorColor} pointer-events-none z-50`}
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100, mass: 0.1 }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 ${theme === 'retro' ? 'border-green-400' : 'border-orange-400'} pointer-events-none z-40`}
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', damping: 15, stiffness: 80, mass: 0.2 }}
      />
    </>
  )
}