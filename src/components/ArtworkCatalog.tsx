import React, { useState, useMemo } from 'react';
import { Artwork, ArtTechnique } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { 
  Search, SlidersHorizontal, Heart, Sparkles, 
  Eye, Check, RotateCcw, ShieldCheck 
} from 'lucide-react';

interface ArtworkCatalogProps {
  artworks: Artwork[];
  wishlistIds: string[];
  onToggleWishlist: (artworkId: string) => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenVisualizer: (artwork: Artwork) => void;
}

export const ArtworkCatalog: React.FC<ArtworkCatalogProps> = ({
  artworks,
  wishlistIds,
  onToggleWishlist,
  onSelectArtwork,
  onOpenVisualizer,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnique, setSelectedTechnique] = useState<string>('all');
  const [priceBudgetFilter, setPriceBudgetFilter] = useState<'all' | 'under500k' | 'under2m' | 'over2m'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'year'>('featured');

  // Filter & Search Logic
  const filteredArtworks = useMemo(() => {
    return artworks.filter((item) => {
      // Search matches
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.artistName.toLowerCase().includes(query) ||
        item.technique.toLowerCase().includes(query) ||
        item.accessionNumber.toLowerCase().includes(query);

      // Technique filter
      const matchesTechnique = 
        selectedTechnique === 'all' || item.technique === selectedTechnique;

      // Price budget filter based on UX survey brackets
      let matchesPrice = true;
      if (priceBudgetFilter === 'under500k') {
        matchesPrice = item.priceCOP <= 500000;
      } else if (priceBudgetFilter === 'under2m') {
        matchesPrice = item.priceCOP > 500000 && item.priceCOP <= 2000000;
      } else if (priceBudgetFilter === 'over2m') {
        matchesPrice = item.priceCOP > 2000000;
      }

      return matchesSearch && matchesTechnique && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceCOP - b.priceCOP;
      if (sortBy === 'price-desc') return b.priceCOP - a.priceCOP;
      if (sortBy === 'year') return b.year - a.year;
      return 0; // featured default
    });
  }, [artworks, searchQuery, selectedTechnique, priceBudgetFilter, sortBy]);

  const techniquesList: ArtTechnique[] = [
    'Pintura al Óleo',
    'Acuarela y Tinta',
    'Escultura y Relieve',
    'Arte Digital',
    'Técnicas Mixtas',
  ];

  return (
    <section id="obras" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-1">
              Colección Permanente & Adquisición Directa
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 leading-tight">
              Obras de Arte Originales
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Cada pieza incluye certificado legal de autenticidad firmado, embalaje de museo y opción de prueba virtual en tu muro antes de comprar.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 text-xs text-stone-600 bg-white border border-stone-200 px-4 py-2.5 rounded-xl shadow-xs self-start md:self-end">
            <span className="flex items-center gap-1.5 font-medium text-stone-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" /> 100% Originales
            </span>
            <span className="text-stone-300">·</span>
            <span>Precios transparentes en COP</span>
          </div>
        </div>

        {/* Filter and Search Bar Architecture */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título, artista o técnica (ej. óleo, Valentina, Choachí)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Technique Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedTechnique}
                onChange={(e) => setSelectedTechnique(e.target.value)}
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-stone-50 rounded-xl border border-stone-200 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900"
              >
                <option value="all">Todas las Técnicas</option>
                {techniquesList.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Price Budget Filter - Direct Answer to UX Survey */}
            <div className="md:col-span-2">
              <select
                value={priceBudgetFilter}
                onChange={(e) => setPriceBudgetFilter(e.target.value as any)}
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-stone-50 rounded-xl border border-stone-200 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900"
              >
                <option value="all">Cualquier Presupuesto</option>
                <option value="under500k">Menos de $500.000 COP (Accesible)</option>
                <option value="under2m">$500.000 - $2.000.000 COP</option>
                <option value="over2m">Más de $2.000.000 COP (Inversión)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-stone-50 rounded-xl border border-stone-200 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900"
              >
                <option value="featured">Destacadas Lumina</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="year">Año de Creación</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Tag Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-stone-400 text-[11px] font-medium mr-1">Filtros rápidos:</span>
              <button
                type="button"
                onClick={() => {
                  setSelectedTechnique('all');
                  setPriceBudgetFilter('under500k');
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  priceBudgetFilter === 'under500k'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Obras de Entrada (&lt; $500k COP)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedTechnique('Pintura al Óleo');
                  setPriceBudgetFilter('all');
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  selectedTechnique === 'Pintura al Óleo'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Óleo sobre Lino
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedTechnique('Escultura y Relieve');
                  setPriceBudgetFilter('all');
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  selectedTechnique === 'Escultura y Relieve'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Escultura y Bronce
              </button>
            </div>

            <div className="text-stone-500 font-mono text-[11px]">
              {filteredArtworks.length} {filteredArtworks.length === 1 ? 'obra encontrada' : 'obras encontradas'}
            </div>
          </div>
        </div>

        {/* Artworks Grid */}
        {filteredArtworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => {
              const isWishlisted = wishlistIds.includes(artwork.id);
              const isAccessiblePrice = artwork.priceCOP <= 500000;

              return (
                <div
                  key={artwork.id}
                  className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Artwork Visual Stage */}
                    <div className="relative p-6 bg-[#F5F2EB] border-b border-stone-200 flex items-center justify-center overflow-hidden min-h-[290px]">
                      <div className="w-full max-w-[240px] transition-transform duration-300 group-hover:scale-[1.02]">
                        <ArtworkVisual
                          artwork={artwork}
                          frameStyle={artwork.framed ? 'wood' : 'none'}
                          aspectRatioClass={artwork.technique === 'Acuarela y Tinta' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                        />
                      </div>

                      {/* Floating actions over visual */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                        <button
                          type="button"
                          onClick={() => onToggleWishlist(artwork.id)}
                          className={`p-2 rounded-full backdrop-blur-md transition-colors shadow-sm ${
                            isWishlisted
                              ? 'bg-rose-50 text-rose-600 ring-1 ring-rose-200'
                              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-950'
                          }`}
                          title="Guardar en favoritos"
                        >
                          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                        </button>
                      </div>

                      {/* Badge if under 500k */}
                      {isAccessiblePrice && (
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="text-[10px] font-mono tracking-wider uppercase bg-white/90 backdrop-blur-md text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded shadow-2xs font-semibold">
                            Precio Joven Coleccionista
                          </span>
                        </div>
                      )}

                      {/* Quick "Ver en tu espacio" trigger button on hover */}
                      <button
                        type="button"
                        onClick={() => onOpenVisualizer(artwork)}
                        className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/90 text-white text-[11px] font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md hover:bg-stone-900"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Ver en Pared</span>
                      </button>
                    </div>

                    {/* Metadata & Description */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                        <span>{artwork.accessionNumber}</span>
                        <span>{artwork.year}</span>
                      </div>

                      <div>
                        <h3
                          onClick={() => onSelectArtwork(artwork)}
                          className="font-serif text-xl sm:text-2xl font-bold text-stone-900 hover:text-stone-700 cursor-pointer leading-snug transition-colors"
                        >
                          {artwork.title}
                        </h3>
                        <p className="text-xs text-stone-700 font-medium mt-1">
                          {artwork.artistName}
                        </p>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {artwork.technique} · {artwork.dimensions}
                        </p>
                      </div>

                      <p className="text-xs text-stone-600 line-clamp-2 font-sans leading-relaxed">
                        {artwork.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Price and Details Button */}
                  <div className="p-6 pt-0 border-t border-stone-100">
                    <div className="flex items-baseline justify-between mb-3 pt-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-stone-400 block">
                          Precio de Galería
                        </span>
                        <span className="text-lg font-mono font-bold text-stone-900">
                          ${artwork.priceCOP.toLocaleString('es-CO')} <span className="text-xs text-stone-500 font-normal">COP</span>
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> Certificado Incluido
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectArtwork(artwork)}
                        className="w-full py-2 px-3 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors text-center"
                      >
                        Ficha Técnica
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenVisualizer(artwork)}
                        className="w-full py-2 px-3 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors text-center flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Simular</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-4">
            <p className="font-serif text-xl font-bold text-stone-800">No encontramos obras con esos filtros</p>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Prueba cambiando la técnica o el rango de presupuesto para descubrir piezas de la colección.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedTechnique('all');
                setPriceBudgetFilter('all');
              }}
              className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
