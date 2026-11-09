import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2d8245] via-[#3DAA5C] to-[#4ADE80] z-[100] origin-left shadow-[0_0_12px_rgba(74,222,128,0.8)]"
      style={{ scaleX }}
    />
  )
}

