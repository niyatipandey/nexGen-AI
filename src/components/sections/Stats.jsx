import Icon from '../icons/Icon'

const stats = [
  {
    icon: 'arrow-trending-up',
    value: '10x',
    label: 'Faster Automation',
    desc: 'Increase in manual task processing speed.',
  },
  {
    icon: 'chart-pie',
    value: '99%',
    label: 'Uptime SLA',
    desc: 'Uptime for critical agent infrastructure.',
  },
  {
    icon: 'cog-8-tooth',
    value: '12ms',
    label: 'Avg Latency',
    desc: 'Average latency for real-time inference.',
  },
]

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 relative overflow-hidden">

      {/* Subtle top border gradient */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,200,1,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-px h-4 bg-forsythia" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-forsythia/70">
            By the numbers
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.value}
              className="relative p-10 group cursor-default"
              style={{
                borderRight: index < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,200,1,0.04) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-8 transition-colors duration-200"
                style={{
                  background: 'rgba(255,200,1,0.06)',
                  border: '1px solid rgba(255,200,1,0.12)',
                }}
              >
                <Icon
                  name={stat.icon}
                  className="w-4 h-4 text-forsythia"
                />
              </div>

              {/* Big number — editorial style */}
              <p
                className="font-mono font-bold text-arctic-powder mb-2 leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 5rem)',
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, #F1F6F4 0%, rgba(241,246,244,0.6) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-forsythia/80 mb-3">
                {stat.label}
              </p>

              {/* Desc */}
              <p className="text-mystic-mint/50 text-sm leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-10 right-10 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, #FFC801, transparent)' }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}