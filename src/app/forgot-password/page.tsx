'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link href="/" style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}>
            ne<span style={{ color: 'var(--color-primary)' }}>X</span>a
          </Link>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '15px',
            marginTop: '8px',
          }}>Reset your password</p>
        </div>

        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
        }}>
          {!sent ? (
            <>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Enter your email and we'll send you a reset link.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{
                    color: 'var(--color-muted)',
                    fontSize: '13px',
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: '8px',
                  }}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 14px',
                      color: '#fff',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <button onClick={() => setSent(true)} style={{
                  width: '100%',
                  background: 'var(--color-primary)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: '13px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                  Send Reset Link
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
              <h3 style={{
                color: '#fff',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '12px',
              }}>Check your email</h3>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                We sent a reset link to <strong style={{ color: '#fff' }}>{email}</strong>
              </p>
              <button onClick={() => setSent(false)} style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 24px',
                color: 'var(--color-muted)',
                fontSize: '14px',
                cursor: 'pointer',
              }}>
                Try another email
              </button>
            </div>
          )}
        </div>

        <p style={{
          textAlign: 'center',
          color: 'var(--color-muted)',
          fontSize: '14px',
          marginTop: '24px',
        }}>
          <Link href="/login" style={{
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontWeight: 500,
          }}>← Back to login</Link>
        </p>
      </div>
    </main>
  );
}
