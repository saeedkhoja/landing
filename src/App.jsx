import { useState, useEffect } from 'react'
import {
  PhoneMap,
  PhoneChat,
  PhoneLiveCall,
  PhoneProfile,
  ConnectShowcase,
  PORTRAITS,
} from './mockups.jsx'

const LOGO = '/logo/speek-logo-dark.svg'
const ICON = '/logo/speek-icon.svg'

/* ---------- App Store / Play Store badges ---------- */
function StoreBadges({ className = '' }) {
  return (
    <div className={`stores ${className}`}>
      <a href="#waitlist" className="store" aria-label="Download on the App Store">
        <svg viewBox="0 0 24 24" className="store__logo" aria-hidden="true">
          <path fill="currentColor" d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.99-.74.84-1.96 1.49-3.05 1.4-.13-1.1.45-2.27 1.12-3 .76-.83 2.06-1.45 3.05-1.39zM20.7 17.2c-.55 1.27-.82 1.84-1.53 2.96-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.05-1.77-4.04-3.32C-.04 15.62-.36 9.7 2.32 6.69c.95-1.08 2.42-1.78 3.84-1.78 1.45 0 2.36.99 3.56.99 1.16 0 1.87-.99 3.55-.99 1.27 0 2.61.69 3.57 1.88-3.14 1.72-2.63 6.21.86 7.42-.32.84-.55 1.32-1 1.99z"/>
        </svg>
        <span className="store__txt"><small>Download on the</small><b>App Store</b></span>
      </a>
      <a href="#waitlist" className="store" aria-label="Get it on Google Play">
        <svg viewBox="0 0 24 24" className="store__logo" aria-hidden="true">
          <path fill="#00D4FF" d="M3.6 1.8C3.3 2.05 3.13 2.45 3.13 2.96v18.08c0 .51.17.91.47 1.16l.06.05L13.8 12.07v-.14L3.66 1.75l-.06.05z"/>
          <path fill="#FFCE00" d="M17.2 15.42l-3.4-3.35v-.14l3.4-3.35.08.05 4.03 2.29c1.15.65 1.15 1.72 0 2.38l-4.03 2.29-.08-.16z"/>
          <path fill="#FF3A44" d="M17.28 15.26l-3.48-3.33L3.6 22.2c.38.4 1 .45 1.71.05l11.97-6.99z"/>
          <path fill="#00F076" d="M17.28 8.74L5.31 1.75c-.71-.4-1.33-.35-1.71.05l10.2 10.13 3.48-3.19z"/>
        </svg>
        <span className="store__txt"><small>GET IT ON</small><b>Google Play</b></span>
      </a>
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  const close = () => setOpen(false)
  return (
    <>
      <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
        <a className="nav__brand" href="#top" onClick={close}>
          <img src={ICON} alt="Speek" />
          <span>Speek</span>
        </a>
        <nav className="nav__links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#world">The map</a>
          <a href="#blog">Blog</a>
        </nav>
        <a href="#waitlist" className="btn btn--primary btn--sm nav__cta">Join the waitlist</a>
        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </header>
      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        <nav className="nav__mobile-links">
          <a href="#how" onClick={close}>How it works</a>
          <a href="#features" onClick={close}>Features</a>
          <a href="#world" onClick={close}>The map</a>
          <a href="#blog" onClick={close}>Blog</a>
        </nav>
        <a href="#waitlist" className="btn btn--primary nav__mobile-cta" onClick={close}>Join the waitlist</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" />
      <div className="hero__content">
        <span className="badge">
          <span className="badge__dot" /> Now in early access · Global
        </span>
        <h1 className="hero__title">
          Speak real English.<br />
          <span className="grad">Make friends worldwide.</span>
        </h1>
        <p className="hero__sub">
          Speek is a map full of people who actually want to talk. Match with
          native speakers, go live in seconds, and level up your speaking — while
          making real friends across the globe.
        </p>
        <StoreBadges />
        <div className="hero__cta">
          <a href="#waitlist" className="btn btn--primary">Get early access</a>
          <a href="#how" className="btn btn--ghost">See how it works</a>
        </div>
        <div className="hero__proof">
          <div className="avatars">
            {Object.values(PORTRAITS).slice(0, 5).map((src, i) => (
              <img key={i} src={`${src}&w=120`} alt="" loading="lazy" />
            ))}
          </div>
          <p>Join <b>12,000+</b> speakers already on the waitlist</p>
        </div>
      </div>
      <div className="hero__visual">
        <PhoneLiveCall />
        <PhoneMap className="phone--behind" />
      </div>
    </section>
  )
}

function Logos() {
  const items = ['🌍 195 countries', '🎙 Live voice & video', '⚡ Match in seconds', '🗣 Every accent', '🤝 Real friendships']
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...items, ...items].map((t, i) => (
          <span className="marquee__item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'Open the map',
      d: 'See real people from every corner of the planet who are online and ready to talk right now.',
    },
    {
      n: '02',
      t: 'Find your match',
      d: 'Pick a native speaker to practice with, or a learner who wants to meet someone like you. Swipe, like, connect.',
    },
    {
      n: '03',
      t: 'Go live & speak',
      d: 'Tap to call. No scheduling, no awkward classrooms — just real conversation that makes your English better every day.',
    },
  ]
  return (
    <section className="section" id="how">
      <div className="section__head">
        <span className="eyebrow">How it works</span>
        <h2>From a map pin to a real conversation in three taps.</h2>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <span className="step__n">{s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WinWin() {
  return (
    <section className="section winwin">
      <div className="section__head">
        <span className="eyebrow">Why it works</span>
        <h2>Two people. One conversation. <span className="grad">Everybody wins.</span></h2>
        <p className="section__lead">
          Speek solves the classic chicken-and-egg problem the fun way — by
          giving everyone a reason to show up.
        </p>
      </div>
      <div className="winwin__grid">
        <div className="winwin__card">
          <div className="winwin__icon">🎓</div>
          <h3>Learners get fluency</h3>
          <p>
            Stop studying English alone. Talk to real native speakers daily and
            watch your speaking confidence take off.
          </p>
        </div>
        <div className="winwin__center">
          <ConnectShowcase />
        </div>
        <div className="winwin__card">
          <div className="winwin__icon">💜</div>
          <h3>Natives get connection</h3>
          <p>
            Native speakers come for the friendships — and maybe more. Meet
            interesting people worldwide who genuinely want to know you.
          </p>
        </div>
      </div>
    </section>
  )
}

function Human() {
  return (
    <section className="section human">
      <div className="human__inner">
        <span className="eyebrow">Real people. Real emotion.</span>
        <h2>
          We're not just another <span className="strike">AI chatbot</span>.<br />
          We're <span className="grad">real human connection.</span>
        </h2>
        <p className="human__lead">
          You don't learn a language by talking to a robot. You learn it by
          laughing, disagreeing, sharing stories — feeling something. Speek
          upgrades your speaking through real-time conversations with real people
          who care about the same things you do.
        </p>
        <div className="human__cols">
          <div className="human__col">
            <h3>🎓 If you're learning English</h3>
            <p>
              Practice live with native speakers, build real fluency and
              confidence, and actually enjoy every conversation. Your speaking
              level goes up because you're using it — for real, every day.
            </p>
          </div>
          <div className="human__col">
            <h3>💜 If you're a native speaker</h3>
            <p>
              Meet fascinating people from all over the world. Find a chat
              partner, a new friend — maybe something more. You bring fluency;
              the world brings you connection. Everyone wins.
            </p>
          </div>
        </div>
        <p className="human__tag">No bots. No scripts. Just emotion, language, and people.</p>
      </div>
    </section>
  )
}

function Features() {
  const feats = [
    { icon: '🗺', t: 'Discover on the map', d: 'A living, breathing globe of people online right now. Tap anywhere and meet someone new.' },
    { icon: '🎙', t: 'Crystal-clear live calls', d: 'Low-latency voice and video built for real conversation, not laggy lectures.' },
    { icon: '💬', t: 'Match like a dating app', d: 'Profiles, interests, vibes. Connect with people you actually click with.' },
    { icon: '🌐', t: 'Every accent welcome', d: 'British, American, Aussie, Indian — practice the English you actually want to speak.' },
    { icon: '🛡', t: 'Safe & moderated', d: 'Verified profiles, easy reporting, and smart safety tools so everyone feels comfortable.' },
    { icon: '📈', t: 'See yourself improve', d: 'Track speaking streaks and milestones. Feel your fluency grow week by week.' },
  ]
  return (
    <section className="section" id="features">
      <div className="section__head">
        <span className="eyebrow">Features</span>
        <h2>Everything you need to finally speak with confidence.</h2>
      </div>
      <div className="features">
        {feats.map((f) => (
          <div className="feature" key={f.t}>
            <div className="feature__icon">{f.icon}</div>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AppShowcase() {
  const screens = [
    { Comp: PhoneMap, eyebrow: 'The live map', t: 'Thousands online, right now', d: 'Open the map and see real speakers around the world who are online and ready to talk this second.' },
    { Comp: PhoneChat, eyebrow: 'Chat & voice notes', d: 'Break the ice with a message or a voice note, then jump straight into a live call — all in one place.', t: 'Talk your way in' },
    { Comp: PhoneProfile, eyebrow: 'Your profile', d: 'Build streaks, earn premium, invite friends and level up your speaking — every conversation counts.', t: 'Grow every day' },
  ]
  return (
    <section className="section showcase" id="app">
      <div className="section__head">
        <span className="eyebrow">Inside Speek</span>
        <h2>Real screens from the real app.</h2>
        <p className="section__lead">No concept art — these are actual screenshots from Speek on iOS &amp; Android.</p>
      </div>
      <div className="showcase__grid">
        {screens.map(({ Comp, eyebrow, t, d }) => (
          <div className="showcase__item" key={t}>
            <div className="showcase__phone"><Comp /></div>
            <span className="eyebrow">{eyebrow}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WorldSection() {
  return (
    <section className="section world" id="world">
      <div className="world__text">
        <span className="eyebrow">A planet of practice partners</span>
        <h2>Your next favorite conversation is somewhere on the map.</h2>
        <p>
          Morning coffee chat with someone in London. A late-night talk with a
          new friend in Sydney. Speek makes the whole world your speaking
          classroom — and your social circle.
        </p>
        <div className="world__stats">
          <div><b>195</b><span>countries</span></div>
          <div><b>40+</b><span>accents</span></div>
          <div><b>24/7</b><span>someone online</span></div>
        </div>
      </div>
      <div className="world__visual">
        <PhoneMap />
        <PhoneProfile className="phone--float" />
      </div>
    </section>
  )
}

const POSTS = [
  {
    cat: 'Speaking tips',
    title: 'Why speaking to real people beats every language app',
    excerpt: 'Apps drill vocabulary, but fluency is built in real conversation. Here is the science of why talking to humans rewires your brain faster.',
    read: '6 min read',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1080&q=80',
  },
  {
    cat: 'Fluency',
    title: 'From B1 to confident: a 90-day live-conversation plan',
    excerpt: 'A practical, day-by-day roadmap to go from hesitant to fluent using just 15 minutes of real speaking practice a day.',
    read: '8 min read',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1080&q=80',
  },
  {
    cat: 'Culture',
    title: 'Making friends across cultures: the unexpected fluency hack',
    excerpt: 'The fastest learners are not the ones who study hardest — they are the ones who make real friends. Here is why connection drives fluency.',
    read: '5 min read',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1080&q=80',
  },
]

function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="section__head blog__head">
        <div>
          <span className="eyebrow">From the Speek blog</span>
          <h2>Speak better, connect deeper.</h2>
        </div>
        <a href="#blog" className="btn btn--ghost btn--sm">View all articles</a>
      </div>
      <div className="posts">
        {POSTS.map((p) => (
          <article className="post" key={p.title}>
            <a href="#blog" className="post__media">
              <img src={p.img} alt={p.title} loading="lazy" />
              <span className="post__cat">{p.cat}</span>
            </a>
            <div className="post__body">
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <div className="post__meta">
                <span>{p.read}</span>
                <a href="#blog" className="post__more">Read article →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Waitlist() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (email.includes('@')) setDone(true)
  }
  return (
    <section className="section waitlist" id="waitlist">
      <div className="waitlist__card">
        <div className="waitlist__glow" />
        <img src={ICON} alt="" className="waitlist__icon" />
        <h2>Be first to Speek.</h2>
        <p>
          We're rolling out access city by city. Drop your email and we'll let
          you in early — plus a founding-member badge for life.
        </p>
        {done ? (
          <div className="waitlist__done">🎉 You're on the list! Check your inbox soon.</div>
        ) : (
          <form className="waitlist__form" onSubmit={submit}>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn btn--primary" type="submit">Get early access</button>
          </form>
        )}
        <span className="waitlist__fine">No spam. Just your invite. Unsubscribe anytime.</span>
        <div className="waitlist__stores">
          <span className="waitlist__soon">Launching soon on</span>
          <StoreBadges className="stores--center" />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a className="nav__brand" href="#top">
          <img src={ICON} alt="Speek" />
          <span>Speek</span>
        </a>
        <p>Speak English. Make friends worldwide.</p>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Speek. All rights reserved.</span>
        <div className="footer__links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#blog">Blog</a>
          <a href="#waitlist">Waitlist</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <HowItWorks />
        <Human />
        <WinWin />
        <AppShowcase />
        <Features />
        <WorldSection />
        <Blog />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
