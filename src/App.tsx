import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { MethodologyPage } from './pages/MethodologyPage.tsx';
import { CalculatorPage } from './pages/CalculatorPage.tsx';
import { CompanyPage } from './pages/CompanyPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { Project, PageId } from './types/index.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['inicio', 'proyectos', 'servicios', 'metodologia', 'cotizador', 'empresa', 'contacto'];
    return validPages.includes(hash) ? hash : 'inicio';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefillContactData, setPrefillContactData] = useState<{
    constructionType?: string;
    area?: number;
    quality?: string;
    estimatedCost?: string;
    durationMonths?: number;
    projectReference?: string;
  } | null>(null);

  // Sync hash with browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['inicio', 'proyectos', 'servicios', 'metodologia', 'cotizador', 'empresa', 'contacto'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCalculatorProceed = (details: {
    constructionType: string;
    area: number;
    quality: string;
    estimatedCost: string;
    durationMonths: number;
    extras: string[];
  }) => {
    setPrefillContactData(details);
    handleNavigate('contacto');
  };

  const handleQuoteSimilarProject = (projectTitle: string) => {
    setPrefillContactData({
      projectReference: projectTitle,
    });
    handleNavigate('contacto');
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-neutral-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col justify-between">
      {/* 3-Zone Top Navigation Contract with Active Page Indicator */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Multi-Page View Container */}
      <main className="flex-grow">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenQuote={handleOpenQuote}
            onCalculatorProceed={handleCalculatorProceed}
          />
        )}

        {currentPage === 'proyectos' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'servicios' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'metodologia' && (
          <MethodologyPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'cotizador' && (
          <CalculatorPage
            onNavigate={handleNavigate}
            onCalculatorProceed={handleCalculatorProceed}
          />
        )}

        {currentPage === 'empresa' && (
          <CompanyPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'contacto' && (
          <ContactPage
            onNavigate={handleNavigate}
            prefillData={prefillContactData}
          />
        )}
      </main>

      {/* Footer with page switching */}
      <Footer onNavigate={handleNavigate} />

      {/* Technical Engineering Modal for Project Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onQuoteSimilar={handleQuoteSimilarProject}
      />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onOpenCalculator={() => handleNavigate('cotizador')}
      />
    </div>
  );
}
