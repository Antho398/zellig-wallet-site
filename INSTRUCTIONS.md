# Instructions pour lancer le projet Zellig Wallet Site

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation

1. Installer les dépendances :
```bash
npm install
```

## Lancement en mode développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:3000`

## Structure du projet

- `app/page.tsx` : Page principale avec toutes les sections
- `app/cgu/page.tsx` : Page des Conditions Générales d'Utilisation
- `app/mentions-legales/page.tsx` : Page des mentions légales
- `app/politique-de-confidentialite/page.tsx` : Page de la politique de confidentialité
- `content.ts` : Fichier de mapping des textes FR/EN provenant du document Word
- `components/` : Composants réutilisables (LanguageToggle, ContentSection)
- `contexts/` : Contexte React pour la gestion de la langue
- `public/` : Assets statiques (logo, visuels)

## Fonctionnalités

- **Bilingue FR/EN** : Toggle de langue en haut à droite de chaque page
- **100% statique** : Toutes les pages sont statiques
- **Tailwind CSS** : Styling avec Tailwind CSS
- **App Router** : Utilisation du Next.js App Router

## Notes importantes

- Tous les textes proviennent EXCLUSIVEMENT du fichier `content/text-zelig-2025-website.doc`
- Les pages légales affichent `[Texte à insérer depuis les documents légaux]` car ces textes ne sont pas présents dans le document Word
- La langue est sauvegardée dans le localStorage du navigateur

## Build pour production

```bash
npm run build
npm start
```

