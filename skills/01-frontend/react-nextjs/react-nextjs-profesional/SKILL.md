---
name: react-nextjs-profesional
description: Arquitectura y rendimiento de producción con React/Next: Server Components, Suspense y streaming, memo/lazy, testing con Vitest+RTL y despliegue con CI
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "react-nextjs"
  nivel: profesional
  stack: "Next.js 15, React 19, TypeScript, Vitest, Testing Library"
---

# React y Next.js — Nivel profesional full stack

## Qué hace este skill

Guía para llevar apps React/Next.js a producción con calidad de equipo senior: React Server Components y Suspense/streaming, arquitectura de componentes mantenible, memoización y code splitting, testing con Vitest + Testing Library y despliegue con CI/CD.

## Cuándo usarlo

- La app escala y el rendimiento/optimización importan (Core Web Vitals, bundle).
- El equipo necesita una arquitectura de componentes consistente y testeable.
- Se despliega a producción con pipelines y presupuestos de calidad.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Next.js App Router con Server Components y TypeScript.
- CI/CD básico (GitHub Actions) — ver tema `devops-cicd`.

## Workflow paso a paso

1. **Arquitectura por defecto**: pagina (route) → Server Component; añade `"use client"` solo en hojas interactivas (botones, formularios). Minimiza el árbol de clientes.
2. **Suspense y streaming**: envuelve secciones que cargan datos lentos en `<Suspense>` con `loading.tsx` o fallbacks por sección; usa `streaming` para render progresivo.
3. **Rendimiento**: `next/font` (no red de fuentes externas), `next/image` con sizes correctos, `dynamic(() => import(...))` para librerías pesadas (heavy components, charts).
4. **Memoización realista**: `useMemo`/`useCallback` para referencias estables; `React.memo` solo en listas largas y componentes pesados; mide con React DevTools Profiler antes y después.
5. **Estado y datos**: librías mínimas (Zustand/TanStack Query cuando aportan); cache con `revalidate` y `unstable_cache` para evitar fetch duplicados en el servidor.
6. **Testing**: Vitest + Testing Library (RTL). Testea comportamiento (rol, texto visible), no implementación; cubre estados críticos (loading, error, data).
7. **Errores**: `error.tsx` y `error-boundary` por segmento; `not-found.tsx`; logs de servidor con contexto del error.
8. **CI/CD**: workflow con lint, `tsc --noEmit`, tests, `next build` y deploy a Vercel (Preview para PRs, Production en main).
9. **Presupuestos**: usa `next build` output y observa el tamaño de chunk; añade webpack-bundle-analyzer puntual y define un máximo de bundle crítico (< 170 KB gzip aprox. para interacción).
10. **Edge runtime** cuando aplique (middleware auth, páginas de baja dependencia) y valida compatibilidad de la librería.
11. Documenta decisiones: adónde va cada componente (colocation), convenciones de naming y patrones de datos (ADRs).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `patrones` | RSC, streaming, islands | lista | sí | "RSC + Suspense" |
| `presupuesto_bundle` | Máx. JS crítico permitido | número | no | "170 KB gzip" |
| `testing` | Framework y cobertura exigida | texto | no | "Vitest + RTL, 80%" |
| `cipipeline` | CI y plataforma de deploy | texto | no | "GitHub Actions + Vercel" |
| `edge` | ¿Usar edge runtime? | booleano | no | false |
| `criterios_aceptacion` | Métricas de éxito | lista | no | "INP < 200ms, tests verdes" |

## Reglas y checklist

- [ ] `"use client"` al mínimo; Server Components por defecto
- [ ] Suspense y streaming en rutas con datos lentos
- [ ] `next/image` y `next/font` en todas las imágenes/fuentes
- [ ] dynamic import para librerías pesadas fuera del bundle crítico
- [ ] Tests de los caminos loading/error/data en componentes interactivos
- [ ] error.tsx + not-found.tsx presentes en rutas clave
- [ ] CI: lint + typecheck + tests + build + deploy en cada PR
- [ ] Bundle menor que el presupuesto definido

## Ejemplos de prompts

- "Refactoriza esta página a Server Components con Suspense por sección"
- "Mido el INP y LCP de mi app y propón mejoras priorizadas"
- "Añade Vitest + RTL y tests del carrito incluyendo errores del API"
- "Configura un workflow CI que falle si el bundle supera 170 KB"
- "Migra este layout a streaming con loading skeletons"

## Plantillas y recursos

- [templates/layout-streaming.tsx](templates/layout-streaming.tsx) — layout con Suspense + skeletons
- [templates/componente-server.tsx](templates/componente-server.tsx) — Server Component con fetch + revalidate
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel