'use client';

import { useState } from 'react';
import Link from 'next/link';

const sidebarLinks = [
  { icon: '🏠', label: 'Overview', href: '/dashboard' },
  { icon: '🤖', label: 'AI', href: '/dashboard/ai' },
  { icon: '📁', label: 'Projects', href: '/dashboard/projects' },
  { icon: '🛍️', label: 'Orders', href: '/dashboard/orders' },
  { icon: '⬇️', label: 'Downloads', href: '/dashboard/downloads' },
  { icon: '🎓', label: 'Courses', href: '/dashboard/courses' },
  { icon: '🔧', label: 'Services', href: '/dashboard/services' },
  { icon: '⚡', label: 'Automation', href: '/dashboard/automation' },
  { icon: '☁️', label: 'Cloud', href: '/dashboard/cloud' },
  { icon: '💳', label: 'Billing', href: '/dashboard/billing' },
  { icon: '⚙️', label: 'Settings', href: '/dashboard/settings' },
  { icon: '🎧', label: 'Support', href: '/dashboard/support' },
];

const stats = [
  { label: 'Projects', value: '3', icon: '📁', change: '+1 this month' },
  { label: 'AI Usage', value: '247', icon: '🤖', change: 'requests this month' },
  { label: 'Orders', value: '2', icon: '🛍️', change: 'total orders' },
  { label: 'Courses', value: '1', icon: '🎓', change: 'in progress' },
];

const recentActivity = [
  { icon: '📁', text: 'Created project "My Website"', time: '2h ago' },
  { icon: '🤖', text: 'Used neXa AI for content generation', time: '5h ago' },
  { icon: '🛍️', text: 'Purchased Pro Template', time: '1d ago' },
  { icon: '🎓', text: 'Started Web Development course', time: '2d ago' },
  { icon: '💳', text: 'Upgraded to Pro plan', time: '3d ago' },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)',
        padding: '24px 16px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 50,
        overflowY: 'auto',
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(0)',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#fff',
          textDecoration: 'none',
          display: 'block',
          marginBottom: '32px',
          paddingLeft: '8px',
        }}>
          ne<span style={{ color: 'var(--color-primary)' }}>X</span>a
        </Link>

        {/* Nav Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {sidebarLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              color: link.href === '/dashboard' ? '#fff' : 'var(--color-muted)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: link.href === '/dashboard' ? 600 : 400,
              background: link.href === '/dashboard' ? 'rgba(16,185,129,0.1)' : 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              if (link.href !== '/dashboard') {
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.color = '#fff';
              }
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              if (link.href !== '/dashboard') {
                el.style.background = 'none';
                el.style.color = 'var(--color-muted)';
              }
            }}>
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '16px',
          right: '16px',
          padding: '12px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-sm)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
            }}>A</div>
            <div>
              <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Aung Bo Bo</p>
              <p style={{ color: 'var(--color-muted)', fontSize: '11px' }}>Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        marginLeft: '240px',
        flex: 1,
        padding: '32px',
        maxWidth: 'calc(100vw - 240px)',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '4px',
            }}>Welcome back 👋</h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '14px' }}>
              Here's what's happening with your neXa account.
            </p>
          </div>
          <Link href="/dashboard/projects" style={{
            background: 'var(--color-primary)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: 'var(--radius-sm)',
          }}>
            + New Project
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '32px',
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}>
                <span style={{ color: 'var(--color-muted)', fontSize: '14px' }}>{stat.label}</span>
                <span style={{ fontSize: '20px' }}>{stat.icon}</span>
              </div>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '4px',
              }}>{stat.value}</div>
              <div style={{
                color: 'var(--color-muted)',
                fontSize: '12px',
              }}>{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '20px',
          }}>Recent Activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {recentActivity.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 0',
                borderBottom: i < recentActivity.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}>
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#fff', fontSize: '14px' }}>{item.text}</p>
                </div>
                <span style={{ color: 'var(--color-muted)', fontSize: '12px', whiteSpace: 'nowrap' }}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
