export default function About({ about }) {
  return (
    <section className="relative bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">{about.biography}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-slate-900/50 border border-slate-800">
              <h3 className="font-semibold text-slate-100">Background & Experience</h3>
              <p className="mt-2 text-slate-400 whitespace-pre-line">{about.background}</p>
            </div>
            <div className="rounded-2xl p-6 bg-slate-900/50 border border-slate-800">
              <h3 className="font-semibold text-slate-100">Mission / Philosophy</h3>
              <p className="mt-2 text-slate-400 whitespace-pre-line">{about.mission}</p>
            </div>
          </div>

          {about.cv_url && (
            <div className="mt-8">
              <a href={about.cv_url} target="_blank" className="inline-flex items-center rounded-full bg-sky-400/90 hover:bg-sky-300 text-slate-900 px-6 py-3 font-semibold">
                Download CV
              </a>
            </div>
          )}
        </div>
        <div className="md:col-span-1">
          <div className="rounded-3xl p-6 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
            <h3 className="text-slate-100 font-semibold">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li>Cold-tone aesthetics</li>
              <li>Futuristic minimalism</li>
              <li>Cinematic photography</li>
              <li>Human-centered strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
