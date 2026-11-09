import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { useScrollSpy } from './hooks/useScrollSpy'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToTop } from './components/ScrollToTop'
import { Preloader } from './components/Preloader'
import { ResumeModal } from './components/ResumeModal'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { StatsStrip } from './sections/StatsStrip'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export function App() {
  // Initialize Lenis smooth scrolling
  useLenis()

  // Track active section for navigation
  const activeSection = useScrollSpy(SECTION_IDS)

  // Preloader status
  const [isLoaded, setIsLoaded] = useState(false)

  // Resume Modal State
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-black text-[#B5B5B5] selection:bg-[#3DAA5C] selection:text-black">
      {/* Preloader animation */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Custom dynamic cursor */}
      <CustomCursor />

      {/* Top Green Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Sticky Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content */}
      <main>
        <Hero isLoaded={isLoaded} onOpenResume={() => setResumeOpen(true)} />
        <StatsStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
