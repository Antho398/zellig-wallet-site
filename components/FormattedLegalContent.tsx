'use client';

import { useLanguageContext } from '@/contexts/LanguageContext';
import { content, Language } from '@/content';

export function FormattedLegalContent({ section }: { section: string }) {
  const { lang } = useLanguageContext();
  const keys = section.split('.');
  let value: any = content[lang as Language];
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  // Convertir **texte** en <strong>texte</strong> et préserver les sauts de ligne
  const formattedText = (value || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  return (
    <div 
      className="text-slate-700 leading-relaxed whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
}

