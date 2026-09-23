import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Building, Layers, Sparkles, Check, Info } from 'lucide-react';
import { ConstructionType, QualityTier } from '../types/index.ts';

interface CostCalculatorProps {
  onProceedToQuote: (details: {
    constructionType: string;
    area: number;
    quality: string;
    estimatedCost: string;
    durationMonths: number;
    extras: string[];
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onProceedToQuote }) => {
  const [currency, setCurrency] = useState<'USD' | 'DOP'>('USD');
  const USD_TO_DOP = 60.50; // Tasa oficial promedio Banco Central de la República Dominicana

  const [constructionType, setConstructionType] = useState<ConstructionType>('residencial_lujo');
  const [area, setArea] = useState<number>(450);
  const [qualityTier, setQualityTier] = useState<QualityTier>('vanguardia');
  const [includeBim, setIncludeBim] = useState<boolean>(true);
  const [includeLeed, setIncludeLeed] = useState<boolean>(true);
  const [includeSeismic, setIncludeSeismic] = useState<boolean>(true);

  const baseRatesUSD: Record<ConstructionType, { name: string; baseRateM2: number; baseMonths: number; monthsPer1000m2: number; desc: string }> = {
    residencial_lujo: {
      name: 'Torre Residencial Prime (Piantini / Anacaona)',
      baseRateM2: 1450,
      baseMonths: 14,
      monthsPer1000m2: 3.5,
      desc: 'Hormigón 6,000 PSI, forjados postensados, ventanería acústica anti-huracán y acabados de mármol.',
    },
    edificio_corporativo: {
      name: 'Torre Corporativa & Financiera Clase A+',
      baseRateM2: 1250,
      baseMonths: 16,
      monthsPer1000m2: 3,
      desc: 'Muro cortina térmico Low-E, sótanos con muros pantalla, chillers magnéticos y BMS.',
    },
    nave_industrial: {
      name: 'Hub Logístico & Nave Industrial (Caucedo)',
      baseRateM2: 680,
      baseMonths: 9,
      monthsPer1000m2: 1.5,
      desc: 'Soleras láser de superplanicidad TR34 FM2, cercha espacial de 36m y muelles hidráulicos.',
    },
    reforma_integral: {
      name: 'Villas de Lujo & Resort (Punta Cana / Cap Cana)',
      baseRateM2: 1650,
      baseMonths: 12,
      monthsPer1000m2: 4,
      desc: 'Piedra coralina de cantera, hormigón blanco marino hidrófugo, muelle privado y domótica.',
    },
  };

  const qualityMultipliers: Record<QualityTier, { name: string; factor: number; desc: string }> = {
    premium: {
      name: 'Estándar Prime Dominicano',
      factor: 1.0,
      desc: 'Materiales nobles certificados, grifería europea de alta gama, pisos de porcelanato y subestación eléctrica.',
    },
    vanguardia: {
      name: 'Alta Gama & Sismorresistencia R-001',
      factor: 1.25,
      desc: 'Piedra coralina y mármol importado, vidrios laminados anti-huracán Cat. 5, postensado y control BMS.',
    },
    passivhaus: {
      name: 'Sostenible Caribe & Certificación LEED / EDGE',
      factor: 1.38,
      desc: 'Aislamiento térmico continuo para clima tropical, paneles solares con baterías de litio y máxima eficiencia energética.',
    },
  };

  const calculation = useMemo(() => {
    const typeConfig = baseRatesUSD[constructionType];
    const qualityConfig = qualityMultipliers[qualityTier];

    let extraPercentage = 0;
    const selectedExtras: string[] = [];
    if (includeBim) {
      extraPercentage += 0.035;
      selectedExtras.push('Modelado BIM 5D & Reportes Fiduciarios (Ley 189-11)');
    }
    if (includeLeed) {
      extraPercentage += 0.045;
      selectedExtras.push('Certificación Ambiental LEED / EDGE Caribe Oficial');
    }
    if (includeSeismic) {
      extraPercentage += 0.055;
      selectedExtras.push('Aisladores Sísmicos Elastoméricos & Protección Huracán Cat. 5');
    }

    const ratePerM2USD = typeConfig.baseRateM2 * qualityConfig.factor * (1 + extraPercentage);
    const totalMidUSD = ratePerM2USD * area;
    const minCostUSD = Math.round((totalMidUSD * 0.94) / 1000) * 1000;
    const maxCostUSD = Math.round((totalMidUSD * 1.06) / 1000) * 1000;
    const avgCostPerM2USD = Math.round(ratePerM2USD);

    const calculatedMonths = Math.max(
      6,
      Math.round(typeConfig.baseMonths + (area / 1000) * typeConfig.monthsPer1000m2)
    );

    // Converted to DOP if currency is DOP
    const isDOP = currency === 'DOP';
    const multiplier = isDOP ? USD_TO_DOP : 1;

    return {
      minCost: minCostUSD * multiplier,
      maxCost: maxCostUSD * multiplier,
      avgCostPerM2: avgCostPerM2USD * multiplier,
      minCostUSD,
      maxCostUSD,
      avgCostPerM2USD,
      durationMonths: calculatedMonths,
      selectedExtras,
      breakdown: {
        structure: Math.round(totalMidUSD * 0.35 * multiplier),
        installations: Math.round(totalMidUSD * 0.26 * multiplier),
        finishes: Math.round(totalMidUSD * 0.25 * multiplier),
        managementBim: Math.round(totalMidUSD * 0.14 * multiplier),
      },
    };
  }, [constructionType, area, qualityTier, includeBim, includeLeed, includeSeismic, currency]);

  const currencySymbol = currency === 'USD' ? 'US$' : 'RD$';

  const formatMoney = (amount: number) => {
    return `${currencySymbol} ${Math.round(amount).toLocaleString('es-DO')}`;
  };

  const handleProceed = () => {
    onProceedToQuote({
      constructionType: baseRatesUSD[constructionType].name,
      area,
      quality: qualityMultipliers[qualityTier].name,
      estimatedCost: `${formatMoney(calculation.minCost)} – ${formatMoney(calculation.maxCost)} (${currency})`,
      durationMonths: calculation.durationMonths,
      extras: calculation.selectedExtras,
    });
  };

  return (
    <section id="cotizador" className="py-24 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase mb-3 font-tech">
            <Calculator className="w-3.5 h-3.5" />
            <span>Estimador Paramétrico en Tiempo Real · República Dominicana</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Calcule el presupuesto estimado y cronograma de su proyecto
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Transparencia técnica y financiera desde el primer minuto. Modifique las variables de superficie en m², tipología y acabados adaptados al mercado de Santo Domingo, Punta Cana y Santiago.
          </p>

          {/* Currency Toggle (USD vs DOP) */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            <span className="text-xs text-neutral-400 px-3 font-mono">Moneda de Cálculo:</span>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded text-xs font-tech font-bold transition-all cursor-pointer ${
                currency === 'USD'
                  ? 'bg-amber-500 text-[#0B0F17] shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              US$ (Dólares)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('DOP')}
              className={`px-4 py-1.5 rounded text-xs font-tech font-bold transition-all cursor-pointer ${
                currency === 'DOP'
                  ? 'bg-amber-500 text-[#0B0F17] shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              RD$ (Pesos Dominicanos)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800/90 rounded-xl p-6 sm:p-8 flex flex-col gap-8">
            {/* Step 1: Typology */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3 font-tech">
                1. Tipología de Edificación en República Dominicana
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(baseRatesUSD) as ConstructionType[]).map((typeKey) => {
                  const rate = currency === 'USD'
                    ? `Desde US$ ${baseRatesUSD[typeKey].baseRateM2} / m²`
                    : `Desde RD$ ${Math.round(baseRatesUSD[typeKey].baseRateM2 * USD_TO_DOP).toLocaleString('es-DO')} / m²`;

                  return (
                    <button
                      key={typeKey}
                      type="button"
                      onClick={() => setConstructionType(typeKey)}
                      className={`p-3.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                        constructionType === typeKey
                          ? 'border-amber-500 bg-amber-500/10 text-white shadow-sm'
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <span className="block text-xs font-bold mb-1 text-white">
                        {baseRatesUSD[typeKey].name}
                      </span>
                      <span className="block text-[11px] font-mono text-amber-400 mb-1">
                        {rate}
                      </span>
                      <span className="block text-[11px] text-neutral-400 font-light line-clamp-2">
                        {baseRatesUSD[typeKey].desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Surface Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="area-range" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-tech">
                  2. Superficie Construida (Metros Cuadrados - m²)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="area-number"
                    type="number"
                    min="100"
                    max="50000"
                    step="50"
                    value={area}
                    onChange={(e) => setArea(Math.max(100, Math.min(50000, Number(e.target.value) || 100)))}
                    className="w-32 px-3 py-1 bg-black border border-neutral-700 rounded text-right font-mono text-sm text-amber-400 font-bold focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-xs text-neutral-400 font-mono">m²</span>
                </div>
              </div>

              <input
                id="area-range"
                type="range"
                min="100"
                max="5000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-2">
                <span>100 m² (Villa)</span>
                <span>1,000 m²</span>
                <span>2,500 m²</span>
                <span>5,000+ m² (Torre)</span>
              </div>
            </div>

            {/* Step 3: Quality Tier */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3 font-tech">
                3. Nivel de Acabados & Normativa Estructural
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(qualityMultipliers) as QualityTier[]).map((tierKey) => {
                  const tier = qualityMultipliers[tierKey];
                  const isSelected = qualityTier === tierKey;
                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => setQualityTier(tierKey)}
                      className={`p-3.5 rounded-lg border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-white'
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-white mb-1.5">{tier.name}</span>
                      <p className="text-[11px] text-neutral-400 leading-snug font-light">
                        {tier.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Add-ons & Engineering Extras */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3 font-tech">
                4. Componentes Tecnológicos & Exigencias del Caribe
              </label>
              <div className="flex flex-col gap-2.5">
                <label className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBim}
                    onChange={(e) => setIncludeBim(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-neutral-900 border-neutral-700"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white">Gemelo Digital BIM 5D & Reportes Fiduciarios (Ley 189-11)</span>
                    <span className="text-[11px] text-neutral-400 font-light">
                      Cubicaciones y estados de pago quincenales para fiduciarias y bancos dominicanos con cero disputas.
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLeed}
                    onChange={(e) => setIncludeLeed(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-neutral-900 border-neutral-700"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white">Certificación Ambiental LEED / EDGE Caribe</span>
                    <span className="text-[11px] text-neutral-400 font-light">
                      Auditoría acreditada para acceso a préstamos con tasas preferenciales verdes en banca local e internacional.
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSeismic}
                    onChange={(e) => setIncludeSeismic(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-neutral-900 border-neutral-700"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white">Aisladores Sísmicos MOPC R-001 & Protección Huracán Cat. 5</span>
                    <span className="text-[11px] text-neutral-400 font-light">
                      Diseño dinámico avanzado para zona de falla y ventanería laminada certificada para ráfagas superiores a 250 km/h.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-[#0B0F17] border border-amber-500/40 rounded-xl p-6 sm:p-8 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-tech">
                Presupuesto Estimado P-BIM
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">
                {currency === 'DOP' ? `Tasa: 1 USD = RD$ ${USD_TO_DOP}` : 'Valores en Dólares USD'}
              </span>
            </div>

            {/* Estimated Total Range */}
            <div className="mb-6">
              <span className="text-xs text-neutral-400 block mb-1">Rango Estimado de Ejecución Material:</span>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {formatMoney(calculation.minCost)}
                </span>
                <span className="text-neutral-500 font-light text-sm">–</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums tracking-tight">
                  {formatMoney(calculation.maxCost)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-800 font-mono">
                <span>Coste medio estimado:</span>
                <span className="text-white font-semibold">{formatMoney(calculation.avgCostPerM2)} / m²</span>
              </div>
            </div>

            {/* Estimated Timeline */}
            <div className="p-3.5 bg-black/50 border border-neutral-800 rounded-lg mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-400 block">Cronograma Contractual Garantizado:</span>
                <span className="text-sm font-semibold text-white">
                  {calculation.durationMonths} Meses Estimados
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block">Modalidad:</span>
                <span className="text-xs text-amber-400 font-mono font-bold">Llave en Mano / Fideicomiso</span>
              </div>
            </div>

            {/* Cost Breakdown Bars */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2 font-tech">
                Distribución de Inversión por Capítulos:
              </span>

              <div>
                <div className="flex justify-between text-xs text-neutral-400 mb-1">
                  <span>Cimentación profunda & Estructura (35%)</span>
                  <span className="font-mono text-white">{formatMoney(calculation.breakdown.structure)}</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[35%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-400 mb-1">
                  <span>Instalaciones MEP, Plantas Eléctricas & HVAC (26%)</span>
                  <span className="font-mono text-white">{formatMoney(calculation.breakdown.installations)}</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[26%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-400 mb-1">
                  <span>Fachadas Anti-Huracán & Acabados Nobles (25%)</span>
                  <span className="font-mono text-white">{formatMoney(calculation.breakdown.finishes)}</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-300 rounded-full w-[25%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-400 mb-1">
                  <span>Dirección CODIA, BIM 5D & Gestión de Calidad (14%)</span>
                  <span className="font-mono text-white">{formatMoney(calculation.breakdown.managementBim)}</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-neutral-400 rounded-full w-[14%]" />
                </div>
              </div>
            </div>

            {/* CTA to submit RFQ with prefilled data */}
            <button
              type="button"
              onClick={handleProceed}
              className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-[#0B0F17] font-tech font-bold text-xs sm:text-sm rounded-lg transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Estudio Formal con Estos Parámetros</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-neutral-500 text-center font-light">
              <span>✓ Validez de estimación: 30 días</span>
              <span>·</span>
              <span>Cumplimiento MOPC R-001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
