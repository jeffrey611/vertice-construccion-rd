import React from 'react';
import { CostCalculator } from '../components/CostCalculator.tsx';
import { PageId } from '../types/index.ts';
import { ArrowLeft, Calculator, ShieldCheck, HelpCircle } from 'lucide-react';

interface CalculatorPageProps {
  onNavigate: (page: PageId) => void;
  onCalculatorProceed: (details: any) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate, onCalculatorProceed }) => {
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
          <span className="text-amber-400">Cotizador en Vivo</span>
        </div>

        {/* Cost Calculator Component */}
        <CostCalculator onProceedToQuote={onCalculatorProceed} />

        {/* FAQ Section related to pricing and contracts */}
        <div className="mt-16 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 sm:p-10">
          <div className="flex items-center gap-2.5 text-xs font-tech font-bold uppercase tracking-wider text-amber-500 mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes sobre Presupuestos de Construcción</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-6">
            Transparencia técnica en cada partida económica
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-300 font-light">
            <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
              <h4 className="font-tech font-bold text-white mb-2">
                ¿Qué incluye el coste estimado por m²?
              </h4>
              <p className="leading-relaxed text-neutral-400">
                Incluye cimentación, estructura resistente, cerramientos exteriores, aislamiento térmico-acústico continuo, instalaciones MEP completas, acabados según la gama elegida y dirección técnica de obra.
              </p>
            </div>
            <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
              <h4 className="font-tech font-bold text-white mb-2">
                ¿El presupuesto paramétrico es vinculante?
              </h4>
              <p className="leading-relaxed text-neutral-400">
                Es una estimación estadística basada en nuestras 48 obras entregadas. Para emitir un contrato cerrado formal, nuestro departamento revisa el proyecto de ejecución y el estudio geotécnico de la parcela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
