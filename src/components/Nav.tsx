import { useEffect, useState } from 'react'
import { nav, links } from '../data/content'
import Button from './Button'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href={links.icehouse} className="nav__logo" aria-label="Icehouse Ventures">
          <img src={nav.logo} alt="Icehouse Ventures" height="28" />
        </a>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Primary">
          {nav.items.map((item) => (
            <a key={item.href} href={item.href} className="nav__link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button href={nav.cta.href} variant="light" className="nav__cta" onClick={() => setOpen(false)}>
            {nav.cta.label}
          </Button>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
