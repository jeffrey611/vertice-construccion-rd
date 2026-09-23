import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/index.ts';
import { PROJECTS } from '../data/constructionData.ts';
import { ArrowUpRight, Maximize2, MapPin, Calendar, Ruler } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Todas las Obras' },
    { id: 'residencial', label: 'Residencial Prime' },
    { id: 'corporativo', label: 'Corporativo & Oficinas' },
    { id: 'industrial', label: 'Industrial & Logístico' },
    { id: 'sostenible', label: 'Edificación Bioclimática' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 bg-[#0B0F17] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase mb-2">
              <span>Portafolio de Obras Ejecutadas</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>2024 – 2026</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Edificación singular y desafíos estructurales resueltos
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Cada obra representa una sinergia perfecta entre exigencia geotécnica, eficiencia energética y pulcritud arquitectónica.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional Button Controls with Segmented UI) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-lg overflow-x-auto mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-[#0B0F17] font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-neutral-900/50 border border-neutral-800/90 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Status Indicator overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project.status}</span>
                </div>

                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    type="button"
                    aria-label={`Ver ficha técnica de ${project.title}`}
                    className="p-2 rounded bg-black/60 hover:bg-amber-500 hover:text-[#0B0F17] text-white border border-white/10 backdrop-blur-md transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-2 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono tabular-nums">
                    <Ruler className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.areaM2.toLocaleString('es-ES')} m²</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-amber-400 font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Año {project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.durationMonths} meses de ejecución</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                    {project.tagline}
                  </p>

                  {/* Quantitative proof snippets */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-black/40 border border-neutral-800 rounded-lg mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[11px] text-neutral-400">{metric.label}</span>
                        <span className="text-xs font-semibold text-white font-mono truncate">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
                  <span className="text-xs text-neutral-400 font-mono">
                    {project.certifications.slice(0, 2).join(' · ')}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Ficha Técnica Completa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
