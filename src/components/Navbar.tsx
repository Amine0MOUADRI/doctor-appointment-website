import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Stethoscope } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/appointment', label: 'Book Appointment' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 glass-effect shadow-[0_4px_24px_rgba(27,94,138,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1B5E8A] flex items-center justify-center text-white group-hover:bg-[#2563EB] transition-colors">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[#1A2B3C] leading-tight font-['Playfair_Display']">
                Dr. Habib Fakak
              </span>
              <span className="text-xs text-[#64748B] font-medium tracking-wide">
                General Practitioner
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-[#1B5E8A] bg-[#E8F4F8]'
                    : 'text-[#64748B] hover:text-[#1B5E8A] hover:bg-[#F8FAFC]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/appointment"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1A2B3C] hover:bg-[#F8FAFC] transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 glass-effect border-t border-[#E2E8F0] shadow-lg transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive(link.path)
                  ? 'text-[#1B5E8A] bg-[#E8F4F8]'
                  : 'text-[#64748B] hover:text-[#1B5E8A] hover:bg-[#F8FAFC]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link to="/appointment" className="btn-primary w-full text-center">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
