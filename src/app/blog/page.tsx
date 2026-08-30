'use client';

import Link from 'next/link';

const posts = [
  {
    slug: 'getting-started-with-nexa-ai',
    title: 'Getting Started with neXa AI',
    excerpt: 'Learn how to use neXa AI to build websites, generate content, and automate your business workflows.',
    category: 'AI',
    author: 'neXa Team',
    date: 'Aug 28, 2026',
    readTime: '5 min read',
    image: '🤖',
  },
  {
    slug: 'build-saas-dashboard-nextjs',
    title: 'Build a SaaS Dashboard with Next.js',
    excerpt: 'Step-by-step guide to building a professional SaaS dashboard using Next.js and Tailwind CSS.',
    category: 'Web',
    author: 'neXa Team',
    date: 'Aug 25, 2026',
    readTime: '8 min read',
    image: '🌐',
  },
  {
    slug: 'automate-business-workflows',
    title: 'How to Automate Your Business Workflows',
    excerpt: 'Discover how automation can save you hours every week and help your business scale faster.',
    category: 'Automation',
    author: 'neXa Team',
    date: 'Aug 22, 2026',
    readTime: '6 min read',
    image: '⚡',
  },
  {
    slug: 'cloud-deployment-beginners',
    title: 'Cloud Deployment for Beginners',
    excerpt: 'Everything you need to know about deploying your applications to the cloud.',
    category: 'Cloud',
    author: 'neXa Team',
    date: 'Aug 19, 2026',
    readTime: '7 min read',
    image: '☁️',
  },
  {
    slug: 'digital-business-strategy-2026',
    title: 'Digital Business Strategy for 2026',
    excerpt: 'Key trends and strategies to grow your digital business in the coming year.',
    category: 'Business',
    author: 'neXa Team',
    date: 'Aug 15, 2026',
    readTime: '10 min read',
    image: '📊',
  },
  {
    slug: 'web-templates-guide',
    title: 'How to Choose the Right Web Template',
    excerpt: 'A practical guide to selecting and customizing web templates for your business.',
    category: 'Tutorials',
    author: 'neXa Team',
    date: 'Aug 10, 2026',
    readTime: '4 min read',
    image: '🎨',
  },
];

const categories = ['All', 'AI', 'Web', 'Automation', 'Cloud', 'Business', 'Tutorials'];

const categoryColors: Record<string, string> = {
  AI: '#10B981',
  Web: '#3B82F6',
  Automation: '#8B5CF6',
  Cloud: '#F59E0B',
  Business: '#EC4899',
  Tutorials: '#14B8A6',
};

export default function Blog() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      paddingTop: '64px',
    }}>
      {/* Hero */}
      <section style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{
            color: 'var(--color-primary)',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px',
          }}>Blog</p>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}>Insights & Tutorials</h1>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '18px',
            lineHeight: 1.6,
          }}>
            Tips, guides, and insights on AI, web development, automation, and digital business.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{
        padding: '32px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          {categories.map((cat) => (
            <button key={cat} style={{
              background: cat === 'All' ? 'var(--color-primary)' : 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '100px',
              padding: '8px 18px',
              color: cat === 'All' ? '#fff' : 'var(--color-muted)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'all 0.2s',
                height: '100%',
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
                  height: '160px',
                  background: 'var(--color-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                  borderBottom: '1px solid var(--color-border)',
                }}>
                  {post.image}
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                  }}>
                    <span style={{
                      background: (categoryColors[post.category] || '#10B981') + '15',
                      color: categoryColors[post.category] || '#10B981',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '100px',
                    }}>{post.category}</span>
                    <span style={{
                      color: 'var(--color-muted)',
                      fontSize: '12px',
                    }}>{post.readTime}</span>
                  </div>

                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '10px',
                    lineHeight: 1.4,
                  }}>{post.title}</h3>

                  <p style={{
                    color: 'var(--color-muted)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}>{post.excerpt}</p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span style={{
                      color: 'var(--color-muted)',
                      fontSize: '12px',
                    }}>{post.date}</span>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}>Read more →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
