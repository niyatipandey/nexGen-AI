import { useState, useEffect, useRef, useCallback } from 'react'
import Icon from '../icons/Icon'

const features = [
  {
    id: 0,
    icon: 'cube-16-solid',
    title: 'Visual Workflow Builder',
    desc: 'Map out multi-step agent behaviors on a high-precision grid. Drag, drop, and connect triggers, logic gates, and actions to craft custom automation paths.',
    size: 'large',
    accent: true,
  },
  {
    id: 1,
    icon: 'cog-8-tooth',
    title: 'Autonomous Execution',
    desc: 'Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.',
    size: 'small',
  },
  {
    id: 2,
    icon: 'link-solid',
    title: 'End-to-End Encryption',
    desc: 'Every node and data transfer is shielded by industrial-grade security.',
    size: 'small',
  },
  {
    id: 3,
    icon: 'chart-pie',
    title: 'Real-Time Analytics',
    desc: 'Monitor agent performance and get actionable insights from your automation data in real time.',
    size: 'small',
  },
  {
    id: 4,
    icon: 'arrow-trending-up',
    title: 'Production-Ready Stack',
    desc: 'Connect core business platforms through secure integrations that scale with your volume.',
    size: 'small',
  },
]

function NodeGraph() {
  return (
    <div className="absolute bottom-6 right-6 opacity-40" aria-hidden="true">
      <svg width="160" height="100" viewBox="0 0 160 100">
        <line x1="20" y1="50" x2="70" y2="25" stroke="#FFC801" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <line x1="20" y1="50" x2="70" y2="75" stroke="#FFC801" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <line x1="70" y1="25" x2="120" y2="50" stroke="#FF9932" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <line x1="70" y1="75" x2="120" y2="50" stroke="#FF9932" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <line x1="120" y1="50" x2="150" y2="50" stroke="#FFC801" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <circle cx="20" cy="50" r="5" fill="#114C5A" stroke="#FFC801" strokeWidth="1.5">
          <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="25" r="4" fill="#114C5A" stroke="#FF9932" strokeWidth="1.5" />
        <circle cx="70" cy="75" r="4" fill="#114C5A" stroke="#FF9932" strokeWidth="1.5" />
        <circle cx="120" cy="50" r="6" fill="#FFC801" stroke="#FFC801" strokeWidth="1.5">
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="50" r="4" fill="#114C5A" stroke="#FFC801" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

const BentoCard = ({ feature, isActive, onHover }) => (
  <article
    className={`
      relative rounded-2xl border cursor-pointer overflow-hidden
      transition-all duration-200
      hover:border-forsythia/40 hover:shadow-xl
      ${feature.size === 'large' ? 'md:col-span-2 min-h-[280px]' : 'min-h-[200px]'}
    `}
    style={{
      background: isActive
        ? 'linear-gradient(135deg, rgba(17,76,90,0.8) 0%, rgba(23,43,54,0.9) 100%)'
        : 'rgba(17,76,90,0.28)',
      borderColor: isActive ? 'rgba(255,200,1,0.4)' : 'rgba(255,255,255,0.07)',
      boxShadow: isActive ? '0 0 30px rgba(255,200,1,0.08), inset 0 1px 0 rgba(255,200,1,0.05)' : 'none',
    }}
    onMouseEnter={() => onHover(feature.id)}
    onMouseLeave={() => onHover(null)}
  >
    {isActive && (
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FFC801, transparent)' }}
      />
    )}

    <div className="p-8 h-full flex flex-col">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-200"
        style={{
          background: isActive ? 'rgba(255,200,1,0.15)' : 'rgba(255,200,1,0.08)',
          border: '1px solid rgba(255,200,1,0.2)',
        }}
      >
        <Icon name={feature.icon} className="w-5 h-5 text-forsythia" />
      </div>

      <h3 className="font-mono font-semibold text-base text-arctic-powder mb-3">
        {feature.title}
      </h3>
      <p className="text-mystic-mint/60 text-sm leading-relaxed flex-1">
        {feature.desc}
      </p>

      {feature.size === 'large' && (
        <div
          className="absolute right-0 bottom-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,200,1,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      )}

      {feature.size === 'large' && <NodeGraph />}

      {/* ✅ Fix 1: Always rendered to reserve space, just fades in/out */}
      <div
        className="flex items-center gap-2 mt-6"
        style={{ opacity: isActive ? 1 : 0, transition: 'opacity 200ms ease' }}
      >
        <Icon name="arrow-trending-up" className="w-3.5 h-3.5 text-forsythia" />
        <span className="font-mono text-xs text-forsythia/70">Active</span>
      </div>
    </div>
  </article>
)

const AccordionItem = ({ feature, isOpen, onToggle }) => (
  <article
    className="rounded-xl overflow-hidden"
    style={{
      border: `1px solid ${isOpen ? 'rgba(255,200,1,0.3)' : 'rgba(255,255,255,0.07)'}`,
      background: isOpen ? 'rgba(17,76,90,0.4)' : 'transparent',
      transition: 'border-color 350ms ease-in-out, background 350ms ease-in-out',
    }}
  >
    <button
      className="w-full flex items-center justify-between p-5 text-left"
      onClick={() => onToggle(feature.id)}
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(255,200,1,0.08)', border: '1px solid rgba(255,200,1,0.15)' }}
        >
          <Icon name={feature.icon} className="w-4 h-4 text-forsythia" />
        </div>
        <span className="font-mono font-semibold text-arctic-powder text-sm">
          {feature.title}
        </span>
      </div>
      <Icon
        name="chevron-down"
        className="w-4 h-4 text-mystic-mint/50 flex-shrink-0"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 350ms ease-in-out' }}
      />
    </button>
    <div
      style={{
        maxHeight: isOpen ? '200px' : '0px',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 350ms ease-in-out, opacity 350ms ease-in-out',
      }}
    >
      <p className="px-5 pb-5 text-mystic-mint/75 text-sm leading-relaxed">
        {feature.desc}
      </p>
    </div>
  </article>
)

export default function BentoFeatures() {
  const activeIndexRef = useRef(null)
  const containerRef = useRef(null)
  const isMobileRef = useRef(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)

  const handleHover = useCallback((id) => {
    activeIndexRef.current = id
    setHoveredIndex(id)
  }, [])

  const handleAccordionToggle = useCallback((id) => {
    setOpenIndex(prev => prev === id ? null : id)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ✅ Fix 2: Initialize from actual width, not hardcoded false
    isMobileRef.current = container.getBoundingClientRect().width < 768

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        const wasMobile = isMobileRef.current
        const isMobileNow = width < 768

        if (!wasMobile && isMobileNow && activeIndexRef.current !== null) {
          // Desktop → Mobile: carry hovered card into accordion open state
          setOpenIndex(activeIndexRef.current)
        } else if (wasMobile && !isMobileNow) {
          // ✅ Fix 3: Mobile → Desktop: clear stale accordion open state
          setOpenIndex(null)
        }

        isMobileRef.current = isMobileNow
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="pt-20 pb-12 px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-2 mb-5">
          <div className="w-px h-4 bg-forsythia" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-forsythia/70">
            Product Features
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="font-mono font-bold text-arctic-powder max-w-lg"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            Build logic at{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              scale.
            </span>
          </h2>
          <p className="text-mystic-mint/50 text-sm max-w-xs leading-relaxed border-l-2 border-forsythia/20 pl-4">
            Design, deploy, and manage sophisticated AI workflows through
            an intuitive visual interface. No complex coding.
          </p>
        </div>

        {/* Desktop Bento */}
        <div className="hidden md:grid grid-cols-3 gap-5 mb-8">
          {features.map((feature) => (
            <BentoCard
              key={feature.id}
              feature={feature}
              isActive={hoveredIndex === feature.id}
              onHover={handleHover}
            />
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-2">
          {features.map((feature) => (
            <AccordionItem
              key={feature.id}
              feature={feature}
              isOpen={openIndex === feature.id}
              onToggle={handleAccordionToggle}
            />
          ))}
        </div>

      </div>
    </section>
  )
}