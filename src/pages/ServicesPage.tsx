import React from 'react';
import { SERVICES, FLEET_EQUIPMENT } from '../data/constructionData.ts';
import { PageId } from '../types/index.ts';
import { ArrowLeft, CheckCircle2, Cpu, Wrench, Shield, ArrowRight, Truck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
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
          <span className="text-amber-400">Servicios & Disciplinas</span>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12">
          <div className="text-xs font-tech font-semibold text-amber-500 uppercase tracking-widest mb-2">
            Solvencia Técnica Integral
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Disciplinas Constructivas y Capacidades de Ingeniería
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Abordamos obras de edificación civil y terciaria con maquinaria propia, ingeniería interna y metodología BIM 5D para erradicar cualquier tipo de incertidumbre contractual.
          </p>
        </div>

        {/* Detailed Service Pillars */}
        <div className="space-y-12 mb-20">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 sm:p-10 hover:border-neutral-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-wider block mb-2">
                    Disciplina {service.code}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.specs.map((spec, sI) => (
                      <span key={sI} className="text-xs font-mono bg-black/60 border border-neutral-800 px-3 py-1 rounded text-neutral-300">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 bg-black/40 border border-neutral-800/80 rounded-xl p-6 sm:p-7">
                  <h3 className="text-xs font-tech font-bold uppercase tracking-wider text-amber-400 mb-4">
                    Entregables Contractuales & Controles de Calidad:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.deliverables.map((item, dI) => (
                      <div key={dI} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-mono">Supervisión directa por Director Facultativo Colegiado</span>
                    <button
                      onClick={onOpenQuote}
                      className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>Cotizar este Servicio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet & Technical Equipment */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-500 uppercase tracking-wider">Parque de Maquinaria Propia</div>
              <h3 className="font-display text-2xl font-bold text-white">Equipamiento y Software Estructural</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_EQUIPMENT.map((group, idx) => (
              <div key={idx} className="p-5 bg-black/50 border border-neutral-800 rounded-xl">
                <h4 className="text-xs font-tech font-bold text-amber-400 uppercase tracking-wider mb-3">
                  {group.category}
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300 font-light">
                  {group.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70 shrink-0 mt-1.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            ¿Requiere un pliego técnico a medida para concurso público o privado?
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm font-light mb-6">
            Nuestro equipo de licitaciones evalúa anteproyectos y emite memorias justificativas en 5 días laborables.
          </p>
          <button
            onClick={onOpenQuote}
            className="px-8 py-3.5 text-xs sm:text-sm font-tech font-bold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Contactar con el Departamento de Estudios
          </button>
        </div>
      </div>
    </div>
  );
};
