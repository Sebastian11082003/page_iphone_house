# Architecture Overview — iPhone House Landing Page

## Tipo de arquitectura

**Single Page Application (Landing) con Server-Side Rendering (SSR/SSG)**

La landing page es un sitio estático/semi-estático optimizado para rendimiento y SEO, sin backend propio en el MVP.

## Diagrama de alto nivel

```
┌─────────────────────────────────────────────────┐
│                   Cliente (Browser)              │
│  ┌───────────────────────────────────────────┐  │
│  │         iPhone House Landing Page          │  │
│  │  ┌─────────┐ ┌──────────┐ ┌───────────┐  │  │
│  │  │  Hero   │ │ Services │ │  Contact  │  │  │
│  │  └─────────┘ └──────────┘ └───────────┘  │  │
│  │  ┌─────────┐ ┌──────────┐ ┌───────────┐  │  │
│  │  │Benefits │ │Testimon. │ │  Footer   │  │  │
│  │  └─────────┘ └──────────┘ └───────────┘  │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│              Next.js 16 (App Router)             │
│  ┌──────────┐  ┌───────────┐  ┌─────────────┐  │
│  │ app/     │  │ components│  │ lib/        │  │
│  │ layout   │  │ ui/       │  │ utils       │  │
│  │ page     │  │ sections/ │  │ constants   │  │
│  └──────────┘  └───────────┘  └─────────────┘  │
└─────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│              Vercel (Hosting / CDN)              │
└─────────────────────────────────────────────────┘
```

## Stack tecnológico

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Framework | Next.js 16 (App Router) | SSR/SSG, SEO, rendimiento, ecosistema maduro |
| UI Library | React 19 | Componentes declarativos, ecosistema |
| Lenguaje | TypeScript 5 | Tipado estático, mantenibilidad |
| Estilos | Tailwind CSS 4 | Utility-first, mobile-first, productividad |
| Componentes UI | shadcn/ui (base-nova) | Componentes accesibles, personalizables |
| Animaciones | Framer Motion | Animaciones declarativas de alta calidad |
| Iconos | Lucide React | Iconos consistentes, tree-shakeable |
| Hosting | Vercel | Integración nativa con Next.js, CDN global |

## Estructura de carpetas (propuesta)

```
iphone-house/
├── app/
│   ├── layout.tsx          # Layout raíz, metadata, fuentes
│   ├── page.tsx              # Página principal (composición de secciones)
│   └── globals.css           # Estilos globales y design tokens
├── components/
│   ├── ui/                   # Componentes shadcn/ui (Button, etc.)
│   ├── sections/             # Secciones de la landing
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── benefits.tsx
│   │   ├── testimonials.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── layout/               # Componentes de layout
│       ├── header.tsx
│       └── mobile-nav.tsx
├── lib/
│   ├── utils.ts              # Utilidades (cn, etc.)
│   └── constants.ts          # Contenido estático, datos de contacto
├── public/
│   ├── images/               # Imágenes optimizadas
│   └── favicon.ico
└── docs/                     # Documentación del proyecto
```

## Principios arquitectónicos

1. **Separation of Concerns** — Cada sección es un componente independiente
2. **Single Responsibility** — Un componente, una responsabilidad
3. **Composición sobre herencia** — La página compone secciones
4. **Contenido desacoplado** — Datos en `lib/constants.ts`, no hardcodeados en JSX
5. **Mobile-first** — Diseño desde mobile hacia desktop
6. **Performance by Design** — Imágenes optimizadas, lazy loading, fuentes locales

## Patrones de diseño

| Patrón | Aplicación |
|--------|-----------|
| Component Composition | `page.tsx` compone secciones |
| Container/Presentational | Secciones reciben datos como props |
| Constants Pattern | Contenido centralizado en `lib/constants.ts` |

## Flujo de datos

```
lib/constants.ts  →  Section Components  →  page.tsx  →  Browser
     (datos)           (presentación)       (composición)   (render)
```

No hay estado global ni API calls en el MVP. Todo el contenido es estático.

## Decisiones arquitectónicas

Ver [ADR-001: Stack tecnológico](adr/001-tech-stack.md)

## Riesgos arquitectónicos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Contenido hardcodeado dificulta actualizaciones | Media | Bajo | Centralizar en constants, evaluar CMS en fase 2 |
| Imágenes sin optimizar afectan rendimiento | Media | Alto | Usar next/image siempre, formatos WebP/AVIF |
| Animaciones excesivas afectan rendimiento | Baja | Medio | Usar Framer Motion con moderación, prefers-reduced-motion |
