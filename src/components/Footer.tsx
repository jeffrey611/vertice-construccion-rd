import React from 'react';
import { COMPANY_INFO } from '../data/constructionData.ts';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PageId } from '../types/index.ts';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand & description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-display font-extrabold text-[#0B0F17] text-base shadow-sm">
                  V
                </div>
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  VÉRTICE
                </span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed font-light mb-6 max-w-sm">
                Compañía constructora y de ingeniería estructural en República Dominicana. Especializada en torres residenciales prime en Santo Domingo, villas en Punta Cana, sedes corporativas y naves logísticas bajo metodología BIM 5D y Reglamento Sísmico R-001.
              </p>
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">
              RNC: 1-31-89420-1 · Reg. Mercantil Santo Domingo No. 128490SD · CODIA No. 34812
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-tech font-semibold text-white uppercase tracking-wider block mb-4">
              Navegación
            </span>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleLink('inicio')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('proyectos')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Obras & Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('servicios')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Servicios de Ingeniería
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('metodologia')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Metodología BIM 5D
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('cotizador')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Cotizador en Vivo
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('empresa')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Empresa & Solvencia
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contacto')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Contacto & Licitaciones
                </button>
              </li>
            </ul>
          </div>

          {/* Specializations (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-tech font-semibold text-white uppercase tracking-wider block mb-4">
              Tipologías de Edificación
            </span>
            <ul className="space-y-2.5 text-neutral-400">
              <li className="hover:text-neutral-200 transition-colors">Torres Residenciales en Santo Domingo</li>
              <li className="hover:text-neutral-200 transition-colors">Villas de Lujo en Punta Cana & Cap Cana</li>
              <li className="hover:text-neutral-200 transition-colors">Sedes Corporativas & Financieras en Piantini</li>
              <li className="hover:text-neutral-200 transition-colors">Naves Logísticas & Zonas Francas (Caucedo / Haina)</li>
              <li className="hover:text-neutral-200 transition-colors">Cimentaciones Profundas en Roca Coralina</li>
              <li className="hover:text-neutral-200 transition-colors">Estructuras Sismorresistentes & Anti-Huracán</li>
            </ul>
          </div>

          {/* Direct contact (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-tech font-semibold text-white uppercase tracking-wider block mb-4">
              Sede Central
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900">
              <span className="text-[11px] text-neutral-500 block mb-1">Certificaciones Oficiales:</span>
              <span className="text-[11px] font-mono text-neutral-400">
                CODIA · MOPC R-001 · ISO 9001 · ISO 14001 · LEED Caribe
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos los derechos reservados.</span>
            <span>·</span>
            <span className="text-amber-500/80">Edificación de Alta Precisión</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
