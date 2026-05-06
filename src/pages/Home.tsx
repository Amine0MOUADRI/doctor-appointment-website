import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import {
  Stethoscope,
  Heart,
  Activity,
  FileText,
  Star,
  Clock,
  Phone,
  Calendar,
  CheckCircle,
  ChevronRight,
  Users,
  Award,
  Zap,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Stethoscope,
    title: 'General Consultation',
    desc: 'Initial diagnosis, health evaluation, and first medical assessment for all your health concerns.',
    image: '/service-consultation.jpg',
  },
  {
    icon: Activity,
    title: 'Chronic Disease Follow-up',
    desc: 'Diabetes, hypertension, respiratory conditions, thyroid monitoring, and long-term care.',
    image: '/service-chronic.jpg',
  },
  {
    icon: Heart,
    title: 'Preventive Medicine',
    desc: 'Regular check-ups, preventive healthcare, health advice, and family medicine support.',
    image: '/service-preventive.jpg',
  },
  {
    icon: FileText,
    title: 'Medical Certificates',
    desc: 'Professional medical documentation for work, travel, and administrative requirements.',
    image: '/service-certificates.jpg',
  },
]

const testimonials = [
  {
    name: 'Ahmed Benali',
    text: 'Dr. Fakak took the time to listen to all my concerns. His diagnostic approach is thorough and his follow-up care gave me real peace of mind.',
    rating: 5,
  },
  {
    name: 'Fatima Zahra',
    text: 'After years of struggling with diabetes management, Dr. Fakak created a personalized plan that actually works. My numbers have never been better.',
    rating: 5,
  },
  {
    name: 'Karim Idrissi',
    text: 'When my daughter needed urgent care, Dr. Fakak saw us immediately. His calm professionalism made a stressful situation so much easier.',
    rating: 5,
  },
  {
    name: 'Nadia El Amrani',
    text: 'I appreciate how Dr. Fakak explains everything clearly. He referred me to the perfect specialist when needed. Truly a trusted medical advisor.',
    rating: 5,
  },
]

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '10,000+', label: 'Patients Treated' },
  { icon: Zap, value: 'Same-Day', label: 'Appointments' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      })
      gsap.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      })
      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6,
      })

      // Scroll-triggered animations
      const cards = gsap.utils.toArray('.animate-card')
      cards.forEach((card: unknown, i: number) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
        })
      })

      gsap.from('.trust-banner', {
        scrollTrigger: {
          trigger: '.trust-banner',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.map-section', {
        scrollTrigger: {
          trigger: '.map-section',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, sectionsRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionsRef}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#F8FAFC] to-[#E8F4F8] overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#1B5E8A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F4F8] text-[#1B5E8A] text-sm font-medium">
                <Award className="w-4 h-4" />
                Trusted General Practitioner
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A2B3C] leading-[1.1] font-['Playfair_Display']">
                Your First Step Toward{' '}
                <span className="text-gradient">Accurate Diagnosis</span> and
                Proper Treatment
              </h1>

              <p className="hero-subtitle text-lg text-[#64748B] leading-relaxed max-w-lg">
                Professional medical care for the whole family. Early diagnosis,
                precise follow-up, and the right medical guidance — all in one
                trusted place.
              </p>

              <div className="hero-cta flex flex-wrap gap-4">
                <Link to="/appointment" className="btn-primary text-base px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/212774653947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact on WhatsApp
                </a>
              </div>

              {/* Quick trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                  Board Certified
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                  Same-Day Available
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                  Family Care
                </div>
              </div>
            </div>

            {/* Right - Doctor Portrait */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B5E8A]/10 to-[#0D9488]/10 rounded-[2rem] transform rotate-3" />
                <img
                  src="/doctor-portrait.jpg"
                  alt="Dr. Habib Fakak"
                  className="relative rounded-[2rem] w-full h-[550px] object-cover card-shadow"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 card-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1A2B3C]">10,000+</p>
                      <p className="text-sm text-[#64748B]">Patients Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner relative z-10 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-6xl">
        <div className="glass-effect rounded-2xl p-8 md:p-10 card-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E8F4F8] flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#1B5E8A]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#64748B]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Comprehensive Medical Care
            </h2>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              From initial diagnosis to long-term follow-up, we provide complete
              healthcare solutions for you and your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="animate-card group relative overflow-hidden rounded-2xl bg-white card-shadow hover:card-shadow-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A2B3C] mb-2 group-hover:text-[#1B5E8A] transition-colors font-['Playfair_Display']">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-[#1B5E8A] text-sm font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Trust / Why Choose Us */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-card">
              <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
                Trusted First-Line Medical Care With Personalized Follow-Up
              </h2>
              <p className="mt-6 text-[#64748B] leading-relaxed">
                Dr. Habib Fakak serves as the essential bridge between patients
                and the correct medical treatment path. With over 15 years of
                clinical experience, he provides accurate initial diagnoses,
                evaluates medical conditions with precision, and guides patients
                toward the right specialists when specialized care is needed.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Accurate initial diagnosis and health evaluation',
                  'Personalized long-term chronic disease management',
                  'Seamless referral to the right specialists',
                  'Preventive care to maintain optimal health',
                  'Same-day appointments for urgent cases',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <span className="text-[#1A2B3C] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about" className="btn-primary">
                  Meet Dr. Fakak
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            <div className="animate-card relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 card-shadow">
                    <Heart className="w-8 h-8 text-[#1B5E8A] mb-4" />
                    <h4 className="font-semibold text-[#1A2B3C] mb-1 font-['Playfair_Display']">
                      Patient-Centered
                    </h4>
                    <p className="text-sm text-[#64748B]">
                      Your health goals guide every decision
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 card-shadow">
                    <Activity className="w-8 h-8 text-[#0D9488] mb-4" />
                    <h4 className="font-semibold text-[#1A2B3C] mb-1 font-['Playfair_Display']">
                      Evidence-Based
                    </h4>
                    <p className="text-sm text-[#64748B]">
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-2xl p-6 card-shadow">
                    <Stethoscope className="w-8 h-8 text-[#1B5E8A] mb-4" />
                    <h4 className="font-semibold text-[#1A2B3C] mb-1 font-['Playfair_Display']">
                      Holistic Approach
                    </h4>
                    <p className="text-sm text-[#64748B]">
                      Treating the whole person, not just symptoms
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 card-shadow">
                    <Clock className="w-8 h-8 text-[#0D9488] mb-4" />
                    <h4 className="font-semibold text-[#1A2B3C] mb-1 font-['Playfair_Display']">
                      Timely Care
                    </h4>
                    <p className="text-sm text-[#64748B]">
                      Same-day appointments when you need them most
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              What Our Patients Say
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[400px] mx-3 bg-[#F8FAFC] rounded-2xl p-6 card-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                    />
                  ))}
                </div>
                <p className="text-[#1A2B3C] leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <p className="text-sm font-medium text-[#1B5E8A]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map & Hours */}
            <div className="map-section">
              <h3 className="text-2xl font-bold text-[#1A2B3C] mb-6 font-['Playfair_Display']">
                Visit Our Clinic
              </h3>
              <div className="rounded-2xl overflow-hidden card-shadow map-filter mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-7.6!3d33.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzAwLjAiTiA3wrAzNiczNi4wIlc!5e0!3m2!1sen!2sma!4v1600000000000!5m2!1sen!2sma"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 card-shadow">
                <h4 className="font-semibold text-[#1A2B3C] mb-4 flex items-center gap-2 font-['Playfair_Display']">
                  <Clock className="w-5 h-5 text-[#1B5E8A]" />
                  Working Hours
                </h4>
                <div className="space-y-3 text-sm">
                  {[
                    { day: 'Monday - Friday', hours: '08:00 - 18:00' },
                    { day: 'Saturday', hours: '09:00 - 14:00' },
                    { day: 'Sunday', hours: 'Emergency Only' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-[#F1F5F9] last:border-0"
                    >
                      <span className="text-[#64748B]">{item.day}</span>
                      <span className="font-mono-data text-[#1A2B3C] font-medium">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="map-section">
              <h3 className="text-2xl font-bold text-[#1A2B3C] mb-6 font-['Playfair_Display']">
                Quick Appointment Request
              </h3>
              <div className="bg-white rounded-2xl p-8 card-shadow">
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                      Reason for Visit
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] bg-white transition-all">
                      <option value="">Select a reason</option>
                      <option value="general">General Consultation</option>
                      <option value="followup">Chronic Follow-up</option>
                      <option value="urgent">Urgent Care</option>
                      <option value="preventive">Preventive Check-up</option>
                    </select>
                  </div>
                  <Link
                    to="/appointment"
                    className="btn-primary w-full text-center block"
                  >
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    Request Appointment
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1B5E8A] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Playfair_Display']">
            Your Health Is Our Priority
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference of
            personalized, professional medical care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#1B5E8A] font-semibold hover:bg-[#F8FAFC] transition-all hover:shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
