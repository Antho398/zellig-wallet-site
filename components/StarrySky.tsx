'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function StarrySky() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; startX: number; startY: number; endX: number; endY: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Générer des étoiles uniquement côté client pour éviter l'erreur d'hydratation
    // Plus de points scintillants
    const generatedStars = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
    setStars(generatedStars);

    // Générer des étoiles filantes - très peu nombreuses avec mouvement et apparition très aléatoires
    const generatedShootingStars = Array.from({ length: 3 }, (_, i) => {
      // Position de départ très aléatoire
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      // Angle complètement aléatoire dans toutes les directions
      const angle = Math.random() * 360;
      
      // Longueur de traînée variable et aléatoire
      const length = 15 + Math.random() * 25;
      
      // Calcul de la position finale
      const endX = startX + length * Math.cos((angle * Math.PI) / 180);
      const endY = startY + length * Math.sin((angle * Math.PI) / 180);
      
      // Délai d'apparition très aléatoire (0 à 20 secondes)
      const delay = Math.random() * 20;
      
      // Durée de mouvement variable et aléatoire
      const duration = 1.5 + Math.random() * 2.5;
      
      return {
        id: i,
        startX,
        startY,
        endX,
        endY,
        delay,
        duration,
      };
    });
    setShootingStars(generatedShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/ecran16x9.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Étoiles qui scintillent par-dessus */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}

      {/* Étoiles filantes */}
      {shootingStars.map((shootingStar) => {
        const angle = Math.atan2(
          shootingStar.endY - shootingStar.startY,
          shootingStar.endX - shootingStar.startX
        ) * (180 / Math.PI);
        const length = Math.sqrt(
          Math.pow(shootingStar.endX - shootingStar.startX, 2) +
          Math.pow(shootingStar.endY - shootingStar.startY, 2)
        );

        return (
          <div
            key={`shooting-${shootingStar.id}`}
            className="absolute shooting-star"
            style={{
              left: `${shootingStar.startX}%`,
              top: `${shootingStar.startY}%`,
              width: `${length}%`,
              transform: `rotate(${angle}deg)`,
              transformOrigin: 'left center',
              animationDelay: `${shootingStar.delay}s`,
              animationDuration: `${shootingStar.duration}s`,
            }}
          >
            <div className="h-px bg-gradient-to-r from-white/60 via-white/40 to-transparent opacity-50 w-full" />
          </div>
        );
      })}
    </div>
  );
}
