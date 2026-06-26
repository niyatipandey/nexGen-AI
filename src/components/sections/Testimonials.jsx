import Icon from '../icons/Icon'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'Nova Labs',
    quote:
      'NexGen AI reduced our workflow execution time by nearly 70%. Building automations has never felt this effortless.',
  },
  {
    name: 'David Miller',
    role: 'Founder',
    company: 'ScaleForge',
    quote:
      'The visual workflow builder allowed our team to automate repetitive tasks in hours instead of weeks.',
  },
  {
    name: 'Emily Watson',
    role: 'Product Lead',
    company: 'Vertex Cloud',
    quote:
      'From integrations to analytics, everything feels incredibly polished. It has become part of our daily operations.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-px h-4 bg-forsythia" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-forsythia/70">
            Social Proof
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="font-mono font-bold text-arctic-powder max-w-xl"
            style={{
              fontSize: 'clamp(2rem,5vw,3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Trusted by{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg,#FFC801 0%,#FF9932 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              modern teams.
            </span>
          </h2>

          <p className="text-mystic-mint/50 text-sm max-w-xs leading-relaxed border-l-2 border-forsythia/20 pl-4">
            Thousands of builders rely on NexGen AI to automate complex
            workflows across engineering, operations, and product teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl p-6 transition-all duration-200"
              style={{
                background: 'rgba(17,76,90,0.22)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="star-solid"
                    className="w-4 h-4 text-forsythia"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-mystic-mint/75 leading-relaxed text-sm mb-8">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">

                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg,#FFC801,#FF9932)',
                  }}
                >
                  <span className="font-mono font-bold text-oceanic-noir">
                    {item.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-arctic-powder text-sm">
                    {item.name}
                  </h4>

                  <p className="text-xs text-mystic-mint/45">
                    {item.role}
                  </p>

                  <p className="text-xs text-forsythia/70">
                    {item.company}
                  </p>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}