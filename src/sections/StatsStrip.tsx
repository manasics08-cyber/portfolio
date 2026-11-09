import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -30px 0px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1400 // ms
    const frames = 50
    const increment = target / frames
    const stepTime = duration / frames

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums font-extrabold text-[#3DAA5C] text-5xl sm:text-6xl md:text-7xl tracking-tight">
      {current}
      <span className="text-[#4ADE80]">{suffix}</span>
    </span>
  )
}

export function StatsStrip() {
  const { stats } = portfolioData
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -30px 0px' })

  return (
    <section ref={sectionRef} className="relative bg-black pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pb-16">
          
          {/* Left Column: Heading "Transforming Ideas Into Impact" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Transforming<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#4ADE80]">
                Ideas Into Impact
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Three Large Green Animated Count-Up Numbers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {stats.items.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: 'easeOut' }}
                className="flex flex-col items-start"
              >
                <div className="mb-2">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base sm:text-lg font-medium text-white tracking-tight">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-xs text-[#7E8680] mt-1">
                    {stat.sublabel}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Thin divider line sitting below the strip */}
        <div className="w-full h-[1px] bg-white/[0.08]" />
      </div>
    </section>
  )
}
