import { useEffect, useState } from 'react'
import { getJSON } from './lib/api'
import Hero from './components/Hero'
import About from './components/About'
import { Services, Skills, Pricing, Portfolio, CaseStudies, Testimonials, Blog, ContactFooter } from './components/Collections'
import CMSControls from './components/CMSControls'

function App() {
  const [hero, setHero] = useState(null)
  const [about, setAbout] = useState(null)

  useEffect(() => {
    getJSON('/hero').then(setHero).catch(()=>{})
    getJSON('/about').then(setAbout).catch(()=>{})
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {hero && <Hero hero={hero} />}
      {about && <About about={about} />}
      <Services />
      <Skills />
      <Pricing />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <ContactFooter />
      <CMSControls />
    </div>
  )
}

export default App
