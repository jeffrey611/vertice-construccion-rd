import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { ProjectShowcase } from '../components/ProjectShowcase.tsx';
import { ServicesBento } from '../components/ServicesBento.tsx';
import { BimMethodology } from '../components/BimMethodology.tsx';
import { CostCalculator } from '../components/CostCalculator.tsx';
import { SocialProof } from '../components/SocialProof.tsx';
import { ContactSection } from '../components/ContactSection.tsx';
import { Project, PageId } from '../types/index.ts';
import { ArrowRight, Layers, Calculator, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
  onCalculatorProceed: (details: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenQuote,
  onCalculatorProceed,
}) => {
  return (
    <div>
      {/* 1. Immersive Full-Bleed Hero with Background Image */}
      <Hero onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 2. Interactive Project Showcase */}
      <ProjectShowcase onSelectProject={onSelectProject} />

      {/* Quick link banner to full catalog */}
      <div className="bg-[#0B0F17] py-6 border-b border-neutral-800 text-center">
        <button
          onClick={() => onNavigate('proyectos')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-tech font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <span>Acceder al Catálogo Completo de Proyectos con Fichas de Ingeniería</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3. Services Bento */}
      <ServicesBento onOpenQuote={onOpenQuote} />

      {/* 4. BIM Methodology & Digital Twin */}
      <BimMethodology />

      {/* 5. Live Parametric Cost Estimator */}
      <CostCalculator onProceedToQuote={onCalculatorProceed} />

      {/* 6. Social Proof, Metrics & Promoters Testimonials */}
      <SocialProof />

      {/* 7. Direct Technical Contact Section */}
      <ContactSection />
    </div>
  );
};
