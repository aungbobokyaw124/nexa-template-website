'use client';

import { useState } from 'react';
import Link from 'next/link';

const suggestions = [
  'Build a business website',
  'Automate my email workflow',
  'Generate landing page copy',
  'Create a SaaS dashboard',
];

const capabilities = [
  'Website generation',
  'Code assistance',
  'Business automation',
  'Content creation',
  'Research & analysis',
  'Digital strategy',
  'Workflow generation',
  'Technical assistance',
];

export default function AISection() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');
    setTimeout(() => {
      setLoading(false);
      setResponse(`I can help you with "${input}". Sign up to access the full neXa AI platform and get started instantly.`);
    }, 1500);
  };

  return (
    <section style={{
      padding: '100px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '64px',
        alignItems: 'center',
      }}>
        <div>
          <p style={{
            color: 'var(--color-primary)',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px',
          }}>neXa AI</p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: '20px',
            lineHeight: 1.15,
          }}>
            Your intelligent digital co-pilot.
          </h2>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '17px',
            lineHeight: 1.7,
            marginBottom: '32px',
          }}>
            neXa AI helps you build faster, automate smarter, and grow your business with artificial intelligence.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '40px',
          }}>
            {capabilities.map((cap) => (
              <div key={cap} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-muted)',
                fontSize: '14px',
              }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span>
                {cap}
              </div>
            ))}
          </div>
          <Link href="/products/ai" style={{
            background: 'var(--color-primary)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: 'var(--radius-sm)',
            display: 'inline-block',
          }}>
            Try neXa AI →
          </Link>
        </div>

        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              boxShadow: '0 0 8px rgba(16,185,129,0.6)',
            }} />
            <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>neXa AI</span>
            <span style={{ marginLeft: 'auto', color: 'var(--color-primary)', fontSize: '12px' }}>● Online</span>
          </div>

          <div style={{ padding: '24px 20px', minHeight: '200px' }}>
            {!response && !loading && (
              <div style={{ color: 'var(--color-muted)', fontSize: '15px', marginBottom: '20px' }}>
                What are you building today?
              </div>
            )}
            {loading && (
              <div style={{ marginBottom: '16px' }}>
                <div style={{ color: 'var(--color-muted)', fontSize: '13px', marginBottom: '12px' }}>
                  neXa AI is thinking...
                </div>
                {['Planning', 'Designing', 'Generating'].map((step) => (
                  <div key={step} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    marginBottom: '8px',
                  }}>
                    <span>→</span> {step}...
                  </div>
                ))}
              </div>
            )}
            {response && (
              <div style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                color: '#fff',
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}>
                {response}
              </div>
            )}
            {!loading && !response && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {suggestions.map((s) => (
                  <button key={s}
                    onClick={() => setInput(s)}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      color: 'var(--color-muted)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div style={{
            padding: '16px 20px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            gap: '10px',
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Ask neXa AI anything..."
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button onClick={handleSubmit} style={{
              background: 'var(--color-primary)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '10px 16px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
