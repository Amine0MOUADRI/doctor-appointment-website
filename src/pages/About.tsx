import { useEffect, useRef } from 'react'
import { Award, BookOpen, Heart, CheckCircle, GraduationCap, Globe } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    desc: 'Every treatment plan is tailored to your unique health needs, lifestyle, and personal goals. You are not just a patient — you are a partner in your own health journey.',
  },
  {
    icon: BookOpen,
    title: 'Evidence-Based Practice',
    desc: 'Medical decisions guided by the latest clinical research, proven methodologies, and established best practices to ensure the highest standard of care.',
  },
  {
    icon: Globe,
    title: 'Holistic Approach',
    desc: 'Looking beyond symptoms to understand the complete picture of your health — physical, emotional, and lifestyle factors that influence your wellbeing.',
  },
]

const qualifications = [
  'Docteur en médecine — University of Agadir',
  'Residency in General Medicine — University Hospital Center',
  'Certified in Emergency First Response',
  'Member of the Moroccan Medical Council',
  'Continuous Medical Education — 15+ years practice',
]

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      const cards = gsap.utils.toArray('.about-animate')
      cards.forEach((card: unknown) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F8FAFC] to-[#E8F4F8]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E8A]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-hero text-center max-w-3xl mx-auto">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              About The Doctor
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Dr. Habib Fakak
            </h1>
            <p className="mt-4 text-xl text-[#64748B]">
              General Practitioner — Your Trusted Medical Partner
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="about-animate">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#1B5E8A]/10 to-[#0D9488]/10 rounded-[2.5rem]" />
                <img
                  src="/doctor-portrait.jpg"
                  alt="Dr. Habib Fakak"
                  className="relative rounded-[2rem] w-full h-[600px] object-cover card-shadow"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 card-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#64748B]">Experience</p>
                      <p className="text-2xl font-bold text-[#1A2B3C] font-['Playfair_Display']">15+ Years</p>
                    </div>
                    <div className="h-10 w-px bg-[#E2E8F0]" />
                    <div>
                      <p className="text-sm text-[#64748B]">Patients</p>
                      <p className="text-2xl font-bold text-[#1A2B3C] font-['Playfair_Display']">10,000+</p>
                    </div>
                    <div className="h-10 w-px bg-[#E2E8F0]" />
                    <div>
                      <p className="text-sm text-[#64748B]">Rating</p>
                      <p className="text-2xl font-bold text-[#1A2B3C] font-['Playfair_Display']">4.9/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="about-animate space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2B3C] mb-6 font-['Playfair_Display']">
                  Dedicated to Your Health and Wellbeing
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  Dr. Habib Fakak is a highly experienced General Practitioner with a deep commitment
                  to providing exceptional first-line medical care. With over 15 years of clinical practice,
                  he has become the trusted medical partner for thousands of families seeking accurate
                  diagnosis, effective treatment, and compassionate ongoing care.
                </p>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  As your first point of medical contact, Dr. Fakak performs comprehensive initial
                  diagnoses, evaluates the seriousness of medical conditions, provides first-line treatment,
                  follows chronic diseases with precision, and guides patients toward the right specialist
                  when specialized care is required.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  His philosophy is simple: every patient deserves thorough attention, clear communication,
                  and a personalized treatment plan that addresses their complete health picture — not
                  just isolated symptoms.
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-4 flex items-center gap-2 font-['Playfair_Display']">
                  <GraduationCap className="w-5 h-5 text-[#1B5E8A]" />
                  Qualifications & Training
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#64748B]">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Philosophy */}
              <div>
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-3 flex items-center gap-2 font-['Playfair_Display']">
                  <Award className="w-5 h-5 text-[#1B5E8A]" />
                  Professional Philosophy
                </h3>
                <blockquote className="border-l-4 border-[#1B5E8A] pl-6 py-2 italic text-[#64748B]">
                  "The best medical care begins with listening. Understanding a patient's complete
                  story — their symptoms, concerns, lifestyle, and fears — is the foundation of an
                  accurate diagnosis and a successful treatment plan. I am here to guide you through
                  every step of your health journey with expertise, compassion, and unwavering commitment."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Core Values That Define Our Care
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="about-animate bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E8F4F8] flex items-center justify-center mb-6 group-hover:bg-[#1B5E8A] transition-colors">
                  <value.icon className="w-7 h-7 text-[#1B5E8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3 font-['Playfair_Display']">
                  {value.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              The Process
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Your Journey With Dr. Fakak
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                desc: 'Comprehensive health assessment and detailed discussion of your concerns.',
              },
              {
                step: '02',
                title: 'Accurate Diagnosis',
                desc: 'Thorough evaluation using clinical expertise and modern diagnostic methods.',
              },
              {
                step: '03',
                title: 'Treatment Plan',
                desc: 'Personalized care plan designed around your specific health needs.',
              },
              {
                step: '04',
                title: 'Ongoing Follow-up',
                desc: 'Regular monitoring and adjustments to ensure optimal health outcomes.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="about-animate relative bg-[#F8FAFC] rounded-2xl p-6 group hover:bg-[#E8F4F8] transition-colors"
              >
                <span className="text-5xl font-bold text-[#1B5E8A]/10 font-['Playfair_Display']">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#1A2B3C] font-['Playfair_Display']">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
