'use client';

import { useState } from 'react';

const courses = [
  {
    title: 'AI Fundamentals for Business',
    category: 'AI',
    level: 'Beginner',
    duration: '4 hours',
    lessons: 12,
    price: '$49',
    icon: '🤖',
    rating: 4.9,
    students: 1240,
  },
  {
    title: 'Build Modern Websites with Next.js',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '8 hours',
    lessons: 24,
    price: '$79',
    icon: '🌐',
    rating: 4.8,
    students: 890,
  },
  {
    title: 'Business Automation Masterclass',
    category: 'Automation',
    level: 'Intermediate',
    duration: '6 hours',
    lessons: 18,
    price: '$69',
    icon: '⚡',
    rating: 4.7,
    students: 567,
  },
  {
    title: 'Cloud Deployment for Beginners',
    category: 'Cloud',
    level: 'Beginner',
    duration: '5 hours',
    lessons: 15,
    price: '$59',
    icon: '☁️',
    rating: 4.6,
    students: 423,
  },
  {
    title: 'Python for Digital Business',
    category: 'Programming',
    level: 'Beginner',
    duration: '10 hours',
    lessons: 30,
    price: '$89',
    icon: '🐍',
    rating: 4.8,
    students: 1560,
  },
  {
    title: 'Digital Business Strategy',
    category: 'Digital Business',
    level: 'Advanced',
    duration: '7 hours',
    lessons: 21,
    price: '$99',
    icon: '📊',
    rating: 4.9,
    students: 334,
  },
];

const categories = ['All', 'AI', 'Web Development', 'Automation', 'Cloud', 'Programming', 'Digital Business'];

const levelColors: Record<string, string> = {
  Beginner: '#10B981',
  Intermediate: '#3B82F6',
  Advanced: '#8B5CF6',
};

export default function Academy() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = courses.filter(c =>
    activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '64px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 24px 60px', textAlign: 'center',
        background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{
            color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px',
          }}>neXa Academy</p>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: '#fff', letterSpacing: '-1px', marginBottom: '16px',
          }}>Learn by building.</h1>
          <p style={{
            color: 'var(--color-muted)', fontSize: '18px',
            lineHeight: 1.6, marginBottom: '32px',
          }}>
            Practical technology courses to help you build, automate, and grow your digital business.
          </p>
          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { value: '50+', label: 'Courses' },
              { value: '5K+', label: 'Students' },
              { value: '4.8★', label: 'Rating' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-primary)' }}>{s.value}</div>
                <div style={{ color: 'var(--color-muted)', fontSize: '13px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '100px', padding: '8px 18px',
              color: activeCategory === cat ? '#fff' : 'var(--color-muted)',
              fontSize: '13px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
            }}>{cat}</button>
          ))}
        </div>

        {/* Courses Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((course) => (
            <div key={course.title} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(16,185,129,0.4)';
              el.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--color-border)';
              el.style.transform = 'translateY(0)';
            }}>
              {/* Image */}
              <div style={{
                height: '140px', background: 'var(--color-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '56px', borderBottom: '1px solid var(--color-border)',
              }}>
                {course.icon}
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '8px', marginBottom: '12px',
                }}>
                  <span style={{
                    background: levelColors[course.level] + '15',
                    color: levelColors[course.level],
                    fontSize: '11px', fontWeight: 600,
                    padding: '3px 10px', borderRadius: '100px',
                  }}>{course.level}</span>
                  <span style={{ color: 'var(--color-muted)', fontSize: '12px' }}>
                    {course.duration}
                  </span>
                  <span style={{ color: 'var(--color-muted)', fontSize: '12px' }}>
                    · {course.lessons} lessons
                  </span>
                </div>

                <h3 style={{
                  color: '#fff', fontSize: '16px', fontWeight: 700,
                  marginBottom: '12px', lineHeight: 1.4,
                }}>{course.title}</h3>

                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '8px', marginBottom: '20px',
                }}>
                  <span style={{ color: '#F59E0B', fontSize: '13px' }}>★ {course.rating}</span>
                  <span style={{ color: 'var(--color-muted)', fontSize: '12px' }}>
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    color: 'var(--color-primary)', fontSize: '20px', fontWeight: 700,
                  }}>{course.price}</span>
                  <button style={{
                    background: 'var(--color-primary)', border: 'none',
                    borderRadius: 'var(--radius-sm)', padding: '10px 20px',
                    color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                  }}>Start Learning →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
