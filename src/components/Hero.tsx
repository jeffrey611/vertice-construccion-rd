import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Activity, MapPin, Eye, Maximize2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, ASSETS, PROJECTS } from '../data/constructionData.ts';
import { PageId } from '../types/index.ts';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenQuote }) => {
  // Interactive view switcher for the framed hero showcase image
  const [selectedView, setSelectedView] = useState<'tower' | 'corporate' | 'logistics'>('tower');

  const showcaseImages = {
    tower: {
      image: ASSETS.residential,
      title: 'Torre Caelum Anacaona · Residencial Prime',
      location: 'Av. Anacaona, Los Cacicazgos, Santo Domingo',
      level: 'Nivel 32 / 32 · Losa de Helipuerto Finalizada',
      specs: 'Voladizos de 6m sobre el Mirador Sur · Hormigón 6,000 PSI sismorresistente',
      cert: 'LEED Gold · MOPC R-001',
      year: 'Entrega 2025',
    },
    corporate: {
      image: ASSETS.corporate,
      title: 'Torre Corporativa Piantini Prime',
      location: 'Av. Winston Churchill esq. Aybar, Santo Domingo',
      level: 'Fachada Bioclimática · Montaje de Muro Cortina',
      specs: 'Pórticos sismorresistentes con atrio central y 5 sótanos',
      cert: 'WELL Platinum Caribe',
      year: 'Entrega 2025',
    },
    logistics: {
      image: ASSETS.industrial,
      title: 'Parque Logístico DP World Caucedo',
      location: 'Punta Caucedo / Boca Chica, S.D. Este',
      level: 'Solera Láser FM2 · 72,000 m²',
      specs: 'Superplanicidad para vehículos AGV y comercio exterior',
      cert: 'BREEAM · TAPA-A',
      year: 'Entrega 2024',
    },
  };

  const currentShowcase = showcaseImages[selectedView];

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-[#0B0F17]">
      {/* Subtle Background Lighting & Architectural Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 architectural-grid opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Architectural Live Status HUD Bar */}
        <div className="inline-flex flex-wrap items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md mb-8 text-xs font-tech">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-200 font-medium tracking-wide">52 Obras en Ejecución</span>
          </div>
          <span aria-hidden="true" className="text-neutral-700">|</span>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Santo Domingo · Punta Cana · Santiago</span>
          </div>
          <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-400 font-mono text-[11px]">
            <Activity className="w-3.5 h-3.5" />
            <span>CODIA & MOPC R-001 · BIM 5D</span>
          </div>
        </div>

        {/* Headline & Value Proposition */}
        <div className="max-w-4xl mb-10">
          <div className="text-xs sm:text-sm font-tech font-bold tracking-[0.18em] text-amber-500 uppercase mb-4">
            Ingeniería de Precisión & Edificación Singular
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-6 text-balance">
            Construimos con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 font-black">
              rigor de ingeniería
            </span>{' '}
            y pulcritud arquitectónica.
          </h1>

          <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-light">
            Especialistas en residencial prime, sedes corporativas y plataformas logísticas complejas. Garantizamos precio cerrado y plazo inamovible mediante modelado BIM 5D y certificación Passivhaus.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={onOpenQuote}
              type="button"
              className="px-6 py-3.5 text-xs sm:text-sm font-tech font-bold text-[#0B0F17] bg-amber-500 rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/25 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar Estudio de Costes</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('proyectos')}
              type="button"
              className="px-6 py-3.5 text-xs sm:text-sm font-tech font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer hover:border-neutral-500"
            >
              <span>Explorar Obras Ejecutadas</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => onNavigate('cotizador')}
              type="button"
              className="px-4 py-3.5 text-xs sm:text-sm font-tech font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
            >
              Abrir Cotizador Paramétrico →
            </button>
          </div>
        </div>

        {/* 
          AQUÍ LA IMAGEN CON CONTORNO SOLICITADA POR EL USUARIO:
          Marco arquitectónico con contorno destacado (border con brillo ámbar, HUD técnico y controles interactivos)
        */}
        <div className="mt-8 mb-16">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-neutral-700/60 to-neutral-800/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(245,158,11,0.2)]">
            {/* Corner Precision Crosshairs */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-amber-400 font-mono text-xs flex items-center justify-center">+</div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-amber-400 font-mono text-xs flex items-center justify-center">+</div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-amber-400 font-mono text-xs flex items-center justify-center">+</div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-amber-400 font-mono text-xs flex items-center justify-center">+</div>

            <div className="rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/90">
              {/* Header Bar of the Framed Image with Live Camera Status & Project Selector Tabs */}
              <div className="px-4 sm:px-6 py-3 bg-neutral-900/90 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="font-mono text-neutral-200 uppercase tracking-wider font-semibold">
                      SUPERVISIÓN DE OBRA EN DIRECTO
                    </span>
                  </div>
                  <span className="hidden sm:inline text-neutral-600">|</span>
                  <span className="hidden sm:inline text-neutral-400 font-mono">
                    {currentShowcase.location}
                  </span>
                </div>

                {/* View switcher tabs */}
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setSelectedView('tower')}
                    className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer font-tech ${
                      selectedView === 'tower'
                        ? 'bg-amber-500 text-[#0B0F17] font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Torre Residencial
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedView('corporate')}
                    className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer font-tech ${
                      selectedView === 'corporate'
                        ? 'bg-amber-500 text-[#0B0F17] font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Sede Corporativa
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedView('logistics')}
                    className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer font-tech ${
                      selectedView === 'logistics'
                        ? 'bg-amber-500 text-[#0B0F17] font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Hub Logístico
                  </button>
                </div>
              </div>

              {/* The Framed Image with Detailed Architectural Overlay */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black group">
                <img
                  src={currentShowcase.image}
                  alt={currentShowcase.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/40" />

                {/* Architectural Grid Watermark */}
                <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

                {/* Top-Right Badge: Technical specs */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-neutral-700/80 rounded-lg p-3 text-xs hidden sm:block">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{currentShowcase.cert}</span>
                  </div>
                  <div className="text-white font-mono">{currentShowcase.year}</div>
                </div>

                {/* Bottom Overlay with Real Project Data & Action */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-block px-2.5 py-1 bg-amber-500 text-[#0B0F17] font-tech font-extrabold text-[11px] rounded uppercase tracking-wider mb-2">
                      {currentShowcase.level}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                      {currentShowcase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1 max-w-xl">
                      {currentShowcase.specs}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('proyectos')}
                    type="button"
                    className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0B0F17] font-tech font-bold text-xs flex items-center gap-2 transition-all shadow-md whitespace-nowrap cursor-pointer"
                  >
                    <span>Inspeccionar Proyecto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom Footer bar of the Framed Card */}
              <div className="px-4 sm:px-6 py-2.5 bg-neutral-900/90 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-3">
                  <span>GPS: 18°28'35.0"N 69°55'42.0"W (Santo Domingo, D.N.)</span>
                  <span>·</span>
                  <span>Sensor LiDAR Activo</span>
                </div>
                <div className="text-amber-400">
                  Desviación ejecutiva: 0.00%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Trust Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-neutral-800/80 pt-10">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/70">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="font-mono text-amber-400 font-bold text-sm sm:text-base">
                  {stat.unit}
                </span>
              </div>
              <span className="text-xs text-neutral-400 mt-1.5 font-light leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
