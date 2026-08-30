'use client';

import { useState } from 'react';

const sidebar = [
  { title: 'Getting Started', items: ['Introduction', 'Quick Start', 'Installation', 'Configuration'] },
  { title: 'AI', items: ['neXa AI Overview', 'Chat Assistant', 'Content Generation', 'Code Assistant'] },
  { title: 'Web', items: ['Web Overview', 'Templates', 'Components', 'Deployment'] },
  { title: 'Automation', items: ['Automation Overview', 'Workflows', 'Triggers', 'Actions'] },
  { title: 'Cloud', items: ['Cloud Overview', 'Deployment', 'Storage', 'APIs'] },
  { title: 'Account', items: ['Profile', 'Billing', 'Security', 'Notifications'] },
];

export default function Docs() {
  const [active, setActive] = useState('Introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '64px' }}>
      {/* Mobile Sidebar Toggle */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '16px 24px', borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
          background: 'none', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-sm)', padding: '8px 14px',
          color: '#fff', fontSize: '13px', cursor: 'pointer',
        }}>
          {sidebarOpen ? '✕ Close' : '☰ Menu'}
        </button>
        <span style={{ color: 'var(--color-muted)', fontSize: '13px' }}>
          Docs → <span style={{ color: 'var(--color-primary)' }}>{active}</span>
        </span>
      </div>

      <div style={{ display: 'flex', position: 'relative' }}>
        {/* Sidebar */}
        <aside style={{
          width: sidebarOpen ? '260px' : '0',
          minHeight: 'calc(100vh - 64px)',
          background: 'var(--color-surface)',
          borderRight: '1px solid var(--color-border)',
          padding: sidebarOpen ? '24px 16px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s',
          flexShrink: 0,
          position: 'sticky',
          top: '64px',
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
        }}>
          <input
            placeholder="Search docs..."
            style={{
              width: '100%', background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)', padding: '10px 14px',
              color: '#fff', fontSize: '13px', outline: 'none',
              boxSizing: 'border-box', marginBottom: '24px',
            }}
          />
          {sidebar.map((group) => (
            <div key={group.title} style={{ marginBottom: '24px' }}>
              <p style={{
                color: '#fff', fontSize: '12px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '1px',
                marginBottom: '8px', paddingLeft: '12px',
              }}>{group.title}</p>
              {group.items.map((item) => (
                <button key={item} onClick={() => { setActive(item); setSidebarOpen(false); }} style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: active === item ? 'rgba(16,185,129,0.1)' : 'none',
                  border: 'none', borderRadius: 'var(--radius-sm)',
                  padding: '8px 12px',
                  color: active === item ? 'var(--color-primary)' : 'var(--color-muted)',
                  fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s',
                  borderLeft: active === item ? '2px solid var(--color-primary)' : '2px solid transparent',
                }}>{item}</button>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div style={{ flex: 1, padding: '40px 24px', maxWidth: '100%', overflowX: 'hidden' }}>
          <h1 style={{
            fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 800,
            color: '#fff', letterSpacing: '-1px', marginBottom: '16px',
          }}>{active}</h1>

          <p style={{
            color: 'var(--color-muted)', fontSize: '16px',
            lineHeight: 1.8, marginBottom: '32px',
          }}>
            Welcome to the neXa documentation. This guide will help you understand and use neXa's powerful platform features.
          </p>

          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '24px', marginBottom: '32px',
          }}>
            <p style={{ color: 'var(--color-muted)', fontSize: '12px', marginBottom: '12px' }}>Quick Start</p>
            <code style={{ color: 'var(--color-primary)', fontSize: '14px', fontFamily: 'monospace' }}>
              npm install nexa-sdk
            </code>
          </div>

          <h2 style={{
            fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '16px',
          }}>Overview</h2>
          <p style={{
            color: 'var(--color-muted)', fontSize: '15px',
            lineHeight: 1.8, marginBottom: '24px',
          }}>
            neXa is a comprehensive technology platform that combines AI, web development, automation, and cloud services into one unified ecosystem.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Key Features</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            {[
              'AI-powered assistants and tools',
              'Website templates and components',
              'Automated business workflows',
              'Cloud deployment infrastructure',
              'Digital product marketplace',
              'Technology education platform',
            ].map((f) => (
              <div key={f} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                color: 'var(--color-muted)', fontSize: '15px',
              }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span>{f}
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            borderTop: '1px solid var(--color-border)', paddingTop: '32px',
          }}>
            <button style={{
              background: 'var(--color-surface)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)', padding: '10px 20px',
              color: 'var(--color-muted)', fontSize: '14px', cursor: 'pointer',
            }}>← Previous</button>
            <button style={{
              background: 'var(--color-primary)', border: 'none',
              borderRadius: 'var(--radius-sm)', padding: '10px 20px',
              color: '#fff', fontSize: '14px', cursor: 'pointer', fontWeight: 600,
            }}>Next →</button>
          </div>
        </div>
      </div>
    </main>
  );
}
