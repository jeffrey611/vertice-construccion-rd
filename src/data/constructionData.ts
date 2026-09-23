import { Project, Service, MethodologyStep, Testimonial } from '../types/index.ts';

import heroImg from '../assets/images/hero_construction_architecture_1790191589403.jpg';
import resImg from '../assets/images/project_tower_residential_1790191600632.jpg';
import corpImg from '../assets/images/project_corporate_complex_1790191611177.jpg';
import indImg from '../assets/images/project_industrial_logistics_1790191621147.jpg';
import bimImg from '../assets/images/blueprint_bim_architectural_1790191630952.jpg';

export const ASSETS = {
  hero: heroImg,
  residential: resImg,
  corporate: corpImg,
  industrial: indImg,
  bim: bimImg,
};

export const COMPANY_INFO = {
  name: 'VÉRTICE',
  legalName: 'Vértice Dominicana de Construcción & Estructuras S.R.L.',
  country: 'República Dominicana',
  rnc: '1-31-89420-1',
  codia: 'CODIA No. 34812',
  mopc: 'Licencia MOPC DO-772',
  tagline: 'Construcción de Alta Precisión, Sismorresistencia y BIM 5D en República Dominicana',
  heroHeading: 'Construimos el futuro dominicano con rigor de ingeniería y solidez sísmica',
  heroSubheading: 'Empresa constructora líder en República Dominicana. Especialistas en torres residenciales en Santo Domingo, villas de lujo en Punta Cana, sedes corporativas y plataformas logísticas bajo normativa CODIA, Reglamento Sísmico R-001 y BIM 5D.',
  foundedYear: '2012',
  phone: '+1 (809) 567-8890',
  phoneMobile: '+1 (829) 450-8800',
  email: 'contacto@vertice.com.do',
  address: 'Torre Empresarial Piantini, Av. Gustavo Mejía Ricart esq. Abraham Lincoln, Piso 14, Piantini, Santo Domingo, D.N., República Dominicana',
  stats: [
    { value: '220,000', unit: 'm²', label: 'Superficie construida entregada en R.D.' },
    { value: '99.4', unit: '%', label: 'Cumplimiento estricto de cronograma contractual' },
    { value: '52', unit: 'Obras', label: 'Torres y proyectos ejecutados en Santo Domingo, Punta Cana y Santiago' },
    { value: '0', unit: 'Incidencias', label: 'Accidentes laborales en los últimos 36 meses' },
  ],
  certifications: [
    { name: 'CODIA / MOPC', desc: 'Reglamento Sísmico Dominicano R-001' },
    { name: 'ISO 9001:2015', desc: 'Gestión de Calidad Integral de Obra' },
    { name: 'LEED Accredited', desc: 'Edificación Sostenible en el Caribe' },
    { name: 'BIM ISO 19650', desc: 'Modelado Digital 5D y Gemelo Digital' },
    { name: 'Resistencia Huracanes Cat. 5', desc: 'Vientos de diseño > 250 km/h (MOPC)' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'torre-caelum-anacaona',
    title: 'Torre Caelum Anacaona',
    category: 'residencial',
    categoryLabel: 'Residencial Prime',
    location: 'Av. Anacaona, Los Cacicazgos, Santo Domingo, D.N.',
    year: '2025',
    areaM2: 36500,
    durationMonths: 24,
    status: 'Completado',
    tagline: 'Torre residencial de 32 niveles frente al Mirador Sur con aisladores sísmicos y terrazas panorámicas.',
    description: 'Proyecto residencial emblemático en la Avenida Anacaona de Santo Domingo. Cimentación profunda con 120 pilotes anclados a roca coralina, núcleos de hormigón autocompactante de 6,000 PSI y forjados postensados sin columnas intermedias. Diseñado bajo el estricto Reglamento Sísmico Dominicano R-001 y vientos de huracán categoría 5.',
    imageUrl: resImg,
    structuralType: 'Hormigón armado 6,000 PSI, forjados postensados y disipadores sísmicos',
    certifications: ['Reglamento R-001 MOPC', 'LEED Gold Certified', 'Miembro CODIA'],
    metrics: [
      { label: 'Superficie', value: '36,500 m²' },
      { label: 'Plazo de Ejecución', value: '24 Meses (Entregado 3 semanas antes)' },
      { label: 'Resistencia Sísmica', value: 'Zona Sísmica I (Aceleración 0.40g)' },
    ],
    specifications: [
      { label: 'Cimentación', value: 'Pilotes barrenados a 24m de profundidad en roca caliza' },
      { label: 'Ventanería', value: 'Vidrio laminado acústico resistente a impactos de huracán Cat. 5' },
      { label: 'Generación Eléctrica', value: '2 Plantas eléctricas diésel sincronizadas 100% de respaldo continuo' },
      { label: 'Supervisión BIM', value: 'LOD 400 con control de colisiones en tiempo real' },
    ],
    features: [
      'Forjados postensados con luces libres de 14 metros con vista al Parque Mirador Sur y el Mar Caribe',
      'Piscina infinita estructural en voladizo en el nivel 32',
      'Cisterna de reserva hidroneumática con autonomía de 10 días de consumo',
      'Aislamiento acústico de 58 dB y tratamiento contra salinidad marina',
    ],
  },
  {
    id: 'campus-piantini-prime',
    title: 'Torre Corporativa Piantini Prime',
    category: 'corporativo',
    categoryLabel: 'Corporativo & Financiero',
    location: 'Av. Winston Churchill esq. Andrés Julio Aybar, Piantini, Santo Domingo',
    year: '2025',
    areaM2: 44000,
    durationMonths: 22,
    status: 'Completado',
    tagline: 'Sede corporativa y financiera clase A+ con fachada bioclimática de control solar y atrio monumental.',
    description: 'Complejo empresarial de última generación en el corazón financiero de Piantini. Integra sistemas BMS inteligentes de control de acceso, climatización VRF de alta eficiencia con agua helada y 5 niveles soterrados de estacionamiento construidos con muros pantalla anclados.',
    imageUrl: corpImg,
    structuralType: 'Hormigón de alta resistencia con pórticos sismorresistentes y muro cortina estructural',
    certifications: ['WELL Platinum Caribe', 'LEED Platinum', 'MOPC Clase A'],
    metrics: [
      { label: 'Superficie', value: '44,000 m²' },
      { label: 'Capacidad', value: '2,600 Puestos Corporativos' },
      { label: 'Energía Solar', value: '420 kWp Solar Integrado en Cubierta' },
    ],
    specifications: [
      { label: 'Estructura', value: 'Pórticos sismorresistentes dúctiles con nudos de confinamiento especial' },
      { label: 'Envolvente', value: 'Doble acristalamiento Low-E con reducción del 68% de calor tropical' },
      { label: 'Climatización', value: 'Chillers centrífugos magnéticos de bajo consumo KWh/Ton' },
      { label: 'Modelado', value: 'BIM 5D vinculado con cronograma y fiduciaria' },
    ],
    features: [
      'Helipuerto certificado por el Instituto Dominicano de Aviación Civil (IDAC)',
      'Planta eléctrica de arranque instantáneo de 2,000 kVA',
      'Estacionamientos con estaciones de carga rápida para vehículos eléctricos',
      'Atrio comercial con locales bancarios y auditorio corporativo para 300 personas',
    ],
  },
  {
    id: 'hub-logistico-caucedo',
    title: 'Parque Logístico DP World Caucedo',
    category: 'industrial',
    categoryLabel: 'Industrial & Logístico',
    location: 'Punta Caucedo / Boca Chica, Santo Domingo Este',
    year: '2024',
    areaM2: 72000,
    durationMonths: 14,
    status: 'Completado',
    tagline: 'Mega-plataforma de distribución y comercio exterior con solera de superplanicidad láser FM2.',
    description: 'Instalación logística de alta exigencia adyacente al puerto multimodal DP World Caucedo y el Aeropuerto Internacional de Las Américas (AILA). Diseñada para tránsito de montacargas pesados y estanterías de 14 metros de altura con soleras de hormigón con fibras metálicas sin juntas.',
    imageUrl: indImg,
    structuralType: 'Estructura prefabricada de hormigón pretensado y cercha metálica espacial',
    certifications: ['BREEAM Internacional', 'Normativa NFPA 13/20 Contra Incendios', 'Certificación TAPA-A'],
    metrics: [
      { label: 'Superficie Cubierta', value: '72,000 m²' },
      { label: 'Muelles de Carga', value: '84 Muelles Hidráulicos Automatizados' },
      { label: 'Altura Libre', value: '14.50 Metros' },
    ],
    specifications: [
      { label: 'Solera Láser', value: 'Hormigón con fibras de acero, resistencia 45 N/mm² con planicidad TR34 FM2' },
      { label: 'Cubierta', value: 'Sistema de cubierta tipo Deck con aislamiento térmico y membrana TPO reflectante' },
      { label: 'Red PCI', value: 'Reserva de agua contra incendios de 1,200 m³ con rociadores ESFR' },
      { label: 'Resistencia a Vientos', value: 'Estructura dimensionada para ráfagas de 260 km/h' },
    ],
    features: [
      'Capacidad de sobrecarga puntual de estantería de hasta 12 toneladas por pata',
      'Acceso directo a la Autopista Las Américas y zona franca portuaria',
      'Parque solar en techo de 1.8 MW con inyección a la red eléctrica',
      'Vial perimetral para cabezales y contenedores de 40 y 45 pies',
    ],
  },
  {
    id: 'villas-marinas-cap-cana',
    title: 'Villas Marinas Estate Cap Cana',
    category: 'sostenible',
    categoryLabel: 'Residencial Turístico de Lujo',
    location: 'Cap Cana / Punta Cana, La Altagracia',
    year: '2026',
    areaM2: 24500,
    durationMonths: 18,
    status: 'En Ejecución',
    tagline: 'Villas bioclimáticas frente al mar Caribe con piedra coralina, hormigón blanco marino y energía solar.',
    description: 'Desarrollo de 18 residencias exclusivas al borde del canal de la Marina de Cap Cana. Arquitectura caribeña contemporánea con sistemas pasivos de ventilación cruzada, muelles privados para yates de hasta 80 pies y refuerzos de acero inoxidable para resistir la brisa marina.',
    imageUrl: resImg,
    structuralType: 'Hormigón blanco hidrófugo con refuerzo de acero galvanizado y piedra coralina de cantera',
    certifications: ['Passivhaus Tropical', 'Edge Advanced', 'Licencia Ambiental MiAmbiente'],
    metrics: [
      { label: 'Superficie', value: '24,500 m²' },
      { label: 'Ahorro Energético', value: '-65% en Climatización' },
      { label: 'Resistencia Salina', value: 'Hormigón C35/45 Clase de Exposición XS3' },
    ],
    specifications: [
      { label: 'Envolvente', value: 'Revestimiento en piedra coralina natural de 4cm con cámara de aire ventilada' },
      { label: 'Carpinterías', value: 'Aluminio anodizado marino europeo con vidrio de 12+12 con PVB de seguridad' },
      { label: 'Climatización', value: 'Sistemas VRF con recuperación de calor para calentar piscinas privadas' },
      { label: 'Autonomía', value: 'Baterías de litio Tesla Powerwall integradas con paneles solares' },
    ],
    features: [
      'Muelles privados de hormigón flotante con torretas de electricidad y agua dulce',
      'Piscina infinita privada en cada villa con vista a la bocana de la marina',
      'Sistemas domóticos Crestron con control remoto desde el extranjero',
      'Jardines con vegetación autóctona dominicana y riego por goteo automatizado',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'edificacion-singular',
    code: '01',
    title: 'Edificación Residencial Prime & Torres en Santo Domingo',
    subtitle: 'Construcción integral de rascacielos y torres residenciales con acabados de ultra lujo.',
    description: 'Ejecutamos obras civiles y edificación en altura en los sectores más exclusivos de la capital (Piantini, Naco, Bella Vista, Anacaona). Cumplimiento riguroso del Reglamento Sísmico R-001 y supervisión CODIA.',
    deliverables: [
      'Dirección facultativa con ingenieros residentes certificados por el CODIA',
      'Contratación bajo fiduciaria dominicana o modalidad Llave en Mano (EPC)',
      'Ensayos de rotura de cilindros de hormigón en laboratorio certificado independiente',
      'Gestión de licencias ante MOPC, Ayuntamiento del Distrito Nacional (ADN) y CAASD',
    ],
    specs: ['Reglamento Sísmico Dominicano R-001', 'Hormigones premezclados de 4,000 a 6,500 PSI', 'Acabados en mármol, roble y granito importado'],
    icon: 'Building2',
  },
  {
    id: 'ingenieria-estructuras',
    code: '02',
    title: 'Ingeniería Estructural Sismorresistente & Obras Costeras',
    subtitle: 'Cimentaciones profundas en roca coralina, muros pantalla y estructuras de alta demanda.',
    description: 'Especialistas en los desafíos geotécnicos de República Dominicana: suelos kársticos, nivel freático elevado en zonas costeras y diseño dinámico ante fallas tectónicas regionales.',
    deliverables: [
      'Estudios de refracción sísmica y sondeos SPT/rotación hasta roca madre',
      'Cálculo estructural bajo software CYPECAD y ETABS con espectro sísmico MOPC',
      'Sistemas de atenuación sísmica con elastómeros y amortiguadores viscosos',
      'Tratamientos anticorrosivos para zonas costeras con alta salinidad marina',
    ],
    specs: ['Acero corrugado grado 60 ASTM A615', 'Ensayos de carga en pilotes según ASTM D1143', 'Protección catódica para estructuras marítimas'],
    icon: 'Wrench',
  },
  {
    id: 'metodologia-bim',
    code: '03',
    title: 'Gestión BIM 5D & Control Fiduciario',
    subtitle: 'Modelado digital para promotores, bancos y fiduciarias con cero desviaciones.',
    description: 'Implementamos la metodología Building Information Modeling en LOD 400. Integramos geometría 3D, cronograma 4D y presupuestos 5D para que promotores e inversionistas auditen el avance de obra en tiempo real.',
    deliverables: [
      'Modelo federado de arquitectura, estructura, MEP y sistemas contra incendios',
      'Detección preventiva de colisiones espaciales antes de vaciar hormigón',
      'Certificaciones periódicas automatizadas para liberación de fondos fiduciarios',
      'Entrega de gemelo digital As-Built para el equipo de administración del condominio',
    ],
    specs: ['Estándar internacional ISO 19650', 'Compatibilidad total IFC, Revit y CYPE', 'Reportes quincenales para fiduciarias'],
    icon: 'Layers',
  },
  {
    id: 'passivhaus-sostenibilidad',
    code: '04',
    title: 'Proyectos Turísticos en Punta Cana & Edificación Verde',
    subtitle: 'Villas de lujo, hoteles boutique y proyectos con certificación LEED y EDGE.',
    description: 'Construimos en los polos turísticos de mayor prestigio (Punta Cana, Cap Cana, Casa de Campo, Las Terrenas). Optimizamos el consumo eléctrico en climatización mediante diseño solar pasivo y aislamiento térmico.',
    deliverables: [
      'Gestión de permisos ambientales ante el Ministerio de Medio Ambiente (MiAmbiente)',
      'Instalación de sistemas solares fotovoltaicos interconectados a CEPM o EDEESTE',
      'Sistemas de tratamiento de aguas residuales y desalinización para proyectos de costa',
      'Certificación EDGE y LEED para acceso a financiamiento de bonos verdes',
    ],
    specs: ['Aislamiento térmico continuo para clima tropical', 'Carpinterías de alta hermeticidad anti-huracán', 'Materiales sostenibles de canteras dominicanas'],
    icon: 'Leaf',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Estudio Geotécnico & Modelado Sísmico BIM',
    subtitle: 'Análisis de roca coralina y espectro sísmico MOPC',
    description: 'Realizamos sondeos geofísicos directos para caracterizar el suelo dominicano. Modelamos la estructura en BIM y verificamos el comportamiento dinámico según el Reglamento Sísmico R-001.',
    deliverables: ['Estudio geotécnico con perfiles estratigráficos', 'Modelo digital federado LOD 300', 'Matriz de compatibilidad sísmica y eólica'],
    timeline: 'Semanas 1 - 4',
    bimFocus: 'Detección de interferencias entre zapatas/pilotes y redes municipales de drenaje',
  },
  {
    step: '02',
    title: 'Planificación 4D y Contratación con Fiduciaria',
    subtitle: 'Cronograma crítico y sincronización de suministros',
    description: 'Coordinamos la ruta crítica de suministro de hormigón premezclado y acero grado 60. Diseñamos el plan logístico de grúas torre y acopio en parcelas urbanas con tránsito restringido.',
    deliverables: ['Cronograma de obra (Gantt) enlazado al modelo BIM 4D', 'Presupuesto desglosado para fiduciaria bajo Ley 189-11', 'Plan de Seguridad y Salud en Obra'],
    timeline: 'Semanas 5 - 8',
    bimFocus: 'Simulación del radio de operación de grúas torre y logística de camiones trompo',
  },
  {
    step: '03',
    title: 'Ejecución Estructural & Ensayos de Hormigón Certificados',
    subtitle: 'Vaciados masivos con control térmico y de calidad',
    description: 'Supervisión presencial por ingenieros residentes colegiados. Cada vaciado de losas y columnas se ensaya en laboratorio acreditado con rotura de probetas a 7, 14 y 28 días.',
    deliverables: ['Reportes diarios de vaciado de hormigón y trazabilidad de acero', 'Certificados de rotura de cilindros avalados por laboratorio', 'Inspección de armaduras antes de cada vaciado'],
    timeline: 'Fase Central de Obra',
    bimFocus: 'Escaneado LiDAR 3D semanal con dron para verificar tolerancias contra modelo digital',
  },
  {
    step: '04',
    title: 'Fachadas Anti-Huracán, Instalaciones MEP & Acabados',
    subtitle: 'Ventanería europea resistente a vientos y acabados de lujo',
    description: 'Instalación de ventanería hermética probada para huracanes categoría 5, subestaciones eléctricas, plantas de emergencia y revestimientos nobles en mármol y maderas preciosas.',
    deliverables: ['Pruebas de estanqueidad hidrostática en fachadas', 'Pruebas de carga y balanceo de subestaciones y plantas eléctricas', 'Protocolo de acabados de ebanistería y pisos'],
    timeline: 'Fase Final',
    bimFocus: 'Verificación As-Built de tuberías y ductos de climatización antes de cerrar cielos rasos',
  },
  {
    step: '05',
    title: 'Entrega Llave en Mano, Licencia MOPC & Post-Venta',
    subtitle: 'Inspección final, tramitación de habitabilidad y garantías',
    description: 'Tramitamos la inspección final ante el MOPC y los ayuntamientos correspondientes. Entregamos el edificio con cero defectos y manual digital para el administrador del condominio.',
    deliverables: ['Permiso de habitabilidad MOPC / ADN tramitado', 'Póliza de garantía estructural decenal', 'Gemelo digital con manuales de operación de plantas y bombas'],
    timeline: 'Cierre y Explotación',
    bimFocus: 'Entrega del modelo digital As-Built en formato abierto IFC para el condominio',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'La precisión en los tiempos de Vértice en la Torre Caelum Anacaona fue impecable: entregaron la estructura completa un mes antes de lo proyectado con la fiduciaria. Su rigor en el vaciado de hormigón y el control BIM nos evitó cualquier sobrecoste.',
    clientName: 'Lic. Ramón E. Henríquez',
    clientRole: 'Vicepresidente de Desarrollo Inmobiliario',
    company: 'Fiduciaria Inmobiliaria del Caribe',
    projectRef: 'Torre Caelum Anacaona, Santo Domingo',
    metrics: '-3 semanas sobre cronograma · Cero desviaciones de presupuesto',
  },
  {
    id: 'test-2',
    quote: 'Para nuestra torre corporativa en la Winston Churchill necesitábamos una constructora con experiencia demostrada en sótanos profundos con alto nivel freático y certificación WELL Platinum. Vértice resolvió la cimentación con un nivel técnico de clase mundial.',
    clientName: 'Ing. Patricia Pimentel',
    clientRole: 'Directora de Infraestructura Corporativa',
    company: 'Grupo Financiero del Caribe',
    projectRef: 'Torre Piantini Prime, Santo Domingo',
    metrics: 'Certificación WELL Platinum alcanzada con 96 puntos',
  },
  {
    id: 'test-3',
    quote: 'Construir 72,000 m² de nave logística de superplanicidad para vehículos robotizados al lado del puerto de Caucedo en solo 14 meses requería una constructora con flota pesada propia y dirección seria. Vértice cumplió cada hito sin un solo accidente.',
    clientName: 'Carlos M. De Camps',
    clientRole: 'Director de Activos Industriales',
    company: 'DP World Logistics Partners',
    projectRef: 'Parque Logístico Caucedo, Boca Chica',
    metrics: '72,000 m² entregados a tiempo · Cero accidentes laborales',
  },
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Ing. Fernando Valenzuela Pellerano',
    role: 'Presidente Ejecutivo & Director de Ingeniería Civil',
    exp: '28 años de experiencia · Colegiado CODIA No. 18204',
    bio: 'Especialista en diseño sismorresistente bajo normativa MOPC R-001 y cimentaciones complejas en el Distrito Nacional. Ha dirigido más de 30 torres residenciales y corporativas en República Dominicana.',
  },
  {
    name: 'Arq. Lucía Berenguer de Morales',
    role: 'Directora de Arquitectura & Coordinación BIM',
    exp: '19 años en edificación prime · Colegiada CODIA No. 24190',
    bio: 'Máster en Arquitectura Bioclimática y Metodología BIM 5D. Especialista en adaptación de torres de lujo al clima tropical caribeño y consultora acreditada LEED.',
  },
  {
    name: 'Ing. Mateo Aranda Grullón',
    role: 'Director de Operaciones & Maquinaria Pesada',
    exp: '22 años a pie de obra · Colegiado CODIA No. 21085',
    bio: 'Líder del programa Cero Accidentes. Responsable de la logística de grúas torre, plantas de hormigón premezclado y equipos de bombeo en Santo Domingo, Santiago y Punta Cana.',
  },
  {
    name: 'Lic. Sonia Villalba Cabral',
    role: 'Directora de Fideicomisos & Finanzas de Obra',
    exp: '17 años en estructuración fiduciaria (Ley 189-11)',
    bio: 'Especialista en gestión financiera de fideicomisos inmobiliarios, auditorías de costos de construcción y compras internacionales de acero y componentes hidroneumáticos.',
  },
];

export const FLEET_EQUIPMENT = [
  {
    category: 'Elevación & Grúas Torre Propias',
    items: [
      'Flota propia de 12 grúas torre Liebherr con anclajes para torres de hasta 40 niveles',
      'Grúas móviles telescópicas Grove y Tadano hasta 120 toneladas',
      'Montacargas de personal de doble jaula con variador de frecuencia para obras en altura',
    ],
  },
  {
    category: 'Topografía, LiDAR & Drones',
    items: [
      'Estaciones totales robóticas Leica TS16 con precisión milimétrica',
      'Escáneres láser 3D Faro Focus para verificación As-Built en interiores',
      'Drones DJI Matrice 300 con sensor LiDAR para seguimiento semanal volumétrico',
    ],
  },
  {
    category: 'Vaciado de Hormigón & Pavimentos',
    items: [
      'Autobombas de hormigón Putzmeister y Schwing de hasta 47 metros de alcance vertical',
      'Extendedoras láser Somero S-22EZ para pisos de superplanicidad industrial',
      'Plantas de dosificación de hormigón móviles para proyectos de gran volumen',
    ],
  },
  {
    category: 'Software Estructural & BIM',
    items: [
      'Autodesk Revit 2025 y Navisworks Manage para Clash Detection',
      'CYPECAD y ETABS con espectro de respuesta sísmica de la República Dominicana',
      'Autodesk Construction Cloud para seguimiento de obra en la nube con promotores',
      'Presto y Cost-It vinculados con las tablas de costos de la República Dominicana',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: '¿Qué normativas oficiales cumplen las construcciones de Vértice en República Dominicana?',
    answer: 'Todas nuestras obras están calculadas y construidas bajo el Reglamento para el Análisis y Diseño Sísmico de Estructuras (R-001) del Ministerio de Obras Públicas y Comunicaciones (MOPC), el código ACI 318 y las disposiciones del Colegio Dominicano de Ingenieros, Arquitectos y Agrimensores (CODIA).',
  },
  {
    question: '¿Trabajan bajo esquemas de Fideicomiso Inmobiliario (Ley 189-11)?',
    answer: 'Sí. Tenemos amplia experiencia colaborando con las principales fiduciarias del país (Fiduciaria Universal, BHD, Reservas, La Nacional). Suministramos las cubicaciones y reportes BIM 5D requeridos por los ingenieros supervisores de las fiduciarias para una rápida liberación de pagos.',
  },
  {
    question: '¿Cómo protegen las obras frente a huracanes y al ambiente marino?',
    answer: 'Aplicamos especificaciones estructurales para resistir vientos de huracán categoría 5 (> 250 km/h), carpinterías con cristales laminados de seguridad e impacto, y dosificaciones de hormigón con microsílice y aditivos hidrófugos con recubrimientos de acero de mayor espesor para evitar la corrosión salina.',
  },
  {
    question: '¿Cuál es el alcance geográfico de sus proyectos en el país?',
    answer: 'Operamos activamente con oficinas y cuadrillas permanentes en tres regiones clave: Santo Domingo (Distrito Nacional y Gran Santo Domingo), la Zona Este (Punta Cana, Cap Cana, Bávaro, La Romana) y la Zona Norte (Santiago de los Caballeros y Puerto Plata).',
  },
];
