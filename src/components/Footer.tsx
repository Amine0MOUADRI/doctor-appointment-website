import { Link } from 'react-router'
import { Stethoscope, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1A2B3C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B5E8A] flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-['Playfair_Display']">Dr. Habib Fakak</h3>
                <p className="text-xs text-[#94A3B8]">General Practitioner</p>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Your trusted first step toward accurate diagnosis and proper treatment. 
              Professional medical care with personalized patient follow-up.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Doctor' },
                { to: '/services', label: 'Medical Services' },
                { to: '/appointment', label: 'Book Appointment' },
                { to: '/blog', label: 'Medical Blog' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#CBD5E1] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[#CBD5E1]">
              <li>General Consultations</li>
              <li>Chronic Disease Follow-up</li>
              <li>Medical Orientation</li>
              <li>Preventive Medicine</li>
              <li>Medical Certificates</li>
              <li>Emergency Evaluation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#0D9488] mt-0.5 shrink-0" />
                <span className="text-sm text-[#CBD5E1]">+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0D9488] mt-0.5 shrink-0" />
                <span className="text-sm text-[#CBD5E1]">amouadri@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0D9488] mt-0.5 shrink-0" />
                <span className="text-sm text-[#CBD5E1]">
                  123 Medical Center Avenue, Casablanca, Morocco
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0D9488] mt-0.5 shrink-0" />
                <span className="text-sm text-[#CBD5E1]">
                  Mon - Sat: 08:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#334155] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} Dr. Habib Fakak. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#1B5E8A] hover:bg-[#2563EB] flex items-center justify-center text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
