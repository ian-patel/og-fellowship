import { about } from '../data/content'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__intro">
          <span className="tagline tagline--light">{about.tagline}</span>
          <h2 className="h2 h2--light">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="about__text">
              {p}
            </p>
          ))}
        </div>
        <div className="about__logos">
          {about.logos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} className="about__logo" loading="lazy" />
          ))}
        </div>
        <img className="about__image" src={about.image} alt={about.imageAlt} loading="lazy" />
      </div>
    </section>
  )
}
