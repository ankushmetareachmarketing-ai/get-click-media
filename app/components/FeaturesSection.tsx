'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from './SectionHeading'

// --- SERVICE DATA ------------------------------------------------------------
const SERVICES = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Business API',
    description:
      'Build trust, engage customers, and grow your brand with WhatsApp Business API',
    bgColor: 'bg-[#f0fdf4]',
    borderColor: 'border-green-100',
    accentColor: 'text-[#16a34a]',
    defaultImage: '/images/whatsapp-default.png',
    hoverImage: '/images/whatsapp-hover.png',
    href: '/whatsapp-business-api',
  },
  {
    id: 'rcs',
    title: 'RCS Messaging',
    description:
      "Rich media and guided responses create an app-like experience right in the user's SMS inbox",
    bgColor: 'bg-[#eff6ff]',
    borderColor: 'border-blue-100',
    accentColor: 'text-[#2563eb]',
    defaultImage: '/images/rcs-default.png',
    hoverImage: '/images/rcs-hover.png',
    href: '/rcs-messaging',
  },
  {
    id: 'sms',
    title: 'Bulk SMS',
    description:
      'Send instant, reliable, and high-volume messages for alerts, promotions and transactional updates',
    bgColor: 'bg-[#faf5ff]',
    borderColor: 'border-purple-100',
    accentColor: 'text-[#7c3aed]',
    defaultImage: '/images/sms-default.png',
    hoverImage: '/images/sms-hover.png',
    href: '/bulk-sms',
  },
  {
    id: 'voice',
    title: 'Voice Solutions',
    description:
      'Scale up your conversation rates through automated outbound calls',
    bgColor: 'bg-[#fff7ed]',
    borderColor: 'border-orange-100',
    accentColor: 'text-[#ea580c]',
    defaultImage: '/images/voice-default.png',
    hoverImage: '/images/voice-hover.png',
    href: '/voice-solutions',
  },
]

// --- TYPES -------------------------------------------------------------------
interface Service {
  id: string
  title: string
  description: string
  bgColor: string
  borderColor: string
  accentColor: string
  defaultImage: string
  hoverImage: string
  href: string
}

// --- CARD --------------------------------------------------------------------
function ServiceCard({ service }: { service: Service }) {
  const defaultImgRef = useRef(null)
  const hoverImgRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.set(hoverImgRef.current, { opacity: 0 })
  }, [])

  const handleMouseEnter = () => {
    gsap.to(defaultImgRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' })
    gsap.to(hoverImgRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    gsap.to(cardRef.current, { y: -6, duration: 0.35, ease: 'power2.out' })
  }

  const handleMouseLeave = () => {
    gsap.to(defaultImgRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    gsap.to(hoverImgRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' })
    gsap.to(cardRef.current, { y: 0, duration: 0.35, ease: 'power2.out' })
  }

  return (
    /*
     * KEY FIX: The outer wrapper has NO overflow-hidden so the card
     * is never clipped when it lifts on hover.
     * The inner image box keeps its own overflow-hidden for the image.
     */
    <div
      ref={cardRef}
      className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image box — overflow-hidden only here, never on the card wrapper */}
      <div
        className={`
          relative rounded-3xl overflow-hidden border
          ${service.bgColor} ${service.borderColor}
          h-96 sm:h-96 flex items-center justify-center
          shadow-sm
        `}
      >
        {/* Default image */}
        <div ref={defaultImgRef} className="absolute inset-0">
          <Image
            src={service.defaultImage}
            alt={`${service.title} default`}
            fill
            className="object-cover"
          />
        </div>

        {/* Hover image */}
        <div ref={hoverImgRef} className="absolute inset-0">
          <Image
            src={service.hoverImage}
            alt={`${service.title} hover`}
            fill
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Text */}
      <div className="mt-5 px-1">
        <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-[13.5px] text-gray-500 leading-relaxed mb-4">
          {service.description}
        </p>
        <Link
          href={service.href}
          className={`
            inline-flex items-center gap-1 text-[13.5px] font-semibold
            ${service.accentColor} group
          `}
        >
          Learn More
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

// --- MAIN SLIDER -------------------------------------------------------------
export default function FeaturesSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const getCardsPerView = useCallback(() => {
    if (typeof window === 'undefined') return 4
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 4
  }, [])

  const totalSlides = SERVICES.length
  const maxIndex = () => totalSlides - getCardsPerView()

  useEffect(() => {
    const onResize = () => {
      const cardsPerView = getCardsPerView()
      setIsMobile(cardsPerView === 1)
      setIsTablet(cardsPerView === 2)
      const max = totalSlides - cardsPerView
      if (current > max) {
        setCurrent(max)
        slideTo(max, false)
      }
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [current, getCardsPerView])

  useEffect(() => {
    const cards = trackRef.current?.children
    if (!cards) return
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.2 }
    )
  }, [])

  const slideTo = (index: number, animate = true) => {
    const track = trackRef.current
    if (!track) return
    const cardEl = track.children[0] as HTMLElement
    const cardWidth = cardEl?.offsetWidth || 0
    const gap = 24
    const offset = index * (cardWidth + gap)
    if (animate) {
      gsap.to(track, { x: -offset, duration: 0.65, ease: 'power3.inOut' })
    } else {
      gsap.set(track, { x: -offset })
    }
  }

  const prev = () => {
    const next = Math.max(current - 1, 0)
    setCurrent(next)
    slideTo(next)
  }

  const next = () => {
    const nextIdx = Math.min(current + 1, maxIndex())
    setCurrent(nextIdx)
    slideTo(nextIdx)
  }

  const goTo = (i: number) => {
    setCurrent(i)
    slideTo(i)
  }

  const showNav = isMobile || isTablet
  const dotCount = isMobile ? totalSlides : isTablet ? totalSlides - 1 : 0

  return (
    <section ref={sectionRef} data-gsap-own="true" className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* -- Header -- */}
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything you need to reach your customers"
            highlight="reach your customers"
          />

          {/* Desktop arrows */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0 ml-8">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="
                w-10 h-10 rounded-full border border-gray-200
                flex items-center justify-center text-gray-600
                hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex()}
              aria-label="Next"
              className="
                w-10 h-10 rounded-full border border-gray-200
                flex items-center justify-center text-gray-600
                hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/*
         * KEY FIX: The visible clip window uses overflow-hidden, BUT we add
         * padding-top + negative margin-top so cards lifting upward (y: -6)
         * are never clipped by the edge of the container.
         * The extra 12 px of padding-top = slightly more than the 6 px lift.
         */}
        <div className="overflow-hidden -mt-3 pt-3">
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ transform: 'translateX(0px)' }}
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Dots (mobile / tablet) */}
        {showNav && dotCount > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${current === i ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'}
                `}
              />
            ))}
          </div>
        )}

        {/* Mobile arrows */}
        {isMobile && (
          <div className="flex justify-center gap-3 mt-6 sm:hidden">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 disabled:opacity-30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex()}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 disabled:opacity-30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}