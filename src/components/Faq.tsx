import { useState } from 'react'
import { faqs, questions, type FaqItem } from '../data/content'
import Button from './Button'

function Item({ item, index, open, onToggle }: { item: FaqItem; index: number; open: boolean; onToggle: () => void }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`
  return (
    <li className={`faq__item ${open ? 'is-open' : ''}`}>
      <h3 className="faq__q">
        <button type="button" id={buttonId} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
          <span>{item.question}</span>
          <svg className="faq__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="faq__a" hidden={!open}>
        <div className="faq__a-inner">
          {item.answer.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
          {item.bullets && (
            <ul className="faq__list">
              {item.bullets.map((b) => (
                <li key={b.title}>
                  <strong>{b.title}:</strong> {b.body}
                </li>
              ))}
            </ul>
          )}
          {item.afterBullets?.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
          {item.steps && (
            <ol className="faq__steps">
              {item.steps.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <span>{s.body}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </li>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className="faq section" id="faqs">
      <div className="container">
        <h2 className="h2 h2--crimson faq__heading">FAQs</h2>
        <ul className="faq__list-root">
          {faqs.map((item, i) => (
            <Item key={item.question} item={item} index={i} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </ul>
        <div className="faq__more">
          <h3 className="faq__more-title">{questions.heading}</h3>
          <div className="btn-group btn-group--center">
            <Button href={questions.contact.href} variant="crimson">
              {questions.contact.label}
            </Button>
            <Button href={questions.faqs.href} variant="cream" target="_blank" rel="noreferrer">
              {questions.faqs.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
