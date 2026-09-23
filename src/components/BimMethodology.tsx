import React, { useState } from 'react';
import { METHODOLOGY_STEPS, ASSETS } from '../data/constructionData.ts';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export const BimMethodology: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section id="metodologia" className="py-24 bg-[#0B0F17] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase mb-2">
              <span>Metodología de Ejecución Certificada</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>BIM ISO 19650</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Control 5D: del modelo digital al último remate en obra
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Eliminamos imprevistos mediante la simulación virtual previa. Cada interferencia se resuelve en pantalla antes de que una sola gota de hormigón toque el encofrado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-amber-500 bg-neutral-900/90 shadow-lg shadow-amber-500/5'
                      : 'border-neutral-800/70 bg-neutral-950/40 hover:border-neutral-700 hover:bg-neutral-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-neutral-500'}`}>
                      FASE {step.step}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {step.timeline}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-light line-clamp-1">
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Phase Details & Visual Representation */}
          <div className="lg:col-span-7 bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Process Image Preview */}
              <div className="relative aspect-[16/8] rounded-lg overflow-hidden mb-6 bg-neutral-950 border border-neutral-800">
                <img
                  src={ASSETS.bim}
                  alt="Supervisión técnica de obra y planos digitales BIM por ingenieros de Vértice"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-mono text-amber-400 bg-black/70 backdrop-blur px-2.5 py-1 rounded border border-white/10">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Enfoque BIM: {activeStep.bimFocus}</span>
                </div>
              </div>

              {/* Header of Active Step */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-wider block">
                    Fase {activeStep.step} · Protocolo Operativo
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeStep.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-black/50 px-3 py-1.5 rounded border border-neutral-800">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeStep.timeline}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                {activeStep.description}
              </p>

              {/* Deliverables checklist */}
              <div className="bg-black/40 border border-neutral-800 rounded-lg p-4 mb-6">
                <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider block mb-3">
                  Documentación y Entregables de la Fase:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              <span className="font-mono">Trazabilidad completa en plataforma BIM Cloud</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                  disabled={activeStepIndex === 0}
                  className="px-3 py-1 bg-neutral-800 rounded text-neutral-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-medium"
                >
                  Anterior
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < METHODOLOGY_STEPS.length - 1 ? prev + 1 : prev))}
                  disabled={activeStepIndex === METHODOLOGY_STEPS.length - 1}
                  className="px-3 py-1 bg-amber-500 rounded text-[#0B0F17] hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold"
                >
                  Siguiente Fase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
