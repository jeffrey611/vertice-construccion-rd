import React from 'react';
import { ContactSection } from '../components/ContactSection.tsx';
import { FAQ_ITEMS } from '../data/constructionData.ts';
import { PageId } from '../types/index.ts';
import { ArrowLeft, HelpCircle, MapPin, Building } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefillData?: any;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, prefillData }) => {
  return (
    <div className="pt-28 pb-24 bg-[#0B0F17] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
          <button
            onClick={() => onNavigate('inicio')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>
          <span>/</span>
          <span className="text-amber-400">Contacto & Licitaciones</span>
        </div>

        {/* Contact Form Section */}
        <ContactSection prefillData={prefillData} />

        {/* Regional Offices */}
        <div className="mt-20 border-t border-neutral-800 pt-16">
          <div className="text-xs font-tech font-bold uppercase tracking-wider text-amber-500 mb-2">
            Delegaciones Regionales
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Presencia Operativa en los Principales Polos Inmobiliarios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
              <div className="flex items-center gap-2 mb-2 font-display font-bold text-white text-lg">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Santo Domingo (Sede Central)</span>
              </div>
              <p className="text-xs text-neutral-400 font-light mb-3">
                Torre Empresarial Piantini, Av. Gustavo Mejía Ricart esq. Lincoln, Piso 14, Piantini, D.N.
              </p>
              <div className="text-xs font-mono text-amber-400">+1 (809) 567-8890</div>
            </div>

            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
              <div className="flex items-center gap-2 mb-2 font-display font-bold text-white text-lg">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Punta Cana & Cap Cana (Zona Este)</span>
              </div>
              <p className="text-xs text-neutral-400 font-light mb-3">
                Boulevard Turístico del Este, Punta Cana Village, Torre Corporativa, Piso 3
              </p>
              <div className="text-xs font-mono text-amber-400">+1 (809) 959-4420</div>
            </div>

            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
              <div className="flex items-center gap-2 mb-2 font-display font-bold text-white text-lg">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Santiago (Región Norte / Cibao)</span>
              </div>
              <p className="text-xs text-neutral-400 font-light mb-3">
                Av. Juan Pablo Duarte esq. Estrella Sadhalá, Torre Empresarial, Piso 5, Santiago
              </p>
              <div className="text-xs font-mono text-amber-400">+1 (809) 583-1190</div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 sm:p-10">
          <div className="flex items-center gap-2.5 text-xs font-tech font-bold uppercase tracking-wider text-amber-500 mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Consultas Frecuentes de Promotores y Arquitectos</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            Respuestas Claras antes de Contratar
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="p-5 bg-black/40 border border-neutral-800 rounded-xl">
                <h4 className="font-tech font-bold text-white text-sm mb-2">
                  {faq.question}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
