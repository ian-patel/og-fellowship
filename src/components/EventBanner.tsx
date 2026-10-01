import { event } from '../data/content'
import Button from './Button'

export default function EventBanner() {
  if (!event.show) return null
  return (
    <section className="event">
      <div className="container">
        <div className="event__card" style={{ backgroundImage: `url(${event.background})` }}>
          <div className="event__text">
            <p className="event__title">{event.title}</p>
            <p className="event__desc">{event.description}</p>
            <p className="event__meta">
              {event.when} <span className="event__sep">|</span> <span className="event__where">{event.where}</span>
            </p>
          </div>
          <Button href={event.cta.href} variant="light">
            {event.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
