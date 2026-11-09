import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons'
import confetti from 'canvas-confetti'
import { portfolioData } from '../data/portfolioData'

const SOCIAL_ICONS: Record<string, any> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Mail: Mail
}

export function Contact() {
  const { personal, socials } = portfolioData
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px 200px 0px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Trigger celebratory green confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#3DAA5C', '#4ADE80', '#ffffff', '#22c55e']
      })

      // Reset form after 6 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 6000)
    }, 1000)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#3DAA5C]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A06] border border-[#3DAA5C]/40 text-[#4ADE80] text-xs font-bold tracking-wider uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight mb-4">
            Let's Build Something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#4ADE80]">
              Great Together
            </span>
          </h2>
          <p className="max-w-xl text-base sm:text-lg text-[#B5B5B5]">
            Have an internship opening, freelance project, or innovative idea? Let’s connect and create something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-[#050A06] border border-white/[0.08] hover:border-[#3DAA5C]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4ADE80]" />
                </span>
                <span className="text-sm font-bold text-white">Current Availability</span>
              </div>
              <p className="text-xs text-[#B5B5B5] leading-relaxed">
                {personal.status}. Open to frontend engineering, full-stack web roles, and UI/UX design collaboration.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="p-6 rounded-2xl bg-[#050A06] border border-white/[0.08] space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center text-[#4ADE80] group-hover:bg-[#3DAA5C] group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7E8680]">Email Address</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#4ADE80] transition-colors">
                    {personal.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-[#3DAA5C]/15 border border-[#3DAA5C]/30 flex items-center justify-center text-[#4ADE80]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7E8680]">Campus & Location</div>
                  <div className="text-sm font-semibold text-white">
                    Thejus Engineering College, {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="p-6 rounded-2xl bg-[#050A06] border border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#7E8680] mb-4">
                Connect Online
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon] || Mail
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#3DAA5C]/50 hover:bg-[#3DAA5C]/10 transition-all hover:shadow-[0_0_20px_rgba(61,170,92,0.25)]"
                    >
                      <Icon className="w-5 h-5 text-[#B5B5B5] group-hover:text-[#4ADE80] transition-colors mb-1.5" />
                      <span className="text-[11px] font-semibold text-white">{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Green Focus Glow */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="relative p-7 sm:p-10 rounded-3xl bg-[#050A06] border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#3DAA5C]/20 border border-[#3DAA5C] flex items-center justify-center text-[#4ADE80] mb-6 shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-sm text-[#B5B5B5] max-w-sm">
                    Thank you for reaching out. I'll get back to you promptly at your email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-white/90 mb-2">
                        Your Name <span className="text-[#4ADE80]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white placeholder-white/20 text-sm transition-all focus:outline-none focus:border-[#3DAA5C] focus:ring-2 focus:ring-[#4ADE80]/30 focus:shadow-[0_0_20px_rgba(61,170,92,0.25)]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-white/90 mb-2">
                        Your Email <span className="text-[#4ADE80]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white placeholder-white/20 text-sm transition-all focus:outline-none focus:border-[#3DAA5C] focus:ring-2 focus:ring-[#4ADE80]/30 focus:shadow-[0_0_20px_rgba(61,170,92,0.25)]"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-white/90 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white placeholder-white/20 text-sm transition-all focus:outline-none focus:border-[#3DAA5C] focus:ring-2 focus:ring-[#4ADE80]/30 focus:shadow-[0_0_20px_rgba(61,170,92,0.25)]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-white/90 mb-2">
                      Message <span className="text-[#4ADE80]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Manasi, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white placeholder-white/20 text-sm transition-all resize-none focus:outline-none focus:border-[#3DAA5C] focus:ring-2 focus:ring-[#4ADE80]/30 focus:shadow-[0_0_20px_rgba(61,170,92,0.25)]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-[#3DAA5C] text-black font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#4ADE80] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
