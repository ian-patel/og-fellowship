import { hero, links, applicationsOpen } from '../data/content'
import Button from './Button'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__bg" src={hero.background} alt="" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="container hero__inner">
        <img className="hero__lockup" src={hero.lockup} alt={hero.lockupAlt} />
        <h1 className="hero__title">{hero.heading}</h1>
        <p className="hero__body">{hero.body}</p>
        <p className="hero__status">
          {applicationsOpen ? 'Applications are now open' : hero.status} | {hero.statusQuestion}{' '}
          <a href={links.contact}>{hero.statusLink}</a>
        </p>
        <div className="btn-group">
          <Button href={hero.primary.href} variant="crimson" disabled={!applicationsOpen}>
            {hero.primary.label}
          </Button>
          <Button href={hero.secondary.href} variant="glass">
            {hero.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
