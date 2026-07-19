# PROJECT_STATE — iPhone House Landing Page

## Estado actual

| Campo | Valor |
|-------|-------|
| **Proyecto** | iPhone House — Landing Page |
| **Tipo** | Landing Page (conversión / presencia digital) |
| **Framework de trabajo** | AI Engineering OS |
| **Equipo activo** | Landing Team |
| **Fase actual** | Fase 4 — Desplegado en Vercel (producción) |
| **URL producción** | https://iphone-house-gamma.vercel.app |
| **Última actualización** | 2026-07-18 |

## Resumen ejecutivo

Requisitos de negocio validados con el stakeholder. Se implementó la landing page MVP con todas las secciones principales, formulario de cotización con redirección a WhatsApp, identidad visual basada en el logo (terracotta) y contenido real del negocio.

## Componentes presentes

- [x] Repositorio de código con Next.js 16 (App Router)
- [x] Tailwind CSS 4 + shadcn/ui + Framer Motion
- [x] Documentación base del proyecto
- [x] Requisitos de negocio validados
- [x] Logo integrado (`public/images/logo.png`)
- [x] Design tokens de marca (color terracotta)
- [x] Sección Hero con propuesta de valor
- [x] Sección Productos (4 categorías)
- [x] Sección Beneficios (seguridad, confiabilidad, experiencia Apple)
- [x] Formulario de cotización → WhatsApp
- [x] Footer con contacto y redes sociales
- [x] Header con navegación responsive
- [x] Metadata SEO básica

## Componentes pendientes

- [ ] Validación de calidad (Lighthouse, accesibilidad, responsive)
- [ ] Imágenes de productos reales (opcional)
- [ ] Favicon personalizado desde logo
- [ ] Despliegue en producción
- [ ] Dominio configurado

## Agentes activados

| Agente | Rol | Estado |
|--------|-----|--------|
| Orchestrator | Coordinación general | Activo |
| Product Manager | Requisitos validados | Completado |
| Software Architect | Arquitectura validada | Completado |
| UI Designer | Identidad visual (logo + terracotta) | Completado |
| Frontend Engineer | Implementación MVP | Completado |
| SEO Specialist | Metadata básica | Completado |
| QA Engineer | Validación pendiente | En espera |

## Bloqueos resueltos

| ID | Bloqueo | Resolución |
|----|---------|------------|
| B-001 | Información de negocio no validada | ✅ Validada 2026-07-18 |
| B-002 | Sin assets de marca | ✅ Logo integrado |
| B-003 | CTA principal no definido | ✅ Formulario + WhatsApp |

## Decisiones registradas

- **D-001**: AI Engineering OS como metodología → [ADR-001](architecture/adr/001-tech-stack.md)
- **D-002**: Stack Next.js + Tailwind + shadcn/ui → [ADR-001](architecture/adr/001-tech-stack.md)
- **D-003**: Flujo de conversión: formulario → WhatsApp con mensaje prellenado
- **D-004**: Identidad visual basada en color terracotta del logo existente

## Datos de negocio confirmados

- **Negocio**: Venta de iPhones (nuevos, exhibición, segunda mano) y accesorios Apple
- **Ubicación**: Neiva, Huila — operación virtual con entrega presencial
- **Contacto**: 302 427 4290 · juanchosorio845@gmail.com
- **CTA**: Formulario de cotización → WhatsApp
- **Pago**: Efectivo, transferencia o permuta (sin crédito/financiación)
- **Redes**: [Instagram](https://www.instagram.com/iphone.house_11/), [Facebook](https://web.facebook.com/profile.php?id=61573273683138), [TikTok](https://www.tiktok.com/@iphone_house2349)

## Próximo paso inmediato

Validación de calidad (Fase 3) y despliegue en Vercel (Fase 4).
