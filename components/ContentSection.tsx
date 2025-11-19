'use client';

import { useLanguageContext } from '@/contexts/LanguageContext';
import { content, Language } from '@/content';

export function ContentSection({ section }: { section: string }) {
  const { lang } = useLanguageContext();
  
  // Naviguer dans l'objet content en utilisant le chemin de section
  const keys = section.split('.');
  let value: any = content[lang as Language];
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return <>{value || ''}</>;
}

