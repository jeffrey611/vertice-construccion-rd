import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { PageId } from '../types/index.ts';
import { COMPANY_INFO } from '../data/constructionData.ts';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'Inicio', page: 'inicio' },
    { label: 'Obras & Proyectos', page: 'proyectos' },
    { label: 'Servicios', page: 'servicios' },
    { label: 'Metodología BIM', page: 'metodologia' },
    { label: 'Cotizador en Vivo', page: 'cotizador' },
    { label: 'Empresa', page: 'empresa' },
    { label: 'Contacto', page: 'contacto' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-neutral-800/90 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B0F17]/90 via-[#0B0F17]/60 to-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => handleNav('inicio')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-display font-extrabold text-[#0B0F17] text-base shadow-sm">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                VÉRTICE
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean typography with subtle active indicator) */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-medium text-neutral-300">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNav(item.page)}
                  className={`relative py-1.5 transition-colors cursor-pointer text-[13px] tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+18095678890"
              className="hidden lg:flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono tabular-nums">{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              type="button"
              className="px-4 py-2 text-xs font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-amber-500/20 active:scale-[0.98] flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
            >
              <span>Cotizar Proyecto</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded cursor-pointer"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0F17]/98 backdrop-blur-2xl xl:hidden flex flex-col pt-24 px-6 pb-8 border-b border-neutral-800 animate-fadeIn overflow-y-auto">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-500 mb-4">
            Menú de Navegación
          </div>
          <nav className="flex flex-col gap-2 text-base font-medium text-neutral-200">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNav(item.page)}
                  className={`py-3 px-3 rounded-lg text-left transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30'
                      : 'hover:bg-neutral-900 text-neutral-300'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-neutral-500'}`} />
                </button>
              );
            })}
          </nav>
          <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-neutral-300 font-mono">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-sm font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-colors text-center cursor-pointer"
            >
              Solicitar Estudio de Costes
            </button>
          </div>
        </div>
      )}
    </>
  );
};
