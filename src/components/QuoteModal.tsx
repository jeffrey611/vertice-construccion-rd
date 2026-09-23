import React, { useState, useEffect } from 'react';
import { X, Send, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onOpenCalculator }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Residencial Prime');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          aria-label="Cerrar ventana"
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Solicitud de Cotización Recibida
            </h3>
            <p className="text-xs text-neutral-300 mb-6 font-light">
              Nuestro departamento técnico revisará la disponibilidad de obra y le contactará en un plazo máximo de 24 horas.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2 text-xs font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors"
            >
              Entendido
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider block mb-1">
                Licitación & Contratación
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                Solicitar Cotización de Proyecto
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">
                ¿Prefiere estimar el presupuesto de forma interactiva?
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCalculator();
                }}
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Abrir la Calculadora de Costes en Vivo</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Nombre Completo o Empresa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="p. ej. Miguel Ángel Soler"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@fiduciaria.do"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Teléfono de Contacto (RD)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (809) 567-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Tipología de Obra
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="Residencial Prime">Edificación Residencial Prime</option>
                  <option value="Sede Corporativa">Sede Corporativa u Oficinas</option>
                  <option value="Nave Logística">Hub Logístico o Nave Industrial</option>
                  <option value="Reforma Integral">Reforma Integral de Alta Gama</option>
                  <option value="Cimentaciones & Estructuras">Cimentaciones & Obra Civil</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enviar y Recibir Contacto Técnico</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
