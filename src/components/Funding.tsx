import { funding } from '../data/content'

export default function Funding() {
  return (
    <section className="funding section" id="funding">
      <div className="container funding__grid">
        <div>
          <span className="tagline tagline--crimson">{funding.tagline}</span>
          <h2 className="h2 h2--crimson">{funding.heading}</h2>
          <p className="funding__body">{funding.body}</p>
          <dl className="funding__stats">
            {funding.stats.map((s) => (
              <div key={s.label} className="funding__stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img className="funding__image" src={funding.image} alt={funding.imageAlt} loading="lazy" />
      </div>
    </section>
  )
}
