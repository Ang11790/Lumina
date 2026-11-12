import React, { useState } from 'react';
import { 
  ARTWORKS_DATA, 
  EXHIBITIONS_DATA, 
  COURSES_DATA, 
  ARTISTS_DATA 
} from './data/mockData';
import { Artwork, UserCertificate, UserTicket } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArtworkCatalog } from './components/ArtworkCatalog';
import { ArtworkModal } from './components/ArtworkModal';
import { ExhibitionsSection } from './components/ExhibitionsSection';
import { CoursesSection } from './components/CoursesSection';
import { ArtistsSection } from './components/ArtistsSection';
import { RoomVisualizer } from './components/RoomVisualizer';
import { UserAccountDrawer } from './components/UserAccountDrawer';
import { InformationArchitectureModal } from './components/InformationArchitectureModal';
import { Footer } from './components/Footer';
import { X, Sparkles, Layers } from 'lucide-react';

export default function App() {
  // State
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [standaloneVisualizerArtwork, setStandaloneVisualizerArtwork] = useState<Artwork | null>(null);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['ob-102']); // initial saved piece
  const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState<boolean>(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState<boolean>(false);

  // Pre-seeded user items for immediate testing of the UX flow
  const [userCertificates, setUserCertificates] = useState<UserCertificate[]>([
    {
      id: 'CERT-840219',
      artworkId: 'ob-102',
      artworkTitle: 'Fragmento Botánico: Caléndula Silvestre',
      artistName: 'Mateo Echeverry Londoño',
      dateIssued: '10 de Marzo, 2026',
      certificateHash: '0x3E1C8490B4A77D2F18C92B5A01948C7F003',
      registeredTo: 'Angie Paola Madrigal',
      technique: 'Acuarela y Tinta',
      dimensions: '35 × 25 cm',
    }
  ]);

  const [userTickets, setUserTickets] = useState<UserTicket[]>([
    {
      id: 'TCK-992140',
      eventId: 'ev-02',
      eventTitle: 'Vernissage Nocturno: Algoritmos y Territorio',
      date: 'Jueves 26 de Marzo, 2026 · 6:30 pm',
      attendeeName: 'Angie Paola Madrigal',
      attendeeEmail: 'paola.madrigal@unilibre.edu.co',
      qrCode: 'LUMINA-QR-ev-02-BOGOTA',
      bookingTime: '12/11/2026',
      dressCode: 'Cóctel contemporáneo o creativo',
    }
  ]);

  // Wishlist toggle handler
  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Ticket booking handler
  const handleTicketBooked = (newTicket: UserTicket) => {
    setUserTickets((prev) => [newTicket, ...prev]);
  };

  // Certificate issued handler (on successful purchase)
  const handleCertificateIssued = (newCert: UserCertificate) => {
    setUserCertificates((prev) => [newCert, ...prev]);
  };

  const wishlistArtworks = ARTWORKS_DATA.filter((art) => wishlistIds.includes(art.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-stone-800 selection:text-white">
      
      {/* Universal Top Navigation Header */}
      <Header
        wishlistCount={wishlistIds.length}
        certificatesCount={userCertificates.length}
        onOpenAccount={() => setIsAccountDrawerOpen(true)}
        onOpenAIModal={() => setIsAIModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Curatorial Hero with Operational Ribbon */}
        <Hero
          featuredArtwork={ARTWORKS_DATA[0]}
          featuredExhibition={EXHIBITIONS_DATA[0]}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onOpenAIModal={() => setIsAIModalOpen(true)}
        />

        {/* 1. Obras de Arte Catalog & Search (Marketplace & Simulator) */}
        <ArtworkCatalog
          artworks={ARTWORKS_DATA}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onOpenVisualizer={(art) => setStandaloneVisualizerArtwork(art)}
        />

        {/* 2. Exposiciones & Eventos Culturales (Logistics & QR Pass) */}
        <ExhibitionsSection
          exhibitions={EXHIBITIONS_DATA}
          onTicketBooked={handleTicketBooked}
        />

        {/* 3. Cursos & Talleres de Formación Artística */}
        <CoursesSection
          courses={COURSES_DATA}
        />

        {/* 4. Artistas, Biografías y Cápsulas de Video */}
        <ArtistsSection
          artists={ARTISTS_DATA}
          artworks={ARTWORKS_DATA}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
        />
      </main>

      {/* Universal Institutional Footer */}
      <Footer onOpenAIModal={() => setIsAIModalOpen(true)} />

      {/* Floating Action Button for IA Academic Document */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={() => setIsAIModalOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-stone-900 text-white rounded-full shadow-2xl hover:bg-stone-800 transition-all hover:scale-105 border border-stone-700 text-xs font-mono font-medium"
          title="Ver Arquitectura de la Información y Análisis UX"
        >
          <Layers className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">Arquitectura de la Información</span>
          <span className="sm:hidden">Doc UX</span>
        </button>
      </div>

      {/* Full Artwork Modal (Ficha Técnica, Video, Room Visualizer, Checkout) */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          artist={ARTISTS_DATA.find((a) => a.id === selectedArtwork.artistId)}
          isWishlisted={wishlistIds.includes(selectedArtwork.id)}
          onToggleWishlist={() => handleToggleWishlist(selectedArtwork.id)}
          onClose={() => setSelectedArtwork(null)}
          onViewArtist={(artistId) => {
            setSelectedArtwork(null);
            const el = document.getElementById('artistas');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onCertificateIssued={handleCertificateIssued}
        />
      )}

      {/* Standalone Room Visualizer Modal */}
      {standaloneVisualizerArtwork && (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 p-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">
                  Simulador de Pared Real
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {standaloneVisualizerArtwork.title}
                </h3>
                <p className="text-xs text-stone-600">
                  {standaloneVisualizerArtwork.artistName} · {standaloneVisualizerArtwork.dimensions}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStandaloneVisualizerArtwork(null)}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <RoomVisualizer artwork={standaloneVisualizerArtwork} />

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-stone-900">
                ${standaloneVisualizerArtwork.priceCOP.toLocaleString('es-CO')} COP
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStandaloneVisualizerArtwork(null)}
                  className="px-4 py-2 bg-stone-100 text-stone-700 text-xs rounded-lg hover:bg-stone-200"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const art = standaloneVisualizerArtwork;
                    setStandaloneVisualizerArtwork(null);
                    setSelectedArtwork(art);
                  }}
                  className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800"
                >
                  Adquirir Obra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Account / Wishlist / Certificates Drawer */}
      <UserAccountDrawer
        isOpen={isAccountDrawerOpen}
        onClose={() => setIsAccountDrawerOpen(false)}
        wishlistArtworks={wishlistArtworks}
        onRemoveFromWishlist={handleToggleWishlist}
        certificates={userCertificates}
        tickets={userTickets}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
      />

      {/* Information Architecture Academic Documentation Modal */}
      {isAIModalOpen && (
        <InformationArchitectureModal onClose={() => setIsAIModalOpen(false)} />
      )}
    </div>
  );
}
