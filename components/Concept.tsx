import { useTranslations } from 'next-intl';

export default function Concept() {
  const t = useTranslations('concept');

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif text-amber mb-12 text-center">
        {t('title')}
      </h2>

      <div className="space-y-8 text-cream/90 leading-relaxed">
        <p className="text-lg md:text-xl">{t('intro')}</p>

        <div className="space-y-6 pl-6 border-l-2 border-amber/30">
          <p className="text-base md:text-lg">
            <span className="text-amber font-semibold">1. </span>
            {t('point1')}
          </p>

          <p className="text-base md:text-lg">
            <span className="text-amber font-semibold">2. </span>
            {t('point2')}
          </p>
        </div>

        <p className="text-lg md:text-xl mt-10">{t('solution')}</p>

        <p className="text-lg md:text-xl text-amber/90 italic">
          {t('idea')}
        </p>

        <p className="text-lg md:text-xl">
          {t('vision')}
        </p>
      </div>
    </section>
  );
}

