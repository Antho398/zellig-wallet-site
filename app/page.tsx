import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { ContentSection } from "@/components/ContentSection";
import StarrySky from "@/components/StarrySky";
import { StoreButtons } from "@/components/StoreButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* Fond étoilé très discret en haut de page */}
      <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden pointer-events-none">
        <StarrySky />
      </div>

      {/* Barre du haut - Augmentée */}
      <header className="relative z-10 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <div className="flex items-center gap-4">
        <Image
              src="/logo-cameleon-fondblanc.png"
              alt="Zellig Logo"
              width={56}
              height={56}
              className="rounded-full"
          priority
        />
            <span className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Zellig Wallet
            </span>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="px-4 md:px-8 lg:px-12 pt-10 md:pt-16 pb-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Texte hero */}
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600 mb-4">
                <ContentSection section="hero.kicker" />
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                <ContentSection section="hero.title" />
          </h1>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
                <ContentSection section="hero.subtitle" />
              </p>
            </div>

            {/* Visuel téléphone - Amélioré sans contour noir */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-amber-400/20 via-cyan-400/15 to-transparent blur-3xl -z-10" />
                <Image
                  src="/visuel-2025-site-zelig.jpg"
                  alt="Zellig Wallet App"
                  width={360}
                  height={720}
                  priority
                  className="h-auto w-[220px] md:w-[260px] lg:w-[300px] object-cover rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOC 1 : Zelig créatrice + Outil marketing - Fusionnés */}
        <section className="px-4 md:px-8 lg:px-12 pb-12 md:pb-16">
          <div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Colonne gauche : Zelig créatrice */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                  <ContentSection section="aboutZelig.title" />
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-slate-700">
                  <ContentSection section="aboutZelig.text" />
                </p>
              </div>

              {/* Colonne droite : Outil marketing */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                  <ContentSection section="marketingTool.title" />
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-700">
                  <p>
                    <ContentSection section="marketingTool.paragraph1" />
                  </p>
                  <p>
                    <ContentSection section="marketingTool.paragraph2" />
                  </p>
                  <p>
                    <ContentSection section="marketingTool.paragraph3" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOC 2 : Référence + Stores - Côte à côte mais séparés */}
        <section className="px-4 md:px-8 lg:px-12 pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Carte Ils nous font confiance */}
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
                <ContentSection section="trust.title" />
              </h2>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-6 md:px-8 md:py-8">
                <p className="text-sm md:text-base text-slate-700 mb-4 text-left">
                  <ContentSection section="trust.bestOfYachting" />
                </p>
                <div className="flex justify-start">
                  <Image
                    src="/logo-3.png"
                    alt="Best of Yachting Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Carte Disponible sur */}
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
                <ContentSection section="availability.title" />
              </h2>
              <p className="text-sm md:text-base text-slate-700 mb-6">
                <ContentSection section="availability.description" />
              </p>
              <StoreButtons />
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Augmenté et textes décollés */}
      <footer className="relative z-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-8 md:flex-row md:px-12 md:py-10 text-sm md:text-base text-slate-500">
          <span className="order-2 md:order-1">
            <ContentSection section="footer.credit" />
          </span>
          <nav className="order-1 flex gap-8 md:order-2">
            <Link
              href="/cgu"
              className="hover:text-slate-700 transition-colors"
            >
              <ContentSection section="footer.cgu" />
            </Link>
            <Link
              href="/mentions-legales"
              className="hover:text-slate-700 transition-colors"
            >
              <ContentSection section="footer.mentionsLegales" />
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-slate-700 transition-colors"
            >
              <ContentSection section="footer.politiqueConfidentialite" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
