'use client';

import Image from "next/image";
import { useLanguageContext } from '@/contexts/LanguageContext';

export function StoreButtons() {
  const { lang } = useLanguageContext();

  // Images selon la langue : 8,9 pour FR et 10,11 pour EN
  const iosImage = lang === 'fr' ? '/image 8.png' : '/image 10.png';
  const androidImage = lang === 'fr' ? '/image 9.png' : '/image 11.png';

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* iOS */}
      <a
        href="#"
        className="block hover:opacity-80 transition-opacity"
        aria-label="Télécharger sur iOS"
      >
        <Image
          src={iosImage}
          alt="Télécharger sur l'App Store"
          width={180}
          height={60}
          className="object-contain h-[60px] w-auto"
        />
      </a>

      {/* Android - Même hauteur que iOS */}
      <a
        href="#"
        className="block hover:opacity-80 transition-opacity"
        aria-label="Télécharger sur Android"
      >
        <Image
          src={androidImage}
          alt="Disponible sur Google Play"
          width={180}
          height={60}
          className="object-contain h-[60px] w-auto"
        />
      </a>
    </div>
  );
}

