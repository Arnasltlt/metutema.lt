'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Rules() {
  const t = useTranslations('rules');
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      id: 'core',
      title: t('core.title'),
      items: [
        t('core.rule1'),
        t('core.rule2'),
        t('core.rule3'),
        t('core.rule4'),
      ],
      color: 'amber'
    },
    {
      id: 'suggestions',
      title: t('suggestions.title'),
      items: [
        t('suggestions.sug1'),
        t('suggestions.sug2'),
        t('suggestions.sug3'),
      ],
      color: 'amber-light'
    },
    {
      id: 'learning',
      title: t('learning.title'),
      items: [
        t('learning.item1'),
        t('learning.item2'),
        t('learning.item3'),
      ],
      color: 'amber-dark'
    }
  ];

  return (
    <section className="px-6 py-24 bg-navy-light/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-amber mb-16 text-center tracking-tight">
          {t('title')}
        </h2>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium text-sm md:text-base ${activeTab === index
                  ? 'bg-amber text-navy border-amber shadow-lg shadow-amber/20'
                  : 'bg-transparent text-amber/60 border-amber/20 hover:border-amber/40 hover:text-amber'
                }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {sections[activeTab].items.map((item, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl glass-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center shrink-0 border border-amber/20 group-hover:border-amber/40 transition-colors">
                    <span className="text-amber font-serif text-lg">{index + 1}</span>
                  </div>
                  <p className="text-cream/80 leading-relaxed pt-0.5">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-amber/20 to-transparent w-full max-w-md"></div>
        </div>
      </div>
    </section>
  );
}


