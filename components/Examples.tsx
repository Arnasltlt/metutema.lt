'use client';

import { useTranslations } from 'next-intl';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Examples() {
  const t = useTranslations('examples');

  const teaItems = [
    t('teaYear.items.0'),
    t('teaYear.items.1'),
    t('teaYear.items.2'),
    t('teaYear.items.3'),
    t('teaYear.items.4'),
  ];

  const spaceItems = [
    t('spaceYear.items.0'),
    t('spaceYear.items.1'),
    t('spaceYear.items.2'),
    t('spaceYear.items.3'),
    t('spaceYear.items.4'),
    t('spaceYear.items.5'),
  ];

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif text-amber mb-8 text-center">
        {t('title')}
      </h2>

      <p className="text-lg text-cream/80 mb-16 text-center italic max-w-2xl mx-auto">
        {t('newYear')}
      </p>

      <div className="space-y-24">
        {/* Tea Year - Split Layout (Text Left | Gallery Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* List Content */}
          <div className="p-8 md:p-10 bg-navy-light/30 rounded-3xl border border-amber/20 relative overflow-hidden group hover:border-amber/30 transition-colors flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-6 opacity-10 text-7xl rotate-12 pointer-events-none">🍵</div>
            <h3 className="text-3xl md:text-4xl font-serif text-amber mb-8 relative z-10">
              {t('teaYear.title')}
            </h3>
            <ul className="space-y-4 relative z-10">
              {teaItems.map((item, index) => (
                <li key={index} className="text-cream/90 text-lg flex items-start">
                  <span className="text-amber mr-4 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {[
              '/images/tea/IMG_4793.jpg',
              '/images/tea/IMG_7158.jpg',
              '/images/tea/IMG_7159.jpg',
              '/images/tea/IMG_7164.jpg'
            ].map((src, idx) => (
              <div key={idx} className="aspect-square relative rounded-3xl overflow-hidden border border-amber/10 group/img shadow-xl shadow-black/20">
                <img
                  src={src}
                  alt={`Tea year memory ${idx + 1}`}
                  className="object-cover w-full h-full group-hover/img:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

        </div>

        {/* Space Year - Split Layout (Visuals Left | Text Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Social Embed (Order 2 on mobile, Order 1 on desktop) */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-amber/20 shadow-2xl shadow-amber/5 bg-navy/40 backdrop-blur-sm p-1">
              <InstagramEmbed
                url="https://www.instagram.com/p/DS4UHCjiH_Y/?img_index=1"
                width={328}
                captioned
              />
            </div>
          </div>

          {/* List Content (Order 1 on mobile, Order 2 on desktop) */}
          <div className="p-8 md:p-10 bg-navy-light/30 rounded-3xl border border-amber/20 relative overflow-hidden group hover:border-amber/30 transition-colors flex flex-col justify-center order-1 lg:order-2">
            <div className="absolute top-0 right-0 p-6 opacity-10 text-7xl -rotate-12 pointer-events-none">🚀</div>
            <h3 className="text-3xl md:text-4xl font-serif text-amber mb-8 relative z-10">
              {t('spaceYear.title')}
            </h3>
            <ul className="space-y-4 relative z-10">
              {spaceItems.map((item, index) => (
                <li key={index} className="text-cream/90 text-lg flex items-start">
                  <span className="text-amber mr-4 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}


