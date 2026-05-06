import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const articles = [
  {
    slug: 'early-symptoms-diabetes',
    title: 'Early Symptoms of Diabetes: What to Watch For',
    excerpt:
      'Recognizing the early warning signs of diabetes can lead to earlier intervention and better long-term outcomes. Learn the key symptoms that should never be ignored.',
    image: '/blog-diabetes.jpg',
    category: 'Diabetes',
    date: 'April 15, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'monitor-blood-pressure',
    title: 'When Should You Monitor Your Blood Pressure?',
    excerpt:
      'Understanding when and how to monitor your blood pressure is crucial for preventing hypertension-related complications. Here is what every adult should know.',
    image: '/blog-blood-pressure.jpg',
    category: 'Cardiology',
    date: 'April 10, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'preventive-healthcare',
    title: 'The Importance of Preventive Healthcare',
    excerpt:
      'Preventive medicine is the most effective way to maintain long-term health. Discover why regular check-ups and screenings should be part of your health routine.',
    image: '/blog-preventive.jpg',
    category: 'Wellness',
    date: 'March 28, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'seasonal-health-advice',
    title: 'Seasonal Health Advice: Staying Healthy Year-Round',
    excerpt:
      'Each season brings unique health challenges. From flu prevention in winter to heat safety in summer, learn how to adapt your health habits throughout the year.',
    image: '/blog-seasonal.jpg',
    category: 'Seasonal',
    date: 'March 20, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'family-medicine-guidance',
    title: 'Family Medicine Guidance for All Ages',
    excerpt:
      'A family doctor plays a vital role in the health of every family member. Learn how comprehensive family medicine supports health from childhood through senior years.',
    image: '/blog-family.jpg',
    category: 'Family Care',
    date: 'March 12, 2026',
    readTime: '7 min read',
    featured: false,
  },
]

export default function Blog() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-hero', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      const cards = gsap.utils.toArray('.blog-card')
      cards.forEach((card: unknown, i: number) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const featuredArticle = articles.find((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F8FAFC] to-[#E8F4F8]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B5E8A]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-hero text-center max-w-3xl mx-auto">
            <span className="text-[#1B5E8A] text-sm font-semibold uppercase tracking-wider">
              Health Insights
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Medical Blog
            </h1>
            <p className="mt-4 text-lg text-[#64748B]">
              Expert medical articles, health tips, and wellness guidance from
              Dr. Habib Fakak.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="blog-card group relative overflow-hidden rounded-2xl bg-[#F8FAFC] card-shadow hover:card-shadow-hover transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#1B5E8A] text-white text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-xs text-[#1B5E8A] font-medium px-3 py-1 rounded-full bg-[#E8F4F8]">
                      <Tag className="w-3 h-3" />
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C] mb-4 font-['Playfair_Display'] group-hover:text-[#1B5E8A] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-[#64748B] leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-[#94A3B8]">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="flex items-center text-sm font-medium text-[#1B5E8A] group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A2B3C] font-['Playfair_Display']">
              Recent Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, i) => (
              <article
                key={i}
                className="blog-card group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#1B5E8A] text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-[#94A3B8]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A2B3C] mb-2 font-['Playfair_Display'] group-hover:text-[#1B5E8A] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="flex items-center text-sm font-medium text-[#1B5E8A] group-hover:translate-x-1 transition-transform">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-4 font-['Playfair_Display']">
            Have Health Questions?
          </h2>
          <p className="text-[#64748B] mb-8 max-w-2xl mx-auto">
            While our blog provides general health information, nothing replaces a
            personal consultation. Book an appointment to discuss your specific
            health concerns.
          </p>
          <Link to="/appointment" className="btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
