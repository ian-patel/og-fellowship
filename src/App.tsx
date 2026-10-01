import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import EventBanner from './components/EventBanner'
import Funding from './components/Funding'
import Benefits from './components/Benefits'
import Selection from './components/Selection'
import Status from './components/Status'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <EventBanner />
        <Funding />
        <Benefits />
        <Selection />
        <Status />
        <Testimonial />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
