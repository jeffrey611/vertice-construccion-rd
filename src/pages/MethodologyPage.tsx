import React, { useState } from 'react';
import { METHODOLOGY_STEPS, ASSETS } from '../data/constructionData.ts';
import { PageId } from '../types/index.ts';
import { ArrowLeft, Layers, ShieldCheck, CheckCircle2, Clock, Cpu, Scan, Check } from 'lucide-react';

interface MethodologyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  const bimDimensions = [
    { dim: '3D', title: 'Modelo Geométrico Espacial', desc: 'Federación de arquitectura, estructura e instalaciones (MEP) con detección automática de colisiones físicas.' },
    { dim: '4D', title: 'Planificación Temporal Dinámica', desc: 'Simulación del avance de obra sincronizado con el cronograma crítico y posicionamiento de grúas.' },
    { dim: '5D', title: 'Control Económico en Tiempo Real', desc: 'Enlace bidireccional de cada elemento del modelo con mediciones y certificaciones presupuestarias.' },
    { dim: '6D', title: 'Sostenibilidad & Análisis de Ciclo de Vida', desc: 'Cálculo de huella de carbono embebida de materiales y balance energético del edificio.' },
    { dim: '7D', title: 'Gemelo Digital para Facility Management', desc: 'Entrega del modelo digital completo (COBie / IFC) para gestión de mantenimiento durante 30 años.' },
  ];

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
          <span className="text-amber-400">Metodología BIM 5D</span>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12">
          <div className="text-xs font-tech font-semibold text-amber-500 uppercase tracking-widest mb-2">
            Gestión Integral de la Información
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Metodología BIM 5D & Gemelo Digital
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Eliminamos cualquier desviación entre diseño y ejecución. Construimos virtualmente el 100% de la obra antes de iniciar los movimientos de tierra.
          </p>
        </div>

        {/* 5 Dimensions of BIM */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            Las 5 Dimensiones del Control de Obra en Vértice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {bimDimensions.map((item) => (
              <div key={item.dim} className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-extrabold text-amber-400 text-base mb-3">
                    {item.dim}
                  </div>
                  <h3 className="font-tech font-bold text-white text-xs mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 5-Step Process Explorer */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 sm:p-10 mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-amber-500 uppercase tracking-wider block">
                Flujo Operativo de Ejecución
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Protocolo de 5 Fases Estructuradas
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 bg-black/60 px-3 py-1.5 rounded border border-neutral-800">
              <Scan className="w-3.5 h-3.5 text-amber-500" />
              <span>Escaneado LiDAR semanal & Verificación de Nube de Puntos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step selector */}
            <div className="lg:col-span-4 space-y-2.5">
              {METHODOLOGY_STEPS.map((st, i) => (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(i)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    activeStep === i
                      ? 'border-amber-500 bg-neutral-900 shadow-md text-white'
                      : 'border-neutral-800/80 bg-neutral-950/40 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-amber-400">FASE {st.step}</span>
                    <span className="text-[11px] font-mono text-neutral-500">{st.timeline}</span>
                  </div>
                  <h4 className="text-xs font-bold">{st.title}</h4>
                </button>
              ))}
            </div>

            {/* Step detail card */}
            <div className="lg:col-span-8 bg-black/60 border border-neutral-800 rounded-xl p-6 sm:p-8">
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-6 bg-neutral-950">
                <img
                  src={ASSETS.bim}
                  alt="Supervisión técnica digital por Vértice"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-400 bg-black/80 px-2.5 py-1 rounded border border-white/10">
                  Enfoque BIM: {METHODOLOGY_STEPS[activeStep].bimFocus}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-bold text-white">
                  {METHODOLOGY_STEPS[activeStep].title}
                </h3>
                <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded">
                  {METHODOLOGY_STEPS[activeStep].timeline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {METHODOLOGY_STEPS[activeStep].description}
              </p>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-lg">
                <span className="text-xs font-tech font-bold text-amber-400 uppercase tracking-wider block mb-3">
                  Documentación Contractual Generada en esta Fase:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {METHODOLOGY_STEPS[activeStep].deliverables.map((d, dI) => (
                    <div key={dI} className="flex items-start gap-2 text-xs text-neutral-200">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="font-light">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Implemente BIM 5D en su próxima promoción
          </h3>
          <p className="text-xs text-neutral-400 font-light mb-6">
            Garantizamos la compatibilidad con los formatos IFC, Revit, ArchiCAD y CYPE.
          </p>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs sm:text-sm font-tech font-bold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Solicitar Auditoría de Proyecto BIM
          </button>
        </div>
      </div>
    </div>
  );
};
