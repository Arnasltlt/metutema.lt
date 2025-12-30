import { useTranslations } from 'next-intl';

export default function Rules() {
  const t = useTranslations('rules');

  const rules = [
    t('rule1'),
    t('rule2'),
    t('rule3'),
    t('rule4'),
    t('rule5'),
    t('rule6'),
    t('rule7'),
    t('rule8'),
    t('rule9'),
    t('rule10'),
  ];

  return (
    <section className="px-6 py-20 bg-navy-light/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber mb-12 text-center">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="p-6 bg-navy/50 rounded-lg border border-amber/10 hover:border-amber/30 transition-colors"
            >
              <p className="text-cream/90 leading-relaxed">
                <span className="text-amber font-semibold mr-2">
                  {index + 1}.
                </span>
                {rule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

