import { selection } from '../data/content'

export default function Selection() {
  const strip = [...selection.images, ...selection.images]
  return (
    <section className="selection section" id="selection">
      <div className="container selection__top">
        <div>
          <span className="tagline tagline--crimson">{selection.tagline}</span>
          <h2 className="h2 h2--crimson">{selection.heading}</h2>
        </div>
        <div className="selection__text">
          {selection.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {strip.map((img, i) => (
            <div key={`${img.src}-${i}`} className="marquee__item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
