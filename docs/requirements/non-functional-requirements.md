# Requisitos No Funcionales — MVP

## RNF-001: Rendimiento

| Criterio | Objetivo |
|----------|----------|
| Largest Contentful Paint (LCP) | < 2.5 segundos |
| First Input Delay (FID) | < 100 ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Lighthouse Performance Score | ≥ 90 |
| Tamaño total de página | < 1.5 MB |

**Estrategias:**
- Imágenes optimizadas con `next/image`
- Lazy loading de secciones below-the-fold
- Fuentes optimizadas con `next/font`
- CSS crítico inline, resto cargado eficientemente

---

## RNF-002: Accesibilidad

| Criterio | Objetivo |
|----------|----------|
| Lighthouse Accessibility Score | ≥ 90 |
| Nivel WCAG | AA mínimo |
| Navegación por teclado | Funcional en todos los elementos interactivos |
| Contraste de color | Ratio mínimo 4.5:1 para texto |
| Textos alternativos | Presentes en todas las imágenes |
| Landmarks semánticos | header, main, footer, nav |

---

## RNF-003: Responsive Design

| Breakpoint | Comportamiento |
|------------|---------------|
| Mobile (< 640px) | Diseño mobile-first, menú hamburguesa |
| Tablet (640px – 1024px) | Layout adaptado, grid de 2 columnas |
| Desktop (> 1024px) | Layout completo, grid de 3+ columnas |

**Principio:** Mobile-first con Tailwind CSS.

---

## RNF-004: SEO

| Criterio | Objetivo |
|----------|----------|
| Lighthouse SEO Score | ≥ 90 |
| Meta tags | Completos y descriptivos |
| Estructura semántica | HTML5 semántico (h1 único, jerarquía correcta) |
| URLs | Limpias, sin parámetros innecesarios |
| Sitemap | Generado automáticamente |
| robots.txt | Configurado correctamente |

---

## RNF-005: Seguridad

| Criterio | Implementación |
|----------|---------------|
| HTTPS | Obligatorio en producción |
| Headers de seguridad | Configurados en next.config |
| Dependencias | Sin vulnerabilidades conocidas (npm audit) |
| Enlaces externos | `rel="noopener noreferrer"` en target="_blank" |
| Formularios (si aplica) | Validación client-side y server-side |

---

## RNF-006: Mantenibilidad

| Criterio | Implementación |
|----------|---------------|
| TypeScript | Tipado estricto en todo el proyecto |
| Componentes | Modulares, reutilizables, con responsabilidad única |
| Convenciones | Consistentes con AI Engineering OS |
| Documentación | Sincronizada con el código |
| Estructura de carpetas | Clara y predecible |

---

## RNF-007: Compatibilidad

| Navegador | Versión mínima |
|-----------|---------------|
| Chrome | Últimas 2 versiones |
| Firefox | Últimas 2 versiones |
| Safari | Últimas 2 versiones |
| Edge | Últimas 2 versiones |
| Mobile Safari (iOS) | iOS 15+ |
| Chrome Android | Últimas 2 versiones |

---

## RNF-008: Despliegue

| Criterio | Implementación |
|----------|---------------|
| Plataforma | Vercel (recomendado para Next.js) |
| CI/CD | Build automático en push a main |
| Variables de entorno | Gestionadas de forma segura |
| Dominio | `[PENDIENTE: dominio del negocio]` |
