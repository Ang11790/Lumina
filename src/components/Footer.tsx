import React from 'react';
import { Layers, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAIModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAIModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-2xl font-bold text-white tracking-tight">
              Galería Lumina
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-sm">
              Plataforma y espacio físico dedicado a la venta de arte contemporáneo colombiano, curaduría de exposiciones y formación práctica en artes visuales.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAIModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Explorar Arquitectura de la Información</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block font-semibold">
              Secciones
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#obras" className="hover:text-white transition-colors">Obras de Arte en Venta</a>
              </li>
              <li>
                <a href="#exposiciones" className="hover:text-white transition-colors">Exposiciones y Vernissages</a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">Cursos & Talleres</a>
              </li>
              <li>
                <a href="#artistas" className="hover:text-white transition-colors">Artistas & Trayectoria</a>
              </li>
            </ul>
          </div>

          {/* Trust & Transparency */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block font-semibold">
              Garantías & Transparencia
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-1.5 text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certificado Notarial Registrado</span>
              </li>
              <li>Devolución garantizada por 30 días</li>
              <li>Embalaje especializado en madera neutra</li>
              <li>Medios colombianos: PSE, Nequi, Daviplata</li>
              <li>Factura legal electrónica con NIT</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block font-semibold">
              Sede & Atención
            </span>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>Calle 64G Nº 73A-22, Sede Bosque Popular, Bogotá D.C.</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <span>+57 (601) 423 2700 / WhatsApp de Envíos</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <span>curaduria@galerialumina.com.co</span>
              </p>
            </div>
          </div>
        </div>

        {/* Academic Citation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="text-center md:text-left">
            Investigación y Arquitectura de la Información por <strong>Angie Paola Madrigal Capera</strong> · Docente: <strong>Martinez Suarez Diana Ruth</strong> · Universidad Libre (SN3), Bogotá 2026.
          </p>
          <p className="font-mono text-[11px] text-stone-500">
            © 2026 Galería Lumina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
