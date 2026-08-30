'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', category: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '64px' }}>
      <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px',
          }}>Contact</p>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: '#fff', letterSpacing: '-1px', marginBottom: '16px',
          }}>Get in touch</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '18px' }}>
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        {!sent ? (
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{
                      color: 'var(--color-muted)', fontSize: '13px',
                      fontWeight: 500, display: 'block', marginBottom: '8px',
                    }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)', padding: '12px 14px',
                        color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Category */}
              <div>
                <label style={{
                  color: 'var(--color-muted)', fontSize: '13px',
                  fontWeight: 500, display: 'block', marginBottom: '8px',
                }}>Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={{
                    width: '100%', background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)', padding: '12px 14px',
                    color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
                  }}>
                  <option value="">Select category</option>
                  <option value="general">General</option>
                  <option value="support">Technical Support</option>
                  <option value="service">Service Request</option>
                  <option value="billing">Billing</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label style={{
                  color: 'var(--color-muted)', fontSize: '13px',
                  fontWeight: 500, display: 'block', marginBottom: '8px',
                }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)', padding: '12px 14px',
                    color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{
                  color: 'var(--color-muted)', fontSize: '13px',
                  fontWeight: 500, display: 'block', marginBottom: '8px',
                }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={6}
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)', padding: '12px 14px',
                    color: '#fff', fontSize: '14px', outline: 'none',
                    boxSizing: 'border-box', resize: 'vertical',
                  }}
                />
              </div>

              <button onClick={() => setSent(true)} style={{
                background: 'var(--color-primary)', border: 'none',
                borderRadius: 'var(--radius-sm)', padding: '14px',
                color: '#fff', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
              }}>
                Send Message
              </button>
            </div>
          </div>
        ) : (
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 40px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
            <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
              Message sent!
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16px', lineHeight: 1.6 }}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
