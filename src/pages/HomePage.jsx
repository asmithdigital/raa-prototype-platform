import { Link } from 'react-router-dom'
import prototypes from '../../data/prototypes.json'

const webScreens = prototypes.screens.filter(s => s.product === 'raa-web')
const appScreens = prototypes.screens.filter(s => s.product === 'raa-app')

export default function HomePage() {
  return (
    <div className="content-inner">
      {/* Hero */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-block', background: '#DEEBFF', color: '#0052CC', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px', marginBottom: '16px', letterSpacing: '0.02em' }}>
          EXD Intelligence Layer
        </div>
        <h1 style={{ marginBottom: '16px', fontSize: '32px' }}>RAA Prototype Platform</h1>
        <p style={{ fontSize: '16px', color: '#42526E', lineHeight: 1.7, maxWidth: '600px', marginBottom: '28px' }}>
          The visual source of truth for the EXD design team. Browse real-looking screens of RAA's products — not wireframes, not mockups. Use this as context before designing anything new.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            to="/web/qtb-general-info"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#0052CC', color: '#ffffff', padding: '10px 20px',
              borderRadius: '4px', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
            }}
          >
            Browse web prototypes →
          </Link>
          <Link
            to="/app/home"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ffffff', color: '#172B4D', padding: '10px 20px',
              borderRadius: '4px', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
              border: '1px solid #DFE1E6',
            }}
          >
            Browse app prototypes →
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
        {[
          { label: 'Total screens', value: prototypes.screens.length },
          { label: 'Products', value: prototypes.products.length },
          { label: 'Last updated', value: 'June 2026' },
        ].map((stat) => (
          <div key={stat.label} style={{
            background: '#F4F5F7', borderRadius: '8px', padding: '20px 28px',
            flex: '1', minWidth: '140px',
          }}>
            <div style={{ fontSize: '12px', color: '#5E6C84', fontWeight: 500, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#172B4D', lineHeight: 1 }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Product cards */}
      <h2 style={{ marginBottom: '20px' }}>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '48px' }}>
        <div style={{
          border: '1px solid #DFE1E6', borderRadius: '8px', padding: '28px',
          background: '#ffffff',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              🌐
            </div>
            <div>
              <h3 style={{ marginBottom: '2px' }}>RAA Web</h3>
              <div style={{ fontSize: '12px', color: '#36B37E', fontWeight: 500 }}>● Production</div>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#42526E', marginBottom: '16px', lineHeight: 1.6 }}>
            Quote to Buy — Home Insurance. {webScreens.length} screens covering the full 5-step quote and purchase flow.
          </p>
          <div style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '20px' }}>
            Last scraped June 2026 · online.raa.com.au
          </div>
          <Link
            to="/web/qtb-general-info"
            style={{
              display: 'inline-block', background: '#DEEBFF', color: '#0052CC',
              padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View {webScreens.length} screens →
          </Link>
        </div>

        <div style={{
          border: '1px solid #DFE1E6', borderRadius: '8px', padding: '28px',
          background: '#ffffff',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              📱
            </div>
            <div>
              <h3 style={{ marginBottom: '2px' }}>RAA App</h3>
              <div style={{ fontSize: '12px', color: '#36B37E', fontWeight: 500 }}>● Production</div>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#42526E', marginBottom: '16px', lineHeight: 1.6 }}>
            Member app — iOS & Android. {appScreens.length} screens including home, fuel prices, savings, rewards, and account.
          </p>
          <div style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '20px' }}>
            Screenshots June 2026 · App Store
          </div>
          <Link
            to="/app/home"
            style={{
              display: 'inline-block', background: '#DEEBFF', color: '#0052CC',
              padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View {appScreens.length} screens →
          </Link>
        </div>
      </div>

      {/* How it connects */}
      <h2 style={{ marginBottom: '20px' }}>How it connects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden', marginBottom: '48px' }}>
        {[
          {
            icon: '🧬',
            title: 'Design System',
            subtitle: 'Component specs and tokens',
            link: 'https://asmithdigital.github.io/design-system-site/',
            isExternal: true,
            isCurrent: false,
          },
          {
            icon: '🖼️',
            title: 'Prototype Platform',
            subtitle: 'Visual source of truth',
            link: null,
            isExternal: false,
            isCurrent: true,
          },
          {
            icon: '📊',
            title: 'Journey Management',
            subtitle: 'Experience data and insights',
            link: null,
            isExternal: false,
            isCurrent: false,
            comingSoon: true,
          },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '28px 24px',
            borderLeft: i > 0 ? '1px solid #DFE1E6' : 'none',
            background: item.isCurrent ? '#FFFAE6' : '#ffffff',
            borderTop: item.isCurrent ? '3px solid #FFD100' : '3px solid transparent',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#172B4D', marginBottom: '6px' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '13px', color: '#42526E', marginBottom: '12px' }}>
              {item.subtitle}
            </div>
            {item.isCurrent && (
              <div style={{ fontSize: '11px', background: '#FFD100', color: '#172B4D', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', fontWeight: 600 }}>
                YOU ARE HERE
              </div>
            )}
            {item.comingSoon && (
              <div style={{ fontSize: '11px', color: '#8993A4', fontWeight: 500 }}>
                Coming soon
              </div>
            )}
            {item.isExternal && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '12px', color: '#0052CC', fontWeight: 500 }}
              >
                Open ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
