import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PhoneFrame from '../components/PhoneFrame.jsx'

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

function HoverExit({ onExit }) {
  const [show, setShow] = useState(false)
  return (
    <div
      style={{ position: 'fixed', bottom: 0, right: 0, width: '140px', height: '80px', zIndex: 9999, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '16px' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <button
          onClick={onExit}
          style={{
            background: 'rgba(23,43,77,0.88)',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            padding: '9px 18px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backdropFilter: 'blur(8px)',
          }}
        >
          ✕ Exit
        </button>
      )}
    </div>
  )
}

export default function PresentMode({ product }) {
  const { screenId } = useParams()
  const navigate = useNavigate()

  const isWeb = product === 'raa-web'
  const presentBase = isWeb ? '/present/web' : '/present/app'
  const docBase = isWeb ? '/web' : '/app'

  const order = isWeb ? getWebOrder(screenId) : APP_ORDER

  const goNext = () => {
    const idx = order.indexOf(screenId)
    if (idx < order.length - 1) navigate(`${presentBase}/${order[idx + 1]}`)
  }
  const goBack = () => {
    const idx = order.indexOf(screenId)
    if (idx > 0) navigate(`${presentBase}/${order[idx - 1]}`)
  }
  const goTo = (id) => navigate(`${presentBase}/${id}`)
  const exitPresent = () => navigate(`${docBase}/${screenId}`)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goBack()
      if (e.key === 'Escape') exitPresent()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  const ScreenComponent = isWeb ? WEB_COMPONENTS[screenId] : APP_COMPONENTS[screenId]

  if (!ScreenComponent) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#fff', fontSize: '18px' }}>Screen not found: {screenId}</div>
      </div>
    )
  }

  if (isWeb) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#fff', overflowY: 'auto', zIndex: 1000 }}>
        <ScreenComponent onNext={goNext} onBack={goBack} onNavigate={goTo} />
        <HoverExit onExit={exitPresent} />
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <PhoneFrame>
        <ScreenComponent onNavigate={goTo} onNext={goNext} onBack={goBack} />
      </PhoneFrame>
      <HoverExit onExit={exitPresent} />
    </div>
  )
}
