'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
      }}>
        {/* Logo */}
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
          }}>Welcome back</p>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
        }}>
          {/* Google Login */}
          <button style={{
            width: '100%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '12px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'}>
            <span>G</span> Continue with Google
          </button>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ color: 'var(--color-muted)', fontSize: '13px' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          </div>

          {/* Form */}
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
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}>
                <label style={{
                  color: 'var(--color-muted)',
                  fontSize: '13px',
                  fontWeight: 500,
                }}>Password</label>
                <Link href="/forgot-password" style={{
                  color: 'var(--color-primary)',
                  fontSize: '13px',
                  textDecoration: 'none',
                }}>Forgot?</Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
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

            <button style={{
              width: '100%',
              background: 'var(--color-primary)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '13px',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '8px',
            }}>
              Log in
            </button>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          color: 'var(--color-muted)',
          fontSize: '14px',
          marginTop: '24px',
        }}>
          Don't have an account?{' '}
          <Link href="/signup" style={{
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontWeight: 500,
          }}>Sign up</Link>
        </p>
      </div>
    </main>
  );
}
