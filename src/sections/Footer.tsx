import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative bg-black border-t border-white/[0.08] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & College */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-tight text-white flex items-center"
            >
              <span>Manasi</span>
              <span className="text-[#3DAA5C]">.</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-xs text-[#7E8680]">
              Thejus Engineering College • Computer Science & Engineering
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#B5B5B5]">
            <a href="#about" className="hover:text-[#4ADE80] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#4ADE80] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#4ADE80] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#4ADE80] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#4ADE80] transition-colors">Contact</a>
          </div>

          {/* Back to top text link */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#B5B5B5] hover:text-[#4ADE80] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#7E8680]">
          <div>
            © {new Date().getFullYear()} Manasi CS. All rights reserved.
          </div>
          <div>
            Built with React, Tailwind CSS, Three.js & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}

