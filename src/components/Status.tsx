import { status } from '../data/content'
import Button from './Button'

export default function Status() {
  return (
    <section className="status section">
      <div className="container">
        <div className="status__card">
          <div>
            <h2 className="status__title">{status.heading}</h2>
            <p className="status__body">{status.body}</p>
            <a className="status__terms" href={status.terms.href} target="_blank" rel="noreferrer">
              {status.terms.label}
            </a>
          </div>
          <Button href={status.cta.href} variant="light">
            {status.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
