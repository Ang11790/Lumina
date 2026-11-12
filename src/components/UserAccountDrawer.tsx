import React, { useState } from 'react';
import { Artwork, UserCertificate, UserTicket } from '../types';
import { 
  X, Heart, Shield, Ticket, GraduationCap, 
  Download, QrCode, Trash2, ArrowRight, ExternalLink 
} from 'lucide-react';

interface UserAccountDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistArtworks: Artwork[];
  onRemoveFromWishlist: (artworkId: string) => void;
  certificates: UserCertificate[];
  tickets: UserTicket[];
  onSelectArtwork: (artwork: Artwork) => void;
}

export const UserAccountDrawer: React.FC<UserAccountDrawerProps> = ({
  isOpen,
  onClose,
  wishlistArtworks,
  onRemoveFromWishlist,
  certificates,
  tickets,
  onSelectArtwork,
}) => {
  const [activeTab, setActiveTab] = useState<'wishlist' | 'certificates' | 'tickets'>('wishlist');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex justify-end">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl border-l border-stone-200 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">
                COLECCIÓN PERSONAL
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Mi Espacio Lumina
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab buttons */}
          <div className="flex border-b border-stone-200 px-4 bg-white text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('wishlist')}
              className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'wishlist'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Favoritos ({wishlistArtworks.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('certificates')}
              className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'certificates'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-emerald-700" />
              <span>Certificados ({certificates.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tickets')}
              className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'tickets'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Pases QR ({tickets.length})</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'wishlist' && (
            <div className="space-y-4">
              {wishlistArtworks.length > 0 ? (
                wishlistArtworks.map((art) => (
                  <div
                    key={art.id}
                    className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <h4
                        onClick={() => {
                          onSelectArtwork(art);
                          onClose();
                        }}
                        className="font-serif font-bold text-stone-900 text-sm truncate hover:underline cursor-pointer"
                      >
                        {art.title}
                      </h4>
                      <p className="text-xs text-stone-600 truncate">{art.artistName}</p>
                      <p className="text-xs font-mono font-bold text-stone-900 mt-1">
                        ${art.priceCOP.toLocaleString('es-CO')} COP
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectArtwork(art);
                          onClose();
                        }}
                        className="px-2.5 py-1.5 bg-stone-900 text-white rounded-md text-xs font-medium hover:bg-stone-800"
                      >
                        Ver Ficha
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveFromWishlist(art.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                        title="Eliminar de favoritos"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-stone-500 space-y-2">
                  <Heart className="w-8 h-8 text-stone-300 mx-auto" />
                  <p className="font-serif text-base font-bold text-stone-800">Tu lista está vacía</p>
                  <p className="text-xs text-stone-500">
                    Guarda tus obras favoritas pulsando el corazón en el catálogo para recibir alertas y compararlas en tu muro.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-4">
              {certificates.length > 0 ? (
                certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 bg-[#FAF7F0] border-2 border-[#D6C28F] rounded-xl space-y-2 shadow-xs"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#8C6D23] font-bold">
                          Certificado Notarial
                        </span>
                        <h5 className="font-serif font-bold text-stone-900 text-sm">
                          {cert.artworkTitle}
                        </h5>
                        <p className="text-xs text-stone-600">Por {cert.artistName}</p>
                      </div>
                      <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-[#D6C28F]">
                        {cert.id}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-[#E8DEC4] text-[11px] text-stone-600 font-mono space-y-1">
                      <p>Titular: {cert.registeredTo}</p>
                      <p>Fecha: {cert.dateIssued}</p>
                      <p className="truncate">Hash: {cert.certificateHash}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert(`Descargando Certificado ${cert.id} en PDF de alta resolución...`)}
                      className="w-full mt-2 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar PDF</span>
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-stone-500 space-y-2">
                  <Shield className="w-8 h-8 text-stone-300 mx-auto" />
                  <p className="font-serif text-base font-bold text-stone-800">Sin certificados aún</p>
                  <p className="text-xs text-stone-500">
                    Al adquirir una obra original, tu certificado de autenticidad emitido y con firma digital aparecerá aquí para descarga permanente.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tickets' && (
            <div className="space-y-4">
              {tickets.length > 0 ? (
                tickets.map((tck) => (
                  <div
                    key={tck.id}
                    className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-stone-500">
                          Pase de Entrada
                        </span>
                        <h5 className="font-serif font-bold text-stone-900 text-sm">{tck.eventTitle}</h5>
                        <p className="text-xs text-stone-600">{tck.date}</p>
                      </div>
                      <QrCode className="w-8 h-8 text-stone-800" />
                    </div>
                    <div className="pt-1 text-[11px] text-stone-600">
                      <span>Titular: {tck.attendeeName}</span> · <span>{tck.dressCode}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-stone-500 space-y-2">
                  <Ticket className="w-8 h-8 text-stone-300 mx-auto" />
                  <p className="font-serif text-base font-bold text-stone-800">No tienes pases reservados</p>
                  <p className="text-xs text-stone-500">
                    Reserva tu cupo gratuito para vernissages y exposiciones en la sección cultural para obtener tu ticket QR.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] text-center">
          <p className="text-[11px] text-stone-500">
            Galería Lumina · Universidad Libre · Sede Bosque Popular
          </p>
        </div>
      </div>
    </div>
  );
};
