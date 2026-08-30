'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const menus = {
    Products: [
      { label: 'AI', href: '/products/ai' },
      { label: 'Web', href: '/products/web' },
      { label: 'Automation', href: '/products/automation' },
      { label: 'Cloud', href: '/products/cloud' },
      { label: 'Templates', href: '/marketplace/templates' },
      { label: 'Education', href: '/academy' },
    ],
    Solutions: [
      { label: 'For Entrepreneurs', href: '/solutions/entrepreneurs' },
      { label: 'For Small Business', href: '/solutions/business' },
      { label: 'For Creators', href: '/solutions/creators' },
      { label: 'For Developers', href: '/solutions/developers' },
      { label: 'For Agencies', href: '/solutions/agencies' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
      { label: 'Community', href: '/community' },
    ],
    Marketplace: [
      { label: 'Templates', href: '/marketplace/templates' },
      { label: 'Digital Products', href: '/marketplace' },
      { label: 'Services', href: '/services' },
      { label: 'Courses', href: '/academy' },
    ],
  };

  const isDark = theme === 'dark';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'var(--color-nav)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
        height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="neXa"
            width={100}
            height={33}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {Object.entries(menus).map(([name, items]) => (
            <div key={name} style={{ position: 'relative' }}
              onMouseEnter={() => setActiveMenu(name)}
              onMouseLeave={() => setActiveMenu(null)}>
              <button style={{
                background: 'none', border: 'none',
                color: activeMenu === name ? 'var(--color-primary)' : 'var(--color-muted)',
                fontSize: '14px', fontWeight: 500, padding: '8px 12px',
                cursor: 'pointer', borderRadius: 'var(--radius-sm)', transition: 'color 0.2s',
              }}>
                {name} ▾
              </button>
              {activeMenu === name && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)', padding: '8px',
                  minWidth: '200px', boxShadow: 'var(--shadow-lg)',
                }}>
                  {items.map((item) => (
                    <Link key={item.href} href={item.href} style={{
                      display: 'block', padding: '10px 16px',
                      color: 'var(--color-muted)', textDecoration: 'none',
                      fontSize: '14px', borderRadius: 'var(--radius-sm)', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.target as HTMLElement).style.color = 'var(--color-primary)';
                      (e.target as HTMLElement).style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(37,99,235,0.05)';
                    }}
                    onMouseLeave={e => {
                      (e.target as HTMLElement).style.color = 'var(--color-muted)';
                      (e.target as HTMLElement).style.background = 'none';
                    }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" style={{
            color: 'var(--color-muted)', textDecoration: 'none',
            fontSize: '14px', fontWeight: 500, padding: '8px 12px',
          }}>Pricing</Link>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button onClick={toggleTheme} style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 10px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.2s',
          }}>
            {isDark ? '☀️' : '🌙'}
          </button>

          <Link href="/login" style={{
            color: 'var(--color-muted)', textDecoration: 'none',
            fontSize: '14px', fontWeight: 500,
          }}>Log in</Link>

          <Link href="/signup" style={{
            background: 'var(--color-primary)', color: '#fff',
            textDecoration: 'none', fontSize: '14px', fontWeight: 600,
            padding: '8px 18px', borderRadius: 'var(--radius-sm)',
          }}>Get Started</Link>

          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            display: 'none', background: 'none', border: 'none',
            color: 'var(--color-text)', fontSize: '24px', cursor: 'pointer',
          }} className="mobile-menu-btn">
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--color-card)',
          borderTop: '1px solid var(--color-border)',
          padding: '16px 24px', maxHeight: '80vh', overflowY: 'auto',
        }}>
          {Object.entries(menus).map(([name, items]) => (
            <div key={name} style={{ marginBottom: '16px' }}>
              <p style={{
                color: 'var(--color-muted)', fontSize: '12px', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px',
              }}>{name}</p>
              {items.map((item) => (
                <Link key={item.href} href={item.href}
                  onClick={() => setMobileOpen(false)} style={{
                    display: 'block', color: 'var(--color-text)',
                    textDecoration: 'none', fontSize: '15px', padding: '8px 0',
                    borderBottom: '1px solid var(--color-border)',
                  }}>{item.label}</Link>
              ))}
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <Link href="/login" style={{
              color: 'var(--color-text)', textDecoration: 'none', fontSize: '15px',
              textAlign: 'center', padding: '12px',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)',
            }}>Log in</Link>
            <Link href="/signup" style={{
              background: 'var(--color-primary)', color: '#fff',
              textDecoration: 'none', fontSize: '15px', textAlign: 'center',
              padding: '12px', borderRadius: 'var(--radius-sm)', fontWeight: 600,
            }}>Get Started</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
