export type PageId = 'inicio' | 'proyectos' | 'servicios' | 'metodologia' | 'cotizador' | 'empresa' | 'contacto';

export type ProjectCategory = 'all' | 'residencial' | 'corporativo' | 'industrial' | 'sostenible';

export interface Project {
  id: string;
  title: string;
  category: 'residencial' | 'corporativo' | 'industrial' | 'sostenible';
  categoryLabel: string;
  location: string;
  year: string;
  areaM2: number;
  durationMonths: number;
  status: 'Completado' | 'En Ejecución';
  tagline: string;
  description: string;
  imageUrl: string;
  structuralType: string;
  certifications: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export interface Service {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  specs: string[];
  icon: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  bimFocus: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  projectRef: string;
  metrics: string;
}

export type ConstructionType = 'residencial_lujo' | 'edificio_corporativo' | 'nave_industrial' | 'reforma_integral';
export type QualityTier = 'premium' | 'vanguardia' | 'passivhaus';

export interface EstimateResult {
  minCost: number;
  maxCost: number;
  avgCostPerM2: number;
  durationMonths: number;
  breakdown: {
    structure: number;
    installations: number;
    finishes: number;
    engineeringBim: number;
  };
}
