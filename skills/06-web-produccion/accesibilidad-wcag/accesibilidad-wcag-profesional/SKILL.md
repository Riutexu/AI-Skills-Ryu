---
name: accesibilidad-wcag-profesional
description: Conformidad WCAG 2.2 AA como proceso: auditorías con axe y Lighthouse CI, E2E de accesibilidad con Playwright, componentes AA en design systems y cumplimiento legal
license: MIT
compatibility: opencode
metadata:
  familia: "06-web-produccion"
  tema: "accesibilidad-wcag"
  nivel: profesional
  stack: "axe-core, Lighthouse CI, Playwright"
---

# Accesibilidad (WCAG) — Nivel profesional full stack

## Qué hace este skill

Guía para hacer de la accesibilidad un proceso con garantías: elegibilidad WCAG 2.2 AA, auditorías automatizadas con axe-core y Lighthouse CI en el pipeline, E2E de accesibilidad con Playwright, patrones a nivel de design system y gestión de cumplimiento legal (normativas como ADA/EAA/LEY 20.584).

## Cuándo usarlo

- El producto debe declarar conformidad AA formalmente o responder a exigencias legales.
- Quieres que cada PR cumpla un presupuesto de accesibilidad sin depender de personas.
- Existes un design system cuyos componentes deben ser AA por diseño.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Pipeline CI (GitHub Actions) y experiência con Playwright.

## Workflow paso a paso

1. **Mapa de criterios WCAG 2.2 AA**: lista los 50 criterios AA aplicables a tu producto, marca cuáles aplican y genera una matriz de evidencia por página/componente.
2. **axe-core en CI**: añade `@axe-core/playwright` o la integración de axe en el pipeline; bloquea PRs con violations graves en las páginas principales (el propio axe trae parcialmente la semántica de criterios).
3. **Lighthouse CI**: suma el acceso de `accessibility >= 95` al presupuesto existente (junto a performance, seo).
4. **E2E de accesibilidad**: además del escaneo, prueba flujos críticos por teclado con Playwright (tab order, focus en modal, skip link) y consistencia de estados (aria-expanded al abrir acordeón).
5. **Rutas de fallos accesibles**: personas hablando con el detector: realiza chequeos manuales trimestrales (lector + teclado) documentados; axe no cubre contraste fino real ni cambios de contexto.
6. **Design system AA**: define tokens de contraste, patrones (inputs con error, toasts, tabs, data tables) con sus ARIA; cada componente nuevo sale con test de axe.
7. **Cumplimiento legal**: declara objetivo de conformidad y ruta de acceso para quejas (footer/Página de accesibilidad, formulario de contacto); audita ante requerimientos (ADA título III, EAA europea, leyes locales); documenta excepciones de contenido (p. ej. PDFs heredados).
8. **Métricas de proceso**: % de PRs que pasan la auditoría, tiempo medio de corrección, componentes con test a11y; reporte trimestral a la dirección.
9. **Capacitación**: checklist para el equipo (contraste, labels, teclado) y revisión de PRs con "accesibilidad" como guard de merge.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `objetivo` | Nivel de conformidad | texto | sí | "WCAG 2.2 AA" |
| `normativas` | Leyes que aplican | lista | no | "EAA Europe, ADA" |
| `paginas_auditadas` | URLs críticas | lista | sí | "/", "/login", "/checkout" |
| `herramientas` | Auditoría a integrar | lista | no | "axe, Lighthouse CI" |
| `design_system` | ¿Existe DS? | booleano | no | true |
| `excepciones` | Contenido fuera de alcance | lista | no | "PDFs antiguos" |

## Reglas y checklist

- [ ] Matriz de criterios WCAG 2.2 AA con evidencia por página/componente
- [ ] axe-core en CI bloqueando violations en páginas clave
- [ ] Lighthouse a11y >= 95 en el presupuesto
- [ ] E2E de accesibilidad: teclado, foco, skip link, estados ARIA
- [ ] Chequeo manual trimestral con lector documentado
- [ ] Componentes del DS con atributos AA y test de axe
- [ ] Página de accesibilidad y ruta de quejas públicas
- [ ] Excepciones legales documentadas
- [ ] Reporte trimestral de métricas de accesibilidad

## Ejemplos de prompts

- "Configura axe-core con Playwright y bloquea el CI si hay violations"
- "Crea el E2E de teclado de mi modal: foco, trap y resto"
- "Audita mi design system: patrón de tabla de datos accesible con scope y caption"
- "Prepara la página de accesibilidad y la ruta de quejas para EAA"
- "Genera la matriz de criterios WCAG 2.2 AA con evidencias por sección"

## Plantillas y recursos

- [templates/test-a11y.spec.ts](templates/test-a11y.spec.ts) — test Playwright + axe-core con bloqueo de PR
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel