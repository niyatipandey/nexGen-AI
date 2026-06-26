import Icon from '../icons/Icon'

const clients = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'GitHub']

export default function Hero() {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-8 overflow-hidden"
>
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,200,1,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,200,1,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Large amber glow — top right */}
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FFC80118 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* Teal glow — bottom left */}
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #114C5A40 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* Saffron accent line — left edge */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #FF9932, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative">

        {/* Badge */}
        <div className="flex items-center gap-2 mb-10">
          <div
            className="flex items-center gap-2 border text-forsythia text-xs font-mono px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(255,200,1,0.06)',
              borderColor: 'rgba(255,200,1,0.25)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-forsythia"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            />
            Next-Gen AI Automation Platform
            <Icon name="arrow-trending-up" className="w-3 h-3" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-mono font-bold leading-[0.95] mb-8 max-w-5xl">
          <span
            className="block text-6xl md:text-8xl lg:text-9xl text-arctic-powder"
            style={{ letterSpacing: '-0.03em' }}
          >
            Automate
          </span>
          <span
            className="block text-6xl md:text-8xl lg:text-9xl"
            style={{
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 60%, #FFC801 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
            }}
          >
            everything.
          </span>
        </h1>

        {/* Subtext + CTA row */}
        {/* Subtext + CTA row */}
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
  <p className="text-mystic-mint/70 text-lg md:text-xl max-w-xl leading-relaxed">
    Deploy custom AI agents, automate complex data pipelines,
    and scale your intelligence infrastructure — no code required.
  </p>

  <div className="flex flex-col sm:flex-row items-start gap-3">
    <a
      href="#pricing"
      className="relative flex items-center gap-2 text-oceanic-noir font-semibold px-6 py-3.5 rounded-xl overflow-hidden group text-sm"
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
      <span className="relative font-mono">Start Building Free</span>
      <Icon name="chevron-right" className="w-4 h-4 relative" />
    </a>

    <a
      href="#features"
      className="flex items-center gap-2 text-mystic-mint/70 hover:text-arctic-powder border border-white/10 hover:border-white/20 px-6 py-3.5 rounded-xl transition-all duration-200 text-sm font-medium"
    >
      <Icon name="arrow-path" className="w-4 h-4" />
      See how it works
    </a>
  </div>
</div>

        {/* Client strip */}
        <div
          className="border-t pt-10"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-mystic-mint/40 font-mono uppercase tracking-[0.2em] mb-8">
            Trusted by engineering teams at
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 list-none">
            {clients.map((client) => (
              <li key={client}>
                <span className="font-mono font-semibold text-mystic-mint/25 hover:text-mystic-mint/60 transition-colors duration-200 text-sm tracking-wider cursor-default">
                  {client}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}