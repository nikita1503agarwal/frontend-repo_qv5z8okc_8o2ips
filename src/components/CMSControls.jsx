import { useEffect, useState } from 'react'
import { getJSON, postJSON } from '../lib/api'

export default function CMSControls() {
  const [tab, setTab] = useState('hero')
  const [saving, setSaving] = useState(false)

  const [hero, setHero] = useState({
    headline: 'ROBERT SCOTT',
    sub_roles: ['Designer', 'Digital Strategist', 'Photographer', 'Developer'],
    tagline: 'Futuristic, cinematic design across brand, web, and content',
    cta_label: 'Book',
    portrait_url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop',
    gallery_urls: []
  })

  const [about, setAbout] = useState({
    biography: '',
    background: '',
    mission: '',
    cv_url: ''
  })

  const [contact, setContact] = useState({ email: '', phone: '', whatsapp: '', socials: [] })

  useEffect(() => {
    (async () => {
      try {
        const h = await getJSON('/hero')
        setHero(h)
        const a = await getJSON('/about')
        setAbout(a)
        const c = await getJSON('/contact')
        setContact(c)
      } catch (e) { /* ignore for demo */ }
    })()
  }, [])

  const save = async () => {
    setSaving(true)
    try {
      if (tab === 'hero') await postJSON('/hero', hero)
      if (tab === 'about') await postJSON('/about', about)
      if (tab === 'contact') await postJSON('/contact', contact)
    } finally { setSaving(false) }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="backdrop-blur-xl bg-slate-900/70 border border-slate-700 rounded-2xl p-4 text-slate-200 shadow-2xl w-[360px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            {['hero','about','contact'].map(k => (
              <button key={k} className={`px-3 py-1 rounded-full text-sm ${tab===k?'bg-sky-500 text-white':'bg-slate-800 text-slate-300'}`} onClick={() => setTab(k)}>
                {k.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={save} className="px-3 py-1 rounded-full text-sm bg-sky-400 hover:bg-sky-300 text-slate-900">
            {saving? 'Saving...':'Save'}
          </button>
        </div>

        {tab==='hero' && (
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-slate-400">Headline</label>
            <input value={hero.headline} onChange={e=>setHero({...hero, headline:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">Tagline</label>
            <input value={hero.tagline} onChange={e=>setHero({...hero, tagline:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">CTA Label</label>
            <input value={hero.cta_label} onChange={e=>setHero({...hero, cta_label:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">Portrait URL</label>
            <input value={hero.portrait_url} onChange={e=>setHero({...hero, portrait_url:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>
          </div>
        )}

        {tab==='about' && (
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-slate-400">Biography</label>
            <textarea value={about.biography} onChange={e=>setAbout({...about, biography:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">Background</label>
            <textarea value={about.background} onChange={e=>setAbout({...about, background:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">Mission</label>
            <textarea value={about.mission} onChange={e=>setAbout({...about, mission:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">CV URL</label>
            <input value={about.cv_url||''} onChange={e=>setAbout({...about, cv_url:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>
          </div>
        )}

        {tab==='contact' && (
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-slate-400">Email</label>
            <input value={contact.email||''} onChange={e=>setContact({...contact, email:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">Phone</label>
            <input value={contact.phone||''} onChange={e=>setContact({...contact, phone:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>

            <label className="block text-xs uppercase tracking-wider text-slate-400">WhatsApp</label>
            <input value={contact.whatsapp||''} onChange={e=>setContact({...contact, whatsapp:e.target.value})} className="w-full bg-slate-800 rounded-lg px-3 py-2"/>
          </div>
        )}
      </div>
    </div>
  )
}
