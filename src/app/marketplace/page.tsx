'use client';

import { useState } from 'react';

const products = [
  {
    title: 'Business Pro Template',
    category: 'Business',
    price: '$49',
    rating: 4.9,
    reviews: 128,
    icon: '🏢',
    badge: 'Featured',
  },
  {
    title: 'SaaS Dashboard UI Kit',
    category: 'SaaS',
    price: '$79',
    rating: 4.8,
    reviews: 94,
    icon: '📊',
    badge: 'Popular',
  },
  {
    title: 'AI Landing Page',
    category: 'AI',
    price: '$39',
    rating: 4.7,
    reviews: 67,
    icon: '🤖',
    badge: 'New',
  },
  {
    title: 'Portfolio Template',
    category: 'Portfolio',
    price: '$29',
    rating: 4.6,
    reviews: 213,
    icon: '🎨',
    badge: null,
  },
  {
    title: 'E-Commerce Starter',
    category: 'E-commerce',
    price: '$99',
    rating: 4.9,
    reviews: 156,
    icon: '🛒',
    badge: 'Featured',
  },
  {
    title: 'Admin Dashboard',
    category: 'Dashboard',
    price: '$59',
    rating: 4.7,
    reviews: 89,
    icon: '⚙️',
    badge: null,
  },
  {
    title: 'Blog & Magazine',
    category: 'Blog',
    price: '$35',
    rating: 4.5,
    reviews: 72,
    icon: '📝',
    badge: 'New',
  },
  {
    title: 'Education Platform',
    category: 'Education',
    price: '$89',
    rating: 4.8,
    reviews: 44,
    icon: '🎓',
    badge: null,
  },
  {
    title: 'Automation Workflow Pack',
    category: 'AI',
    price: '$69',
    rating: 4.9,
    reviews: 38,
    icon: '⚡',
    badge: 'Popular',
  },
];

const categories = ['All', 'Business', 'SaaS', 'AI', 'Portfolio', 'E-commerce', 'Dashboard', 'Blog', 'Education'];

const badgeColors: Record<string, string> = {
  Featured: '#10B981',
  Popular: '#3B82F6',
  New: '#8B5CF6',
};

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Featured');

  const filtered = products.filter(p =>
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.title.toLowerCase().includes(search.toLowerCase())
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
          }}>Marketplace</p>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            color: '#fff', letterSpacing: '-1px', marginBottom: '16px',
          }}>Digital Products & Templates</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '18px', marginBottom: '32px' }}>
            Premium templates, UI kits, and digital products for your next project.
          </p>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search templates..."
            style={{
              width: '100%', background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)', padding: '14px 20px',
              color: '#fff', fontSize: '16px', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Filters */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '16px', marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '100px', padding: '8px 16px',
                color: activeCategory === cat ? '#fff' : 'var(--color-muted)',
                fontSize: '13px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
              }}>{cat}</button>
            ))}
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{
              background: 'var(--color-surface)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)', padding: '8px 16px',
              color: '#fff', fontSize: '13px', outline: 'none', cursor: 'pointer',
            }}>
            <option>Featured</option>
            <option>Newest</option>
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((product) => (
            <div key={product.title} style={{
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
              {/* Preview */}
              <div style={{
                height: '160px', background: 'var(--color-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '64px', borderBottom: '1px solid var(--color-border)',
                position: 'relative',
              }}>
                {product.icon}
                {product.badge && (
                  <span style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: badgeColors[product.badge] + '20',
                    color: badgeColors[product.badge],
                    fontSize: '11px', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '100px',
                  }}>{product.badge}</span>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '20px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginBottom: '8px',
                }}>
                  <span style={{
                    background: 'rgba(16,185,129,0.1)', color: 'var(--color-primary)',
                    fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '100px',
                  }}>{product.category}</span>
                  <span style={{ color: '#fff', fontSize: '16px', fontWeight: 700 }}>{product.price}</span>
                </div>

                <h3 style={{
                  color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '8px',
                }}>{product.title}</h3>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px',
                }}>
                  <span style={{ color: '#F59E0B', fontSize: '13px' }}>★ {product.rating}</span>
                  <span style={{ color: 'var(--color-muted)', fontSize: '12px' }}>({product.reviews} reviews)</span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{
                    flex: 1, background: 'var(--color-primary)', border: 'none',
                    borderRadius: 'var(--radius-sm)', padding: '10px',
                    color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                  }}>Buy Now</button>
                  <button style={{
                    background: 'none', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)', padding: '10px 14px',
                    color: 'var(--color-muted)', fontSize: '13px', cursor: 'pointer',
                  }}>Preview</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
