import React, { useState } from 'react';
import { PROJECTS } from '../data/constructionData.ts';
import { Project, ProjectCategory, PageId } from '../types/index.ts';
import { Search, LayoutGrid, List, MapPin, Calendar, Ruler, ArrowUpRight, ArrowLeft } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Todas las Obras' },
    { id: 'residencial', label: 'Residencial Prime' },
    { id: 'corporativo', label: 'Corporativo & Oficinas' },
    { id: 'industrial', label: 'Industrial & Logístico' },
    { id: 'sostenible', label: 'Edificación Bioclimática' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.structuralType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-[#0B0F17] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
          <button
            onClick={() => onNavigate('inicio')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>
          <span>/</span>
          <span className="text-amber-400">Obras & Proyectos</span>
        </div>

        {/* Page Title */}
        <div className="border-b border-neutral-800 pb-8 mb-10">
          <div className="text-xs font-tech font-semibold text-amber-500 uppercase tracking-widest mb-2">
            Catálogo Integral de Construcción
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Obras de Alta Complejidad & Proyectos Entregados
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Explora nuestro histórico de proyectos residenciales prime, sedes corporativas certificadas e infraestructuras logísticas de alta exigencia geotécnica.
          </p>
        </div>

        {/* Controls: Search, Category Filters, View Toggle */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-tech font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-[#0B0F17] font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Search input */}
            <div className="relative flex-grow sm:w-64">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por obra o ciudad..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded cursor-pointer ${viewMode === 'grid' ? 'bg-amber-500 text-[#0B0F17]' : 'text-neutral-400 hover:text-white'}`}
                aria-label="Vista cuadrícula"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded cursor-pointer ${viewMode === 'table' ? 'bg-amber-500 text-[#0B0F17]' : 'text-neutral-400 hover:text-white'}`}
                aria-label="Vista tabla técnica"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-neutral-400 mb-6 flex items-center justify-between">
          <span>Mostrando {filteredProjects.length} de {PROJECTS.length} proyectos auditados</span>
          <span className="text-amber-400">Tolerancia LOD 400</span>
        </div>

        {/* Content View: Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs font-mono text-emerald-400 border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{project.status}</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-amber-400" /> {project.areaM2.toLocaleString('es-ES')} m²
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span className="text-amber-400 font-semibold">{project.categoryLabel}</span>
                      <span>·</span>
                      <span>Año {project.year}</span>
                      <span>·</span>
                      <span>{project.durationMonths} meses</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="p-3 bg-black/40 border border-neutral-800 rounded-lg text-xs mb-6">
                      <span className="text-neutral-400 block text-[11px] font-mono mb-1">Tipología Estructural:</span>
                      <span className="font-medium text-white">{project.structuralType}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                    <span className="text-xs font-mono text-neutral-400">
                      {project.certifications.slice(0, 2).join(' · ')}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 text-xs font-tech font-bold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ficha de Ingeniería</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table Technical View */
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950/80 border-b border-neutral-800 text-neutral-400 uppercase font-tech">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Proyecto</th>
                  <th className="py-3.5 px-4 font-semibold">Tipología</th>
                  <th className="py-3.5 px-4 font-semibold">Ubicación</th>
                  <th className="py-3.5 px-4 font-semibold">Superficie</th>
                  <th className="py-3.5 px-4 font-semibold">Plazo</th>
                  <th className="py-3.5 px-4 font-semibold">Estructura</th>
                  <th className="py-3.5 px-4 font-semibold">Certificación</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-neutral-200">
                {filteredProjects.map((p) => (
                  <tr key={p.id} className="hover:bg-neutral-800/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      {p.title}
                    </td>
                    <td className="py-4 px-4 text-neutral-300">{p.categoryLabel}</td>
                    <td className="py-4 px-4 text-neutral-400">{p.location}</td>
                    <td className="py-4 px-4 font-mono tabular-nums">{p.areaM2.toLocaleString('es-ES')} m²</td>
                    <td className="py-4 px-4 font-mono">{p.durationMonths} meses</td>
                    <td className="py-4 px-4 text-neutral-300 max-w-xs truncate">{p.structuralType}</td>
                    <td className="py-4 px-4 font-mono text-amber-400">{p.certifications[0]}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => onSelectProject(p)}
                        className="px-3 py-1 bg-amber-500 text-[#0B0F17] rounded font-semibold hover:bg-amber-400 text-xs cursor-pointer"
                      >
                        Ver Ficha
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              ¿Desea solicitar el dossier técnico completo en PDF de alguna obra?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Facilitamos memorias constructivas, planos de detalle y ensayos de laboratorio a promotores y estudios de arquitectura.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs sm:text-sm font-tech font-bold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Solicitar Dossier o Licitación
          </button>
        </div>
      </div>
    </div>
  );
};
