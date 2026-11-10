import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ArrowRight, Download, Sparkles, Code2, Layers, Zap } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

interface HeroProps {
  isLoaded: boolean;
  onOpenResume?: () => void;
}

export function Hero({ isLoaded, onOpenResume }: HeroProps) {
  const { personal } = portfolioData
  const [taglineIndex, setTaglineIndex] = useState(0)

  // Rotating subtitle taglines
  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personal.taglines.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [personal.taglines.length])

  // Framer motion variants for line-by-line mask slide-up
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const lineVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3DAA5C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#4ADE80]/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Status pill badge */}
            <div className="overflow-hidden mb-4">
              <motion.div
                variants={lineVariants}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#050A06] border border-[#3DAA5C]/30 text-xs font-semibold text-white/90 backdrop-blur-md shadow-[0_0_20px_rgba(61,170,92,0.15)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
                </span>
                <span className="text-[#4ADE80]">{personal.college}</span>
                <span className="text-white/30">•</span>
                <span className="text-[#B5B5B5]">CS Student</span>
              </motion.div>
            </div>

            {/* Main Headline with line-by-line mask reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                variants={lineVariants}
                className="hero-headline font-extrabold tracking-tight text-white"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#4ADE80]">Manasi CS</span>
              </motion.h1>
            </div>

            {/* Rotating / Animated Subtitle */}
            <div className="overflow-hidden mb-6 h-10 sm:h-12 flex items-center">
              <motion.div variants={lineVariants} className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#4ADE80] animate-pulse" />
                <span className="text-lg sm:text-2xl font-bold text-white/80">I am a</span>
                <div className="relative inline-block h-8 sm:h-10 overflow-hidden min-w-[240px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={taglineIndex}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="absolute left-0 top-0 text-lg sm:text-2xl font-bold text-[#4ADE80] underline decoration-[#3DAA5C]/40 underline-offset-8"
                    >
                      {personal.taglines[taglineIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Intro paragraph */}
            <div className="overflow-hidden mb-8 max-w-xl">
              <motion.p
                variants={lineVariants}
                className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed"
              >
                {personal.bioShort}
              </motion.p>
            </div>

            {/* Call To Action Buttons */}
            <div className="overflow-hidden w-full sm:w-auto">
              <motion.div
                variants={lineVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                {/* Primary Button */}
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3DAA5C] text-black font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#4ADE80] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] active:scale-95 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Outlined Pill Variant with Interactive Resume Modal trigger */}
                <button
                  onClick={() => {
                    if (onOpenResume) {
                      onOpenResume()
                    } else {
                      handleScrollTo('about')
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-semibold text-sm hover:border-[#3DAA5C] hover:text-[#4ADE80] hover:bg-[#3DAA5C]/10 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>Resume & Bio</span>
                </button>
              </motion.div>
            </div>

            {/* Tech tag pills preview */}
            <motion.div
              variants={lineVariants}
              className="mt-10 flex flex-wrap items-center gap-2 text-xs font-mono text-[#7E8680]"
            >
              <span className="text-[#B5B5B5] font-semibold">CORE:</span>
              {['React', 'Tailwind', 'Three.js', 'Python', 'GSAP'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#050A06] border border-white/[0.06] text-[#B5B5B5]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Profile Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] flex items-center justify-center"
            >
              {/* Deep ambient glow field */}
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-[#3DAA5C]/30 via-[#4ADE80]/10 to-transparent blur-3xl pointer-events-none -z-10" />
              <div className="absolute -inset-16 rounded-[4rem] bg-[#3DAA5C]/8 blur-[80px] pointer-events-none -z-10" />

              {/* Rotating dashed ring — outermost orbital */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-[#4ADE80]/12 pointer-events-none"
              />

              {/* Counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-[#3DAA5C]/18 pointer-events-none"
              />

              {/* Orbital accent dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full pointer-events-none"
                style={{ transformOrigin: 'center' }}
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
              </motion.div>

              {/* ── PROFILE CARD FRAME ── */}
              <div className="relative w-full aspect-[3/4] group">

                {/* Green gradient border shell */}
                <div className="absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-b from-[#4ADE80]/60 via-[#3DAA5C]/30 to-[#3DAA5C]/10 shadow-[0_0_60px_rgba(61,170,92,0.25)]">
                  <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-[#030705]">

                    {/* Photo */}
                    <img
                      src="/images/manasi.jpg"
                      alt="Manasi CS"
                      className="w-full h-full object-cover object-[center_18%] filter brightness-90 contrast-[1.08] saturate-[0.92] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Cinematic color grade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030705] via-[#030705]/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/6 via-transparent to-[#030705]/50 pointer-events-none mix-blend-screen" />

                    {/* ── SCAN LINE EFFECT ── */}
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74,222,128,0.5) 2px, rgba(74,222,128,0.5) 3px)', backgroundSize: '100% 3px' }}
                    />

                    {/* ── ANIMATED SCAN BEAM ── */}
                    <motion.div
                      animate={{ y: ['0%', '100%', '0%'] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ADE80]/50 to-transparent pointer-events-none shadow-[0_0_12px_rgba(74,222,128,0.6)]"
                      style={{ top: 0 }}
                    />

                    {/* ── CORNER BRACKET ACCENTS ── */}
                    {/* Top-left */}
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <div className="w-5 h-5 border-t-2 border-l-2 border-[#4ADE80] rounded-tl-sm" />
                    </div>
                    {/* Top-right */}
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <div className="w-5 h-5 border-t-2 border-r-2 border-[#4ADE80] rounded-tr-sm" />
                    </div>
                    {/* Bottom-left */}
                    <div className="absolute bottom-4 left-4 pointer-events-none">
                      <div className="w-5 h-5 border-b-2 border-l-2 border-[#4ADE80] rounded-bl-sm" />
                    </div>
                    {/* Bottom-right */}
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                      <div className="w-5 h-5 border-b-2 border-r-2 border-[#4ADE80] rounded-br-sm" />
                    </div>

                    {/* ── IDENTITY TAG (top-left chip) ── */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.0, duration: 0.5 }}
                      className="absolute top-5 left-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#030705]/80 border border-[#3DAA5C]/50 backdrop-blur-md"
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ADE80]" />
                      </span>
                      <span className="text-[10px] font-bold text-[#4ADE80] tracking-wider uppercase">CS Student</span>
                    </motion.div>

                    {/* ── SKILL CHIPS (right side vertical) ── */}
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none"
                    >
                      {[
                        { icon: Code2, label: 'React' },
                        { icon: Layers, label: 'UI/UX' },
                        { icon: Zap, label: 'GSAP' },
                      ].map(({ icon: Icon, label }, i) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, x: 10 }}
                          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#030705]/85 border border-[#3DAA5C]/35 backdrop-blur-md shadow-[0_0_10px_rgba(61,170,92,0.2)]"
                        >
                          <Icon className="w-2.5 h-2.5 text-[#4ADE80]" />
                          <span className="text-[9px] font-bold text-white tracking-wider">{label}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* ── BOTTOM HUD BAR ── */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="absolute bottom-5 left-4 right-4 flex items-center justify-between bg-[#030705]/75 backdrop-blur-lg border border-white/[0.1] rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                    >
                      <div>
                        <div className="text-[11px] font-extrabold text-white leading-tight">Manasi CS</div>
                        <div className="text-[9px] text-[#4ADE80] font-semibold tracking-wider uppercase mt-0.5">Frontend Artisan</div>
                      </div>
                      <div className="flex items-center gap-2 text-right">
                        <div>
                          <div className="text-[11px] font-extrabold text-white">2026</div>
                          <div className="text-[9px] text-[#B5B5B5] tracking-wider uppercase">Batch</div>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div>
                          <div className="text-[11px] font-extrabold text-[#4ADE80]">10+</div>
                          <div className="text-[9px] text-[#B5B5B5] tracking-wider uppercase">Projects</div>
                        </div>
                      </div>
                    </motion.div>

                  </div>{/* /inner rounded div */}
                </div>{/* /green gradient border shell */}
              </div>{/* /aspect ratio wrapper */}

              {/* ── FLOATING BADGE: Full-Stack & UI (bottom-left) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -bottom-5 -left-6 sm:-left-8 z-20 px-4 py-2.5 rounded-2xl bg-[#050A06]/95 border border-[#3DAA5C]/50 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(61,170,92,0.15)] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3DAA5C]/30 to-[#4ADE80]/10 border border-[#3DAA5C]/50 flex items-center justify-center shadow-[0_0_12px_rgba(74,222,128,0.3)]">
                  <span className="text-[#4ADE80] text-sm">⚡</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full-Stack & UI</div>
                  <div className="text-[11px] text-[#B5B5B5]">Thejus Engg College</div>
                </div>
              </motion.div>

              {/* ── FLOATING BADGE: Available for Work (top-right) ── */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -top-5 -right-4 sm:-right-6 z-20 px-3.5 py-2 rounded-xl bg-[#050A06]/95 border border-[#3DAA5C]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(61,170,92,0.2)] flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
                </span>
                <span className="text-xs font-semibold text-[#4ADE80]">Available for Work</span>
              </motion.div>

              {/* ── FLOATING STAT: GPA / Score chip (right side) ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="absolute top-1/3 -right-5 sm:-right-8 z-20 flex flex-col items-center gap-0.5 px-3 py-2.5 rounded-2xl bg-[#050A06]/95 border border-[#3DAA5C]/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
              >
                <span className="text-lg font-extrabold text-[#4ADE80] leading-none">8.9</span>
                <span className="text-[9px] text-[#B5B5B5] font-semibold tracking-wider uppercase">CGPA</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
