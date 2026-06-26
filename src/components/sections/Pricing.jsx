import { useRef, useCallback } from 'react'
import Icon from '../icons/Icon'

const MATRIX = {
  tiers: ['Starter', 'Pro', 'Enterprise'],
  baseRates: {
    Starter: 29,
    Pro: 79,
    Enterprise: 199,
  },
  tariffs: {
    USD: { symbol: '$', multiplier: 1 },
    INR: { symbol: '₹', multiplier: 86 },
    EUR: { symbol: '€', multiplier: 0.86 },
  },
  annualDiscount: 0.8,
}

const TIER_DETAILS = {
  Starter: {
    desc: 'Perfect for solo builders and small experiments.',
    features: ['5 active workflows', '10k executions/mo', 'Basic analytics', 'Email support', '2 integrations'],
    highlighted: false,
    badge: null,
  },
  Pro: {
    desc: 'For growing teams that need power and reliability.',
    features: ['Unlimited workflows', '500k executions/mo', 'Real-time analytics', 'Priority support', 'All integrations', 'Custom agents'],
    highlighted: true,
    badge: 'Most Popular',
  },
  Enterprise: {
    desc: 'Full control, compliance, and dedicated support.',
    features: ['Unlimited everything', 'Custom SLA', 'Dedicated infra', '24/7 support', 'SSO & RBAC', 'Audit logs', 'On-premise option'],
    highlighted: false,
    badge: null,
  },
}

function computePrice(tier, currency, billing) {
  const base = MATRIX.baseRates[tier]
  const tariff = MATRIX.tariffs[currency]
  const discount = billing === 'annual' ? MATRIX.annualDiscount : 1
  const raw = base * tariff.multiplier * discount
  if (currency === 'INR') return Math.round(raw).toLocaleString('en-IN')
  return Math.round(raw).toLocaleString('en-US')
}

const PricingCard = ({ tier, priceRef, details }) => (
  <article
    className="relative flex flex-col rounded-2xl overflow-hidden min-h-[520px]"
    style={{
      background: details.highlighted
        ? 'linear-gradient(160deg, rgba(17,76,90,0.9) 0%, rgba(23,43,54,0.95) 100%)'
        : 'rgba(255,255,255,0.02)',
      border: details.highlighted
        ? '1px solid rgba(255,200,1,0.35)'
        : '1px solid rgba(255,255,255,0.07)',
      boxShadow: details.highlighted
        ? '0 0 60px rgba(255,200,1,0.08), inset 0 1px 0 rgba(255,200,1,0.15)'
        : 'none',
    }}
  >
    {details.highlighted && (
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FFC801, transparent)' }}
        aria-hidden="true"
      />
    )}

    {details.badge && (
      <div className="absolute top-4 right-4">
        <span
          className="font-mono text-xs px-2.5 py-1 rounded-full text-oceanic-noir font-semibold"
          style={{ background: 'linear-gradient(135deg, #FFC801, #FF9932)' }}
        >
          {details.badge}
        </span>
      </div>
    )}

    <div className="p-8 flex flex-col flex-1">
      <h3 className="font-mono font-bold text-sm uppercase tracking-[0.15em] text-mystic-mint/60 mb-2">
        {tier}
      </h3>

      <div className="flex items-end gap-1 mb-2 min-h-[64px]">
        <span
          ref={priceRef}
          className="font-mono font-bold text-arctic-powder"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
        />
        <span className="font-mono text-mystic-mint/40 text-sm mb-2">/mo</span>
      </div>

      <p className="text-mystic-mint/50 text-sm leading-relaxed mb-10">
  {details.desc}
</p>

<a
  href={tier === 'Enterprise' ? '/contact' : '/signup'}
  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold mb-8 transition-all duration-200 group"
  style={
    details.highlighted
      ? {
          background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
          color: '#172B36',
        }
      : {
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#D9E8E2',
        }
  }
  onMouseEnter={(e) => {
    if (!details.highlighted) {
      e.currentTarget.style.borderColor = 'rgba(255,200,1,0.3)'
    }
  }}
  onMouseLeave={(e) => {
    if (!details.highlighted) {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
    }
  }}
>
  {tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
  <Icon name="chevron-right" className="w-4 h-4" />
</a>
      <div
        className="h-px mb-6"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />

      <ul className="flex flex-col gap-3 list-none flex-1">
        {details.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-mystic-mint/70"
          >
            <Icon
              name="chevron-right"
              className="w-3.5 h-3.5 text-forsythia flex-shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </article>
)

export default function Pricing() {
  const priceRefs = useRef({
    Starter: null,
    Pro: null,
    Enterprise: null,
  })

  const billingRef = useRef('monthly')
  const currencyRef = useRef('USD')
  const monthlyBtnRef = useRef(null)
  const annualBtnRef = useRef(null)

  const updatePrices = useCallback(() => {
    const billing = billingRef.current
    const currency = currencyRef.current
    const symbol = MATRIX.tariffs[currency].symbol

    MATRIX.tiers.forEach((tier) => {
      const node = priceRefs.current[tier]
      if (node) {
        node.textContent = `${symbol}${computePrice(tier, currency, billing)}`
      }
    })
  }, [])

  const initPrices = useCallback((node) => {
    if (!node) return
    updatePrices()
  }, [updatePrices])

  const handleBillingToggle = useCallback((billing) => {
    billingRef.current = billing
    updatePrices()

    if (monthlyBtnRef.current && annualBtnRef.current) {
      if (billing === 'monthly') {
        monthlyBtnRef.current.style.background = 'rgba(17,76,90,1)'
        monthlyBtnRef.current.style.color = '#F1F6F4'
        annualBtnRef.current.style.background = 'transparent'
        annualBtnRef.current.style.color = 'rgba(217,232,226,0.5)'
      } else {
        annualBtnRef.current.style.background = 'rgba(17,76,90,1)'
        annualBtnRef.current.style.color = '#F1F6F4'
        monthlyBtnRef.current.style.background = 'transparent'
        monthlyBtnRef.current.style.color = 'rgba(217,232,226,0.5)'
      }
    }
  }, [updatePrices])

  const handleCurrencyChange = useCallback((e) => {
    currencyRef.current = e.target.value
    updatePrices()
  }, [updatePrices])

  return (
    <section
      id="pricing"
      ref={initPrices}
      className="pt-16 pb-24 px-6 relative"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(17,76,90,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-px h-4 bg-forsythia" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-forsythia/70">
            Pricing
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <h2
            className="max-w-4xl font-mono text-5xl md:text-7xl font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Simple,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              transparent
            </span>{' '}
            pricing.
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div
              className="flex items-center p-1 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              role="group"
              aria-label="Billing cycle"
            >
              <button
                ref={monthlyBtnRef}
                onClick={() => handleBillingToggle('monthly')}
                className="font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200"
                style={{ background: 'rgba(17,76,90,1)', color: '#F1F6F4' }}
              >
                Monthly
              </button>
              <button
                ref={annualBtnRef}
                onClick={() => handleBillingToggle('annual')}
                className="font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200"
                style={{ color: 'rgba(217,232,226,0.5)' }}
              >
                Annual
                <span className="ml-1.5 text-forsythia">−20%</span>
              </button>
            </div>

            <select
              className="bg-oceanic-noir text-arctic-powder border border-white/10 rounded-xl px-4 py-2"
              onChange={handleCurrencyChange}
            >
              <option value="USD" className="text-white">$ USD</option>
              <option value="INR" className="text-white">₹ INR</option>
              <option value="EUR" className="text-white">€ EUR</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MATRIX.tiers.map((tier) => (
            <PricingCard
              key={tier}
              tier={tier}
              details={TIER_DETAILS[tier]}
              priceRef={(node) => { priceRefs.current[tier] = node }}
            />
          ))}
        </div>

        <p className="text-center text-mystic-mint/30 text-xs font-mono mt-10">
          All prices exclude applicable taxes. Annual billing charged upfront.
        </p>

      </div>
    </section>
  )
}