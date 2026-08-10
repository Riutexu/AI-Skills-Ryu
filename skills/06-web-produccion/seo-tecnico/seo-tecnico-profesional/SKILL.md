---
name: seo-tecnico-profesional
description: Auditorías SEO automatizadas con Lighthouse CI y CrUX, hreflang completo, crawl budget, prevención de duplicados y SEO en SPAs con SSR/SSG
license: MIT
compatibility: opencode
metadata:
  familia: "06-web-produccion"
  tema: "seo-tecnico"
  nivel: profesional
  stack: "Lighthouse CI, CrUX, Next.js/SPA, Google Search Console API"
---

# SEO técnico — Nivel profesional full stack

## Qué hace este skill

Guía para operar el SEO técnico como un programa continuo: auditorías automatizadas en CI (Lighthouse) y con datos reales de usuario (CrUX), hreflang multi-idioma correcto, crawl budget, prevención de contenido duplicado y SEO en aplicaciones JavaScript (SSR/SSG/prerendering).

## Cuándo usarlo

- El sitio es grande (miles de URLs) y el crawl budget importa.
- Quieres garantías de SEO en cada merge, no auditorías manuales puntuales.
- La app es SPA/CSR y hay que decidir estrategia de renderizado para indexación.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Web de producción con Search Console conectada y monitorización de CrUX.

## Workflow paso a paso

1. **Lighthouse CI en el pipeline**: configura presupuestos por página clave (performance >= 90, accessibility >= 95, SEO >= 95) y falla el PR si no se cumplen.
2. **Monitorización real (CrUX)**: la librería `web-vitals` recopila RUM; consulta el informe CrUX en Search Console o API y alerta cuando LCP/CLS/INP superen el P75.
3. **hreflang completo**: todas las alternancias simétricas (A→B, B→A), `x-default` en la versión neutral, URLs canónicas auto-referenciales; valida con el validator de hreflang.
4. **Crawl budget**: prioriza URLs importantes con sitemap de índices (sitemap index + subsitemaps por sección), `nosnippet`/`noindex` para páginas irrelevantes y canonical sin errores.
5. **Duplicados**: folds de facetas (filtros) → canonical a la página raíz o `noindex` si no tienen valor; parámetros gestionados con parámetros de Search Console/Googlebot (por ejemplo `sorted=`, `?color=`).
6. **SEO en SPAs**: si el contenido depende de JS, indexación vía SSR (Next.js/Nuxt), SSG o prerendering; verifica con `URL Inspection Tool` que Google renderiza y ve el contenido. CDN edge + SSR; 404 reales con HTTP 404.
7. **Contenido huérfano**: crawlea con Screaming Frog o tu propio crawler, marca páginas sin enlaces internos y decide indexar o corregir.
8. **Migraciones**: plan 1:1 URL antiguas→nuevas con 301, actualiza sitemap, supervisa en Search Console durante 30-60 días, vigila caídas de posiciones.
9. **Internacionalización**: mini-hub de hreflang vs. subdirectorios, decisión documentada; nunca mezclar señales contradictorias entre canonical y hreflang.
10. **Presupuesto continuo**: revisión mensual de cobertura/indexación, alertas de CWV y auditoría semestral completa.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `urls_criticas` | Páginas con presupuesto | lista | sí | "/", "/productos", "/checkout" |
| `presupuestos` | Puntuaciones mínimas | mapa | no | "perf 90, seo 95" |
| `idiomas` | Lista de idiomas con hreflang | lista | no | es, en, pt, x-default |
| `renderizado` | SSR/SSG/prerender | texto | no | "Next.js SSG" |
| `limitacion_crawl` | ¿Problemas de presupuesto? | texto | no | "500k URLs" |
| `fechas_revue` | Frecuencia de auditoría | texto | no | "mensual" |

## Reglas y checklist

- [ ] Lighthouse CI en todas las PRs con presupuestos por página clave
- [ ] CrUX/RUM monitorizado con alertas en P75 sobre umbrales
- [ ] hreflang simétrico y validado, sin contradicciones con canonical
- [ ] Sitemap index con subsitemaps y prioridad por sección
- [ ] Facetas/duplicados gestionados (canonical o noindex)
- [ ] SPA indexable tras renderizado servidor/prerender verificado con URL Inspection
- [ ] Crawl completo sin huérfanos; migraciones con 301 1:1 y seguimiento
- [ ] Informe mensual: cobertura, CWV y posiciones

## Ejemplos de prompts

- "Configura Lighthouse CI con presupuestos para mis 5 páginas clave"
- "Diseña el hreflang para es/en/pt con x-default y valida las URLs"
- "Audita mi SPA: ¿Google renderiza mi contenido? Propón SSG o prerender"
- "Crea el plan de migración de dominio con 301 y supervisión en Search Console"
- "Prioriza mi crawl budget: sitemap index y noindex de facetas"

## Plantillas y recursos

- [templates/auditoria-lhci.yml](templates/auditoria-lhci.yml) — workflow Lighthouse CI con presupuestos
- [templates/hreflang-multiidioma.html](templates/hreflang-multiidioma.html) — alternancias hreflang completas
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel