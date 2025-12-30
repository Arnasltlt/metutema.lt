'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const tLang = useTranslations('language');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'lt';
  const otherLocale = currentLocale === 'lt' ? 'en' : 'lt';
  const otherPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Language switcher */}
      <div className="absolute top-8 right-8">
        <Link
          href={otherPath}
          className="text-amber hover:text-amber-light transition-colors text-sm font-medium"
        >
          {tLang('switch')}
        </Link>
      </div>

      {/* Main title */}
      <h1 className="text-6xl md:text-8xl font-serif text-amber mb-6 text-center font-bold tracking-tight">
        {t('title')}
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-cream/90 max-w-2xl text-center mb-12 leading-relaxed">
        {t('subtitle')}
      </p>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-amber/40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-amber/20 rounded-full animate-pulse delay-700"></div>
    </section>
  );
}

