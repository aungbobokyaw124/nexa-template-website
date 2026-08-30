'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const features = [
  { icon: '🤖', title: 'neXa AI', desc: 'AI-powered assistants, content generation, and business automation tools.', href: '/products/ai' },
  { icon: '🌐', title: 'neXa Web', desc: 'Website development, templates, components, and deployment tools.', href: '/products/web' },
  { icon: '⚡', title: 'neXa Automation', desc: 'Automate repetitive business workflows and connect your tools.', href: '/products/automation' },
  { icon: '☁️', title: 'neXa Cloud', desc: 'Cloud deployment, APIs, storage, and developer infrastructure.', href: '/products/cloud' },
  { icon: '🛍️', title: 'neXa Marketplace', desc: 'Digital products, templates, tools, and professional services.', href: '/marketplace' },
  { icon: '🎓', title: 'neXa Academy', desc: 'Technology learning, practical courses, and skill development.', href: '/academy' },
];

export default function PlatformIntro() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section style={{
      padding: '100px 24px',
      background: isDark ? 'var(--color-bg)' : '#F8FAFF',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px',
          }}>The Platform</p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: 'var(--color-text)', letterSpacing: '-1px', marginBottom: '16px',
          }}>
            Everything you need to build what's next.
          </h2>
          <p style={{
            color: 'var(--color-muted)', fontSize: '18px',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.6,
          }}>
            neXa combines AI, Web, Automation, Cloud, and Education into one powerful ecosystem.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {features.map((f) => (
            <Link key={f.title} href={f.href} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '32px', transition: 'all 0.2s', cursor: 'pointer', height: '100%',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(37,99,235,0.4)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 32px rgba(37,99,235,0.1)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--color-border)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'var(--shadow-sm)';
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{
                  fontSize: '18px', fontWeight: 700,
                  color: 'var(--color-text)', marginBottom: '10px',
                }}>{f.title}</h3>
                <p style={{
                  color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.6,
                }}>{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
