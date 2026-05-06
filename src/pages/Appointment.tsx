import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import {
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  CheckCircle,
  ChevronRight,
  AlertTriangle,
  MessageCircle,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false)
  const [urgent, setUrgent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    reason: '',
    date: '',
    time: 'morning',
  })
  const pageRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.appointment-hero', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.appointment-form', {
        scrollTrigger: {
          trigger: '.appointment-form',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (submitted && successRef.current) {
      gsap.from(successRef.current.querySelector('.success-icon'), {
        scale: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      })
    }
  }, [submitted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const whatsappMessage = `Hello Dr. Fakak, I would like to book an appointment. My name is ${formData.name || '[Name]'} and I need ${formData.reason || 'a consultation'}.`
  const whatsappUrl = `https://wa.me/212774653947?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F8FAFC] to-[#E8F4F8]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E8A]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="appointment-hero text-center max-w-3xl mx-auto">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              Simple & Fast
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-lg text-[#64748B]">
              Schedule your visit in just a few steps. For urgent cases, use our
              fast consultation option.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="appointment-form">
            {!submitted ? (
              <div className="bg-white rounded-2xl card-shadow p-8 md:p-10">
                {/* WhatsApp Quick Book */}
                <div className="mb-8 p-4 bg-[#E8F4F8] rounded-xl">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#1B5E8A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1A2B3C]">
                        Quick WhatsApp Booking
                      </p>
                      <p className="text-sm text-[#64748B] mt-1">
                        Prefer to book via WhatsApp? Click below to send a pre-filled message.
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-sm font-medium text-[#1B5E8A] hover:text-[#2563EB] transition-colors"
                      >
                        Book on WhatsApp
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Urgent Toggle */}
                <button
                  type="button"
                  onClick={() => setUrgent(!urgent)}
                  className={`w-full mb-8 flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                    urgent
                      ? 'border-[#F59E0B] bg-[#FEF3C7] text-[#92400E]'
                      : 'border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#F59E0B]/50'
                  }`}
                >
                  <AlertTriangle className={`w-5 h-5 ${urgent ? 'text-[#F59E0B]' : 'text-[#94A3B8]'}`} />
                  <span className="font-medium text-sm">Fast Consultation — Urgent Case</span>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-white border border-current">
                    {urgent ? 'ON' : 'OFF'}
                  </span>
                </button>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        <User className="w-4 h-4 inline mr-1 text-[#1B5E8A]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        <Phone className="w-4 h-4 inline mr-1 text-[#1B5E8A]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Your age"
                        min="0"
                        max="120"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        <FileText className="w-4 h-4 inline mr-1 text-[#1B5E8A]" />
                        Reason for Visit *
                      </label>
                      <select
                        name="reason"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] bg-white transition-all"
                      >
                        <option value="">Select reason</option>
                        <option value="general">General Consultation</option>
                        <option value="followup">Chronic Disease Follow-up</option>
                        <option value="preventive">Preventive Check-up</option>
                        <option value="urgent">Urgent Care</option>
                        <option value="certificate">Medical Certificate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        <Calendar className="w-4 h-4 inline mr-1 text-[#1B5E8A]" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        <Clock className="w-4 h-4 inline mr-1 text-[#1B5E8A]" />
                        Preferred Time *
                      </label>
                      <div className="flex gap-3">
                        <label
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.time === 'morning'
                              ? 'border-[#1B5E8A] bg-[#E8F4F8] text-[#1B5E8A]'
                              : 'border-[#E2E8F0] text-[#64748B] hover:border-[#1B5E8A]/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="time"
                            value="morning"
                            checked={formData.time === 'morning'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">Morning</span>
                        </label>
                        <label
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.time === 'evening'
                              ? 'border-[#1B5E8A] bg-[#E8F4F8] text-[#1B5E8A]'
                              : 'border-[#E2E8F0] text-[#64748B] hover:border-[#1B5E8A]/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="time"
                            value="evening"
                            checked={formData.time === 'evening'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">Evening</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center py-4 text-base"
                  >
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    Submit Appointment Request
                  </button>

                  <p className="text-xs text-center text-[#94A3B8]">
                    By submitting, you agree to our privacy policy. We will contact
                    you shortly to confirm your visit.
                  </p>
                </form>
              </div>
            ) : (
              <div
                ref={successRef}
                className="medical-pulse bg-white rounded-2xl card-shadow p-12 text-center"
              >
                <div className="success-icon w-20 h-20 rounded-full bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#0D9488]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4 font-['Playfair_Display']">
                  Appointment Request Received
                </h2>
                <p className="text-[#64748B] leading-relaxed max-w-md mx-auto mb-8">
                  Your appointment request has been received successfully. We will
                  contact you shortly to confirm your visit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/" className="btn-primary">
                    Back to Home
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    Explore Services
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Working Hours',
                desc: 'Mon-Fri: 08:00 - 18:00\nSat: 09:00 - 14:00',
              },
              {
                icon: Phone,
                title: 'Phone Booking',
                desc: 'Call us directly to book\n+212 5XX-XXXXXX',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Booking',
                desc: 'Message us anytime\nQuick response guaranteed',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 card-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F4F8] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#1B5E8A]" />
                </div>
                <h3 className="font-semibold text-[#1A2B3C] mb-2 font-['Playfair_Display']">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
