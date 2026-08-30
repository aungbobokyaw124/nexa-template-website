'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const products = [
  { tag: 'AI', title: 'neXa AI', desc: 'AI-powered assistants and productivity tools to supercharge your workflow.', cta: 'Explore AI', href: '/products/ai', color: '#2563EB' },
  { tag: 'Web', title: 'neXa Web', desc: 'Website development, templates, components, and tools for your digital presence.', cta: 'Build with neXa', href: '/products/web', color: '#0EA5E9' },
  { tag: 'Automation', title: 'neXa Automation', desc: 'Automate repetitive business workflows and connect your tools seamlessly.', cta: 'Explore Automation', href: '/products/automation', color: '#8B5CF6' },
  { tag: 'Cloud', title: 'neXa Cloud', desc: 'Cloud deployment, APIs, storage, infrastructure, and developer tools.', cta: 'Explore Cloud', href: '/products/cloud', color: '#F59E0B' },
  { tag: 'Education', title: 'neXa Academy', desc: 'Technology learning and practical courses to grow your skills.', cta: 'Start Learning', href: '/academy', color: '#EC4899' },
  { tag: 'Marketplace', title: 'neXa Marketplace', desc: 'Digital products, templates, tools, and services for your business.', cta: 'Explore Marketplace', href: '/marketplace', color: '#14B8A6' },
];

export default function ProductEcosystem() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section style={{
      padding: '100px 24px',
      background: isDark ? 'var(--color-surface)' : '#FFFFFF',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px',
          }}>Product Ecosystem</p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: 'var(--color-text)', letterSpacing: '-1px', marginBottom: '16px',
          }}>Power your digital work with neXa</h2>
          <p style={{
            color: 'var(--color-muted)', fontSize: '18px',
            maxWidth: '520px', margin: '0 auto', lineHeight: 1.6,
          }}>
            A complete ecosystem of tools built to work together seamlessly.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {products.map((p) => (
            <div key={p.title} style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '36px',
              display: 'flex', flexDirection: 'column', gap: '16px',
              transition: 'all 0.2s',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = p.color + '50';
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = `0 8px 32px ${p.color}15`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--color-border)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'var(--shadow-sm)';
            }}>
              <span style={{
                display: 'inline-block',
                background: p.color + '15',
                color: p.color, fontSize: '12px', fontWeight: 600,
                padding: '4px 12px', borderRadius: '100px', alignSelf: 'flex-start',
              }}>{p.tag}</span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>{p.title}</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '15px', lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
              <Link href={p.href} style={{
                color: p.color, textDecoration: 'none', fontSize: '14px',
                fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px',
              }}>{p.cta} →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
