'use client';

import Link from 'next/link';

const sidebarLinks = [
  { icon: '📊', label: 'Overview', href: '/admin' },
  { icon: '👥', label: 'Users', href: '/admin/users' },
  { icon: '📦', label: 'Products', href: '/admin/products' },
  { icon: '🛍️', label: 'Orders', href: '/admin/orders' },
  { icon: '💳', label: 'Payments', href: '/admin/payments' },
  { icon: '🎓', label: 'Courses', href: '/admin/courses' },
  { icon: '🔧', label: 'Services', href: '/admin/services' },
  { icon: '📁', label: 'Projects', href: '/admin/projects' },
  { icon: '📝', label: 'Blog', href: '/admin/content' },
  { icon: '📈', label: 'Analytics', href: '/admin/analytics' },
  { icon: '⚙️', label: 'Settings', href: '/admin/settings' },
];

const stats = [
  { label: 'Total Revenue', value: '$12,450', icon: '💰', change: '+12% this month', color: '#10B981' },
  { label: 'Total Users', value: '1,284', icon: '👥', change: '+48 this week', color: '#3B82F6' },
  { label: 'Total Orders', value: '384', icon: '🛍️', change: '+23 this month', color: '#8B5CF6' },
  { label: 'Active Projects', value: '57', icon: '📁', change: '12 in progress', color: '#F59E0B' },
  { label: 'AI Usage', value: '24.5K', icon: '🤖', change: 'requests this month', color: '#EC4899' },
  { label: 'Conversion', value: '3.2%', icon: '📈', change: '+0.4% this month', color: '#14B8A6' },
];

const recentUsers = [
  { name: 'Demo User 1', email: 'user1@demo.com', plan: 'Pro', status: 'Active', joined: '2h ago' },
  { name: 'Demo User 2', email: 'user2@demo.com', plan: 'Starter', status: 'Active', joined: '5h ago' },
  { name: 'Demo User 3', email: 'user3@demo.com', plan: 'Free', status: 'Pending', joined: '1d ago' },
  { name: 'Demo User 4', email: 'user4@demo.com', plan: 'Business', status: 'Active', joined: '2d ago' },
  { name: 'Demo User 5', email: 'user5@demo.com', plan: 'Pro', status: 'Suspended', joined: '3d ago' },
];

const statusColor: Record<string, string> = {
  Active: '#10B981',
  Pending: '#F59E0B',
  Suspended: '#EF4444',
};

export default function Admin() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)',
        padding: '24px 16px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 50,
        overflowY: 'auto',
      }}>
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#fff',
          textDecoration: 'none',
          display: 'block',
          marginBottom: '8px',
          paddingLeft: '8px',
        }}>
          ne<span style={{ color: 'var(--color-primary)' }}>X</span>a
        </Link>
        <p style={{
          color: 'var(--color-primary)',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          paddingLeft: '8px',
          marginBottom: '24px',
        }}>Admin Panel</p>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {sidebarLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              color: link.href === '/admin' ? '#fff' : 'var(--color-muted)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: link.href === '/admin' ? 600 : 400,
              background: link.href === '/admin' ? 'rgba(16,185,129,0.1)' : 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              if (link.href !== '/admin') {
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.color = '#fff';
              }
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              if (link.href !== '/admin') {
                el.style.background = 'none';
                el.style.color = 'var(--color-muted)';
              }
            }}>
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '16px',
          right: '16px',
          padding: '12px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-sm)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
            }}>A</div>
            <div>
              <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Admin</p>
              <p style={{ color: 'var(--color-muted)', fontSize: '11px' }}>Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{
        marginLeft: '240px',
        flex: 1,
        padding: '32px',
        maxWidth: 'calc(100vw - 240px)',
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '4px',
          }}>Admin Overview</h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px' }}>
            neXa platform dashboard — Demo data only.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          marginBottom: '32px',
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}>
                <span style={{ color: 'var(--color-muted)', fontSize: '13px' }}>{stat.label}</span>
                <span style={{ fontSize: '18px' }}>{stat.icon}</span>
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: 700,
                color: stat.color,
                marginBottom: '4px',
              }}>{stat.value}</div>
              <div style={{ color: 'var(--color-muted)', fontSize: '12px' }}>{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Recent Users Table */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>Recent Users</h2>
            <Link href="/admin/users" style={{
              color: 'var(--color-primary)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
            }}>View all →</Link>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {['Name', 'Email', 'Plan', 'Status', 'Joined'].map((h) => (
                    <th key={h} style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      color: 'var(--color-muted)',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, i) => (
                  <tr key={i} style={{
                    borderBottom: i < recentUsers.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}>
                    <td style={{ padding: '14px 24px', color: '#fff', fontSize: '14px' }}>{user.name}</td>
                    <td style={{ padding: '14px 24px', color: 'var(--color-muted)', fontSize: '14px' }}>{user.email}</td>
                    <td style={{ padding: '14px 24px' }}>
                      <span style={{
                        background: 'rgba(16,185,129,0.1)',
                        color: 'var(--color-primary)',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '100px',
                      }}>{user.plan}</span>
                    </td>
                    <td style={{ padding: '14px 24px' }}>
                      <span style={{
                        background: statusColor[user.status] + '20',
                        color: statusColor[user.status],
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '100px',
                      }}>{user.status}</span>
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--color-muted)', fontSize: '13px' }}>{user.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
