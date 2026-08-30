'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const workflows = [
  { label: 'Form → Email' },
  { label: 'Order → Database' },
  { label: 'Customer → CRM' },
  { label: 'AI → Content' },
  { label: 'Payment → Notification' },
  { label: 'Website → Analytics' },
];

const steps = [
  { icon: '⚡', label: 'Trigger' },
  { icon: '🤖', label: 'AI Processing' },
  { icon: '⚙️', label: 'Automation' },
  { icon: '🗄️', label: 'Database' },
  { icon: '🔔', label: 'Notification' },
  { icon: '✅', label: 'Result' },
];

export default function Automation() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section style={{
      padding: '100px 24px',
      background: isDark ? 'var(--color-surface)' : '#FFFFFF',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px', alignItems: 'center',
        }}>
          <div>
            <p style={{
              color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px',
            }}>neXa Automation</p>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
              color: 'var(--color-text)', letterSpacing: '-1px',
              marginBottom: '20px', lineHeight: 1.15,
            }}>Automate your business workflows.</h2>
            <p style={{
              color: 'var(--color-muted)', fontSize: '17px',
              lineHeight: 1.7, marginBottom: '32px',
            }}>
              Connect your tools, automate repetitive tasks, and focus on what matters most.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '10px', marginBottom: '40px',
            }}>
              {workflows.map((w) => (
                <div key={w.label} style={{
                  background: isDark ? 'var(--color-bg)' : '#F8FAFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 14px', fontSize: '13px',
                  color: 'var(--color-muted)',
                }}>{w.label}</div>
              ))}
            </div>
            <Link href="/products/automation" style={{
              background: 'var(--color-primary)', color: '#fff',
              textDecoration: 'none', fontSize: '15px', fontWeight: 600,
              padding: '12px 28px', borderRadius: 'var(--radius-sm)', display: 'inline-block',
            }}>Automate with neXa →</Link>
          </div>

          <div style={{
            background: isDark ? 'var(--color-bg)' : '#F8FAFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', padding: '40px 32px',
            boxShadow: 'var(--shadow-md)',
          }}>
            <p style={{
              color: 'var(--color-muted)', fontSize: '12px', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '2px',
              marginBottom: '32px', textAlign: 'center',
            }}>Workflow Example</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {steps.map((step, i) => (
                <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    background: i === 0 ? 'var(--color-primary)' : 'var(--color-card)',
                    border: `1px solid ${i === 0 ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)', padding: '14px 28px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    minWidth: '180px', justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <span style={{ fontSize: '18px' }}>{step.icon}</span>
                    <span style={{
                      color: i === 0 ? '#fff' : 'var(--color-muted)',
                      fontSize: '14px', fontWeight: 600,
                    }}>{step.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: '2px', height: '24px',
                      background: 'var(--color-border)',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute', top: '4px', left: '-5px',
                        color: 'var(--color-primary)', fontSize: '12px',
                      }}>↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
