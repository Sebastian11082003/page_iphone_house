# ADR-001: Stack Tecnológico

## Estado

**Aceptado**

## Contexto

Se requiere desarrollar una landing page para iPhone House. El repositorio ya contiene un scaffold generado con `create-next-app` que incluye Next.js 16, React 19, Tailwind CSS 4 y shadcn/ui.

Se necesita decidir si mantener este stack o evaluar alternativas.

## Decisión

**Mantener y adoptar formalmente el stack existente:**

- **Next.js 16** (App Router) como framework
- **React 19** como biblioteca UI
- **TypeScript 5** como lenguaje
- **Tailwind CSS 4** para estilos
- **shadcn/ui** (base-nova) para componentes UI
- **Framer Motion** para animaciones
- **Lucide React** para iconografía
- **Vercel** como plataforma de despliegue (recomendado)

## Justificación

### Next.js 16 + App Router

- SSR/SSG nativo → excelente SEO para landing page
- Optimización automática de imágenes, fuentes y scripts
- File-based routing simplifica la estructura
- Integración nativa con Vercel para despliegue
- Ya instalado y configurado en el proyecto

### React 19

- Ecosistema más amplio para componentes UI
- Compatible con shadcn/ui y Framer Motion
- Ya instalado en el proyecto

### Tailwind CSS 4

- Mobile-first por defecto
- Productividad alta para landing pages
- Integración con shadcn/ui
- Ya configurado con design tokens

### shadcn/ui

- Componentes accesibles (basados en Base UI)
- Personalizables (código en el proyecto, no en node_modules)
- Estilo base-nova moderno y profesional
- Button ya instalado como base

### Framer Motion

- Animaciones declarativas de alta calidad
- Mejora la experiencia visual de la landing
- Ya instalado en el proyecto

## Alternativas consideradas

| Alternativa | Razón de descarte |
|------------|-------------------|
| Astro | Requiere migración completa; Next.js ya configurado |
| HTML/CSS puro | Menor mantenibilidad, sin SSR, sin ecosistema de componentes |
| WordPress | Sobredimensionado para una landing page estática |
| Remix | Requiere migración; Next.js ya configurado y es más adecuado para landing |

## Consecuencias

### Positivas

- Cero tiempo de setup adicional — el scaffold ya existe
- Stack moderno y ampliamente adoptado
- Excelente rendimiento out-of-the-box
- Fácil despliegue en Vercel
- Componentes accesibles con shadcn/ui

### Negativas

- Next.js 16 tiene breaking changes respecto a versiones anteriores — requiere consultar docs actualizadas
- React 19 es relativamente nuevo — posibles incompatibilidades menores con librerías

### Riesgos

- **Next.js 16 breaking changes**: Mitigado consultando `node_modules/next/dist/docs/` antes de implementar (regla en AGENTS.md)

## Referencias

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
