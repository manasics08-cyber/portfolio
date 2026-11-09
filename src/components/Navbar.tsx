import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="group flex items-center gap-1 text-2xl font-extrabold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] rounded-lg"
          aria-label="Manasi CS Portfolio Home"
        >
          <span>Manasi</span>
          <span className="text-[#3DAA5C] group-hover:text-[#4ADE80] transition-colors duration-200">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#050A06]/70 px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] ${
                  isActive
                    ? 'text-white'
                    : 'text-[#B5B5B5] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#3DAA5C]/20 border border-[#3DAA5C]/40 rounded-full -z-10 shadow-[0_0_15px_rgba(61,170,92,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={isActive ? 'text-[#4ADE80] font-semibold' : ''}>
                  {link.name}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3DAA5C] text-black font-semibold text-sm tracking-tight overflow-hidden transition-all duration-300 hover:bg-[#4ADE80] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="md:hidden p-2 rounded-xl border border-white/[0.08] bg-[#050A06] text-white hover:border-[#3DAA5C]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#4ADE80]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#050A06]/98 border-b border-white/[0.08] backdrop-blur-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#3DAA5C]/15 text-[#4ADE80] border border-[#3DAA5C]/30'
                        : 'text-[#B5B5B5] hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
              <div className="pt-4 mt-2 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#3DAA5C] text-black font-semibold text-sm hover:bg-[#4ADE80] shadow-[0_0_20px_rgba(61,170,92,0.4)]"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

