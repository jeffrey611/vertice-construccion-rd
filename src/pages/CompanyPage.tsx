import React from 'react';
import { COMPANY_INFO, LEADERSHIP_TEAM } from '../data/constructionData.ts';
import { PageId } from '../types/index.ts';
import { ArrowLeft, ShieldCheck, Award, Users, HardHat, CheckCircle2 } from 'lucide-react';

interface CompanyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate, onOpenQuote }) => {
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
          <span className="text-amber-400">Empresa & Solvencia</span>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12">
          <div className="text-xs font-tech font-semibold text-amber-500 uppercase tracking-widest mb-2">
            Trayectoria & Solvencia Técnica
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ingeniería de Rigor y Compromiso Contractual
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Fundada en 2011, Vértice nació con el propósito de erradicar la incertidumbre en el sector de la construcción mediante la aplicación de metodologías de ingeniería industrial y modelado digital avanzado.
          </p>
        </div>

        {/* History & Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="font-display text-lg font-bold text-white mb-2">Cero Desviaciones</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Nuestra tasa de cumplimiento de plazos es del 99,4%. Asumimos compromisos contractuales vinculantes con penalizaciones a nuestro cargo.
            </p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="font-display text-lg font-bold text-white mb-2">Seguridad Intransigente</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              0 accidentes con baja médica en los últimos 36 meses. El equipo de seguridad y salud tiene potestad ejecutiva para detener cualquier tajo no conforme.
            </p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <h3 className="font-display text-lg font-bold text-white mb-2">Solidez Sísmica & Sostenibilidad</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Pioneros en República Dominicana en el cumplimiento del Reglamento Sísmico R-001 con aisladores elastoméricos y construcciones certificadas LEED y EDGE Caribe.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-xs font-tech font-bold uppercase tracking-wider text-amber-500 mb-2">
            Comité de Dirección Técnica
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Equipo Directivo & Responsables Facultativos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member, i) => (
              <div key={i} className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-400 text-lg mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs text-amber-400 font-tech font-medium mb-1">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 mb-3">
                    {member.exp}
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Audits */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-amber-500" />
            <h3 className="font-display text-2xl font-bold text-white">
              Acreditaciones y Auditorías Oficiales
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_INFO.certifications.map((c, idx) => (
              <div key={idx} className="p-4 bg-black/50 border border-neutral-800 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-xs font-bold text-white">{c.name}</span>
                </div>
                <span className="text-xs text-neutral-400 font-light">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenQuote}
            className="px-8 py-3.5 text-xs sm:text-sm font-tech font-bold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Solicitar Dossier Corporativo o Referencias Bancarias
          </button>
        </div>
      </div>
    </div>
  );
};
