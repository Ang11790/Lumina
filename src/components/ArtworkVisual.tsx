import React from 'react';
import { Artwork } from '../types';

interface ArtworkVisualProps {
  artwork: Artwork;
  frameStyle?: 'wood' | 'black' | 'gold' | 'none';
  aspectRatioClass?: string;
  className?: string;
  showMat?: boolean;
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({
  artwork,
  frameStyle = 'wood',
  aspectRatioClass = 'aspect-[4/3]',
  className = '',
  showMat = true,
}) => {
  const { visualSvg } = artwork;

  // Frame styling
  const frameClasses = {
    wood: 'border-[10px] sm:border-[14px] border-[#8A5A36] shadow-xl',
    black: 'border-[8px] sm:border-[12px] border-[#1C1917] shadow-2xl',
    gold: 'border-[10px] sm:border-[14px] border-[#BFA054] shadow-2xl',
    none: 'shadow-lg',
  }[frameStyle];

  const matClasses = showMat && frameStyle !== 'none'
    ? 'p-3 sm:p-5 bg-[#FAF7F2] ring-1 ring-stone-300/60'
    : '';

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${frameClasses} ${matClasses} ${className}`}
      style={{ backgroundColor: visualSvg.bgColor }}
    >
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${aspectRatioClass}`}>
        {/* Render distinctive visual composition based on artwork SVG type */}
        {artwork.visualSvg.type === 'landscape' && (
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id={`sky-${artwork.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFD8CB" />
                <stop offset="60%" stopColor="#C8BEB0" />
                <stop offset="100%" stopColor="#9FA7AA" />
              </linearGradient>
              <filter id={`mist-${artwork.id}`}>
                <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <rect width="800" height="600" fill={`url(#sky-${artwork.id})`} />
            
            {/* Distant mountain ridges */}
            <path d="M-50,420 Q120,290 320,380 T700,310 L850,390 L850,600 L-50,600 Z" fill="#75828D" opacity="0.65" />
            <path d="M-30,470 Q240,340 480,440 T850,380 L850,600 L-30,600 Z" fill="#586775" opacity="0.85" />
            
            {/* Mist bands */}
            <ellipse cx="400" cy="410" rx="420" ry="80" fill="#EAE5DC" opacity="0.7" filter={`url(#mist-${artwork.id})`} />
            
            {/* Foreground escarpment & textures */}
            <path d="M-20,530 Q220,470 510,510 T850,480 L850,600 L-20,600 Z" fill="#3D4A54" />
            <circle cx="210" cy="510" r="4" fill="#D3C7B5" opacity="0.8" />
            <circle cx="580" cy="485" r="3" fill="#D3C7B5" opacity="0.7" />
            
            {/* Delicate horizon line */}
            <line x1="80" y1="360" x2="720" y2="360" stroke="#FAF7F2" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.5" />
          </svg>
        )}

        {artwork.visualSvg.type === 'flora' && (
          <svg viewBox="0 0 600 800" className="w-full h-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id={`glow-${artwork.id}`} cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="#FFF7ED" />
                <stop offset="80%" stopColor="#F5ECE0" />
                <stop offset="100%" stopColor="#EADCCB" />
              </radialGradient>
            </defs>
            <rect width="600" height="800" fill={`url(#glow-${artwork.id})`} />
            
            {/* Botanical stems and foliage */}
            <path d="M300,750 Q310,520 280,380 T320,180" stroke="#3D593A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M290,560 Q210,520 180,440" stroke="#4B6946" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M300,460 Q380,410 410,340" stroke="#4B6946" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            
            {/* Leaves */}
            <path d="M180,440 C170,390 230,420 285,490 C240,490 200,480 180,440 Z" fill="#587A54" opacity="0.9" />
            <path d="M410,340 C430,300 370,330 305,400 C350,390 390,370 410,340 Z" fill="#698E64" opacity="0.85" />
            
            {/* Caléndula Flower petals */}
            <g transform="translate(320, 180)">
              {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((deg) => (
                <ellipse
                  key={deg}
                  cx="0"
                  cy="-45"
                  rx="11"
                  ry="42"
                  transform={`rotate(${deg})`}
                  fill={deg % 2 === 0 ? '#EA8322' : '#F59E0B'}
                  opacity="0.92"
                />
              ))}
              <circle cx="0" cy="0" r="28" fill="#78350F" />
              <circle cx="0" cy="0" r="23" fill="#9A3412" />
              <circle cx="0" cy="0" r="14" fill="#B45309" />
            </g>
            
            {/* Artist signature mark */}
            <text x="450" y="740" fill="#8C7A6B" fontFamily="serif" fontSize="14" fontStyle="italic">M. Echeverry '26</text>
          </svg>
        )}

        {artwork.visualSvg.type === 'sculpture' && (
          <svg viewBox="0 0 700 700" className="w-full h-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id={`bronze-${artwork.id}`} x1="0.2" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#C99458" />
                <stop offset="40%" stopColor="#8C5228" />
                <stop offset="85%" stopColor="#3E2412" />
                <stop offset="100%" stopColor="#1A0F07" />
              </linearGradient>
              <radialGradient id={`spot-${artwork.id}`} cx="45%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="700" height="700" fill="#F4EEE5" />
            
            {/* Cast shadow */}
            <ellipse cx="350" cy="580" rx="220" ry="42" fill="#292524" opacity="0.25" />
            
            {/* Wooden pedestal block */}
            <polygon points="200,560 500,560 550,510 250,510" fill="#5E4029" />
            <polygon points="200,560 250,510 250,550 200,600" fill="#442D1C" />
            <polygon points="200,560 500,560 500,600 200,600" fill="#503522" />
            
            {/* Dynamic bronze ribbon / facet */}
            <path
              d="M320,160 C420,120 490,260 410,360 C330,460 260,330 330,260 C380,210 440,310 370,480"
              stroke={`url(#bronze-${artwork.id})`}
              strokeWidth="56"
              fill="none"
              strokeLinecap="round"
            />
            {/* Accent patina vein */}
            <path
              d="M320,160 C420,120 490,260 410,360"
              stroke="#0D9488"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Specular highlight */}
            <circle cx="340" cy="220" r="180" fill={`url(#spot-${artwork.id})`} />
          </svg>
        )}

        {artwork.visualSvg.type === 'abstract-geo' && (
          <svg viewBox="0 0 700 700" className="w-full h-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
            <rect width="700" height="700" fill="#0F172A" />
            <defs>
              <linearGradient id={`geo-${artwork.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
            {/* Algorithmic concentric rings and flow lines */}
            {[60, 110, 160, 210, 260, 310].map((radius, i) => (
              <circle
                key={radius}
                cx="350"
                cy="350"
                r={radius}
                stroke={`url(#geo-${artwork.id})`}
                strokeWidth={1.5 + (i * 0.4)}
                strokeDasharray={`${20 + i * 15} ${8 + i * 6}`}
                fill="none"
                opacity={0.35 + (i * 0.1)}
              />
            ))}
            {/* Vector flow ribbons */}
            <path
              d="M100,500 C250,200 450,600 620,180"
              stroke="#38BDF8"
              strokeWidth="4"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M120,530 C270,230 470,630 640,210"
              stroke="#818CF8"
              strokeWidth="2.5"
              fill="none"
              opacity="0.75"
            />
            {/* Key mathematical nodes */}
            <circle cx="350" cy="350" r="7" fill="#F8FAFC" />
            <circle cx="250" cy="280" r="4" fill="#38BDF8" />
            <circle cx="480" cy="420" r="5" fill="#38BDF8" />
          </svg>
        )}

        {artwork.visualSvg.type === 'minimalist' && (
          <svg viewBox="0 0 700 700" className="w-full h-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
            <rect width="700" height="700" fill="#F5F2EB" />
            {/* Deep charcoal textured block */}
            <rect x="150" y="160" width="400" height="380" fill="#201E1C" rx="3" />
            
            {/* Fine 22k Gold foil bar */}
            <rect x="220" y="320" width="260" height="24" fill="#D4AF37" rx="1" />
            
            {/* Graphite linear balance */}
            <line x1="120" y1="332" x2="580" y2="332" stroke="#686560" strokeWidth="1.2" strokeDasharray="4 8" />
            <line x1="350" y1="120" x2="350" y2="580" stroke="#686560" strokeWidth="0.8" opacity="0.4" />
            
            {/* Small gold disc counterweight */}
            <circle cx="480" cy="220" r="14" fill="#D4AF37" />
          </svg>
        )}

        {artwork.visualSvg.type === 'portrait' && (
          <svg viewBox="0 0 600 800" className="w-full h-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="800" fill="#EAE5DC" />
            {/* Gothic arch silhouette */}
            <path
              d="M180,680 L180,360 C180,240 240,180 300,140 C360,180 420,240 420,360 L420,680 Z"
              fill="#374754"
              opacity="0.9"
            />
            {/* Window muntins and mist reflections */}
            <path
              d="M210,660 L210,370 C210,260 260,210 300,180 C340,210 390,260 390,370 L390,660 Z"
              fill="#526372"
            />
            <line x1="300" y1="180" x2="300" y2="660" stroke="#BAC5CE" strokeWidth="2" opacity="0.6" />
            <line x1="210" y1="440" x2="390" y2="440" stroke="#BAC5CE" strokeWidth="2" opacity="0.6" />
            <line x1="210" y1="560" x2="390" y2="560" stroke="#BAC5CE" strokeWidth="2" opacity="0.6" />
            
            {/* Tequendama mist wash */}
            <path
              d="M100,560 Q280,480 450,530 T550,500 L550,800 L100,800 Z"
              fill="#DCE3E8"
              opacity="0.75"
            />
          </svg>
        )}
      </div>

      {/* Subtle museum glass reflection sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
    </div>
  );
};
