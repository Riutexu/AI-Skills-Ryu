---
name: performance-web-avanzado
description: Optimización de JS y transporte: imágenes responsive srcset, code splitting, caching con Cache-Control, fuentes optimizadas y critical CSS
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "performance-web"
  nivel: avanzado
  stack: "srcset, Cache-Control, dynamic import"
---

# Performance web — Nivel avanzado

## Qué hace este skill

Guía para la siguiente capa de optimización: imágenes responsive con `srcset`/`sizes`, división del JavaScript (code splitting) para no pagar lo que no se usa, caché del navegador con `Cache-Control`, fuentes optimizadas y critical CSS.

## Cuándo usarlo

- Las imágenes se sirven gigantes en móvil o el bundle de JS pesa demasiado.
- Necesitas bajar cuantitativamente el tiempo hasta el contenido (LCP) y los bytes transferidos.
- Ya aplicaste el nivel básico y quieres ir al detalle.

## Requisitos previos

- Nivel básico de este tema (CWV, imágenes, lazy).
- Familiaridad con tu bundler (Vite/Next/webpack) y headers del servidor.

## Workflow paso a paso

1. **srcset/sizes**: sirve el tamaño correcto según viewport con `srcset` (1x/2x) y `sizes`; añade `AVIF` con `type` en `<picture>` con fallback WebP/JPEG.
2. **Code splitting**: `import()` dinámico para rutas/módulos pesados (gráficas, editores, libs de fecha); verifica el efecto con el reporte de bundle del bundler y recorta el chunk inicial.
3. **Cache-Control correcto**: assets con hash en la URL viajan con `public, max-age=31536000, immutable`; HTML `no-cache`; API con `no-store` o corto si no son estáticos.
4. **Fuentes**: `font-display: swap`, subconjuntos (`unicode-range`), formato woff2, preload solo de la variante crítica y `font-size-adjust` para evitar layout shift de texto.
5. **Critical CSS**: el CSS de la primera vista inline en `<style>` y diferido el resto (critical CSS CLI o manual); en frameworks usa los estándares (Next inlines el crítico).
6. **WebPageTest/PageSpeed**: reproduce la ruta con perfil móvil, revisa waterfall del LCP, tiempo de servidor (TTFB) y third-party en la carga.
7. **Animaciones y composición**: usa `transform`/`opacity` (no layout), `will-change` solo donde aporte, y evita trabajo en el hilo principal durante scroll.
8. **P62 de servidor**: si TTFB alto, revisa N+1, cachés y CDN (nivel profesional).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `bundle_presupuesto` | Tamaño máximo JS crítico | número | no | "170 KB gzip" |
| `cdnicas` | Dominios de assets | lista | no | "cdn.miweb.com" |
| `fuentes` | Familias y variantes | lista | no | "Inter 400,700" |
| `rutas_pesadas` | Rutas/módulos a splitear | lista | no | /reportes, charts |
| `ttfb_objetivo` | Tiempo servidor objetivo | número | no | 600 ms |
| `target_plataforma` | Mobile/desktop | texto | no | "mobile" |

## Reglas y checklist

- [ ] Imágenes con srcset/sizes y AVIF/WebP (fallback incluido)
- [ ] Chunks dinámicos activados; bundle crítico bajo presupuesto
- [ ] Cache-Control con immutable para assets con hash
- [ ] Fuentes woff2, swap y subconjuntos; preload de la crítica
- [ ] Critical CSS inline y resto diferido
- [ ] Animaciones solo transform/opacity
- [ ] WebPageTest revisado: waterfall del LCP sin sorpresas

## Ejemplos de prompts

- "Optimiza mis imágenes con picture + srcset para móvil y retina"
- "Splitea el JS: mueve la gráfica a un dynamic import que no cargue en el bundle inicial"
- "Configura Cache-Control correcto en mi CDN (assets con hash, HTML no-cache)"
- "Optimiza Inter: woff2, unicode-range, swap y preload"
- "Genera y aplica el critical CSS de mi home"

## Plantillas y recursos

- [templates/picture-srcset.html](templates/picture-srcset.html) — picture con AVIF/WebP/JPEG y srcset
- [templates/cache-headers.md](templates/cache-headers.md) — política Cache-Control por tipo de recurso
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel