'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDark
              ? `rgba(37,99,235,${0.15 * (1 - dist / 120)})`
              : `rgba(37,99,235,${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(a.x, a.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(37,99,235,0.6)' : 'rgba(37,99,235,0.3)';
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [isDark]);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '64px',
      background: isDark
        ? 'var(--color-bg)'
        : 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #EFF6FF 100%)',
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%', opacity: 0.6,
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        background: isDark
          ? 'radial-gradient(ellipse at center, rgba(37,99,235,0.05) 0%, transparent 70%)'
          : 'radial-gradient(ellipse at center, rgba(37,99,235,0.03) 0%, transparent 70%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center', maxWidth: '800px', padding: '0 24px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: isDark ? 'rgba(37,99,235,0.1)' : 'rgba(37,99,235,0.08)',
          border: '1px solid rgba(37,99,235,0.3)',
          borderRadius: '100px', padding: '6px 16px', marginBottom: '32px',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--color-primary)', display: 'inline-block',
          }} />
          <span style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 500 }}>
            AI + Web + Automation + Cloud
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-2px', marginBottom: '24px',
          color: 'var(--color-text)',
        }}>
          Build.{' '}
          <span style={{ color: 'var(--color-primary)' }}>Automate.</span>
          {' '}Grow.
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: 'var(--color-muted)', lineHeight: 1.7,
          marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px',
        }}>
          One intelligent platform for building digital products, automating workflows, launching websites, and growing your business.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{
            background: 'var(--color-primary)', color: '#fff',
            textDecoration: 'none', fontSize: '16px', fontWeight: 600,
            padding: '14px 32px', borderRadius: 'var(--radius-sm)', display: 'inline-block',
          }}>Get Started →</Link>
          <Link href="/products" style={{
            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(37,99,235,0.06)',
            color: 'var(--color-text)', textDecoration: 'none',
            fontSize: '16px', fontWeight: 500, padding: '14px 32px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)', display: 'inline-block',
          }}>Explore neXa</Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center',
          marginTop: '64px', flexWrap: 'wrap',
        }}>
          {[
            { value: '10+', label: 'Platform Tools' },
            { value: '500+', label: 'Templates' },
            { value: '24/7', label: 'AI Assistant' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '28px', fontWeight: 700,
                color: 'var(--color-primary)',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '13px', color: 'var(--color-muted)', marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
