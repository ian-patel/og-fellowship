import { testimonial } from '../data/content'

export default function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="container testimonial__inner">
        <blockquote className="testimonial__quote">
          <p>“{testimonial.quote}”</p>
        </blockquote>
        <div className="testimonial__client">
          <img className="testimonial__photo" src={testimonial.photo} alt={testimonial.name} loading="lazy" />
          <div>
            <p className="testimonial__name">{testimonial.name}</p>
            <p className="testimonial__role">{testimonial.role}</p>
          </div>
          <img className="testimonial__logo" src={testimonial.logo} alt="Sharesies" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
