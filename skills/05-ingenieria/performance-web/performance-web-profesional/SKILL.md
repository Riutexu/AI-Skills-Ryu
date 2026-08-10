---
name: performance-web-profesional
description: Rendimiento como proceso: presupuestos con Lighthouse CI, CDN/edge, RUM con CrUX y web-vitals, caching avanzado, optimización de backend y streaming
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "performance-web"
  nivel: profesional
  stack: "Lighthouse CI, CrUX, web-vitals, CDN/edge"
---

# Performance web — Nivel profesional full stack

## Qué hace este skill

Guía para operar el rendimiento como un programa continuo: presupuestos en CI (Lighthouse) que bloquean PRs, monitorización con datos reales de usuario (CrUX, web-vitals), estrategias de caché avanzadas (stale-while-revalidate), optimización del backend (N+1, perfiles, Redis) y estrategias de renderizado (streaming, islands).

## Cuándo usarlo

- El equipo necesita garantías de rendimiento en cada merge, no informes puntuales.
- Detectas métricas buenas en lab pero malas en producción (datos reales P75).
- La escala pide arquitectura: CDN/edge, cachés y menos trabajo en el hilo principal.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Pipeline CI y acceso al backend de producción (para perfiles y cachés).

## Workflow paso a paso

1. **Presupuestos con Lighthouse CI**: configura `lighthouserc.json` con performance/LCP/CLS/INP por ruta clave; conéctalo a GitHub (comentario en PRs) y que falle el merge cuando se supere.
2. **RUM con web-vitals**: instala la librería `web-vitals` para recoger LCP/CLS/INP reales, envía a tu backend/analytics y agrega por segmento (navegador, región, ruta); fija alarmas sobre el P75 de las últimas 24 h.
3. **CrUX como fuente de verdad**: compara tu RUM con el informe CrUX de Search Console (agregado real de Google); alérdate con 2º de diferencia entre ambos.
4. **Caching avanzado**: `stale-while-revalidate` en imágenes/páginas de catálogo; subida de páginas con hashes de contenido; invalida cachés de CDN por tag cuando cambian datos (purge por tag/patrón).
5. **CDN y edge**: sirve assets y páginas desde el edge (Cloudflare/ Vercel Edge/ AWS CloudFront); mueve a edge solo lógica sin estado; el TTFB cae típicamente a < 300 ms en el mundo.
6. **Backend**: caza N+1 con logs de queries (Prisma `log`), perfiles (profiling Node/Postgres `EXPLAIN ANALYZE`), cachés en memoria o Redis en rutas calientes y peticiones de BD paralelas con `Promise.all`.
7. **Renderizado**: streaming con Suspense (Next.js) para no esperar los datos lentos; islands/partial hydration si es CSR; asegúrate de que la interacción (INP) queda bajo control en móvil de gama baja.
8. **Medición en móvil real**: perfil con Lighthouse en gama baja (CPU 4x slowdown, throttling de red 4G) y con un dispositivo físico en condiciones reales.
9. **Alertas y reporte**: panel mensual con CWV por ruta + regresiones; enlaza la métrica con el negocio (conversión vs INP).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `presupuestos` | Puntuaciones por ruta | mapa | sí | "perf 90, LCP 2.0s" |
| `rutas_rum` | Rutas a medir en RUM | lista | no | "/, /productos, /checkout" |
| `p75_objetivo` | Umbral de alarmas | mapa | no | "LCP 2.5s, INP 200ms" |
| `cdn` | Proveedor de edge | texto | no | "Cloudflare" |
| `backend_hot` | Queries/rutas calientes | lista | no | "/catalogo, refresh" |
| `fuente_rum` | RUM propio o CrUX | lista | no | "web-vitals + CrUX" |

## Reglas y checklist

- [ ] Lighthouse CI en PRs con presupuestos bloqueantes
- [ ] web-vitals RUM agregado por día/segmento y alarmas P75
- [ ] CrUX comparado con RUM propio (sin divergencias silenciosas)
- [ ] Caché stale-while-revalidate y purga por tag donde aplique
- [ ] CDN/edge en producción; TTFB verificado desde múltiples regiones
- [ ] Backend: N+1 resuelto, perfiles y Redis en rutas calientes
- [ ] Streaming/islands aplicados donde el render bloquea
- [ ] Móvil real (no solo emulación) con la métrica ligada al negocio

## Ejemplos de prompts

- "Configura Lighthouse CI con presupuestos por ruta y que comente en las PRs"
- "Instrumenta web-vitals y agrega el P75 diario de LCP/CLS/INP"
- "Caza el N+1 de mi catálogo con Prisma y optimiza las peticiones paralelas"
- "Mueve esta página a streaming con Suspense y mide el INP en móvil"
- "Diseña la caché stale-while-revalidate de imágenes con purga por tag"

## Plantillas y recursos

- [templates/lighthouserc.json](templates/lighthouserc.json) — presupuestos de CI por ruta
- [templates/web-vitals.ts](templates/web-vitals.ts) — captura y envío de RUM con web-vitals
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel