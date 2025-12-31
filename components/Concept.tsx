import { useTranslations } from 'next-intl';

export default function Concept() {
  const t = useTranslations('concept');

  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row min-h-[90vh]">

      {/* LEFT SIDE: The Observation (Darker, Muted) */}
      <div className="w-full md:w-1/2 bg-navy px-8 py-20 flex flex-col justify-center relative border-r border-white/5">
        <div className="max-w-xl mx-auto md:mr-12 lg:mr-24 space-y-16">

          <div className="opacity-80">
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-8 tracking-tight">
              {t('intro')}
            </h2>
            <div className="h-0.5 w-16 bg-cream/20"></div>
          </div>

          <div className="space-y-12">
            {/* Point 1 */}
            <div className="relative pl-8 border-l border-white/10">
              <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-navy border border-white/30 rounded-full"></span>
              <p className="text-lg md:text-xl text-cream/70 leading-relaxed font-light">
                {t('point1')}
              </p>
            </div>

            {/* Point 2 */}
            <div className="relative pl-8 border-l border-white/10">
              <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-navy border border-white/30 rounded-full"></span>
              <p className="text-lg md:text-xl text-cream/70 leading-relaxed font-light">
                {t('point2')}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: The Solution (Amber, Glowing) */}
      <div className="w-full md:w-1/2 bg-navy-light relative px-8 py-20 flex flex-col justify-center overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber/5 via-transparent to-transparent opacity-50"></div>

        <div className="max-w-xl mx-auto md:ml-12 lg:ml-24 relative z-10">

          <div className="inline-flex items-center gap-3 mb-8 animate-slow-glow">
            <div className="w-12 h-12 rounded-full border border-amber/40 flex items-center justify-center bg-amber/10">
              <div className="w-2 h-2 bg-amber rounded-full shadow-[0_0_10px_2px_rgba(212,165,116,0.5)]"></div>
            </div>
            <span className="text-amber font-serif text-xl tracking-widest uppercase opacity-80">The Shift</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber mb-8 leading-tight glow-amber">
            {t('solution')}
          </h2>

          <p className="text-2xl md:text-3xl text-cream/90 font-serif leading-relaxed mb-12 italic">
            "{t('idea')}"
          </p>

          <div className="glass p-8 rounded-xl border-amber/20 bg-navy/30 backdrop-blur-sm">
            <p className="text-lg text-cream/80 leading-relaxed">
              {t('vision')}
            </p>
          </div>

        </div>

        {/* Celestial decorations */}
        <div className="absolute top-10 right-10 text-amber/20 animate-pulse">✦</div>
        <div className="absolute bottom-20 left-20 text-amber/10 text-xl animate-float">★</div>
      </div>

    </section>
  );
}


