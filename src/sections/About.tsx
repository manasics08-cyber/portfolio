import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Code2, Palette, Rocket, CheckCircle2, MapPin, Building, Calendar } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const ICON_MAP = {
  GraduationCap,
  Code2,
  Palette,
  Rocket
}

export function About() {
  const { about, personal } = portfolioData
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <section id="about" ref={sectionRef} className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#3DAA5C]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Story & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A06] border border-[#3DAA5C]/40 text-[#4ADE80] text-xs font-bold tracking-wider uppercase mb-4">
              <span>{about.badge}</span>
            </div>

            {/* Section Headline matching reference */}
            <h2 className="section-headline font-extrabold text-white tracking-tight mb-6">
              {about.title}
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed mb-4">
              {about.p1}
            </p>
            <p className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed mb-8">
              {about.p2}
            </p>

            {/* College & Education Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 p-5 rounded-2xl bg-[#050A06] border border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-xs text-[#7E8680]">Institution</div>
                  <div className="text-sm font-semibold text-white">{personal.college}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-xs text-[#7E8680]">Degree & Branch</div>
                  <div className="text-sm font-semibold text-white">{personal.degree}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-xs text-[#7E8680]">Location</div>
                  <div className="text-sm font-semibold text-white">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-xs text-[#7E8680]">Graduation</div>
                  <div className="text-sm font-semibold text-white">Class of {personal.graduationYear}</div>
                </div>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {about.highlights.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || CheckCircle2
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.5, delay: 0.08 * idx }}
                    className="p-4 rounded-xl bg-[#050A06] border border-white/[0.06] hover:border-[#3DAA5C]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <IconComponent className="w-4 h-4 text-[#4ADE80]" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-[#B5B5B5] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column: Rounded Image Card with Green Glow Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Green Glow behind card */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#3DAA5C]/40 to-[#4ADE80]/20 blur-xl opacity-75 -z-10 group-hover:opacity-100 transition duration-500" />

            {/* The Main Rounded Image Card */}
            <div className="relative rounded-3xl overflow-hidden bg-[#050A06] border-2 border-[#3DAA5C]/50 shadow-[0_0_50px_rgba(61,170,92,0.3)] p-6 sm:p-8 flex flex-col justify-between">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1b552d] to-[#3DAA5C] flex items-center justify-center font-extrabold text-white text-xl shadow-[0_0_15px_rgba(61,170,92,0.4)]">
                    M
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">Manasi CS</h3>
                    <p className="text-xs text-[#4ADE80] font-medium">Engineer & Designer</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#3DAA5C]/20 border border-[#3DAA5C]/40 text-[11px] font-semibold text-[#4ADE80]">
                  Thejus
                </div>
              </div>

              {/* Card Visual / Sculptural Graphic */}
              <div className="relative my-8 rounded-2xl overflow-hidden bg-[#020503] border border-white/[0.08] aspect-[4/3] flex items-center justify-center group">
                <img
                  src="/images/shape-ref.jpg"
                  alt="Manasi CS - Thejus Engineering College"
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A06] via-transparent to-transparent opacity-80" />
                
                {/* Floating overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span className="text-xs font-bold text-white">Full-Stack Passion</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#B5B5B5]">CSE '26</span>
                </div>
              </div>

              {/* Card Footer / Stats Summary */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08] text-center">
                <div className="p-2 rounded-xl bg-white/[0.02]">
                  <div className="text-lg font-extrabold text-white">10+</div>
                  <div className="text-[10px] text-[#7E8680] uppercase tracking-wider">Built</div>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.02]">
                  <div className="text-lg font-extrabold text-[#4ADE80]">100%</div>
                  <div className="text-[10px] text-[#7E8680] uppercase tracking-wider">Focus</div>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.02]">
                  <div className="text-lg font-extrabold text-white">2026</div>
                  <div className="text-[10px] text-[#7E8680] uppercase tracking-wider">Batch</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
