import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "@/components/LanguageToggle";
import { ContentSection } from "@/components/ContentSection";
import { FormattedLegalContent } from "@/components/FormattedLegalContent";

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* Barre du haut - Même style que page principale */}
      <header className="relative z-10 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-cameleon-fondblanc.png"
              alt="Zelig Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              Zelig Wallet
            </span>
          </div>
          <LanguageToggle />
        </div>
      </header>

      {/* Contenu */}
      <main className="relative z-10 px-6 py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          <ContentSection section="footer.cgu" />
        </h1>
        
        <div className="prose prose-lg max-w-none text-slate-700 whitespace-pre-line">
          <FormattedLegalContent section="legal.cgu" />
        </div>

        {/* Lien retour */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← <ContentSection section="footer.backToHome" />
          </Link>
        </div>
      </main>

      {/* Footer - Même style que page principale */}
      <footer className="relative z-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-4 md:flex-row md:px-10 md:py-5 text-sm md:text-base text-slate-500">
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

