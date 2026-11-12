import React, { useState } from 'react';
import { Artwork, UserCertificate } from '../types';
import { X, ShieldCheck, CheckCircle2, Download, Smartphone, Building, CreditCard, Store, Lock, AlertCircle } from 'lucide-react';

interface CheckoutModalProps {
  artwork: Artwork;
  onClose: () => void;
  onSuccess: (certificate: UserCertificate) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ artwork, onClose, onSuccess }) => {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'nequi' | 'pse' | 'card' | 'gallery'>('nequi');
  const [buyerName, setBuyerName] = useState('Angie Paola Madrigal');
  const [buyerEmail, setBuyerEmail] = useState('paola.madrigal@unilibre.edu.co');
  const [buyerPhone, setBuyerPhone] = useState('310 458 9201');
  const [buyerCity, setBuyerCity] = useState('Bogotá D.C.');
  const [buyerAddress, setBuyerAddress] = useState('Calle 63 # 24-18 Apt 402');
  const [selectedBank, setSelectedBank] = useState('Bancolombia');
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedCert, setGeneratedCert] = useState<UserCertificate | null>(null);

  // Transparent fee calculation (No hidden costs)
  const basePrice = artwork.priceCOP;
  const shippingCost = 0; // Envío asegurado de arte incluido sin recargo oculto
  const museumPackaging = 0; // Embalaje de museo con caja de madera y papel de seda neutro gratis
  const total = basePrice + shippingCost + museumPackaging;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleConfirmPurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const newCert: UserCertificate = {
        id: `CERT-${Date.now().toString().slice(-6)}`,
        artworkId: artwork.id,
        artworkTitle: artwork.title,
        artistName: artwork.artistName,
        dateIssued: '12 de Noviembre, 2026',
        certificateHash: artwork.certificateHash,
        registeredTo: buyerName,
        technique: artwork.technique,
        dimensions: artwork.dimensions,
      };
      setGeneratedCert(newCert);
      setIsProcessing(false);
      setStep('confirmation');
      onSuccess(newCert);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              {step === 'confirmation' ? '¡Adquisición Confirmada!' : 'Proceso de Compra Seguro'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 'details' && (
            <form onSubmit={handleProceedToPayment} className="space-y-6">
              {/* Artwork summary strip */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-16 h-16 rounded-lg bg-stone-200 flex items-center justify-center overflow-hidden shrink-0 border border-stone-300">
                  <span className="font-serif text-lg font-bold text-stone-700">Art</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-stone-900 truncate">{artwork.title}</h4>
                  <p className="text-xs text-stone-600">{artwork.artistName} · {artwork.technique}</p>
                  <p className="text-xs font-mono text-stone-500 mt-0.5">{artwork.dimensions} · {artwork.accessionNumber}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold font-mono text-stone-900">
                    ${artwork.priceCOP.toLocaleString('es-CO')} COP
                  </p>
                  <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
                    Original Verificado
                  </span>
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Nombre Completo del Coleccionista / Titular</label>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    placeholder="Tu nombre y apellidos"
                  />
                  <span className="text-[11px] text-stone-500">Este nombre figurará en el Certificado Oficial.</span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Correo Electrónico (para Certificado y Factura)</label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Teléfono Móvil (WhatsApp de Envíos)</label>
                  <input
                    type="tel"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    placeholder="300 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Ciudad de Entrega en Colombia</label>
                  <input
                    type="text"
                    required
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    placeholder="Bogotá, Medellín, Cali, etc."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">Dirección Exacta de Envío</label>
                  <input
                    type="text"
                    required
                    value={buyerAddress}
                    onChange={(e) => setBuyerAddress(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    placeholder="Calle, Carrera, Edificio o Casa"
                  />
                </div>
              </div>

              {/* Price Breakdown - 100% Transparent */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Valor de la Obra Original</span>
                  <span className="font-mono font-medium">${basePrice.toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Embalaje Especializado de Galería (Madera y papel de pH neutro)</span>
                  <span className="text-emerald-700 font-medium">Incluido ($0)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Transporte de Arte Asegurado con Guía Rastreada</span>
                  <span className="text-emerald-700 font-medium">Gratis en Colombia ($0)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Certificado Físico y Digital Registrado</span>
                  <span className="text-emerald-700 font-medium">Incluido</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-bold text-stone-900">
                  <span>Total Neto a Pagar</span>
                  <span className="font-mono text-base">${total.toLocaleString('es-CO')} COP</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Continuar al Método de Pago
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">Selecciona tu Medio de Pago en Colombia</h4>
                <p className="text-xs text-stone-500">Transacciones protegidas con cifrado bancario TLS 256-bit y factura electrónica.</p>
              </div>

              {/* Payment selector grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    id: 'nequi',
                    title: 'Nequi / Daviplata',
                    desc: '41% preferido en encuesta',
                    icon: <Smartphone className="w-5 h-5 text-purple-600" />,
                  },
                  {
                    id: 'pse',
                    title: 'PSE Débito',
                    desc: 'Transferencia bancaria',
                    icon: <Building className="w-5 h-5 text-blue-600" />,
                  },
                  {
                    id: 'card',
                    title: 'Tarjeta de Crédito',
                    desc: 'Visa, Master, Amex',
                    icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
                  },
                  {
                    id: 'gallery',
                    title: 'Taquilla Galería',
                    desc: 'Sede Bosque Popular',
                    icon: <Store className="w-5 h-5 text-amber-700" />,
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPaymentMethod(item.id as any)}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      paymentMethod === item.id
                        ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <p className="text-xs font-bold text-stone-900 leading-tight">{item.title}</p>
                    <p className="text-[10px] text-stone-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>

              {/* Specific Payment Inputs */}
              {paymentMethod === 'nequi' && (
                <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-950">Pago móvil con Nequi o Daviplata</span>
                    <span className="text-[11px] font-mono text-purple-700 font-semibold">Total: ${total.toLocaleString('es-CO')} COP</span>
                  </div>
                  <p className="text-xs text-purple-900">
                    Ingresa tu número registrado para recibir la notificación push de aprobación en tu aplicación:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      defaultValue={buyerPhone}
                      className="px-3 py-2 text-sm bg-white rounded-lg border border-purple-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Número de celular de Nequi"
                    />
                  </div>
                  <p className="text-[11px] text-purple-700">
                    O si lo prefieres, tras pulsar pagar verás el código QR dinámico para escanear directamente.
                  </p>
                </div>
              )}

              {paymentMethod === 'pse' && (
                <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-950">Pago Seguros en Línea (PSE)</span>
                    <span className="text-[11px] font-mono text-blue-700 font-semibold">Total: ${total.toLocaleString('es-CO')} COP</span>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-blue-950 mb-1">Selecciona tu Entidad Financiera:</label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Bancolombia">Bancolombia</option>
                      <option value="Davivienda">Davivienda</option>
                      <option value="Banco de Bogotá">Banco de Bogotá</option>
                      <option value="Nu Colombia">Nu Colombia</option>
                      <option value="Banco BBVA">BBVA Colombia</option>
                      <option value="Lulo Bank">Lulo Bank</option>
                      <option value="Scotiabank Colpatria">Scotiabank Colpatria</option>
                    </select>
                  </div>
                  <p className="text-[11px] text-blue-700">
                    Serás redirigido a la pasarela segura autorizada de ACH Colombia con tu correo registrado.
                  </p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">Tarjeta de Crédito o Débito</span>
                    <span className="text-[11px] font-mono text-stone-700 font-semibold">Total: ${total.toLocaleString('es-CO')} COP</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Número de Tarjeta (0000 0000 0000 0000)"
                    defaultValue="4532 9812 3456 7890"
                    className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM / AA"
                      defaultValue="08/29"
                      className="px-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-none"
                    />
                    <input
                      type="password"
                      placeholder="CVC"
                      defaultValue="123"
                      className="px-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'gallery' && (
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-amber-950">Reserva con Pago Presencial en Taquilla</span>
                  <p className="text-xs text-amber-900">
                    Apartaremos la obra por un periodo de <strong>48 horas hábiles</strong>. Podrás verla físicamente en la Sala Principal de Galería Lumina (Sede Bosque Popular) y abonar mediante datáfono, efectivo o cheque de gerencia.
                  </p>
                </div>
              )}

              {/* Security badges */}
              <div className="flex items-center justify-between p-3 bg-stone-100 rounded-lg text-[11px] text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-stone-700" /> Transacción Segura Certificada
                </span>
                <span>Garantía de Devolución 30 Días</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  Volver a Datos de Envío
                </button>
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleConfirmPurchase}
                  className="px-6 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verificando con Entidad Bancaria...</span>
                    </>
                  ) : (
                    <span>Confirmar Adquisición (${total.toLocaleString('es-CO')} COP)</span>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'confirmation' && generatedCert && (
            <div className="space-y-6 text-center py-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">¡Felicitaciones por tu nueva obra!</h4>
                <p className="text-xs text-stone-600 mt-1 max-w-md mx-auto">
                  La transacción por <strong>${total.toLocaleString('es-CO')} COP</strong> ha sido aprobada con éxito. Hemos enviado la factura electrónica a <strong>{buyerEmail}</strong>.
                </p>
              </div>

              {/* Digital Certificate of Authenticity Preview */}
              <div className="p-5 bg-[#FAF7F0] border-2 border-[#BFA054] rounded-xl text-left shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#D6C28F] pb-3 mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C6D23] font-mono block">
                      REPÚBLICA DE COLOMBIA · GALERÍA LUMINA
                    </span>
                    <h5 className="font-serif text-base font-bold text-stone-900">
                      Certificado de Autenticidad de Obra de Arte
                    </h5>
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-700 bg-white/80 px-2 py-1 rounded border border-[#D6C28F]">
                    {generatedCert.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Obra</span>
                    <strong className="text-stone-900">{artwork.title}</strong> ({artwork.year})
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Artista Autor</span>
                    <strong className="text-stone-900">{artwork.artistName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Técnica y Soporte</span>
                    <span className="text-stone-700">{artwork.technique}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Dimensiones</span>
                    <span className="text-stone-700">{artwork.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Titular Registrado</span>
                    <strong className="text-stone-900">{generatedCert.registeredTo}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Fecha de Emisión</span>
                    <span className="text-stone-700">{generatedCert.dateIssued}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D6C28F] flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span className="truncate max-w-xs">Hash: {generatedCert.certificateHash}</span>
                  <span className="text-emerald-700 font-medium">Sello Notarial Digital Válido</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const alertMsg = `Certificado digital ${generatedCert.id} descargado en formato PDF seguro de alta resolución.`;
                    alert(alertMsg);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Certificado (PDF)</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-stone-100 text-stone-800 text-xs font-medium rounded-lg hover:bg-stone-200 transition-colors"
                >
                  Cerrar y Volver al Catálogo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
