---
name: performance-web-basico
description: Mide Core Web Vitals con Lighthouse y aplica las optimizaciones básicas: formatos de imagen, lazy loading y eliminación de layout shift
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "performance-web"
  nivel: basico
  stack: "HTML, CSS, Lighthouse"
---

# Performance web — Nivel básico

## Qué hace este skill

Guía para empezar a optimizar el rendimiento con criterio: qué son los Core Web Vitals (LCP, CLS, INP), cómo medirlos con Lighthouse y qué ganancias simples (formatos de imagen, lazy loading, dimensiones fijas) dan el 80% del resultado.

## Cuándo usarlo

- La página carga lento o el Lighthouse da rojos en las métricas.
- Quieres entender las tres métricas antes de tocar nada.
- Proyecto nuevo: quieres arrancar con imágenes y layout optimizados.

## Requisitos previos

- HTML/CSS básicos y saber leer DevTools.

## Workflow paso a paso

1. **Mide antes de tocar**: abre DevTools → Lighthouse, mide la página real (mobile y desktop) y anota LCP, CLS e INP y sus causas.
2. **Entiende las métricas**:
   - **LCP < 2.5 s**: cuándo se pinta el contenido principal (imagen o bloque de texto).
   - **CLS < 0.1**: cuánto se mueve el layout inesperadamente.
   - **INP < 200 ms**: la latencia de las interacciones principales.
3. **Imágenes**: convierte a formato moderno (WebP/AVIF) y reduce peso; comprime con herramientas (squoosh, sharp).
4. **Dimensiones fijas**: declara `width` y `height` (o `aspect-ratio`) en `<img>` para reservar espacio y matar CLS.
5. **Lazy loading**: `loading="lazy"` en imágenes fuera del primer viewport; NUNCA lazy en LCP; `fetchpriority="high"` en la imagen crítica.
6. **Preconnect**: `rel="preconnect"` a dominios de terceros usados al inicio (fuentes, CDN) para ahorrar latencia.
7. **Fuentes**: si usas fuentes web, elige `font-display: swap` y subconjuntos; evita muchas variantes.
8. **Posición del script**: scripts al final o con `defer`; estilos críticos no bloqueantes en el head.
9. **Re-mide** con Lighthouse y comprueba que las causas nombradas desaparecen; itera una vez más.
10. Documenta el número antes/después para el equipo.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `url` | Página a optimizar | url | sí | "https://miweb.com/" |
| `objetivos` | Umbrales deseados | mapa | no | "LCP 2.0s, CLS 0.05" |
| `assets` | Archivos pesados conocidos | lista | no | "img/hero.jpg (2MB)" |
| `dispositivo` | Mobile/desktop prioritario | texto | no | "mobile" |
| `terceros` | Dominios externos usados | lista | no | fonts.gstatic.com |

## Reglas y checklist

- [ ] Medición inicial y medición final registradas
- [ ] LCP < 2.5 s, CLS < 0.1, INP < 200 ms en la página objetivo
- [ ] Imágenes en WebP/AVIF comprimidas y con dimensiones fijas
- [ ] Lazy loading fuera de viewport, nunca en el LCP
- [ ] fetchpriority/preconnect aplicados donde aportan
- [ ] Fuentes con font-display swap y preconnect
- [ ] Scripts sin bloqueo del render inicial

## Ejemplos de prompts

- "Medir y optimizar la home: corregir LCP y CLS de mi site"
- "Convierte estas imágenes a WebP con dimensiones correctas"
- "Añade lazy loading y fetchpriority a mi HTML sin romper el CLS"
- "Reducir el peso de media: fuentes, preconnect y formatos"
- "Haz un informe Lighthouse antes/después de mis cambios"

## Plantillas y recursos

- [templates/imagenes-optimizadas.html](templates/imagenes-optimizadas.html) — img con dimensiones, lazy y preconnect
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel