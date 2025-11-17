import { useEffect, useState } from 'react'
import { getJSON } from '../lib/api'

export function Services() {
  const [services, setServices] = useState([])
  useEffect(()=>{ getJSON('/services').then(r=>setServices(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-960 bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <article key={s.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4">
                {s.image_url && <img src={s.image_url} className="w-full h-full object-cover" />}
              </div>
              <h3 className="text-xl font-semibold text-slate-100">{s.title}</h3>
              <p className="text-slate-400 mt-2">{s.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sky-300 text-sm">{s.price}</span>
                {s.cta_label && <a href="#contact" className="text-sm px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">{s.cta_label}</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const [skills, setSkills] = useState([])
  useEffect(()=>{ getJSON('/skills').then(r=>setSkills(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-950 text-slate-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Skills & Tools</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s.id} className="px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300">{s.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const [packages, setPackages] = useState([])
  useEffect(()=>{ getJSON('/packages').then(r=>setPackages(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Packages</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {packages.map(p => (
            <div key={p.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-400 text-sm">
                {p.features?.map((f,i)=> <li key={i}>• {f}</li>)}
              </ul>
              <div className="mt-4 text-sky-300">{p.price || 'Contact for quote'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Portfolio() {
  const [items, setItems] = useState([])
  useEffect(()=>{ getJSON('/portfolio').then(r=>setItems(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (
            <article key={it.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-3">
              <div className="aspect-[16/12] rounded-xl overflow-hidden bg-slate-800">
                <img src={it.main_image} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <div className="text-sky-300 text-xs uppercase tracking-wider">{it.category}</div>
                <h3 className="text-lg font-semibold text-slate-100">{it.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{it.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudies() {
  const [items, setItems] = useState([])
  useEffect(()=>{ getJSON('/case-studies').then(r=>setItems(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Case Studies</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(cs => (
            <div key={cs.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-semibold text-slate-100">{cs.name}</h3>
              <div className="mt-2 text-slate-400 text-sm">
                <p><span className="text-slate-300">Problem:</span> {cs.problem}</p>
                <p className="mt-1"><span className="text-slate-300">Approach:</span> {cs.approach}</p>
                <p className="mt-1"><span className="text-slate-300">Tools:</span> {cs.tools?.join(', ')}</p>
                <p className="mt-1"><span className="text-slate-300">Results:</span> {cs.results}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(()=>{ getJSON('/testimonials').then(r=>setItems(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(t => (
            <div key={t.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex gap-4">
              {t.client_photo && <img src={t.client_photo} className="w-14 h-14 rounded-xl object-cover" />}
              <div>
                <div className="text-slate-300 text-sm">{t.client_name}</div>
                <p className="text-slate-200 mt-1">“{t.review}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  const [items, setItems] = useState([])
  useEffect(()=>{ getJSON('/blog').then(r=>setItems(r.items)).catch(()=>{}) },[])
  return (
    <section className="bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Blog</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map(b => (
            <article key={b.id} className="rounded-2xl border border-slate-800 bg-slate-900/50">
              <div className="aspect-video rounded-t-2xl overflow-hidden bg-slate-800">
                {b.thumbnail && <img src={b.thumbnail} className="w-full h-full object-cover" />}
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-400">{b.category} • {b.publish_date}</div>
                <h3 className="text-lg font-semibold text-slate-100">{b.title}</h3>
                <p className="text-slate-400 text-sm mt-1 line-clamp-3">{b.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactFooter() {
  const [contact, setContact] = useState(null)
  useEffect(()=>{ getJSON('/contact').then(setContact).catch(()=>{}) },[])
  if (!contact) return null
  return (
    <section id="contact" className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="text-slate-300">Email: <a href={`mailto:${contact.email}`} className="text-sky-300">{contact.email}</a></div>
            {contact.phone && <div className="text-slate-300 mt-2">Phone: <a href={`tel:${contact.phone}`} className="text-sky-300">{contact.phone}</a></div>}
            {contact.whatsapp && <div className="text-slate-300 mt-2">WhatsApp: <a href={`https://wa.me/${contact.whatsapp}`} className="text-sky-300">{contact.whatsapp}</a></div>}
          </div>
          <form className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 grid gap-3">
            <input placeholder="Name" className="bg-slate-800 rounded-lg px-3 py-2" />
            <input placeholder="Email" className="bg-slate-800 rounded-lg px-3 py-2" />
            <textarea placeholder="Message" className="bg-slate-800 rounded-lg px-3 py-2 min-h-[120px]" />
            <button className="justify-self-start px-5 py-2 rounded-full bg-sky-400 text-slate-900 font-semibold">Send</button>
          </form>
        </div>
      </div>
      <footer className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between text-slate-400 text-sm">
          <div>© 2025 Robert Scott. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-200">Privacy</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
