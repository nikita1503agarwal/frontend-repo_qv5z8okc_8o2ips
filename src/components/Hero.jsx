import Spline from '@splinetool/react-spline'

export default function Hero({ hero }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 [font-stretch:condensed]">
            {hero.headline}
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            {hero.sub_roles.join(' • ')}
          </p>
          <p className="mt-6 text-slate-400 max-w-xl">
            {hero.tagline}
          </p>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center rounded-full bg-sky-400/90 hover:bg-sky-300 text-slate-900 px-6 py-3 font-semibold">
              {hero.cta_label}
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-[520px] rounded-3xl overflow-hidden border border-sky-500/20 bg-slate-900/30 backdrop-blur-xl shadow-2xl">
            <img src={hero.portrait_url} alt="Robert Scott" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 flex -space-x-3">
              {hero.gallery_urls?.slice(0,3).map((g,i)=> (
                <img key={i} src={g} alt="thumb" className="w-12 h-12 rounded-xl border border-slate-700 object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950"></div>
    </section>
  )
}
