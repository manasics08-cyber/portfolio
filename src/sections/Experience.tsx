import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export function Experience() {
  const { timeline } = portfolioData
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress along the timeline section to draw the green line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 60%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" ref={containerRef} className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#3DAA5C]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A06] border border-[#3DAA5C]/40 text-[#4ADE80] text-xs font-bold tracking-wider uppercase mb-4">
            Journey & Milestones
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight mb-4">
            Education & Experience
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[#B5B5B5]">
            My academic progression at Thejus Engineering College alongside practical frontend engineering experience and hackathon leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Static Gray Background Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-white/[0.08] -translate-x-1/2" />

          {/* Animated Green Line that draws itself as you scroll */}
          <motion.div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2d8245] via-[#3DAA5C] to-[#4ADE80] -translate-x-1/2 origin-top shadow-[0_0_12px_#4ADE80]"
            style={{ scaleY }}
          />

          {/* Timeline Nodes & Cards */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0
              const IconComponent =
                item.type === 'education'
                  ? GraduationCap
                  : item.type === 'experience'
                    ? Briefcase
                    : Award

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#050A06] border-2 border-[#3DAA5C] flex items-center justify-center shadow-[0_0_15px_rgba(61,170,92,0.6)]">
                      <IconComponent className="w-4 h-4 text-[#4ADE80]" />
                    </div>
                  </div>

                  {/* Left or Right Card Placement */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-14 sm:text-right' : 'sm:ml-auto sm:pl-14'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0, margin: '0px 0px 200px 0px' }}
                      transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
                      className="p-6 sm:p-7 rounded-2xl bg-[#050A06] border border-white/[0.08] hover:border-[#3DAA5C]/40 transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(61,170,92,0.2)] text-left"
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 text-xs font-semibold text-[#4ADE80]">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>

                        <span className="text-xs font-mono uppercase tracking-wider text-[#7E8680]">
                          {item.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#3DAA5C] font-semibold mb-3">
                        <span>{item.organization}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-xs text-[#7E8680] flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#B5B5B5]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
