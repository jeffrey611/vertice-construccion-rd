import React from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/constructionData.ts';
import { ShieldCheck, Award, Quote, CheckCircle2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section id="garantias" className="py-24 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Solvencia Técnica & Aval de Promotores</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Avalados por los fondos y promotores más exigentes del país
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            La confianza en la construcción no se promete: se audita con certificaciones internacionales y se demuestra con entregas en plazo y coste estricto.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-900/50 border border-neutral-800/90 rounded-xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <Quote className="w-7 h-7 text-amber-500/40 mb-4" />
                <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-neutral-800 pt-4">
                <div className="text-xs font-mono text-amber-400 mb-2">
                  {t.metrics}
                </div>
                <div className="font-bold text-white text-sm">
                  {t.clientName}
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  {t.clientRole} · <span className="text-neutral-300">{t.company}</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  Ref: {t.projectRef}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Guarantees Banner */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider block mb-2">
                Compromiso Integral de Seguridad
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Garantías técnicas y solvencia patrimonial
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Todas nuestras obras cuentan con póliza de responsabilidad civil de 15.000.000 € y cobertura decenal con las principales aseguradoras internacionales.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-black/50 border border-neutral-800/80 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-xs text-white font-mono">{cert.name}</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-light">
                    {cert.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
