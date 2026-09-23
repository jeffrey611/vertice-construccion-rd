import React from 'react';
import { SERVICES } from '../data/constructionData.ts';
import { Building2, Wrench, Layers, Leaf, Check, ArrowRight } from 'lucide-react';

interface ServicesBentoProps {
  onOpenQuote: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenQuote }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-amber-500" />,
    Wrench: <Wrench className="w-5 h-5 text-amber-500" />,
    Layers: <Layers className="w-5 h-5 text-amber-500" />,
    Leaf: <Leaf className="w-5 h-5 text-amber-500" />,
  };

  return (
    <section id="servicios" className="py-24 bg-[#0B0F17] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase mb-2">
              <span>Capacidades de Construcción Integral</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Ingeniería de Precisión</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Disciplinas constructivas coordinadas en modelo único
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Eliminamos la fragmentación entre proyecto y obra. Un único interlocutor con solvencia técnica probada asume la responsabilidad civil y técnica total.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {SERVICES.map((service, index) => {
            // Asymmetric layout: 0 and 3 are larger, 1 and 2 are compact
            const colSpan =
              index === 0
                ? 'col-span-12 lg:col-span-7'
                : index === 1
                ? 'col-span-12 lg:col-span-5'
                : index === 2
                ? 'col-span-12 lg:col-span-5'
                : 'col-span-12 lg:col-span-7';

            return (
              <div
                key={service.id}
                className={`${colSpan} bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 relative group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-center">
                        {iconMap[service.icon]}
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-500 tracking-wider">
                        {service.code}. SERVICIO
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-t border-neutral-800/80 pt-5 mb-6">
                    <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-3">
                      Entregables Contractuales Clave:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-neutral-800/60 text-[11px] text-neutral-400 font-mono">
                  {service.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="bg-neutral-950/80 px-2.5 py-1 rounded border border-neutral-800">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-amber-500/30 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-1">
              ¿Tiene un proyecto de ejecución o concurso de licitación?
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              Analizamos mediciones y planos de ejecución en formato IFC, Revit o PDF para emitir comparativo en 5 días laborables.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            type="button"
            className="px-5 py-2.5 text-xs font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Enviar Pliegos de Condiciones</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
