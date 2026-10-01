import { includes } from '../data/content'

const icons = {
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  ),
  funding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 1.8 1.3 1.6 3 1.9 3 .9 3 2-1.3 1.8-3 1.8-3-.8-3-1.8" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.7 7.2 6.4 15.8M13.3 7.2l4.3 8.6M7.5 18h9" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m10 15 1.5 1.5L14.5 13" />
    </svg>
  ),
}

export default function Benefits() {
  return (
    <section className="benefits section" id="includes">
      <div className="container">
        <div className="benefits__intro">
          <span className="tagline tagline--crimson">{includes.tagline}</span>
          <h2 className="h2 h2--crimson">{includes.heading}</h2>
          <p className="benefits__lead">{includes.intro}</p>
        </div>
        <ul className="benefits__grid">
          {includes.benefits.map((b) => (
            <li key={b.title} className="card">
              <span className="card__icon" aria-hidden="true">
                {icons[b.icon]}
              </span>
              <h3 className="card__title">{b.title}</h3>
              <p className="card__body">{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
