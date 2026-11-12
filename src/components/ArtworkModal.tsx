import React, { useState } from 'react';
import { Artwork, ArtistProfile, UserCertificate } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { RoomVisualizer } from './RoomVisualizer';
import { CheckoutModal } from './CheckoutModal';
import { 
  X, Heart, Share2, Play, FileText, CheckCircle, 
  Shield, Truck, RotateCcw, Sparkles, User, ExternalLink 
} from 'lucide-react';

interface ArtworkModalProps {
  artwork: Artwork;
  artist?: ArtistProfile;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onClose: () => void;
  onViewArtist: (artistId: string) => void;
  onCertificateIssued: (cert: UserCertificate) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  artist,
  isWishlisted,
  onToggleWishlist,
  onClose,
  onViewArtist,
  onCertificateIssued,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'story' | 'visualizer'>('details');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-4 max-h-[92vh] flex flex-col">
          
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5] shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                {artwork.accessionNumber}
              </span>
              <span className="text-stone-300">/</span>
              <span className="text-xs text-stone-600 font-medium">{artwork.technique}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors text-xs flex items-center gap-1.5"
                title="Copiar enlace"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">{copyFeedback ? '¡Copiado!' : 'Compartir'}</span>
              </button>

              <button
                type="button"
                onClick={onToggleWishlist}
                className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs ${
                  isWishlisted
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
                title="Guardar en favoritos"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                <span className="hidden sm:inline">{isWishlisted ? 'En Favoritos' : 'Guardar'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex border-b border-stone-200 px-6 bg-white shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'details'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Ficha Técnica y Procedencia
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('story')}
              className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'story'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <span>Historia y Video del Artista</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('visualizer')}
              className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'visualizer'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Simulador en Pared Real</span>
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-8">
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visual Representation */}
                <div className="lg:col-span-6 bg-stone-100 p-6 rounded-2xl flex flex-col items-center justify-center border border-stone-200">
                  <div className="w-full max-w-sm">
                    <ArtworkVisual
                      artwork={artwork}
                      frameStyle={artwork.framed ? 'wood' : 'none'}
                      aspectRatioClass={artwork.technique === 'Acuarela y Tinta' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                      showMat={artwork.framed}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
                    <span>{artwork.dimensions}</span>
                    <span>·</span>
                    <span>{artwork.framed ? 'Marco de roble incluido' : 'Lienzo de borde expuesto'}</span>
                    <span>·</span>
                    <span>Peso aprox. {artwork.weight}</span>
                  </div>
                </div>

                {/* Information Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900 leading-tight">
                      {artwork.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => onViewArtist(artwork.artistId)}
                        className="text-stone-700 hover:text-stone-950 font-medium text-sm flex items-center gap-1 underline underline-offset-4"
                      >
                        <User className="w-4 h-4" />
                        <span>{artwork.artistName}</span>
                      </button>
                      <span className="text-stone-400">·</span>
                      <span className="text-xs text-stone-500">{artwork.year}</span>
                    </div>
                  </div>

                  {/* Price & Purchase Bar */}
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-stone-500 block font-mono">
                          Precio Directo de Galería
                        </span>
                        <div className="text-2xl font-mono font-bold text-stone-900">
                          ${artwork.priceCOP.toLocaleString('es-CO')} <span className="text-xs text-stone-500 font-sans font-normal">COP</span>
                        </div>
                      </div>
                      <span className="text-xs text-emerald-800 bg-emerald-50 px-2 py-1 rounded font-medium border border-emerald-200">
                        Obra Original Disponible
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowCheckout(true)}
                        className="flex-1 py-3 px-5 bg-stone-900 text-white rounded-lg font-medium text-xs hover:bg-stone-800 transition-colors shadow-sm text-center"
                      >
                        Adquirir Obra Original (${artwork.priceCOP.toLocaleString('es-CO')} COP)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('visualizer')}
                        className="py-3 px-4 bg-white border border-stone-300 text-stone-800 rounded-lg font-medium text-xs hover:bg-stone-50 transition-colors whitespace-nowrap text-center"
                      >
                        Ver en mi espacio
                      </button>
                    </div>

                    <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between text-[11px] text-stone-600 gap-2">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 text-stone-500" /> Entrega asegurada en {artwork.shippingTimeDays} días
                      </span>
                      <span className="flex items-center gap-1">
                        <RotateCcw className="w-3.5 h-3.5 text-stone-500" /> Devolución sin costo 30 días
                      </span>
                    </div>
                  </div>

                  {/* Technical Description & Museum Definition List */}
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
                      Ficha Técnica Museográfica
                    </h3>
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-y border-stone-200 py-3">
                      <dt className="text-stone-500">Técnica:</dt>
                      <dd className="text-stone-900 font-medium">{artwork.technique}</dd>

                      <dt className="text-stone-500">Materiales y Soporte:</dt>
                      <dd className="text-stone-900 font-medium">{artwork.mediumDetails}</dd>

                      <dt className="text-stone-500">Dimensiones:</dt>
                      <dd className="text-stone-900 font-medium font-mono">{artwork.dimensions}</dd>

                      <dt className="text-stone-500">Enmarcado:</dt>
                      <dd className="text-stone-900 font-medium">
                        {artwork.framed ? 'Madera de roble macizo con paspartú libre de ácido' : 'Lienzo continuo listo para colgar'}
                      </dd>

                      <dt className="text-stone-500">Número de Registro:</dt>
                      <dd className="text-stone-900 font-mono">{artwork.accessionNumber}</dd>

                      <dt className="text-stone-500">Certificado Digital:</dt>
                      <dd className="text-emerald-700 font-mono text-[11px] truncate">
                        Hash {artwork.certificateHash.slice(0, 14)}...
                      </dd>
                    </dl>
                  </div>

                  {/* Curator Notes */}
                  <div className="space-y-1.5">
                    <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
                      Nota Curatorial
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {artwork.curatorNotes}
                    </p>
                  </div>

                  {/* Provenance */}
                  <div className="space-y-1.5">
                    <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-mono">
                      Procedencia y Trazabilidad
                    </h3>
                    <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                      {artwork.provenance.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'story' && (
              <div className="space-y-6">
                <div className="max-w-3xl mx-auto space-y-6">
                  {/* Video Player Card */}
                  <div className="relative rounded-2xl overflow-hidden bg-stone-950 aspect-video shadow-xl flex items-center justify-center">
                    {!isVideoPlaying ? (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center text-white bg-gradient-to-t from-black/80 via-black/40 to-black/20">
                        <button
                          type="button"
                          onClick={() => setIsVideoPlaying(true)}
                          className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center hover:scale-105 transition-transform shadow-2xl mb-4 group cursor-pointer"
                        >
                          <Play className="w-7 h-7 fill-stone-900 ml-1 text-stone-900" />
                        </button>
                        <span className="text-xs uppercase tracking-widest text-stone-300 font-mono">
                          Cápsula de Taller del Artista · {artist?.videoDuration || '3:45 min'}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-stone-100 max-w-lg">
                          {artist?.videoTitle || `Proceso y génesis de ${artwork.title}`}
                        </h3>
                        <p className="text-xs text-stone-300 mt-2 max-w-md">
                          Escucha directamente a {artwork.artistName} explicando los motivos detrás de la pieza, la recolección de materiales y su intención poética.
                        </p>
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-white bg-stone-900">
                        {/* Simulated Playing State */}
                        <div className="flex flex-col items-center gap-3">
                          <div className="flex items-center gap-1.5 h-12">
                            {[16, 28, 44, 22, 38, 48, 30, 20, 42, 18, 32].map((h, i) => (
                              <div
                                key={i}
                                className="w-1.5 bg-emerald-400 rounded-full animate-pulse"
                                style={{ height: `${h}px`, animationDelay: `${i * 120}ms` }}
                              />
                            ))}
                          </div>
                          <p className="text-xs font-mono text-stone-400">Reproduciendo audio y video conceptual en alta fidelidad...</p>
                          <button
                            type="button"
                            onClick={() => setIsVideoPlaying(false)}
                            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-xs rounded-lg text-white transition-colors mt-2"
                          >
                            Pausar Video
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Concept Statement */}
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                      Declaración Conceptual del Artista
                    </span>
                    <blockquote className="font-serif text-lg italic text-stone-800 leading-relaxed border-l-2 border-stone-400 pl-4 py-1">
                      "{artwork.conceptStatement}"
                    </blockquote>
                    <p className="text-xs text-stone-600 font-sans">
                      — {artwork.artistName}, Bogotá, Colombia.
                    </p>
                  </div>

                  {/* Artist Bio & Link */}
                  {artist && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white border border-stone-200 rounded-xl">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-stone-900">{artist.name}</h4>
                        <p className="text-xs text-stone-600">{artist.specialty} · {artist.city}</p>
                        <p className="text-xs text-stone-500 mt-1">{artist.bio}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onViewArtist(artist.id)}
                        className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
                      >
                        <span>Ver Perfil Completo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'visualizer' && (
              <div className="space-y-4">
                <div className="text-center max-w-xl mx-auto mb-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Simulador Interactivo en Espacio Real
                  </h3>
                  <p className="text-xs text-stone-600">
                    Prueba cómo lucirá <em>{artwork.title}</em> en distintos tonos de pared y acabados de marco según la escala de tu salón o estudio.
                  </p>
                </div>
                <RoomVisualizer artwork={artwork} />
              </div>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div className="px-6 py-4 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <Shield className="w-4 h-4 text-emerald-700" />
              <span>Garantía de Autenticidad Notarial y Devolución 30 días</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cerrar Ficha
              </button>
              <button
                type="button"
                onClick={() => setShowCheckout(true)}
                className="px-5 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm"
              >
                Comprar por ${artwork.priceCOP.toLocaleString('es-CO')} COP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal Trigger */}
      {showCheckout && (
        <CheckoutModal
          artwork={artwork}
          onClose={() => setShowCheckout(false)}
          onSuccess={(cert) => {
            setShowCheckout(false);
            onCertificateIssued(cert);
          }}
        />
      )}
    </>
  );
};
