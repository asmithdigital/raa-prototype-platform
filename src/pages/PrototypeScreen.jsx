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

const QTB_ORDER = [
  'qtb-general-info','qtb-home-address','qtb-home-occupancy','qtb-your-home','qtb-security',
  'qtb-contents','qtb-contents-summary','qtb-policy-holders','qtb-policy-holder-list','qtb-your-quote',
]

const MYA_ORDER = ['mya-dashboard','mya-personal-details','mya-my-products','mya-payment-details']

const APP_ORDER = ['home','fuel-map','fuel-filter','savings','notifications','notification-settings','my-account']

function getWebOrder(screenId) {
  return screenId.startsWith('mya-') ? MYA_ORDER : QTB_ORDER
}

export default function PrototypeScreen({ product }) {
  const { screenId } = useParams()
  const navigate = useNavigate()

  const isWeb = product === 'raa-web'
  const isApp = product === 'raa-app'

  const dataId = isApp ? `app-${screenId}` : screenId
  const screenData = prototypes.screens.find(s => s.id === dataId)

  const ScreenComponent = isWeb ? WEB_COMPONENTS[screenId] : APP_COMPONENTS[screenId]

  const order = isWeb ? getWebOrder(screenId) : APP_ORDER
  const currentIndex = order.indexOf(screenId)
  const prevId = currentIndex > 0 ? order[currentIndex - 1] : null
  const nextId = currentIndex < order.length - 1 ? order[currentIndex + 1] : null
  const basePath = isWeb ? '/web' : '/app'

  const goNext = () => nextId && navigate(`${basePath}/${nextId}`)
  const goBack = () => prevId && navigate(`${basePath}/${prevId}`)
  const goTo = (id) => navigate(`${basePath}/${id}`)

  const presentUrl = isWeb ? `/present/web/${screenId}` : `/present/app/${screenId}`

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
    <div className="content-inner" style={{ maxWidth: '1140px' }}>
      {/* Breadcrumb + Present button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5E6C84' }}>
          <Link to="/" style={{ color: '#5E6C84', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span>{isWeb ? 'RAA Web' : 'RAA App'}</span>
          <span>›</span>
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
            letterSpacing: '0.01em',
          }}
        >
          ▶ Present
        </a>
      </div>

      {/* Screen title */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ marginBottom: '8px', fontSize: '24px' }}>{screenData.name}</h1>
        {screenData.stepLabel && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', background: '#DEEBFF', color: '#0052CC', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
              Step {screenData.step} of {screenData.totalSteps}
            </span>
            <span style={{ fontSize: '13px', color: '#5E6C84' }}>{screenData.stepLabel}</span>
          </div>
        )}
        <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.7, maxWidth: '680px' }}>
          {screenData.description}
        </p>
      </div>

      {/* Frame */}
      <div style={{ marginBottom: '40px' }}>
        {isWeb ? (
          <BrowserFrame url="online.raa.com.au/quote/home">
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
              <span key={c} style={{ fontSize: '12px', background: '#F4F5F7', color: '#172B4D', padding: '3px 8px', borderRadius: '4px', border: '1px solid #DFE1E6', fontFamily: 'monospace' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Journey</div>
          <span style={{ fontSize: '13px', color: '#172B4D' }}>{screenData.journey}</span>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Status</div>
          <span style={{ fontSize: '13px', color: '#36B37E', fontWeight: 600 }}>● {screenData.status}</span>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5E6C84', marginBottom: '8px' }}>Last updated</div>
          <span style={{ fontSize: '13px', color: '#172B4D' }}>June 2026</span>
        </div>
      </div>

      {/* Testing notes */}
      <div style={{ marginBottom: '32px', padding: '20px 24px', background: '#F4F5F7', borderRadius: '8px', border: '2px dashed #DFE1E6' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#5E6C84', marginBottom: '6px' }}>User testing notes</div>
        <div style={{ fontSize: '13px', color: '#8993A4' }}>No testing notes yet. Add observations from usability sessions here.</div>
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
