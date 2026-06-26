import { useState, useEffect } from 'react'
import Icon from '../icons/Icon'

const navItems = ['Features', 'Pricing', 'Testimonials' ,'FAQ']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
        className={`fixed top-0 left-0 right-0 z-50 ${
            scrolled
            ? 'bg-oceanic-noir/80 backdrop-blur-xl border-b border-forsythia/10 transition-all duration-300'
            : 'bg-transparent transition-none'
        }`}
        >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FFC801, transparent)' }}
        aria-hidden="true"
      />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: '#FFC80122', filter: 'blur(8px)' }}
            />
            <Icon
              name="cube-16-solid"
              className="w-6 h-6 text-forsythia relative transition-transform duration-200 group-hover:rotate-12"
            />
          </div>
          <span className="font-mono font-bold text-lg text-arctic-powder tracking-tight">
            Nex<span className="text-forsythia">Gen</span>
            <span className="text-mystic-mint/50">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navItems.map((item) => (
            <li key={item}>
            <a
                href={`#${item.toLowerCase()}`}
                className="relative text-sm text-mystic-mint/70 hover:text-arctic-powder px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium group"
            >
                {item}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-forsythia group-hover:w-4 transition-all duration-200" />
            </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          
        <a
            href="#pricing"
            className="text-sm text-mystic-mint/60 hover:text-arctic-powder transition-colors duration-200 px-3 py-2"
            >
            Sign In
        </a>
          <a
            href="#pricing"
            className="relative flex items-center gap-2 text-oceanic-noir text-sm font-semibold px-4 py-2 rounded-lg overflow-hidden group"
            style={{
                background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
            }}
            >
            <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                background: 'linear-gradient(135deg, #FF9932 0%, #FFC801 100%)',
                }}
            />
            <span className="relative">Get Started</span>
            <Icon name="chevron-right" className="w-4 h-4 relative" />
            </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-arctic-powder p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen
            ? <Icon name="x-mark" className="w-5 h-5" />
            : <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="w-5 h-px bg-arctic-powder block transition-all duration-200" />
                <span className="w-3 h-px bg-forsythia block transition-all duration-200" />
                <span className="w-5 h-px bg-arctic-powder block transition-all duration-200" />
              </span>
          }
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 350ms ease-in-out, opacity 350ms ease-in-out',
        }}
      >
        <ul className="flex flex-col px-6 pb-6 pt-2 gap-1 bg-oceanic-noir/98 backdrop-blur-xl border-t border-white/5 list-none">
          {navItems.map((item) => (
            <li key={item}>
              
            <a
                href={`#${item.toLowerCase()}`}
                className="flex items-center justify-between py-3 px-2 border-b border-white/5 text-mystic-mint hover:text-forsythia transition-colors duration-200 font-medium text-sm"
                onClick={() => setIsOpen(false)}
                >
                {item}
                <Icon name="chevron-right" className="w-3.5 h-3.5 opacity-40" />
                </a>
            </li>
          ))}
          <li className="pt-3">
           <a
                href="#pricing"
                className="flex items-center justify-center gap-2 font-semibold px-4 py-3 rounded-xl text-oceanic-noir text-sm"
                style={{
                    background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
                }}
                onClick={() => setIsOpen(false)}
                >
                Get Started Free
                <Icon name="chevron-right" className="w-4 h-4" />
                </a>
          </li>
        </ul>
      </div>
    </header>
  )
}