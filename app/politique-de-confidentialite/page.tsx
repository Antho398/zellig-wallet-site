import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { ContentSection } from "@/components/ContentSection";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec toggle langue */}
      <header className="w-full flex justify-end p-6">
        <LanguageToggle />
      </header>

      {/* Contenu */}
      <main className="px-6 py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          <ContentSection section="footer.politiqueConfidentialite" />
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            [Texte à insérer depuis les documents légaux]
          </p>
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

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white mt-12">
        <div className="max-w-4xl mx-auto">
          <nav className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/cgu"
              className="hover:text-gray-300 transition-colors text-sm md:text-base"
            >
              <ContentSection section="footer.cgu" />
            </Link>
            <Link
              href="/mentions-legales"
              className="hover:text-gray-300 transition-colors text-sm md:text-base"
            >
              <ContentSection section="footer.mentionsLegales" />
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-gray-300 transition-colors text-sm md:text-base"
            >
              <ContentSection section="footer.politiqueConfidentialite" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

