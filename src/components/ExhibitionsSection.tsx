import React, { useState } from 'react';
import { ExhibitionEvent, UserTicket } from '../types';
import { 
  Calendar, MapPin, Clock, Car, Bus, Users, 
  CheckCircle2, Ticket, QrCode, Download, Shirt, Info, ArrowRight 
} from 'lucide-react';

interface ExhibitionsSectionProps {
  exhibitions: ExhibitionEvent[];
  onTicketBooked: (ticket: UserTicket) => void;
}

export const ExhibitionsSection: React.FC<ExhibitionsSectionProps> = ({
  exhibitions,
  onTicketBooked,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<ExhibitionEvent | null>(null);
  const [bookingName, setBookingName] = useState('Angie Paola Madrigal');
  const [bookingEmail, setBookingEmail] = useState('paola.madrigal@unilibre.edu.co');
  const [issuedTicket, setIssuedTicket] = useState<UserTicket | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'free' | 'rsvp'>('all');

  const filteredExhibitions = exhibitions.filter((ev) => {
    if (filterType === 'free') return ev.accessType === 'Entrada Libre';
    if (filterType === 'rsvp') return ev.accessType === 'Inscripción Previa Requerida';
    return true;
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const ticket: UserTicket = {
      id: `TCK-${Date.now().toString().slice(-6)}`,
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      date: selectedEvent.dates,
      attendeeName: bookingName,
      attendeeEmail: bookingEmail,
      qrCode: `LUMINA-QR-${selectedEvent.id}-${Date.now()}`,
      bookingTime: new Date().toLocaleDateString('es-CO'),
      dressCode: selectedEvent.dressCode,
    };

    setIssuedTicket(ticket);
    onTicketBooked(ticket);
  };

  return (
    <section id="exposiciones" className="py-16 sm:py-24 bg-[#F5F2EB] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-1">
              Agenda Cultural & Curaduría 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 leading-tight">
              Exposiciones, Vernissages y Diálogos
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Programación pensada para vivir el arte de cerca. Encuentra información logística completa: tipo de acceso, vestimenta recomendada, parqueadero y transporte para Bogotá.
            </p>
          </div>

          {/* Filter segment */}
          <div className="inline-flex rounded-lg border border-stone-300 p-1 bg-white shadow-xs self-start md:self-end">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterType === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Todos los Eventos ({exhibitions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('free')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterType === 'free'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Entrada Libre (Sin Reserva)
            </button>
            <button
              type="button"
              onClick={() => setFilterType('rsvp')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterType === 'rsvp'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Inscripción Previa
            </button>
          </div>
        </div>

        {/* Exhibitions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredExhibitions.map((event) => {
            const isFull = event.capacityRegistered >= event.capacityMax;
            return (
              <article
                key={event.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Banner */}
                  <div
                    className="h-32 sm:h-36 p-6 flex flex-col justify-between text-white relative overflow-hidden"
                    style={{ backgroundColor: event.visualColor }}
                  >
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-mono tracking-widest uppercase bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded">
                        {event.dates}
                      </span>
                      <span
                        className={`text-[11px] font-medium px-2.5 py-1 rounded ${
                          event.accessType === 'Entrada Libre'
                            ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-500/40'
                            : 'bg-amber-950/80 text-amber-200 border border-amber-500/40'
                        }`}
                      >
                        {event.accessType}
                      </span>
                    </div>

                    <div className="z-10">
                      <p className="text-xs text-white/80 font-mono">{event.location}</p>
                    </div>

                    {/* Subtle aesthetic backdrop circles */}
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-1 font-medium">{event.subtitle}</p>
                      <p className="text-xs text-stone-500 mt-0.5">Curaduría: {event.curator}</p>
                    </div>

                    <p className="text-xs text-stone-700 leading-relaxed font-sans">
                      {event.description}
                    </p>

                    {/* Logistics Card - Directly solving the survey pain points */}
                    <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 text-xs text-stone-700">
                      <div className="flex items-start gap-2">
                        <Shirt className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-stone-900">Código de Vestimenta:</strong>{' '}
                          <span>{event.dressCode}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Car className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-stone-900">Parqueadero:</strong>{' '}
                          <span>{event.parkingInfo}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Bus className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-stone-900">Transporte y Rutas:</strong>{' '}
                          <span>{event.transitRoutes}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1 border-t border-stone-200 text-[11px] text-stone-500 font-mono">
                        <Users className="w-3.5 h-3.5" />
                        <span>
                          Cupo: {event.capacityRegistered}/{event.capacityMax} personas confirmadas
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 font-mono font-semibold">
                        Puntos Destacados:
                      </span>
                      <ul className="text-xs text-stone-600 space-y-1">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-stone-400">·</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  {event.accessType === 'Entrada Libre' ? (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                      <span className="text-xs font-medium text-emerald-800 block">
                        Entrada Libre · No requiere boleto previo
                      </span>
                      <p className="text-[11px] text-emerald-700 mt-0.5">
                        Puedes asistir directamente en el horario de la galería.
                      </p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      disabled={isFull}
                      onClick={() => {
                        setSelectedEvent(event);
                        setIssuedTicket(null);
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-medium transition-all shadow-sm flex items-center justify-center gap-2 ${
                        isFull
                          ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                          : 'bg-stone-900 text-white hover:bg-stone-800'
                      }`}
                    >
                      <Ticket className="w-4 h-4" />
                      <span>{isFull ? 'Cupos Agotados' : 'Reservar Entrada Gratuita (Pase Digital)'}</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Reservation & Digital Pass Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-stone-800" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {issuedTicket ? 'Tu Pase Digital Lumina' : 'Reserva de Entrada a Exposición'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {!issuedTicket ? (
                <form onSubmit={handleBook} className="space-y-4">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-stone-900">{selectedEvent.title}</h4>
                    <p className="text-xs text-stone-600 mt-1">{selectedEvent.dates} · {selectedEvent.location}</p>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
                    <p><strong>Costo:</strong> $0 COP (Acceso gratuito cortesía de Galería Lumina)</p>
                    <p><strong>Vestimenta sugerida:</strong> {selectedEvent.dressCode}</p>
                    <p><strong>Disponibilidad:</strong> Cupo confirmado de inmediato con código QR</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Nombre y Apellido del Asistente</label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Correo Electrónico (para recibir el Ticket QR)</label>
                    <input
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(null)}
                      className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-sm"
                    >
                      Generar Pase Digital (QR)
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-5 text-center">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-stone-900">¡Tu entrada está confirmada!</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Presenta este pase digital en el control de acceso de la galería.
                    </p>
                  </div>

                  {/* Aesthetic Digital Ticket Representation */}
                  <div className="bg-[#FAF7F0] border-2 border-dashed border-stone-300 rounded-xl p-5 text-left relative overflow-hidden shadow-xs">
                    <div className="flex items-start justify-between border-b border-stone-200 pb-3 mb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono">
                          PASE OFICIAL DE INVITADO
                        </span>
                        <h5 className="font-serif font-bold text-stone-900 text-base">{issuedTicket.eventTitle}</h5>
                        <p className="text-xs text-stone-600">{issuedTicket.date}</p>
                      </div>
                      <span className="text-xs font-mono font-bold bg-stone-200 px-2 py-0.5 rounded">
                        {issuedTicket.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase font-mono block">Titular</span>
                        <strong>{issuedTicket.attendeeName}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase font-mono block">Código Vestimenta</span>
                        <span>{issuedTicket.dressCode}</span>
                      </div>
                    </div>

                    {/* QR Code Simulation */}
                    <div className="flex flex-col items-center justify-center pt-3 border-t border-stone-200">
                      <div className="p-3 bg-white border border-stone-300 rounded-lg shadow-xs">
                        <QrCode className="w-24 h-24 text-stone-900" />
                      </div>
                      <span className="text-[10px] font-mono text-stone-500 mt-1">{issuedTicket.qrCode}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => alert('Pase digital guardado en tu dispositivo.')}
                      className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Descargar Pase (PDF / Wallet)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(null)}
                      className="px-4 py-2 bg-stone-100 text-stone-700 text-xs font-medium rounded-lg hover:bg-stone-200 transition-colors"
                    >
                      Listo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
