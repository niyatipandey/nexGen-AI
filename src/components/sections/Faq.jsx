import { useState } from 'react'
import Icon from '../icons/Icon'

const faqs = [
  {
    question: 'Can I start using NexGen AI for free?',
    answer:
      'Yes. You can begin with our Starter plan and upgrade anytime as your automation needs grow.',
  },
  {
    question: 'Which AI models are supported?',
    answer:
      'NexGen AI integrates with popular AI providers and also supports custom models through secure APIs.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All data is encrypted in transit and at rest using enterprise-grade security standards.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes. Upgrade, downgrade, or cancel your subscription at any time without losing your workflows.',
  },
  {
    question: 'Do you provide enterprise support?',
    answer:
      'Enterprise customers receive dedicated onboarding, priority support, advanced security, and custom deployment options.',
  },
]

function FAQItem({ faq, open, onToggle }) {
  return (
    <article
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: open
          ? 'rgba(17,76,90,0.35)'
          : 'rgba(255,255,255,0.02)',
        border: `1px solid ${
          open
            ? 'rgba(255,200,1,0.3)'
            : 'rgba(255,255,255,0.08)'
        }`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-mono font-semibold text-arctic-powder text-base">
          {faq.question}
        </span>

        <Icon
          name="chevron-down"
          className="w-5 h-5 text-forsythia transition-transform duration-300"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div
        style={{
          maxHeight: open ? '200px' : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition:
            'max-height 300ms ease, opacity 300ms ease',
        }}
      >
        <p className="px-6 pb-6 text-mystic-mint/70 leading-relaxed text-sm">
          {faq.answer}
        </p>
      </div>
    </article>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-px h-4 bg-forsythia" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-forsythia/70">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <h2
            className="font-mono font-bold text-arctic-powder mb-5"
            style={{
              fontSize: 'clamp(2rem,5vw,3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Frequently asked{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg,#FFC801 0%,#FF9932 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              questions.
            </span>
          </h2>

          <p className="text-mystic-mint/55 max-w-xl">
            Everything you need to know before building your first
            intelligent automation workflow.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  )
}