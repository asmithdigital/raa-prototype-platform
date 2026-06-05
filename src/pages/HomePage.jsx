import { Link } from 'react-router-dom'
import prototypes from '../../data/prototypes.json'

const qtbScreens = prototypes.screens.filter(s => s.product === 'raa-web')
const myaScreens = prototypes.screens.filter(s => s.product === 'raa-web-mya')
const appScreens = prototypes.screens.filter(s => s.product === 'raa-app')

const PRODUCTS = [
  {
    id: 'raa-web',
    icon: '🌐',
    name: 'RAA Web — Quote to Buy',
    subtitle: 'Home insurance online flow',
    desc: 'The 5-step quote and purchase flow for RAA home and contents insurance. Interactive screens — click through the full flow.',
    screens: qtbScreens,
    browseLink: '/web/qtb-general-info',
    presentLink: '/present/web/qtb-general-info',
    status: 'Production',
    statusColor: '#36B37E',
    bg: '#FFFAE6',
    accent: '#FFD100',
  },
  {
    id: 'raa-web-mya',
    icon: '👤',
    name: 'RAA Web — My Account',
    subtitle: 'Logged-in account management',
    desc: 'The logged-in account portal — dashboard, personal details, products and policies, payment details. Navigate between screens.',
    screens: myaScreens,
    browseLink: '/web/mya-dashboard',
    presentLink: '/present/web/mya-dashboard',
    status: 'Prototype',
    statusColor: '#0052CC',
    bg: '#DEEBFF',
    accent: '#0052CC',
  },
  {
    id: 'raa-app',
    icon: '📱',
    name: 'RAA Mobile App',
    subtitle: 'iOS & Android member app',
    desc: 'The member app — home screen, fuel prices map, rewards and savings, notifications, and account. Tap to navigate between screens.',
    screens: appScreens,
    browseLink: '/app/home',
    presentLink: '/present/app/home',
    status: 'Production',
    statusColor: '#36B37E',
    bg: '#E3FCEF',
    accent: '#36B37E',
  },
]

export default function HomePage() {
  return (
    <div className="content-inner">
      {/* Hero */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-block', background: '#FFFAE6', color: '#172B4D', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '4px', marginBottom: '16px', letterSpacing: '0.02em', border: '1px solid #FFD100' }}>
          RAA Prototype Platform
        </div>
        <h1 style={{ marginBottom: '16px', fontSize: '32px' }}>Interactive prototypes for user testing</h1>
        <p style={{ fontSize: '16px', color: '#42526E', lineHeight: 1.7, maxWidth: '640px', marginBottom: '28px' }}>
          Real-looking, clickable screens for RAA's web and app products. Use these to run user testing sessions — screens respond to taps and clicks, and Present mode shows them full-screen without any chrome.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            to="/how-to-use"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#172B4D', color: '#FFD100', padding: '10px 20px',
              borderRadius: '4px', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
            }}
          >
            How to run a user test →
          </Link>
          <Link
            to="/web/qtb-general-info"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ffffff', color: '#172B4D', padding: '10px 20px',
              borderRadius: '4px', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
              border: '1px solid #DFE1E6',
            }}
          >
            Browse all screens
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
        {[
          { label: 'Total screens', value: prototypes.screens.length },
          { label: 'Prototypes', value: prototypes.products.length },
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
      <h2 style={{ marginBottom: '8px' }}>Prototypes</h2>
      <p style={{ fontSize: '14px', color: '#5E6C84', marginBottom: '24px' }}>Browse screens in the sidebar, or use Present mode for user testing sessions.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
        {PRODUCTS.map(product => (
          <div key={product.id} style={{
            border: '1px solid #DFE1E6', borderRadius: '8px',
            background: '#ffffff', overflow: 'hidden',
            display: 'flex',
          }}>
            <div style={{ width: '6px', background: product.accent, flexShrink: 0 }} />
            <div style={{ padding: '24px 28px', flex: 1, display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                {product.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>{product.name}</h3>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: product.statusColor, background: product.bg, padding: '2px 8px', borderRadius: '10px' }}>
                    ● {product.status}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '8px' }}>{product.subtitle} · {product.screens.length} screens</div>
                <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.6, margin: 0 }}>{product.desc}</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
                <Link
                  to={product.browseLink}
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    background: '#F4F5F7', color: '#172B4D',
                    padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600,
                    textDecoration: 'none', border: '1px solid #DFE1E6', whiteSpace: 'nowrap',
                  }}
                >
                  Browse
                </Link>
                <a
                  href={product.presentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: '#172B4D', color: '#FFD100',
                    padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 700,
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                >
                  ▶ Present
                </a>
              </div>
            </div>
          </div>
        ))}
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
