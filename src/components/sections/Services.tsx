'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    icon: '🌐', title: 'Website Development',
    desc: 'Professional websites built with modern technologies, optimized for performance and conversion.',
    benefits: ['Mobile-first design', 'SEO optimized', 'Fast loading', 'CMS integration'],
    price: 'From $299',
  },
  {
    icon: '🤖', title: 'AI Integration',
    desc: 'Integrate powerful AI capabilities into your existing business workflows and applications.',
    benefits: ['Custom AI models', 'API integration', 'Automation setup', 'Training & support'],
    price: 'From $499',
  },
  {
    icon: '⚡', title: 'Automation',
    desc: 'Automate repetitive tasks and connect your tools to save time and reduce errors.',
    benefits: ['Workflow design', 'Tool integration', 'Testing', 'Monitoring'],
    price: 'From $199',
  },
  {
    icon: '☁️', title: 'Cloud Deployment',
    desc: 'Deploy your applications to the cloud with scalable, reliable infrastructure.',
    benefits: ['Auto scaling', 'SSL certificates', 'CDN setup', '99.9% uptime'],
    price: 'From $149',
  },
  {
    icon: '🔗', title: 'API Integration',
    desc: 'Connect third-party services and build custom APIs for your business needs.',
    benefits: ['REST & GraphQL', 'Authentication', 'Documentation', 'Testing'],
    price: 'From $249',
  },
  {
    icon: '📊', title: 'Digital Strategy',
    desc: 'Get expert guidance on your digital transformation and technology roadmap.',
    benefits: ['Tech audit', 'Roadmap planning', 'Tool selection', 'Implementation'],
    price: 'From $99',
  },
];

export default function Services() {
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
          }}>Services</p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: 'var(--color-text)', letterSpacing: '-1px', marginBottom: '16px',
          }}>Technology services for real businesses.</h2>
          <p style={{
            color: 'var(--color-muted)', fontSize: '18px', maxWidth: '520px', margin: '0 auto',
          }}>Professional services to help you build, launch, and grow your digital presence.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px', marginBottom: '48px',
        }}>
          {services.map((s) => (
            <div key={s.title} style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)', padding: '32px',
              transition: 'all 0.2s', boxShadow: 'var(--shadow-sm)',
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
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{s.icon}</div>
              <h3 style={{
                fontSize: '18px', fontWeight: 700,
                color: 'var(--color-text)', marginBottom: '10px',
              }}>{s.title}</h3>
              <p style={{
                color: 'var(--color-muted)', fontSize: '14px',
                lineHeight: 1.6, marginBottom: '20px',
              }}>{s.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {s.benefits.map((b) => (
                  <div key={b} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    color: 'var(--color-muted)', fontSize: '13px',
                  }}>
                    <span style={{ color: 'var(--color-primary)' }}>✓</span>{b}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '15px', fontWeight: 700 }}>{s.price}</span>
                <Link href="/contact" style={{
                  color: 'var(--color-text)', textDecoration: 'none', fontSize: '13px',
                  fontWeight: 600, padding: '8px 16px',
                  background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(37,99,235,0.06)',
                  borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
                }}>Request →</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/contact" style={{
            background: 'var(--color-primary)', color: '#fff',
            textDecoration: 'none', fontSize: '16px', fontWeight: 600,
            padding: '14px 36px', borderRadius: 'var(--radius-sm)', display: 'inline-block',
          }}>Request a Service →</Link>
        </div>
      </div>
    </section>
  );
}
