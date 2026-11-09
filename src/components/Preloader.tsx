import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Fast count-up to 100
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsDone(true)
            setTimeout(onComplete, 400)
          }, 200)
          return 100
        }
        const step = Math.floor(Math.random() * 15) + 8
        return Math.min(prev + step, 100)
      })
    }, 45)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center px-4"
        >
          {/* Subtle green ambient glow behind */}
          <div className="absolute w-72 h-72 rounded-full bg-[#3DAA5C]/20 blur-[100px] pointer-events-none" />

          {/* Logo Brand */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center mb-6"
            >
              <span>Manasi</span>
              <span className="text-[#3DAA5C] text-5xl">.</span>
            </motion.div>

            {/* Glowing progress bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2d8245] via-[#3DAA5C] to-[#4ADE80] shadow-[0_0_15px_#4ADE80]"
                style={{ width: `${percent}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage counter */}
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#B5B5B5]">
              <span className="text-[#4ADE80] font-semibold">{percent}%</span>
              <span>INITIALIZING</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

