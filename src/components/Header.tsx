import React, { useState } from 'react';
import { Heart, Menu, X, BookOpen, Layers } from 'lucide-react';

interface HeaderProps {
  wishlistCount: number;
  certificatesCount: number;
  onOpenAccount: () => void;
  onOpenAIModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  wishlistCount,
  certificatesCount,
  onOpenAccount,
  onOpenAIModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        
        {/* Zone 1: Brand Wordmark (Single text element in display face, no pill tags) */}
        <a
          href="#"
          className="text-2xl font-serif font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          Galería Lumina
        </a>

        {/* Zone 2: 4–5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-mono font-medium text-stone-600">
          <a
            href="#obras"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Obras en Venta
          </a>
          <a
            href="#exposiciones"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Exposiciones
          </a>
          <a
            href="#cursos"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Cursos & Talleres
          </a>
          <a
            href="#artistas"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Artistas
          </a>
          <button
            type="button"
            onClick={onOpenAIModal}
            className="text-stone-900 font-semibold flex items-center gap-1.5 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Arquitectura UX</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenAccount}
            className="relative p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-stone-900 transition-colors flex items-center gap-2 text-xs"
            title="Mi Cuenta, Favoritos y Certificados"
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span className="hidden sm:inline font-medium">Mi Colección</span>
            {(wishlistCount > 0 || certificatesCount > 0) && (
              <span className="w-4 h-4 rounded-full bg-stone-900 text-white text-[10px] font-mono flex items-center justify-center font-bold">
                {wishlistCount + certificatesCount}
              </span>
            )}
          </button>

          <a
            href="#obras"
            className="px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            Explorar Catálogo
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 md:hidden rounded-lg border border-stone-200"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-6 py-5 space-y-4 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-mono font-medium text-stone-700">
            <a
              href="#obras"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950"
            >
              Obras en Venta
            </a>
            <a
              href="#exposiciones"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950"
            >
              Exposiciones y Vernissages
            </a>
            <a
              href="#cursos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950"
            >
              Cursos y Formación
            </a>
            <a
              href="#artistas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950"
            >
              Artistas y Biografías
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIModal();
              }}
              className="py-1 text-left text-emerald-800 font-bold flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>Ver Informe Arquitectura de la Información</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
