import { useParams, Link, useNavigate } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame.jsx'
import BrowserFrame from '../components/BrowserFrame.jsx'
import prototypes from '../../data/prototypes.json'

import QTBGeneralInfo from '../screens/web/QTBGeneralInfo.jsx'
import QTBHomeAddress from '../screens/web/QTBHomeAddress.jsx'
import QTBHomeOccupancy from '../screens/web/QTBHomeOccupancy.jsx'
import QTBYourHome from '../screens/web/QTBYourHome.jsx'
import QTBSecurity from '../screens/web/QTBSecurity.jsx'
import QTBContents from '../screens/web/QTBContents.jsx'
import QTBContentsSummary from '../screens/web/QTBContentsSummary.jsx'
import QTBPolicyHolders from '../screens/web/QTBPolicyHolders.jsx'
import QTBPolicyHolderList from '../screens/web/QTBPolicyHolderList.jsx'
import QTBYourQuote from '../screens/web/QTBYourQuote.jsx'
import MyAccountDashboard from '../screens/web/MyAccountDashboard.jsx'
import MyAccountPersonalDetails from '../screens/web/MyAccountPersonalDetails.jsx'
import MyAccountMyProducts from '../screens/web/MyAccountMyProducts.jsx'
import MyAccountPaymentDetails from '../screens/web/MyAccountPaymentDetails.jsx'

import AppHome from '../screens/app/AppHome.jsx'
import AppFuelMap from '../screens/app/AppFuelMap.jsx'
import AppFuelFilter from '../screens/app/AppFuelFilter.jsx'
import AppSavings from '../screens/app/AppSavings.jsx'
import AppNotifications from '../screens/app/AppNotifications.jsx'
import AppNotificationSettings from '../screens/app/AppNotificationSettings.jsx'
import AppMyAccount from '../screens/app/AppMyAccount.jsx'

const DESIGN_SYSTEM_BASE = 'https://asmithdigital.github.io/design-system-site/components/'

function componentSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

const WEB_COMPONENTS = {
  'qtb-general-info': QTBGeneralInfo,
  'qtb-home-address': QTBHomeAddress,
  'qtb-home-occupancy': QTBHomeOccupancy,
  'qtb-your-home': QTBYourHome,
  'qtb-security': QTBSecurity,
  'qtb-contents': QTBContents,
  'qtb-contents-summary': QTBContentsSummary,
  'qtb-policy-holders': QTBPolicyHolders,
  'qtb-policy-holder-list': QTBPolicyHolderList,
  'qtb-your-quote': QTBYourQuote,
  'mya-dashboard': MyAccountDashboard,
  'mya-personal-details': MyAccountPersonalDetails,
  'mya-my-products': MyAccountMyProducts,
  'mya-payment-details': MyAccountPaymentDetails,
}

const APP_COMPONENTS = {
  'home': AppHome,
  'fuel-map': AppFuelMap,
  'fuel-filter': AppFuelFilter,
  'savings': AppSavings,
  'notifications': AppNotifications,
  'notification-settings': AppNotificationSettings,
  'my-account': AppMyAccount,
}

const allScreens = prototypes.prototypes.flatMap(p => p.screens)

export default function PrototypeScreen({ product }) {
  const { screenId } = useParams()
  const navigate = useNavigate()

  const isWeb = product === 'raa-web'
  const isApp = product === 'raa-app'

  const dataId = isApp ? `app-${screenId}` : screenId
  const screenData = allScreens.find(s => s.id === dataId)

  const parentPrototype = prototypes.prototypes.find(p => p.screens.some(s => s.id === dataId))

  const orderedScreenUrlIds = parentPrototype
    ? [...parentPrototype.screens]
        .sort((a, b) => a.order - b.order)
        .map(s => s.route.split('/').pop())
    : []

  const currentIndex = orderedScreenUrlIds.indexOf(screenId)
  const prevId = currentIndex > 0 ? orderedScreenUrlIds[currentIndex - 1] : null
  const nextId = currentIndex < orderedScreenUrlIds.length - 1 ? orderedScreenUrlIds[currentIndex + 1] : null
  const basePath = isWeb ? '/web' : '/app'

  const goNext = () => nextId && navigate(`${basePath}/${nextId}`)
  const goBack = () => prevId && navigate(`${basePath}/${prevId}`)
  const goTo = (id) => navigate(`${basePath}/${id}`)

  const presentUrl = `${import.meta.env.BASE_URL}present/${isWeb ? 'web' : 'app'}/${screenId}`
  const browserUrl = parentPrototype?.browserUrl || 'online.raa.com.au'

  const ScreenComponent = isWeb ? WEB_COMPONENTS[screenId] : APP_COMPONENTS[screenId]

  if (!ScreenComponent || !screenData) {
    return (
      <div className="content-inner">
        <h1>Screen not found</h1>
        <p style={{ color: '#42526E' }}>No screen found for ID: {screenId}</p>
        <Link to="/" style={{ color: '#0052CC' }}>← Back to home</Link>
      </div>
    )
  }

  return (
    <div className="content-inner" style={{ maxWidth: '1200px' }}>
      {/* Breadcrumb + Present button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5E6C84', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#5E6C84', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          {parentPrototype && (
            <>
              <Link to={`/prototypes/${parentPrototype.id}`} style={{ color: '#5E6C84', textDecoration: 'none' }}>{parentPrototype.name}</Link>
              <span>›</span>
            </>
          )}
          <span style={{ color: '#172B4D', fontWeight: 500 }}>{screenData.name}</span>
        </div>
        <a
          href={presentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#172B4D', color: '#FFD100',
            padding: '9px 18px', borderRadius: '6px',
            fontWeight: 700, fontSize: '13px', textDecoration: 'none',
            letterSpacing: '0.01em', flexShrink: 0,
          }}
        >
          ▶ Present
        </a>
      </div>

      {/* Screen title */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ marginBottom: '8px', fontSize: '24px' }}>{screenData.name}</h1>
        <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.7, maxWidth: '680px' }}>
          {screenData.description}
        </p>
      </div>

      {/* Frame */}
      <div style={{ marginBottom: '40px' }}>
        {isWeb ? (
          <BrowserFrame url={browserUrl}>
            <ScreenComponent onNext={goNext} onBack={goBack} onNavigate={goTo} />
          </BrowserFrame>
        ) : (
          <PhoneFrame>
            <ScreenComponent onNavigate={goTo} onNext={goNext} onBack={goBack} />
          </PhoneFrame>
        )}
      </div>

      {/* Metadata */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #DFE1E6' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Components</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {screenData.components.map(c => (
              <a
                key={c}
                href={`${DESIGN_SYSTEM_BASE}${componentSlug(c)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px', background: '#F4F5F7', color: '#172B4D',
                  padding: '3px 8px', borderRadius: '4px', border: '1px solid #DFE1E6',
                  fontFamily: 'monospace', textDecoration: 'none',
                }}
                title={`View ${c} in Apiary design system`}
              >
                {c}
              </a>
            ))}
          </div>
        </div>
        {parentPrototype && (
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Prototype</div>
            <Link to={`/prototypes/${parentPrototype.id}`} style={{ fontSize: '13px', color: '#0052CC' }}>{parentPrototype.name}</Link>
          </div>
        )}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Screen</div>
          <span style={{ fontSize: '13px', color: '#172B4D' }}>#{screenData.order} of {parentPrototype?.screens.length ?? '?'}</span>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Status</div>
          <span style={{ fontSize: '13px', color: '#36B37E', fontWeight: 600 }}>● {parentPrototype?.status ?? 'current'}</span>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {prevId ? (
          <Link to={`${basePath}/${prevId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '13px', fontWeight: 600, color: '#172B4D', textDecoration: 'none', background: '#ffffff' }}>
            ← Previous
          </Link>
        ) : <div />}
        {nextId ? (
          <Link to={`${basePath}/${nextId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0052CC', borderRadius: '4px', fontSize: '13px', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
            Next →
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
