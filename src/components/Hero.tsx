import React from 'react';
import { Artwork, ExhibitionEvent } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { 
  Clock, MapPin, Ticket, ShieldCheck, 
  ArrowRight, Sparkles, Compass, GraduationCap 
} from 'lucide-react';

interface HeroProps {
  featuredArtwork: Artwork;
  featuredExhibition: ExhibitionEvent;
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenAIModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredArtwork,
  featuredExhibition,
  onSelectArtwork,
  onOpenAIModal,
}) => {
  return (
    <div className="relative bg-[#FAF8F5] border-b border-stone-200 overflow-hidden">
      
      {/* Editorial Main Marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Curatorial Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-stone-500">
              <span>TEMPORADA CULTURAL 2026</span>
              <span aria-hidden="true">·</span>
              <span>BOGOTÁ, COLOMBIA</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-stone-900 leading-[1.1] tracking-tight max-w-2xl text-balance">
              Donde la materia cobra sentido: arte original, eventos y formación
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-xl">
              Galería de Arte Digital Lumina conecta a jóvenes exploradores y coleccionistas con obras certificadas, vernissages de entrada libre y talleres prácticos de alta técnica plástica.
            </p>

            {/* CTAs matching the 3 pillars */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#obras"
                className="px-6 py-3.5 bg-stone-900 text-white rounded-xl text-xs uppercase tracking-wider font-mono font-medium hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Explorar Obras en Venta</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#exposiciones"
                className="px-5 py-3.5 bg-white border border-stone-300 text-stone-800 rounded-xl text-xs uppercase tracking-wider font-mono font-medium hover:bg-stone-100 transition-colors"
              >
                Ver Exposiciones
              </a>

              <a
                href="#cursos"
                className="px-5 py-3.5 bg-white border border-stone-300 text-stone-800 rounded-xl text-xs uppercase tracking-wider font-mono font-medium hover:bg-stone-100 transition-colors"
              >
                Cursos & Talleres
              </a>
            </div>

            {/* Evidence & Guarantees Strip */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Certificado notarial y factura legal</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Simulador de obras en muro real</span>
              </div>
              <button
                type="button"
                onClick={onOpenAIModal}
                className="text-stone-900 font-medium underline underline-offset-4 hover:text-emerald-800"
              >
                Ver Estudio UX y Arquitectura Web
              </button>
            </div>
          </div>

          {/* Right Column: Hero Artwork Focal Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => onSelectArtwork(featuredArtwork)}
              className="group cursor-pointer w-full max-w-md bg-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative">
                <ArtworkVisual
                  artwork={featuredArtwork}
                  frameStyle="wood"
                  aspectRatioClass="aspect-[4/3]"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/90 text-white text-[10px] font-mono font-medium px-2.5 py-1 rounded shadow-md">
                  Pulsar para explorar en 3D
                </div>
              </div>

              {/* Artwork Accession Deck */}
              <div className="mt-5 space-y-1.5 text-left">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>OBRA DEL MES · EN SALA</span>
                  <span>{featuredArtwork.dimensions}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                  {featuredArtwork.title}
                </h3>
                <p className="text-xs text-stone-600">
                  {featuredArtwork.artistName} · {featuredArtwork.technique}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-stone-900">
                    ${featuredArtwork.priceCOP.toLocaleString('es-CO')} COP
                  </span>
                  <span className="text-stone-700 font-medium group-hover:underline">
                    Ficha Técnica & Simulador →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon - Pattern A from Reference */}
      <div className="bg-stone-900 text-stone-200 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-stone-400" />
            <span className="font-mono text-stone-400 uppercase text-[11px]">Horario:</span>
            <span className="text-white font-medium">Martes a Domingo 10:00 – 19:00</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-stone-400" />
            <span className="font-mono text-stone-400 uppercase text-[11px]">Ubicación:</span>
            <span className="text-white font-medium">Sede Bosque Popular · Calle 64G Nº 73A-22, Bogotá</span>
          </div>

          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-stone-400 uppercase text-[11px]">Entrada:</span>
            <span className="text-emerald-300 font-medium">Libre para exposiciones permanentes</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-stone-400 text-[11px] font-mono">
            <span>SITP & Parqueadero Gratis</span>
          </div>
        </div>
      </div>
    </div>
  );
};
