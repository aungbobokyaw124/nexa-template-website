'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  { q: 'How do I get started with neXa?', a: 'Sign up for a free account and explore our platform. You can start with our AI tools, web templates, or automation workflows.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and local payment methods depending on your region.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can change your plan at any time from your dashboard billing settings.' },
  { q: 'Is there a free trial?', a: 'Yes, our Free plan lets you explore neXa with no credit card required.' },
  { q: 'How do I cancel my subscription?', a: 'You can cancel anytime from your dashboard under Billing settings.' },
  { q: 'Do you offer refunds?', a: 'We offer a 14-day money-back guarantee on all paid plans.' },
];

const categories = [
  { icon: '🚀', title: 'Getting Started', desc: 'New to neXa? Start here.', href: '/docs' },
  { icon: '💳', title: 'Billing', desc: 'Plans, payments, and invoices.', href: '/docs' },
  { icon: '🤖', title: 'AI Tools', desc: 'Using neXa AI features.', href: '/docs' },
  { icon: '🌐', title: 'Web & Templates', desc: 'Building with neXa Web.', href: '/docs' },
  { icon: '⚡', title: 'Automation', desc: 'Setting up workflows.', href: '/docs' },
  { icon: '☁️', title: 'Cloud', desc: 'Deployment and infrastructure.', href: '/docs' },
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '64px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: '#fff', letterSpacing: '-1px', marginBottom: '16px',
          }}>How can we help?</h1>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for answers..."
            style={{
              width: '100%', background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)', padding: '14px 20px',
              color: '#fff', fontSize: '16px', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '64px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '24px', fontWeight: 700, color: '#fff',
          marginBottom: '32px', textAlign: 'center',
        }}>Browse by category</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '64px',
        }}>
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(16,185,129,0.4)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--color-border)';
                el.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{cat.icon}</div>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{cat.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '14px' }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{
          fontSize: '24px', fontWeight: 700, color: '#fff',
          marginBottom: '32px', textAlign: 'center',
        }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
            }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                width: '100%', background: 'none', border: 'none',
                padding: '20px 24px', color: '#fff', fontSize: '15px',
                fontWeight: 600, cursor: 'pointer', textAlign: 'left',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {faq.q}
                <span style={{ color: 'var(--color-primary)', fontSize: '20px' }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div style={{
                  padding: '0 24px 20px',
                  color: 'var(--color-muted)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '16px',
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          textAlign: 'center', marginTop: '64px',
          padding: '48px', background: 'var(--color-surface)',
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
        }}>
          <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
            Still need help?
          </h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '15px', marginBottom: '24px' }}>
            Our support team is here to help you.
          </p>
          <Link href="/contact" style={{
            background: 'var(--color-primary)', color: '#fff',
            textDecoration: 'none', fontSize: '15px', fontWeight: 600,
            padding: '12px 28px', borderRadius: 'var(--radius-sm)', display: 'inline-block',
          }}>Contact Support →</Link>
        </div>
      </section>
    </main>
  );
}
