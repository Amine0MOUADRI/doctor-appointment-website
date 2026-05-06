import { useState, useEffect, useRef } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [sent, setSent] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      const cards = gsap.utils.toArray('.contact-animate')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+212 5XX-XXXXXX',
      href: 'tel:+2125XXXXXXXX',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+212 774-653947',
      href: 'https://wa.me/212774653947',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'amouadri@gmail.com',
      href: 'mailto:amouadri@gmail.com',
    },
  ]

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F8FAFC] to-[#E8F4F8]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E8A]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-hero text-center max-w-3xl mx-auto">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-[#64748B]">
              We are here to answer your questions and help you schedule your
              visit. Reach out through any channel below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.label === 'WhatsApp' ? '_blank' : undefined}
                rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="contact-animate group bg-[#F8FAFC] rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E8F4F8] flex items-center justify-center mb-6 group-hover:bg-[#1B5E8A] transition-colors">
                  <item.icon className="w-7 h-7 text-[#1B5E8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-2 font-['Playfair_Display']">
                  {item.label}
                </h3>
                <p className="text-[#64748B]">{item.value}</p>
              </a>
            ))}
          </div>

          {/* Address & Map */}
          <div className="contact-animate grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6 font-['Playfair_Display']">
                Clinic Location
              </h2>
              <div className="bg-white rounded-2xl p-6 card-shadow mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#1B5E8A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B3C] mb-1">
                      Dr. Habib Fakak Medical Center
                    </h3>
                    <p className="text-[#64748B]">
                      123 Medical Center Avenue
                      <br />
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F4F8] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#1B5E8A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B3C] mb-1">
                      Opening Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Monday - Friday</span>
                        <span className="font-mono-data text-[#1A2B3C]">
                          08:00 - 18:00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Saturday</span>
                        <span className="font-mono-data text-[#1A2B3C]">
                          09:00 - 14:00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Sunday</span>
                        <span className="font-mono-data text-[#F59E0B]">
                          Emergency Only
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden card-shadow map-filter">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-7.6!3d33.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzAwLjAiTiA3wrAzNiczNi4wIlc!5e0!3m2!1sen!2sma!4v1600000000000!5m2!1sen!2sma"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6 font-['Playfair_Display']">
                Send Us a Message
              </h2>

              {!sent ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 card-shadow"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A2B3C] mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#1A2B3C] placeholder:text-[#94A3B8] transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full text-center"
                    >
                      <Send className="w-5 h-5 mr-2 inline" />
                      Send Message
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white rounded-2xl p-8 card-shadow text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#0D9488]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2B3C] mb-2 font-['Playfair_Display']">
                    Message Sent!
                  </h3>
                  <p className="text-[#64748B]">
                    Thank you for reaching out. We will get back to you as soon
                    as possible.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
