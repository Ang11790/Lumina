import React, { useState } from 'react';
import { ArtistProfile, Artwork } from '../types';
import { Play, Award, Palette, ExternalLink, Video, CheckCircle2 } from 'lucide-react';
import { ArtworkVisual } from './ArtworkVisual';

interface ArtistsSectionProps {
  artists: ArtistProfile[];
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
}

export const ArtistsSection: React.FC<ArtistsSectionProps> = ({
  artists,
  artworks,
  onSelectArtwork,
}) => {
  const [selectedArtistId, setSelectedArtistId] = useState<string>(artists[0]?.id || 'art-1');
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  const selectedArtist = artists.find((a) => a.id === selectedArtistId) || artists[0];
  const artistWorks = artworks.filter((aw) => aw.artistId === selectedArtist.id);

  return (
    <section id="artistas" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-1">
            Comunidad de Creadores Lumina
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 leading-tight">
            Artistas, Trayectoria y Concepto
          </h2>
          <p className="text-sm text-stone-600 mt-3 leading-relaxed">
            "No compramos solo arte; compramos la historia, los materiales y la poética detrás de la pieza". Conoce a los maestros contemporáneos que exponen y forman en la galería.
          </p>
        </div>

        {/* Artist Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-stone-200 scrollbar-none">
          {artists.map((artist) => {
            const isSelected = artist.id === selectedArtist.id;
            return (
              <button
                key={artist.id}
                type="button"
                onClick={() => {
                  setSelectedArtistId(artist.id);
                  setIsPlayingVideo(false);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <span>{artist.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isSelected ? 'bg-stone-700 text-stone-200' : 'bg-stone-100 text-stone-500'}`}>
                  {artist.specialty.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Artist Detailed Presentation */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs p-6 sm:p-10 space-y-10">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                  {selectedArtist.city} · Nacimiento {selectedArtist.birthYear}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-xs text-stone-600 font-medium">
                  {selectedArtist.exhibitionsCount} Exposiciones Individuales & Colectivas
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                {selectedArtist.name}
              </h3>

              <p className="text-xs sm:text-sm text-stone-700 font-medium font-sans">
                {selectedArtist.specialty}
              </p>

              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono font-semibold">
                  Declaración Poética & Conceptual
                </span>
                <p className="font-serif text-base sm:text-lg italic text-stone-800 leading-relaxed">
                  "{selectedArtist.statement}"
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                  Biografía & Trayectoria Académica
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {selectedArtist.bio}
                </p>
              </div>

              {/* Awards */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Reconocimientos y Becas Destacadas</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedArtist.awards.map((award, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-50/70 border border-amber-200 text-amber-950 text-xs rounded-md font-medium"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Capsule Player */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold flex items-center gap-1.5">
                <Video className="w-4 h-4 text-stone-700" />
                <span>Cápsula de Taller: El Concepto en Primera Persona</span>
              </span>

              <div className="relative rounded-2xl overflow-hidden bg-stone-950 aspect-[4/3] shadow-md flex items-center justify-center">
                {!isPlayingVideo ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-black/80 via-black/40 to-black/30">
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-14 h-14 rounded-full bg-white text-stone-900 flex items-center justify-center hover:scale-105 transition-transform shadow-xl mb-3 group"
                    >
                      <Play className="w-6 h-6 fill-stone-900 ml-0.5 text-stone-900" />
                    </button>
                    <span className="text-[11px] font-mono text-stone-300">
                      Duración: {selectedArtist.videoDuration}
                    </span>
                    <h5 className="font-serif text-base font-bold text-white mt-1">
                      {selectedArtist.videoTitle}
                    </h5>
                  </div>
                ) : (
                  <div className="p-6 text-white text-center space-y-3">
                    <div className="flex items-center justify-center gap-1.5 h-10">
                      {[18, 30, 40, 24, 32, 45, 20].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-emerald-400 rounded-full animate-pulse"
                          style={{ height: `${h}px`, animationDelay: `${i * 140}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-stone-300 italic">
                      "{selectedArtist.videoTranscript}"
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(false)}
                      className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md transition-colors"
                    >
                      Detener Reproducción
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Artworks by this artist in Lumina */}
          <div className="pt-8 border-t border-stone-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Obras de {selectedArtist.name} en el Catálogo
                </h4>
                <p className="text-xs text-stone-500">
                  Disponibles para adquisición directa con certificado de autoría firmado.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artistWorks.map((work) => (
                <div
                  key={work.id}
                  onClick={() => onSelectArtwork(work)}
                  className="group cursor-pointer rounded-xl border border-stone-200 bg-[#FAF8F5] p-4 transition-all hover:border-stone-400 hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="rounded-lg overflow-hidden bg-stone-100 p-3 flex items-center justify-center border border-stone-200">
                      <div className="w-full max-w-[200px]">
                        <ArtworkVisual
                          artwork={work}
                          frameStyle="wood"
                          aspectRatioClass={work.technique === 'Acuarela y Tinta' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                        />
                      </div>
                    </div>

                    <div>
                      <h5 className="font-serif text-lg font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                        {work.title}
                      </h5>
                      <p className="text-xs text-stone-500">{work.technique} · {work.dimensions}</p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-stone-900">
                      ${work.priceCOP.toLocaleString('es-CO')} COP
                    </span>
                    <span className="text-stone-600 group-hover:underline text-[11px] font-medium flex items-center gap-1">
                      Ver Ficha y Simulador →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
