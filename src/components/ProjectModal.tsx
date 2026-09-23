import React, { useEffect } from 'react';
import { Project } from '../types/index.ts';
import { X, MapPin, Calendar, Ruler, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onQuoteSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onQuoteSimilar }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Cerrar ficha técnica"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-amber-500 hover:text-[#0B0F17] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of modal */}
        <div className="relative aspect-[21/9] sm:aspect-[2.4/1] bg-black overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <span>{project.categoryLabel}</span>
                <span>·</span>
                <span>{project.status}</span>
              </div>
              <h2 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {/* Quick specs bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-black/50 border border-neutral-800 rounded-xl mb-6 text-xs">
            <div className="flex items-center gap-2 font-mono text-neutral-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-neutral-300">
              <Ruler className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.areaM2.toLocaleString('es-ES')} m² construidos</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-neutral-300">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Plazo: {project.durationMonths} meses</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-neutral-300">
              <Shield className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Año {project.year}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
              Memoria Descriptiva & Solución Constructiva
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Structural specs grid */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
              Ficha de Ingeniería y Especificaciones Técnicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.specifications.map((spec, i) => (
                <div key={i} className="p-3 bg-neutral-950/60 border border-neutral-800 rounded-lg">
                  <span className="text-[11px] text-neutral-400 block font-mono mb-0.5">{spec.label}</span>
                  <span className="text-xs font-medium text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
              Hitos de Innovación en la Obra
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-light">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications and Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800">
            <div className="text-xs text-neutral-400 font-mono">
              <span className="text-white font-semibold">Certificaciones: </span>
              {project.certifications.join(' · ')}
            </div>

            <button
              onClick={() => {
                onClose();
                onQuoteSimilar(project.title);
              }}
              type="button"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Cotizar Proyecto Similar a {project.title}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
