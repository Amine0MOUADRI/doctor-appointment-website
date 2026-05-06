import { useState, useEffect, useRef } from 'react'
import {
  Stethoscope,
  Activity,
  Compass,
  Shield,
  FileText,
  AlertCircle,
  ChevronRight,
  CheckCircle,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const serviceCategories = [
  {
    id: 'general',
    icon: Stethoscope,
    title: 'General Consultations',
    items: [
      'Initial diagnosis and health evaluation',
      'First medical assessment for new symptoms',
      'Comprehensive physical examinations',
      'Health screening and risk assessment',
      'General health advice and counseling',
    ],
    description:
      'Dr. Fakak provides thorough general consultations that serve as the foundation of your healthcare journey. Every consultation includes a complete health evaluation, careful symptom analysis, and a personalized treatment approach tailored to your individual needs.',
  },
  {
    id: 'chronic',
    icon: Activity,
    title: 'Chronic Disease Follow-up',
    items: [
      'Diabetes monitoring and management',
      'Hypertension tracking and control',
      'Respiratory condition follow-up',
      'Thyroid monitoring and adjustment',
      'General long-term disease management',
    ],
    description:
      'Managing chronic conditions requires consistency, expertise, and personalized care. Dr. Fakak provides comprehensive long-term follow-up programs that help patients maintain optimal health while living with diabetes, hypertension, thyroid disorders, and other chronic conditions.',
  },
  {
    id: 'orientation',
    icon: Compass,
    title: 'Medical Orientation',
    items: [
      'Referral to the right specialist',
      'First interpretation of medical tests',
      'Follow-up before specialist referral',
      'Post-referral care coordination',
      'Second opinion consultations',
    ],
    description:
      'When specialized care is needed, Dr. Fakak serves as your trusted medical navigator. He provides expert interpretation of test results, refers you to the most appropriate specialists, and ensures seamless continuity of care throughout your treatment journey.',
  },
  {
    id: 'preventive',
    icon: Shield,
    title: 'Preventive Medicine',
    items: [
      'Regular health check-ups',
      'Preventive healthcare programs',
      'Personalized health advice',
      'Family medicine support',
      'Vaccination and immunization guidance',
    ],
    description:
      'Prevention is the cornerstone of lasting health. Dr. Fakak offers comprehensive preventive medicine services designed to catch potential health issues early, maintain optimal wellness, and keep your entire family healthy through every stage of life.',
  },
  {
    id: 'certificates',
    icon: FileText,
    title: 'Medical Certificates',
    items: [
      'Work and sick leave certificates',
      'Travel medical clearance',
      'Fitness and sports certificates',
      'Administrative medical documentation',
      'Insurance medical reports',
    ],
    description:
      'Professional medical documentation for all your administrative needs. Dr. Fakak provides accurate, timely, and properly formatted medical certificates for work, travel, sports, insurance, and any other official requirements.',
  },
  {
    id: 'emergency',
    icon: AlertCircle,
    title: 'First Emergency Evaluation',
    items: [
      'Rapid initial assessment',
      'Urgent symptom evaluation',
      'Immediate treatment initiation',
      'Emergency referral when needed',
      'Critical condition stabilization',
    ],
    description:
      'When medical urgency strikes, swift and accurate evaluation can make all the difference. Dr. Fakak provides rapid first emergency assessments to determine the severity of your condition and initiate immediate appropriate care or emergency referral.',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('general')
  const pageRef = useRef<HTMLDivElement>(null)

  const activeService = serviceCategories.find((s) => s.id === activeTab)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.services-content', {
        scrollTrigger: {
          trigger: '.services-content',
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

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F8FAFC] to-[#E8F4F8]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E8A]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-hero text-center max-w-3xl mx-auto">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Medical Services
            </h1>
            <p className="mt-4 text-lg text-[#64748B]">
              Comprehensive healthcare solutions designed to meet every medical
              need — from initial diagnosis to long-term wellness management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-content grid lg:grid-cols-[320px_1fr] gap-8">
            {/* Tab List */}
            <div className="space-y-2">
              {serviceCategories.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 ${
                    activeTab === service.id
                      ? 'medical-pulse bg-[#E8F4F8] text-[#1B5E8A]'
                      : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E8F4F8] hover:text-[#1B5E8A]'
                  }`}
                >
                  <service.icon
                    className={`w-5 h-5 shrink-0 ${
                      activeTab === service.id ? 'text-[#1B5E8A]' : 'text-[#94A3B8]'
                    }`}
                  />
                  <span className="font-medium text-sm">{service.title}</span>
                  <ChevronRight
                    className={`w-4 h-4 ml-auto transition-transform ${
                      activeTab === service.id ? 'rotate-90 text-[#1B5E8A]' : 'text-[#94A3B8]'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-10">
              {activeService && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#E8F4F8] flex items-center justify-center">
                      <activeService.icon className="w-7 h-7 text-[#1B5E8A]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
                        {activeService.title}
                      </h2>
                      <p className="text-sm text-[#64748B]">
                        Comprehensive care and expert guidance
                      </p>
                    </div>
                  </div>

                  <p className="text-[#64748B] leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#1A2B3C] font-['Playfair_Display']">
                      Included Services:
                    </h3>
                    {activeService.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0D9488]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                        </div>
                        <span className="text-[#1A2B3C]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1B5E8A] to-[#0D9488]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Playfair_Display']">
            Need Medical Assistance?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you need a routine check-up or have urgent health concerns,
            Dr. Fakak is here to help. Book your appointment today.
          </p>
          <a
            href="/appointment"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#1B5E8A] font-semibold hover:bg-[#F8FAFC] transition-all"
          >
            Book Your Appointment
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  )
}
