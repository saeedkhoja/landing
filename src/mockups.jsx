const ICON = '/logo/speek-icon.svg'

// Full-HD portrait photos (Unsplash). Keyed for easy reuse across mockups.
export const PORTRAITS = {
  emma:   'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1080&q=80',
  james:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1080&q=80',
  sofia:  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1080&q=80',
  liam:   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1080&q=80',
  mia:    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1080&q=80',
  noah:   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1080&q=80',
  ava:    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1080&q=80',
  ethan:  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1080&q=80',
  yuki:   'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1080&q=80',
  carlos: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1080&q=80',
  lucas:  'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=1080&q=80',
  chloe:  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1080&q=80',
}
const PL = Object.values(PORTRAITS)
const P = (i) => PL[i % PL.length]

/* ---------- Phone frame wrapper ---------- */
function Phone({ children, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__notch" />
      <div className="phone__screen">{children}</div>
    </div>
  )
}

/* ---------- Real app screenshots ----------
   Genuine captures of the Speek Flutter app (see mobile/), rendered inside the
   phone frame. */
export function PhoneMap({ className = '' }) {
  return (
    <Phone className={className}>
      <img className="screen-shot" src="/shots/map.png" alt="Speek live map — thousands of speakers online worldwide" loading="lazy" />
    </Phone>
  )
}

export function PhoneChat({ className = '' }) {
  return (
    <Phone className={className}>
      <img className="screen-shot" src="/shots/chat.png" alt="Speek chat — messages, voice notes and calls" loading="lazy" />
    </Phone>
  )
}

/* ---------- Live call screen ---------- */
export function PhoneLiveCall({ className = '' }) {
  return (
    <Phone className={`phone--front ${className}`}>
      <div className="screen-call">
        <img className="screen-call__bg" src={PORTRAITS.james} alt="Live call with James" loading="lazy" />
        <div className="screen-call__overlay" />
        <div className="screen-call__top">
          <span className="screen-call__live"><i /> LIVE</span>
          <span className="screen-call__time">04:17</span>
        </div>
        <div className="screen-call__self">
          <img src={PORTRAITS.chloe} alt="" loading="lazy" />
        </div>
        <div className="screen-call__caption">
          <span className="screen-call__name">James · 🇺🇸</span>
          <p>“So what part of the city do you live in?”</p>
        </div>
        <div className="screen-call__controls">
          <button className="ctl">🎙</button>
          <button className="ctl ctl--end">✕</button>
          <button className="ctl">📷</button>
        </div>
      </div>
    </Phone>
  )
}

/* ---------- Profile screen (real screenshot) ---------- */
export function PhoneProfile({ className = '' }) {
  return (
    <Phone className={className}>
      <img className="screen-shot" src="/shots/profile.png" alt="Speek profile — streaks, premium and rewards" loading="lazy" />
    </Phone>
  )
}

/* ---------- Creative "two people connected by Speek" showcase ---------- */
export function ConnectShowcase() {
  return (
    <div className="connect">
      <div className="connect__person connect__person--left">
        <div className="mini-phone">
          <img src={PORTRAITS.noah} alt="Native English speaker" loading="lazy" />
          <span className="mini-phone__flag">🇺🇸</span>
        </div>
        <span className="connect__label">Native speaker</span>
      </div>

      <span className="connect__wire"><i className="connect__dot" /></span>

      <div className="connect__hub">
        <img src={ICON} alt="Speek" />
      </div>

      <span className="connect__wire"><i className="connect__dot connect__dot--slow" /></span>

      <div className="connect__person connect__person--right">
        <div className="mini-phone">
          <img src={PORTRAITS.yuki} alt="English learner" loading="lazy" />
          <span className="mini-phone__flag">🇰🇷</span>
        </div>
        <span className="connect__label">English learner</span>
      </div>
    </div>
  )
}
