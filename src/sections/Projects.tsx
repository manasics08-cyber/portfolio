import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react'
import { GithubIcon } from '../components/SocialIcons'
import { portfolioData, ProjectItem } from '../data/portfolioData'

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  // 3D tilt effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Subtle tilt calculation
    const rX = ((y - centerY) / centerY) * -6
    const rY = ((x - centerX) / centerX) * 6
    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '200px 0px 0px 0px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="group relative rounded-3xl bg-[#050A06] border border-white/[0.08] hover:border-[#3DAA5C]/60 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(61,170,92,0.3)] flex flex-col h-full"
      >
        {/* Glow behind on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3DAA5C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Project Image Preview Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A06] via-[#050A06]/20 to-transparent" />

          {/* Category & Metric badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
              {project.category}
            </span>
            {project.metrics && (
              <span className="px-3 py-1 rounded-full bg-[#3DAA5C]/20 backdrop-blur-md border border-[#3DAA5C]/40 text-xs font-semibold text-[#4ADE80] flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-[#3DAA5C] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </h3>

            <div className="text-xs font-mono text-[#3DAA5C] mb-3">
              {project.tagline}
            </div>

            <p className="text-sm text-[#B5B5B5] leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-[#B5B5B5]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#3DAA5C] text-black font-bold text-xs tracking-wide hover:bg-[#4ADE80] transition-colors shadow-[0_0_15px_rgba(61,170,92,0.3)]"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white hover:text-[#4ADE80] hover:border-[#3DAA5C]/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { projects } = portfolioData
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" ref={sectionRef} className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#3DAA5C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A06] border border-[#3DAA5C]/40 text-[#4ADE80] text-xs font-bold tracking-wider uppercase mb-4">
            Curated Work
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[#B5B5B5]">
            A showcase of web applications, student portals, and experimental 3D interfaces designed and developed with precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/manasics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#050A06] border border-white/[0.1] hover:border-[#3DAA5C]/50 text-sm font-semibold text-white hover:text-[#4ADE80] transition-all hover:shadow-[0_0_20px_rgba(61,170,92,0.2)]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore More on GitHub</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2]" />
          </a>
        </div>

      </div>
    </section>
  )
}
