# iPhone House — Landing Page

Landing page profesional para **iPhone House**, desarrollada con [AI Engineering OS](https://github.com) como metodología de trabajo.

## Estado del proyecto

**Fase 0 — Análisis y documentación** (en curso)

Ver [docs/PROJECT_STATE.md](docs/PROJECT_STATE.md) para el estado detallado.

## Stack tecnológico

| Tecnología | Versión |
|-----------|---------|
| Next.js | 16.2.10 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| shadcn/ui | base-nova |
| Framer Motion | 12.x |

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Lint
npm run lint
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
iphone-house/
├── app/                  # App Router (layout, page, estilos)
├── components/
│   └── ui/               # Componentes shadcn/ui
├── lib/                  # Utilidades y constantes
├── docs/                 # Documentación del proyecto
│   ├── PROJECT_STATE.md
│   ├── vision.md
│   ├── requirements/
│   ├── architecture/
│   └── roadmap.md
├── CLAUDE.md             # Reglas de Orchestrator
└── CHANGELOG.md
```

## Documentación

| Documento | Descripción |
|-----------|-------------|
| [PROJECT_STATE](docs/PROJECT_STATE.md) | Estado actual del proyecto |
| [Visión](docs/vision.md) | Objetivos y alcance del MVP |
| [Requisitos funcionales](docs/requirements/functional-requirements.md) | RF del MVP |
| [Requisitos no funcionales](docs/requirements/non-functional-requirements.md) | RNF de calidad |
| [Arquitectura](docs/architecture/architecture-overview.md) | Diseño técnico |
| [ADR-001](docs/architecture/adr/001-tech-stack.md) | Decisión de stack |
| [Roadmap](docs/roadmap.md) | Plan por fases |

## Metodología

Este proyecto sigue **AI Engineering OS**:

- **Orchestrator** coordina el flujo de trabajo
- **Landing Team** como equipo principal
- Documentación obligatoria antes de implementación
- Validación de calidad en cada fase
- Trazabilidad de decisiones (ADR)

## Licencia

Proyecto privado — iPhone House.
