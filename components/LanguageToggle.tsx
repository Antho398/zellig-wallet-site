'use client';

import { useLanguageContext } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguageContext();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-md border border-slate-900 bg-white text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
      aria-label={`Switch to ${lang === 'fr' ? 'English' : 'Français'}`}
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}

