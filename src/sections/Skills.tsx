import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code,
  Cpu,
  Layout,
  FileCode,
  Terminal,
  Layers,
  Box,
  Sparkles,
  GitBranch,
  Server,
  Database
} from 'lucide-react'
import { FigmaIcon } from '../components/SocialIcons'
import { portfolioData } from '../data/portfolioData'

const SKILL_ICONS: Record<string, any> = {
  Code,
  Cpu,
  Layout,
  FileCode,
  Terminal,
  Layers,
  Box,
  Sparkles,
  GitBranch,
  Figma: FigmaIcon,
  Server,
  Database
}

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & 3D' },
  { id: 'backend', label: 'Backend & Data' },
  { id: 'languages', label: 'Core Languages' },
  { id: 'tools', label: 'Tools & Design' },
]

export function Skills() {
  const { skills } = portfolioData
  const [activeCategory, setActiveCategory] = useState('all')
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -40px 0px' })

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  const marqueeSkills = [
    'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Three.js',
    'Python', 'Java', 'GSAP', 'Git', 'Figma', 'Node.js', 'PostgreSQL',
    'Vite', 'HTML5/CSS3', 'REST APIs', 'Next.js'
  ]

  return (
    <section id="skills" ref={sectionRef} className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#4ADE80]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A06] border border-[#3DAA5C]/40 text-[#4ADE80] text-xs font-bold tracking-wider uppercase mb-4">
            Technical Arsenal
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight mb-4">
            Skills & Competencies
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[#B5B5B5]">
            Bridging algorithmic computing fundamentals from Thejus Engineering College with modern, high-polish industry development stacks.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-[#050A06] border border-white/[0.08]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${activeCategory === cat.id
                    ? 'bg-[#3DAA5C] text-black shadow-[0_0_15px_rgba(61,170,92,0.4)]'
                    : 'text-[#B5B5B5] hover:text-white hover:bg-white/[0.04]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with hover lift & animated progress bars */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = SKILL_ICONS[skill.icon] || Code

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-[#050A06] border border-white/[0.08] hover:border-[#3DAA5C]/50 transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(61,170,92,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center text-[#4ADE80] group-hover:scale-110 group-hover:bg-[#3DAA5C] group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-[#4ADE80] border border-white/[0.06] uppercase">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-[#B5B5B5] leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#7E8680]">Proficiency</span>
                    <span className="text-[#4ADE80] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.0, delay: 0.05 * index, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#2d8245] via-[#3DAA5C] to-[#4ADE80] shadow-[0_0_10px_#4ADE80]"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Infinite Tech Marquee */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-[#7E8680] mb-6">
            // Continuously mastering modern technologies
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max gap-4 animate-marquee py-2">
              {[...marqueeSkills, ...marqueeSkills].map((tech, i) => (
                <div
                  key={`${tech}-${i}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050A06] border border-white/[0.08] hover:border-[#3DAA5C]/40 text-sm font-semibold text-white/90 whitespace-nowrap transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
