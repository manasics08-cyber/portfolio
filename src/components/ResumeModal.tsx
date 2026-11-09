import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, ExternalLink, GraduationCap, Building, Code2, Mail, Phone, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personal, skills, timeline, projects } = portfolioData

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#050A06] border border-[#3DAA5C]/40 shadow-[0_20px_70px_rgba(0,0,0,0.9)] p-6 sm:p-10 z-10 text-white"
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8 sticky top-0 bg-[#050A06]/95 backdrop-blur-md z-20 -mt-2 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#4ADE80]">
                  Official Curriculum Vitae Preview
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  aria-label="Print Resume"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#3DAA5C]/50 hover:bg-[#3DAA5C]/10 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save as PDF</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close Resume Modal"
                  className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-[#B5B5B5] hover:text-white hover:border-[#3DAA5C] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="space-y-8 font-sans">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {personal.name}
                  </h1>
                  <p className="text-sm font-semibold text-[#4ADE80] mt-1">
                    Computer Science & Engineering Student • Web Developer & UI Designer
                  </p>
                  <p className="text-xs text-[#B5B5B5] mt-1 flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-[#3DAA5C]" />
                    <span>{personal.college}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-[#B5B5B5] sm:text-right font-mono">
                  <span className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#4ADE80]" />
                    {personal.email}
                  </span>
                  <span className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
                    {personal.location}
                  </span>
                  <span className="text-[#3DAA5C] font-semibold">Class of {personal.graduationYear}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#4ADE80] mb-2 font-bold">
                  // Professional Profile
                </h2>
                <p className="text-sm text-[#B5B5B5] leading-relaxed">
                  {personal.bioShort} Specialized in engineering dynamic React applications, responsive Tailwind UI architectures, WebGL 3D elements, and clean RESTful API integration.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#4ADE80] mb-4 font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-1">
                      <h3 className="text-base font-bold text-white">{personal.college}</h3>
                      <span className="text-xs font-mono text-[#4ADE80]">2023 - 2026</span>
                    </div>
                    <div className="text-xs text-[#3DAA5C] font-medium mb-2">{personal.degree}</div>
                    <p className="text-xs text-[#B5B5B5] leading-relaxed">
                      Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Web Technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills Matrix */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#4ADE80] mb-4 font-bold flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Arsenal</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs font-bold text-white mb-2">Frontend & Creative</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Three.js', 'GSAP', 'HTML5/CSS3'].map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded-md bg-[#3DAA5C]/15 text-[#4ADE80] text-[11px] font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs font-bold text-white mb-2">Backend & Languages</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'Java', 'Node.js', 'Express', 'PostgreSQL', 'SQL', 'REST APIs'].map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[#B5B5B5] text-[11px] font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Projects Highlight */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#4ADE80] mb-4 font-bold">
                  // Key Engineering Projects
                </h2>
                <div className="space-y-3">
                  {projects.slice(0, 3).map((p) => (
                    <div key={p.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="text-sm font-bold text-white">{p.title} — <span className="text-xs text-[#B5B5B5] font-normal">{p.tagline}</span></h3>
                        <span className="text-[11px] font-mono text-[#4ADE80] shrink-0">{p.category}</span>
                      </div>
                      <p className="text-xs text-[#B5B5B5] leading-relaxed mb-2">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#7E8680]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#4ADE80] mb-4 font-bold">
                  // Practical Experience
                </h2>
                <div className="space-y-3">
                  {timeline.filter(t => t.type !== 'education').map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="text-sm font-bold text-white">{t.title}</h3>
                        <span className="text-xs font-mono text-[#4ADE80] shrink-0">{t.year}</span>
                      </div>
                      <div className="text-xs text-[#3DAA5C] font-semibold mb-2">{t.organization} • {t.location}</div>
                      <p className="text-xs text-[#B5B5B5] leading-relaxed mb-2">{t.description}</p>
                      <ul className="list-disc list-inside text-xs text-[#B5B5B5] space-y-1">
                        {t.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#7E8680]">
                Verified Academic Portfolio • {personal.college}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personal.email}?subject=Interview%20/%20Internship%20Opportunity`}
                  className="px-5 py-2.5 rounded-full bg-[#3DAA5C] text-black font-bold text-xs hover:bg-[#4ADE80] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Contact Manasi Directly</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

