'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    desc: 'For exploring neXa.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: 'Get Started',
    href: '/signup',
    highlighted: false,
    features: [
      '1 Project',
      '5 AI requests/day',
      '3 Templates',
      'Basic support',
      'neXa subdomain',
    ],
  },
  {
    name: 'Starter',
    desc: 'For individuals.',
    monthlyPrice: 9,
    yearlyPrice: 7,
    cta: 'Get Started',
    href: '/signup',
    highlighted: false,
    features: [
      '5 Projects',
      '100 AI requests/day',
      '20 Templates',
      'Email support',
      'Custom domain',
      'Analytics',
    ],
  },
  {
    name: 'Pro',
    desc: 'For creators and professionals.',
    monthlyPrice: 29,
    yearlyPrice: 23,
    cta: 'Get Pro',
    href: '/signup',
    highlighted: true,
    features: [
      'Unlimited Projects',
      '1000 AI requests/day',
      'All Templates',
      'Priority support',
      'Custom domain',
      'Advanced Analytics',
      'Automation workflows',
      'API access',
    ],
  },
  {
    name: 'Business',
    desc: 'For businesses.',
    monthlyPrice: 79,
    yearlyPrice: 63,
    cta: 'Get Business',
    href: '/signup',
    highlighted: false,
    features: [
      'Unlimited Projects',
      'Unlimited AI requests',
      'All Templates',
      '24/7 support',
      'Multiple domains',
      'Team members (10)',
      'Cloud deployment',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'For organizations.',
    monthlyPrice: null,
    yearlyPrice: null,
    cta: 'Contact Us',
    href: '/contact',
    highlighted: false,
    features: [
      'Everything in Business',
      'Unlimited team members',
      'Dedicated support',
      'Custom AI models',
      'SLA guarantee',
      'On-premise option',
      'Custom contracts',
      'Security audit',
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section style={{
      padding: '100px 24px',
      background: 'var(--color-surface)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            color: 'var(--color-primary)',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px',
          }}>Pricing</p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}>
            Simple, transparent pricing.
          </h2>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '18px',
            marginBottom: '32px',
          }}>
            Choose the plan that fits your needs.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: '100px',
            padding: '6px',
          }}>
            <button onClick={() => setYearly(false)} style={{
              background: !yearly ? 'var(--color-primary)' : 'none',
              border: 'none',
              color: !yearly ? '#fff' : 'var(--color-muted)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 20px',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{
              background: yearly ? 'var(--color-primary)' : 'none',
              border: 'none',
              color: yearly ? '#fff' : 'var(--color-muted)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 20px',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Yearly
              <span style={{
                background: 'rgba(16,185,129,0.2)',
                color: 'var(--color-primary)',
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '100px',
              }}>-20%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              background: plan.highlighted ? 'var(--color-primary)' : 'var(--color-bg)',
              border: plan.highlighted ? 'none' : '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '32px 24px',
              position: 'relative',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}>

              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  color: 'var(--color-primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 16px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>Most Popular</div>
              )}

              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: plan.highlighted ? '#fff' : '#fff',
                marginBottom: '8px',
              }}>{plan.name}</h3>

              <p style={{
                color: plan.highlighted ? 'rgba(255,255,255,0.8)' : 'var(--color-muted)',
                fontSize: '14px',
                marginBottom: '24px',
              }}>{plan.desc}</p>

              <div style={{ marginBottom: '24px' }}>
                {plan.monthlyPrice === null ? (
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#fff',
                  }}>Custom</div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{
                      fontSize: '36px',
                      fontWeight: 800,
                      color: '#fff',
                    }}>
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span style={{
                      color: plan.highlighted ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)',
                      fontSize: '14px',
                    }}>/mo</span>
                  </div>
                )}
              </div>

              <Link href={plan.href} style={{
                display: 'block',
                textAlign: 'center',
                background: plan.highlighted ? '#fff' : 'var(--color-primary)',
                color: plan.highlighted ? 'var(--color-primary)' : '#fff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                padding: '12px',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '24px',
                transition: 'opacity 0.2s',
              }}>{plan.cta}</Link>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {plan.features.map((f) => (
                  <div key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: plan.highlighted ? 'rgba(255,255,255,0.9)' : 'var(--color-muted)',
                    fontSize: '13px',
                  }}>
                    <span style={{
                      color: plan.highlighted ? '#fff' : 'var(--color-primary)',
                      fontWeight: 700,
                    }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
