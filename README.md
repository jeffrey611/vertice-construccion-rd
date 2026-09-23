# 🏗️ Vértice Construcción Dominicana

> **Sitio Web Corporativo y Plataforma de Ingeniería Estructural & Edificación BIM 5D**  
> Especializada en edificación en altura en Santo Domingo, villas turísticas en Punta Cana / Cap Cana y plataformas logísticas sismorresistentes en República Dominicana.

![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)
![Normativa](https://img.shields.io/badge/Normativa-MOPC_R--001_%7C_CODIA-f59e0b)

---

## 🌟 Características Principales

- **🧭 Navegación Multipágina React:** 7 páginas completas con persistencia de rutas mediante hash y scroll automático (`#inicio`, `#proyectos`, `#servicios`, `#metodologia`, `#cotizador`, `#empresa`, `#contacto`).
- **📸 Hero Showcase Arquitectónico:** Cabecera con imagen a pantalla completa, HUD técnico en directo (*52 obras activas en R.D.*), coordenadas GPS y visualizador interactivo con marco de contorno iluminado.
- **💰 Cotizador Paramétrico en Tiempo Real:** Cálculo dinámico de presupuesto con conmutador de divisa en **US$ (Dólares)** y **RD$ (Pesos Dominicanos)**, sliders de área, tipología y desglose por capítulos de obra.
- **📐 Catálogo de Obras & Proyectos:** Filtros interactivos por tipología (Residencial Prime, Corporativo, Turístico, Logístico) y alternador entre *Vista Cuadrícula* y *Tabla de Especificaciones Técnicas*.
- **🔬 Modal de Inspección Técnica:** Vista en detalle de especificaciones estructurales (PSI de hormigón, ensayos de rotura, cimentación en roca coralina, certificación sísmica MOPC).
- **📱 Responsive & Dark Mode Nativo:** Paleta oscura premium (`#0B0F17`) con acentos en ámbar de seguridad vial y tipografía de precisión (*Plus Jakarta Sans* + *Space Grotesk*).
- **🇩🇴 100% Localizado para República Dominicana:** Teléfonos dominicanos (`+1 809 / +1 829`), sedes en Santo Domingo (Piantini), Punta Cana y Santiago, RNC, colegiatura CODIA y Reglamento Sísmico R-001.

---

## 📂 Estructura del Proyecto

```text
├── public/
├── src/
│   ├── assets/             # Imágenes y recursos estáticos
│   ├── components/         # Componentes UI reutilizables
│   │   ├── Header.tsx      # Barra de navegación 3 zonas con estado activo
│   │   ├── Hero.tsx        # Portada con showcase y marco con contorno
│   │   ├── CostCalculator.tsx # Estimador paramétrico en USD y DOP
│   │   ├── ProjectShowcase.tsx # Muestra de proyectos destacados
│   │   ├── ServicesBento.tsx   # Bento grid de disciplinas de ingeniería
│   │   ├── BimMethodology.tsx  # Explicación interactiva BIM 5D
│   │   ├── ContactSection.tsx  # Formulario RFQ dominicano
│   │   ├── ProjectModal.tsx    # Modal de inspección de obra
│   │   ├── QuoteModal.tsx      # Modal de contacto rápido
│   │   └── Footer.tsx      # Pie de página con enlaces y certificaciones
│   ├── pages/              # Páginas de la aplicación
│   │   ├── HomePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── MethodologyPage.tsx
│   │   ├── CalculatorPage.tsx
│   │   ├── CompanyPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/
│   │   └── constructionData.ts # Base de datos y configuración
│   ├── types/
│   │   └── index.ts        # Definiciones TypeScript
│   ├── App.tsx             # Enrutamiento y estado global
│   ├── index.css           # Tailwind CSS v4 y utilidades
│   └── main.tsx            # Punto de entrada
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalación y Despliegue Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/vertice-construccion-rd.git
cd vertice-construccion-rd
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`, listos para desplegar en **Vercel**, **Netlify**, **GitHub Pages** o **Cloudflare Pages**.

---

## 📋 Normativas y Certificaciones en República Dominicana
- **MOPC R-001:** Reglamento para el Análisis y Diseño Sísmico de Estructuras.
- **CODIA:** Colegio Dominicano de Ingenieros, Arquitectos y Agrimensores.
- **Ley 189-11:** Desarrollo del Mercado Hipotecario y el Fideicomiso en la República Dominicana.
- **LEED / EDGE:** Certificación de Edificación Sostenible en el Caribe.

---

## 📄 Licencia
Este proyecto está bajo la Licencia MIT.
