import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="px-6 py-16 border-t border-amber/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cream/60 text-sm mb-6">
          {t('subtitle')}
        </p>
        <p className="text-cream/80 text-lg italic max-w-2xl mx-auto">
          {t('closing')}
        </p>
      </div>
    </footer>
  );
}

