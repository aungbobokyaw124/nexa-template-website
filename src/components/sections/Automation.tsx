'use client';

import Link from 'next/link';

const workflows = [
  { from: '📝 Form', to: '📧 Email', label: 'Form → Email' },
  { from: '🛒 Order', to: '🗄️ Database', label: 'Order → Database' },
  { from: '👤 Customer', to: '📊 CRM', label: 'Customer → CRM' },
  { from: '🤖 AI', to: '📄 Content', label: 'AI → Content' },
  { from: '💳 Payment', to: '🔔 Notification', label: 'Payment → Notification' },
  { from: '🌐 Website', to: '📈 Analytics', label: 'Website → Analytics' },
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
  return (
    <section style={{
      padding: '100px 24px',
      background: 'var(--color-surface)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <p style={{
              color: 'var(--color-primary)',
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}>neXa Automation</p>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-1px',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}>
              Automate your business workflows.
            </h2>
            <p style={{
              color: 'var(--color-muted)',
              fontSize: '17px',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Connect your tools, automate repetitive tasks, and focus on what matters most — growing your business.
            </p>

            {/* Workflow examples */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              marginBottom: '40px',
            }}>
              {workflows.map((w) => (
                <div key={w.label} style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 14px',
                  fontSize: '13px',
                  color: 'var(--color-muted)',
                }}>
                  {w.label}
                </div>
              ))}
            </div>

            <Link href="/products/automation" style={{
              background: 'var(--color-primary)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: 'var(--radius-sm)',
              display: 'inline-block',
            }}>
              Automate with neXa →
            </Link>
          </div>

          {/* Right - Workflow Visual */}
          <div style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px 32px',
          }}>
            <p style={{
              color: 'var(--color-muted)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '32px',
              textAlign: 'center',
            }}>Workflow Example</p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0',
            }}>
              {steps.map((step, i) => (
                <div key={step.label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <div style={{
                    background: i === 0 ? 'var(--color-primary)' : 'var(--color-surface)',
                    border: `1px solid ${i === 0 ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: '180px',
                    justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '18px' }}>{step.icon}</span>
                    <span style={{
                      color: i === 0 ? '#fff' : 'var(--color-muted)',
                      fontSize: '14px',
                      fontWeight: 600,
                    }}>{step.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: '2px',
                      height: '24px',
                      background: 'var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        color: 'var(--color-primary)',
                        fontSize: '12px',
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
