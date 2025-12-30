import { useTranslations } from 'next-intl';

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
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif text-amber mb-8 text-center">
        {t('title')}
      </h2>

      <p className="text-lg text-cream/80 mb-12 text-center italic">
        {t('newYear')}
      </p>

      <div className="space-y-12">
        {/* Tea Year */}
        <div className="p-8 bg-navy-light/30 rounded-lg border border-amber/20">
          <h3 className="text-2xl md:text-3xl font-serif text-amber mb-6">
            {t('teaYear.title')}
          </h3>
          <ul className="space-y-3">
            {teaItems.map((item, index) => (
              <li key={index} className="text-cream/90 flex items-start">
                <span className="text-amber mr-3 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Space Year */}
        <div className="p-8 bg-navy-light/30 rounded-lg border border-amber/20">
          <h3 className="text-2xl md:text-3xl font-serif text-amber mb-6">
            {t('spaceYear.title')}
          </h3>
          <ul className="space-y-3">
            {spaceItems.map((item, index) => (
              <li key={index} className="text-cream/90 flex items-start">
                <span className="text-amber mr-3 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

