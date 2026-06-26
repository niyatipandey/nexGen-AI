import Icon from '../icons/Icon'

const links = [
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer
      className="px-6 pt-14 pb-8 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg,#FFC801 0%,#FF9932 100%)',
                }}
              >
                <Icon
                  name="cube-16-solid"
                  className="w-5 h-5 text-oceanic-noir"
                />
              </div>

              <span className="font-mono font-bold text-2xl text-arctic-powder">
                NexGen
                <span className="text-forsythia">AI</span>
              </span>
            </div>

            <p className="text-mystic-mint/55 max-w-sm leading-relaxed">
              Build intelligent AI workflows, automate repetitive tasks,
              and deploy enterprise-grade automation at scale.
            </p>

          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">

            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-forsythia mb-5">
              Explore
            </h3>

            <ul className="space-y-3 list-none">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-mystic-mint/70 hover:text-forsythia transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-xs text-mystic-mint/40">
            © 2026 NexGen AI. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs">
            <a
              href="#"
              className="text-mystic-mint/40 hover:text-forsythia transition-colors"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-mystic-mint/40 hover:text-forsythia transition-colors"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-mystic-mint/40 hover:text-forsythia transition-colors"
            >
              Contact
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}