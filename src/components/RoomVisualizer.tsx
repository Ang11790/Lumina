import React, { useState } from 'react';
import { Artwork } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { Eye, Maximize2, Sparkles, Check } from 'lucide-react';

interface RoomVisualizerProps {
  artwork: Artwork;
  onClose?: () => void;
}

export const RoomVisualizer: React.FC<RoomVisualizerProps> = ({ artwork }) => {
  const [wallColor, setWallColor] = useState<'alabaster' | 'stone' | 'terracotta' | 'indigo' | 'forest'>('stone');
  const [frameStyle, setFrameStyle] = useState<'wood' | 'black' | 'gold' | 'none'>('wood');
  const [roomElement, setRoomElement] = useState<'chair' | 'person' | 'bench'>('chair');
  const [showRuler, setShowRuler] = useState<boolean>(true);

  const wallColors = {
    alabaster: { name: 'Alabastro Galería', hex: '#F9F7F2', isDark: false },
    stone: { name: 'Gris Cemento Cálido', hex: '#DED8CE', isDark: false },
    terracotta: { name: 'Terracota Colonial', hex: '#8C3D2B', isDark: true },
    indigo: { name: 'Azul Medianoche', hex: '#1E293B', isDark: true },
    forest: { name: 'Verde Páramo', hex: '#263D33', isDark: true },
  };

  const currentWall = wallColors[wallColor];

  return (
    <div className="flex flex-col gap-6">
      {/* Top Controller Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-stone-200 rounded-xl">
        {/* Wall Color Selector */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">Color de Pared:</span>
          <div className="flex items-center gap-2">
            {(Object.keys(wallColors) as Array<keyof typeof wallColors>).map((key) => {
              const item = wallColors[key];
              const isSelected = wallColor === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setWallColor(key)}
                  className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                    isSelected ? 'ring-2 ring-stone-900 ring-offset-2 scale-110' : 'border-stone-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: item.hex }}
                  title={item.name}
                >
                  {isSelected && (
                    <Check className={`w-3.5 h-3.5 ${item.isDark ? 'text-white' : 'text-stone-900'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Frame Style Selector */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">Enmarcado:</span>
          <div className="inline-flex rounded-lg border border-stone-200 p-0.5 bg-stone-50">
            {[
              { id: 'wood', label: 'Roble' },
              { id: 'black', label: 'Negro' },
              { id: 'gold', label: 'Dorado' },
              { id: 'none', label: 'Sin Marco' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFrameStyle(f.id as any)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  frameStyle === f.id
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Reference Scale */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">Escala:</span>
          <div className="inline-flex rounded-lg border border-stone-200 p-0.5 bg-stone-50">
            {[
              { id: 'chair', label: 'Sillón' },
              { id: 'person', label: 'Estatura (1.70m)' },
              { id: 'bench', label: 'Banca' },
            ].map((elem) => (
              <button
                key={elem.id}
                type="button"
                onClick={() => setRoomElement(elem.id as any)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  roomElement === elem.id
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {elem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ruler Toggle */}
        <button
          type="button"
          onClick={() => setShowRuler(!showRuler)}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border transition-colors ${
            showRuler
              ? 'bg-stone-900 text-white border-stone-900'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{showRuler ? 'Ocultar Cotas' : 'Ver Cotas'}</span>
        </button>
      </div>

      {/* Main Room Canvas Viewport */}
      <div
        className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden shadow-inner flex flex-col justify-between transition-colors duration-500"
        style={{ backgroundColor: currentWall.hex }}
      >
        {/* Soft studio ceiling spotlights cast on wall */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />

        {/* Baseboard & Parquet Flooring */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-[#9A7B56] border-t-8 border-[#3D2817] shadow-2xl flex flex-col justify-end">
          {/* Parquet wooden floor planks perspective lines */}
          <svg className="w-full h-full opacity-40 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 120">
            {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((x) => (
              <line key={x} x1={x} y1="0" x2={(x - 500) * 1.5 + 500} y2="120" stroke="#4A3320" strokeWidth="1.5" />
            ))}
            <line x1="0" y1="40" x2="1000" y2="40" stroke="#4A3320" strokeWidth="0.8" />
            <line x1="0" y1="80" x2="1000" y2="80" stroke="#4A3320" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Center Artwork Placement on Wall */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-8 pb-12">
          {/* Wall drop shadow under the physical frame */}
          <div className="relative group">
            <div className="relative w-52 sm:w-64 md:w-72 transition-transform duration-300 group-hover:scale-[1.02]">
              <ArtworkVisual
                artwork={artwork}
                frameStyle={frameStyle}
                aspectRatioClass={artwork.technique === 'Acuarela y Tinta' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                showMat={frameStyle !== 'none'}
              />
            </div>

            {/* Metric Dimension Callout Overlay */}
            {showRuler && (
              <div className="absolute -top-7 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none">
                <span className="px-2 py-0.5 text-[11px] font-mono font-medium bg-stone-900/90 text-white rounded shadow-sm">
                  {artwork.dimensions} · Marco: {frameStyle === 'none' ? 'Sin marco' : frameStyle}
                </span>
              </div>
            )}

            {/* Museum height level line */}
            {showRuler && (
              <div className="absolute top-1/2 -left-28 sm:-left-36 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <div className="h-px w-8 sm:w-16 bg-stone-700/60 border-t border-dashed border-stone-500" />
                <span className="text-[10px] font-mono tracking-wider uppercase text-stone-600 bg-stone-100/90 px-1.5 py-0.5 rounded shadow-xs whitespace-nowrap">
                  145 cm Centro Ocular
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Ground Reference Elements (Furniture / Silhouettes) */}
        <div className="relative z-20 px-8 sm:px-14 pb-4 flex items-end justify-between pointer-events-none">
          {roomElement === 'chair' && (
            <div className="flex items-end gap-3 translate-y-6">
              {/* Architectural Armchair Silhouette SVG */}
              <svg width="180" height="150" viewBox="0 0 200 170" fill="none" className="drop-shadow-xl">
                {/* Chair shadow */}
                <ellipse cx="100" cy="160" rx="75" ry="10" fill="#1C1917" opacity="0.4" />
                {/* Legs */}
                <line x1="45" y1="120" x2="35" y2="160" stroke="#1A1816" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="155" y1="120" x2="165" y2="160" stroke="#1A1816" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="75" y1="120" x2="68" y2="158" stroke="#1A1816" strokeWidth="4" strokeLinecap="round" />
                <line x1="125" y1="120" x2="132" y2="158" stroke="#1A1816" strokeWidth="4" strokeLinecap="round" />
                {/* Seat Cushion */}
                <path d="M40,115 Q100,125 160,115 L155,100 Q100,105 45,100 Z" fill="#2E2A27" />
                {/* Curved Modern Backrest */}
                <path d="M45,100 C45,50 65,30 100,30 C135,30 155,50 155,100" stroke="#2E2A27" strokeWidth="18" strokeLinecap="round" fill="none" />
              </svg>

              {/* Side Accent Table with Vase */}
              <svg width="70" height="110" viewBox="0 0 80 120" fill="none" className="drop-shadow-lg hidden sm:block">
                <line x1="20" y1="70" x2="15" y2="115" stroke="#1F1C18" strokeWidth="3" />
                <line x1="60" y1="70" x2="65" y2="115" stroke="#1F1C18" strokeWidth="3" />
                <ellipse cx="40" cy="70" rx="35" ry="8" fill="#3D3833" />
                {/* Ceramic Vase */}
                <path d="M33,70 C30,55 25,48 35,42 L45,42 C55,48 50,55 47,70 Z" fill="#E6E0D4" />
                <line x1="40" y1="42" x2="42" y2="20" stroke="#606B56" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          )}

          {roomElement === 'person' && (
            <div className="flex items-end gap-4 translate-y-3">
              {/* Human scale silhouette (1.70m) */}
              <div className="flex flex-col items-center">
                <svg width="85" height="240" viewBox="0 0 100 280" fill="none" className="drop-shadow-2xl">
                  {/* Shadow */}
                  <ellipse cx="50" cy="275" rx="30" ry="5" fill="#1C1917" opacity="0.45" />
                  {/* Head */}
                  <circle cx="50" cy="35" r="15" fill="#262320" />
                  {/* Neck & Shoulders */}
                  <path d="M40,55 C30,65 25,85 25,120 L35,180 L38,270 L48,270 L50,190 L52,270 L62,270 L65,180 L75,120 C75,85 70,65 60,55 Z" fill="#262320" />
                </svg>
                <span className="text-[10px] font-mono text-white/90 bg-stone-900/80 px-1.5 py-0.5 rounded -mt-2">
                  Estatura 1.70 m
                </span>
              </div>
            </div>
          )}

          {roomElement === 'bench' && (
            <div className="translate-y-5">
              {/* Museum gallery bench */}
              <svg width="220" height="90" viewBox="0 0 240 100" fill="none" className="drop-shadow-xl">
                <ellipse cx="120" cy="95" rx="100" ry="6" fill="#1C1917" opacity="0.4" />
                <rect x="20" y="55" width="200" height="14" rx="3" fill="#3A281E" />
                <line x1="45" y1="69" x2="40" y2="95" stroke="#1A1816" strokeWidth="5" strokeLinecap="round" />
                <line x1="195" y1="69" x2="200" y2="95" stroke="#1A1816" strokeWidth="5" strokeLinecap="round" />
                <line x1="120" y1="69" x2="120" y2="95" stroke="#1A1816" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          )}

          {/* Quick info badge in bottom corner */}
          <div className="p-3 bg-white/90 backdrop-blur-md rounded-xl border border-stone-200/80 shadow-md text-right">
            <p className="text-[11px] uppercase tracking-wider text-stone-500 font-mono">Espacio Simulado</p>
            <p className="text-xs font-serif font-bold text-stone-900">{currentWall.name}</p>
            <p className="text-[10px] text-stone-500">Muro estándar: 2.80 m de altura</p>
          </div>
        </div>
      </div>

      {/* Reassurance text based on survey */}
      <div className="flex items-center gap-3 p-3.5 bg-stone-100 rounded-xl text-stone-700 text-xs">
        <Sparkles className="w-4 h-4 text-stone-800 shrink-0" />
        <span>
          <strong>Proporción fiel garantizada:</strong> Las medidas de {artwork.dimensions} se proyectan a escala milimétrica en relación al mobiliario estándar y la línea ocular de museografía (145 cm).
        </span>
      </div>
    </div>
  );
};
