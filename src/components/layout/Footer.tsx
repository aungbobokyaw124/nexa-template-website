'use client';

import Link from 'next/link';

const links = {
  Products: [
    { label: 'AI', href: '/products/ai' },
    { label: 'Web', href: '/products/web' },
    { label: 'Automation', href: '/products/automation' },
    { label: 'Cloud', href: '/products/cloud' },
    { label: 'Marketplace', href: '/marketplace' },
  ],
  Solutions: [
    { label: 'For Business', href: '/solutions/business' },
    { label: 'For Creators', href: '/solutions/creators' },
    { label: 'For Developers', href: '/solutions/developers' },
    { label: 'For Agencies', href: '/solutions/agencies' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Guides', href: '/docs/guides' },
    { label: 'Academy', href: '/academy' },
    { label: 'Support', href: '/support' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '64px 24px 32px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '40px',
          marginBottom: '64px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
              display: 'block',
              marginBottom: '16px',
            }}>
              ne<span style={{ color: 'var(--color-primary)' }}>X</span>a
            </Link>
            <p style={{
              color: 'var(--color-muted)',
              fontSize: '14px',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}>
              Build. Automate. Grow.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'YouTube', href: '#' },
              ].map((s) => (
                <Link key={s.label} href={s.href} style={{
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  padding: '6px 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '16px',
              }}>{group}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item) => (
                  <Link key={item.href} href={item.href} style={{
                    color: 'var(--color-muted)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '13px',
          }}>
            © {new Date().getFullYear()} neXa. All rights reserved.
          </p>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '13px',
          }}>
            Built with ❤️ using neXa
          </p>
        </div>
      </div>
    </footer>
  );
}
