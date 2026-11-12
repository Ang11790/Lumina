import React, { useState } from 'react';
import { 
  X, Layers, Compass, Tag, Search, Smartphone, 
  CheckCircle, FileText, Users, Award, Shield, ArrowRight, ExternalLink 
} from 'lucide-react';

interface InformationArchitectureModalProps {
  onClose: () => void;
}

export const InformationArchitectureModal: React.FC<InformationArchitectureModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'organization' | 'labeling' | 'navigation' | 'ux-findings'>('sitemap');

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-4 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5] shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">
              UNIVERSIDAD LIBRE · SEDE BOSQUE POPULAR · INFORME UX 2026
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Arquitectura de Información (AI) & Constitución UX/UI
            </h3>
            <p className="text-xs text-stone-600">
              Diseño centrado en el usuario aplicado a la Galería de Arte Digital Lumina · Investigadora: Angie Paola Madrigal
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex border-b border-stone-200 px-6 bg-white overflow-x-auto shrink-0 scrollbar-none">
          {[
            { id: 'sitemap', label: '1. Mapa del Sitio (Sitemap)', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'organization', label: '2. Organización & Audiencias', icon: <Compass className="w-3.5 h-3.5" /> },
            { id: 'labeling', label: '3. Sistema de Etiquetado', icon: <Tag className="w-3.5 h-3.5" /> },
            { id: 'navigation', label: '4. Navegación & Búsqueda', icon: <Search className="w-3.5 h-3.5" /> },
            { id: 'ux-findings', label: '5. Hallazgos UX (17 Usuarios)', icon: <Users className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-xs text-stone-700 leading-relaxed">
          
          {activeTab === 'sitemap' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Estructura Jerárquica del Sitio (Sitemap)
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Arquitectura híbrida de 3 niveles que resuelve el problema de dispersión de información detectado en la encuesta.
                </p>
              </div>

              {/* Sitemap Interactive Visual Diagram */}
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-6">
                {/* Level 0: Root */}
                <div className="flex justify-center">
                  <div className="p-3 bg-stone-900 text-white rounded-xl shadow-md text-center font-serif text-sm font-bold px-6">
                    [LUMINA] Home / Galería Central
                    <span className="block text-[10px] font-sans font-normal text-stone-300 mt-0.5">
                      Cinta Operativa: Horarios, Ubicación Bogotá, Entradas
                    </span>
                  </div>
                </div>

                <div className="w-px h-6 bg-stone-300 mx-auto" />

                {/* Level 1: Primary Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Pillar 1 */}
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 font-bold uppercase block">Pilar 1</span>
                    <h5 className="font-serif font-bold text-stone-900 text-sm">Obras de Arte (Venta)</h5>
                    <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside">
                      <li>Filtros por Técnica (Óleo, Acrílico, Escultura, Digital)</li>
                      <li>Filtro Presupuesto (&lt; $500k COP / Inversión)</li>
                      <li>Simulador "Ver en tu espacio" (Color pared y escala)</li>
                      <li>Ficha Técnica con Certificado Notarial</li>
                      <li>Checkout transparente (Nequi, PSE, Tarjeta)</li>
                    </ul>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 font-bold uppercase block">Pilar 2</span>
                    <h5 className="font-serif font-bold text-stone-900 text-sm">Exposiciones & Eventos</h5>
                    <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside">
                      <li>Estado de Acceso: Entrada Libre vs Inscripción Previa</li>
                      <li>Ficha Logística: Vestimenta, Parqueadero y Transporte</li>
                      <li>Reserva Express en 1 clic</li>
                      <li>Generador de Pase Digital con Código QR</li>
                    </ul>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 font-bold uppercase block">Pilar 3</span>
                    <h5 className="font-serif font-bold text-stone-900 text-sm">Cursos & Talleres</h5>
                    <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside">
                      <li>Modalidades: 100% Presencial, Híbrido, Virtual</li>
                      <li>Temarios completos sesión por sesión</li>
                      <li>Kit de Materiales incluidos desglosados</li>
                      <li>Diplomados de extensión con aval institucional</li>
                    </ul>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 font-bold uppercase block">Pilar 4</span>
                    <h5 className="font-serif font-bold text-stone-900 text-sm">Artistas & Comunidad</h5>
                    <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside">
                      <li>Perfiles con Biografía y Trayectoria</li>
                      <li>Cápsulas de Video sobre Concepto y Proceso</li>
                      <li>Premios, Residencias y Obras en Venta</li>
                      <li>Lista de Deseos (Wishlist) y Notificaciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'organization' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Esquemas de Organización Centrados en las Personas
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Adaptación directa a las dos personas identificadas en el estudio UX de Lumina:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Persona 1 */}
                <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold">
                    Persona 1 · Joven Explorador Cultural (18 a 25 / 40 años)
                  </span>
                  <h5 className="font-serif text-lg font-bold text-stone-900">
                    "Quiero descubrir, aprender y vivir el arte sin barreras"
                  </h5>
                  <p className="text-xs text-stone-700">
                    <strong>Dolores detectados:</strong> Falta de información clara sobre costos de entrada, miedo a requerir reserva obligatoria, temor a vestimenta formal, presupuesto limitado (&lt; $500.000 COP).
                  </p>
                  <p className="text-xs text-stone-700">
                    <strong>Soluciones de Organización en Lumina:</strong>
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1 list-disc list-inside">
                    <li>Filtro prioritario de obras accesibles menores a $500.000 COP.</li>
                    <li>Badges directos de "Entrada Libre" y "Código: Casual sin restricciones".</li>
                    <li>Cursos híbridos y virtuales accesibles para estudiantes.</li>
                    <li>Experiencia móvil táctil rápida para consumir desde redes sociales.</li>
                  </ul>
                </div>

                {/* Persona 2 */}
                <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-200/80 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                    Persona 2 · Coleccionista Profesional & Inversionista (26 a 60+ años)
                  </span>
                  <h5 className="font-serif text-lg font-bold text-stone-900">
                    "Busco piezas auténticas con respaldo que conecten con mi historia"
                  </h5>
                  <p className="text-xs text-stone-700">
                    <strong>Dolores detectados:</strong> Desconfianza por falta de certificación notarial, fichas técnicas escuetas, procesos de pago poco claros o inseguros.
                  </p>
                  <p className="text-xs text-stone-700">
                    <strong>Soluciones de Organización en Lumina:</strong>
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1 list-disc list-inside">
                    <li>Certificados de autenticidad digitales descargables con hash seguro.</li>
                    <li>Ficha técnica completa: técnica, soporte, medidas exactas y procedencia.</li>
                    <li>Pasarelas seguras colombianas: PSE, Nequi, Daviplata y tarjetas.</li>
                    <li>Simulador en espacio real para calcular proporciones en muros residenciales.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'labeling' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Sistema y Matriz de Rotulado / Etiquetado (Labeling)
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Se eliminaron las ambigüedades y la jerga mecánica o pretenciosa en favor de términos humanos, naturales y transparentes.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 text-stone-800 font-mono text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3 border-b border-stone-200">Área</th>
                      <th className="p-3 border-b border-stone-200 text-rose-800">Rótulo Ambiguo / Descartado</th>
                      <th className="p-3 border-b border-stone-200 text-emerald-800">Rótulo Lumina Implementado</th>
                      <th className="p-3 border-b border-stone-200">Justificación UX Centrada en el Usuario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Catálogo</td>
                      <td className="p-3 text-rose-700">"Store" / "Shop" / "Adquisición"</td>
                      <td className="p-3 font-medium text-emerald-900">"Obras de Arte en Venta"</td>
                      <td className="p-3 text-stone-600">Clarifica de inmediato que las obras están a la venta y son piezas originales.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Presupuesto</td>
                      <td className="p-3 text-rose-700">"Tier 1" / "Gama Baja"</td>
                      <td className="p-3 font-medium text-emerald-900">"Menos de $500.000 COP"</td>
                      <td className="p-3 text-stone-600">El 82% de encuestados tiene este límite; etiquetarlo explícitamente genera inclusión.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Eventos</td>
                      <td className="p-3 text-rose-700">"RSVP" / "Ticketing"</td>
                      <td className="p-3 font-medium text-emerald-900">"Entrada Libre" vs "Inscripción Previa"</td>
                      <td className="p-3 text-stone-600">Resuelve la duda del 41% de usuarios que desistían por no saber si debían inscribirse.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Logística</td>
                      <td className="p-3 text-rose-700">"Protocolo de Asistencia"</td>
                      <td className="p-3 font-medium text-emerald-900">"Código de Vestimenta & Parqueadero"</td>
                      <td className="p-3 text-stone-600">El 35% temía llegar mal vestido o sin estacionamiento; el rótulo responde de frente.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Herramienta</td>
                      <td className="p-3 text-rose-700">"Visor AR Espacial"</td>
                      <td className="p-3 font-medium text-emerald-900">"Simulador: Ver en tu Espacio"</td>
                      <td className="p-3 text-stone-600">Acción comprensible en lenguaje cotidiano con previsualización en muro real.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'navigation' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Sistemas de Navegación, Búsqueda y Accesibilidad
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Mapeo de los 4 sistemas de navegación y cumplimiento de usabilidad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <h5 className="font-serif font-bold text-stone-900 text-sm">Navegación Global (Top Bar Contract)</h5>
                  <p className="text-xs text-stone-600">
                    Estructura estricta de 3 zonas: [1. Marca Lumina] — [2. Enlaces Obras / Exposiciones / Cursos / Artistas / AI] — [3. Acceso Wishlist y Búsqueda].
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <h5 className="font-serif font-bold text-stone-900 text-sm">Navegación Facetada & Búsqueda</h5>
                  <p className="text-xs text-stone-600">
                    Buscador universal con autocompletado instantáneo por técnica, título o artista, combinado con filtros por rangos monetarios COP.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <h5 className="font-serif font-bold text-stone-900 text-sm">Navegación Contextual</h5>
                  <p className="text-xs text-stone-600">
                    Desde cualquier obra puedes navegar al perfil biográfico del artista, a su video de taller, y viceversa hacia el catálogo completo del creador.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <h5 className="font-serif font-bold text-stone-900 text-sm">Accesibilidad WCAG 2.1 AA</h5>
                  <p className="text-xs text-stone-600">
                    Contraste superior a 4.5:1 en todos los textos, soporte completo de navegación por teclado con <code>focus-visible</code>, y textos alternativos enriquecidos en cada obra de arte.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ux-findings' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Hallazgos Clave de la Investigación de Usuarios (17 Respuestas)
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Datos cuantitativos del informe de Angie Paola Madrigal Capera para la Universidad Libre:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-1">
                  <span className="font-serif text-3xl font-bold text-stone-900">82%</span>
                  <p className="text-xs font-medium text-stone-800">Presupuesto &lt; $500k COP</p>
                  <p className="text-[10px] text-stone-500">Demanda imperativa de obras de entrada y cursos asequibles.</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-1">
                  <span className="font-serif text-3xl font-bold text-stone-900">47%</span>
                  <p className="text-xs font-medium text-stone-800">Interés en Vernissages</p>
                  <p className="text-[10px] text-stone-500">Asistir a eventos y exposiciones es el principal motivador de visita.</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-1">
                  <span className="font-serif text-3xl font-bold text-stone-900">41%</span>
                  <p className="text-xs font-medium text-stone-800">Billeteras Móviles</p>
                  <p className="text-[10px] text-stone-500">Nequi y Daviplata superan a las tarjetas de crédito tradicionales.</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-1">
                  <span className="font-serif text-3xl font-bold text-stone-900">41%</span>
                  <p className="text-xs font-medium text-stone-800">Dudan por Inscripción</p>
                  <p className="text-[10px] text-stone-500">No saber si es entrada libre genera abandono masivo de asistencia.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between shrink-0">
          <span className="text-[11px] text-stone-500 font-mono">
            Arquitectura de la Información · Universidad Libre SN3 · Bogotá 2026
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            Volver al Prototipo Navegable
          </button>
        </div>
      </div>
    </div>
  );
};
