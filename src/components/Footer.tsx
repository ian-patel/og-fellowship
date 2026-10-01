import { useState, type FormEvent } from 'react'
import { footer } from '../data/content'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Wire this up to your newsletter provider (e.g. Mailchimp, HubSpot) when ready.
    setSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__hero">
          <p className="footer__tagline">{footer.tagline}</p>
          <img className="footer__icon" src={footer.icon} alt="" aria-hidden="true" />
          <img className="footer__wordmark" src={footer.wordmark} alt="Icehouse Ventures" />
        </div>

        <div className="footer__grid">
          {footer.columns.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
          <address className="footer__col footer__address">
            {footer.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <div className="footer__col footer__newsletter">
            <p className="footer__newsletter-title">{footer.newsletter.heading}</p>
            {subscribed ? (
              <p className="footer__newsletter-success">{footer.newsletter.success}</p>
            ) : (
              <form onSubmit={onSubmit} className="footer__form">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input id="newsletter-email" type="email" required placeholder={footer.newsletter.placeholder} />
                <button type="submit">{footer.newsletter.button}</button>
              </form>
            )}
            <div className="footer__social">
              {footer.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="footer__copyright">{footer.copyright}</p>
      </div>
    </footer>
  )
}
