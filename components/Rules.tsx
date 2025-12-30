import { useTranslations } from 'next-intl';

export default function Rules() {
  const t = useTranslations('rules');

  const coreRules = [
    t('core.rule1'),
    t('core.rule2'),
    t('core.rule3'),
    t('core.rule4'),
  ];

  const suggestions = [
    t('suggestions.sug1'),
    t('suggestions.sug2'),
    t('suggestions.sug3'),
  ];

  const learning = [
    t('learning.item1'),
    t('learning.item2'),
    t('learning.item3'),
  ];

  const Section = ({ title, items, color = "amber" }: { title: string; items: string[]; color?: string }) => (
    <div className="mb-16 last:mb-0">
      <h3 className={`text-2xl md:text-3xl font-serif text-${color} mb-8 text-center opacity-90`}>
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 bg-navy/50 rounded-lg border border-${color}/10 hover:border-${color}/30 transition-colors`}
          >
            <p className="text-cream/90 leading-relaxed">
              <span className={`text-${color} font-semibold mr-2`}>
                {index + 1}.
              </span>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="px-6 py-20 bg-navy-light/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber mb-16 text-center">
          {t('title')}
        </h2>

        <Section title={t('core.title')} items={coreRules} />
        <Section title={t('suggestions.title')} items={suggestions} />
        <Section title={t('learning.title')} items={learning} />
      </div>
    </section>
  );
}

