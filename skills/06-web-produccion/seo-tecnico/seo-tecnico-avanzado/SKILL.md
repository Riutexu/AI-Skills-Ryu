---
name: seo-tecnico-avanzado
description: Estructura SEO para bots y redes: JSON-LD con schema.org, Open Graph, sitemap.xml, robots.txt, canonical y hreflang con Core Web Vitals
license: MIT
compatibility: opencode
metadata:
  familia: "06-web-produccion"
  tema: "seo-tecnico"
  nivel: avanzado
  stack: "JSON-LD, XML, HTML"
---

# SEO técnico — Nivel avanzado

## Qué hace este skill

Guía para la capa de SEO que va más allá del HTML: datos estructurados JSON-LD con schema.org (rich results), Open Graph y Twitter Cards, `sitemap.xml` y `robots.txt` correctos, canonical, hreflang inicial y la relación Core Web Vitals ↔ posicionamiento.

## Cuándo usarlo

- Quieres aparecer con rich results (breadcrumbs, FAQ, producto con precio).
- Nuestro sitio escala (blog, tienda) y toca presentarlo bien a los bots.
- El sitio es multi-idiioma y necesita señales hreflang.

## Requisitos previos

- Nivel básico de este tema.
- Acceso para generar sitemap dinámico o estático (tu stack lo permite).

## Workflow paso a paso

1. **JSON-LD en `<head>`**: añade bloques `application/ld+json` por tipo de página: `Organization` en inicio, `Product` + `Offer` en fichas, `BreadcrumbList` en navegada, `FAQPage` si hay preguntas.
2. **Valida** cada tipo con el Rich Results Test de Google y corrige campos requeridos (name, price, currency...).
3. **Open Graph y Twitter**: `og:type`, `og:title`, `og:description`, `og:image` (1200×630 aprox.) y `twitter:card sumary_large_image`; los títulos sociales pueden diferir de los SEO.
4. **Canonical**: `link rel="canonical"` en cada página apuntando a su URL correcta (sin `?utm_` ni fragmentos); en listas paginadas usa el enlace canónico a la primera o `rel=prev/next` según el caso.
5. **sitemap.xml**: lista URLs canónicas con `<lastmod>` y prioridades razonables; genera dinámicamente si el contenido cambia; referencia en `robots.txt`.
6. **robots.txt**: permite `Disallow:` documentado; incluye rutas de sitemap; no bloquees CSS/JS si quieres que renderice bien.
7. **hreflang intro**: alternancias `link rel="alternate" hreflang="es"` entre idiomas (o `x-default`); empieza si el sitio es multi-idioma (la versión completa está en el nivel profesional).
8. **Core Web Vitals como factor**: asegura LCP < 2.5 s, CLS < 0.1 e INP < 200 ms en las páginas clave; usa el cuadro de Lighthouse para detectar rápidamente qué corregir.
9. **Redirecciones correctas**: 301 para movidas definitivas, 404 claros; nunca 200 con contenido vacío ni cadenas de redirección.
10. Verifica en Search Console: indexación, cobertura y rendimiento de cada página clave.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `tipos_schema` | Tipos JSON-LD por página | lista | sí | "Product, BreadcrumbList, FAQ" |
| `multi_idioma` | ¿Idiomas alternos? | booleano | no | false |
| `dominio` | Dominio canónico | url | sí | "https://mimtienda.com" |
| `cms_or_codigo` | Dónde vive el sitio | texto | no | "Next.js" |
| `paginas_sitemap` | URLS públicas | lista | no | auto |

## Reglas y checklist

- [ ] JSON-LD validado en Rich Results Test (sin errores)
- [ ] Og-image de 1200×630 y formato soportado
- [ ] Canonical correcto en cada página, sin params
- [ ] sitemap.xml válido (XML bien formado) y enlazado desde robots.txt
- [ ] robots.txt sin bloquear assets necesarios
- [ ] Redirecciones 301/404 correctas, sin cadenas
- [ ] CWV dentro de umbrales en páginas clave
- [ ] Search Console sin errores de indexación nuevos

## Ejemplos de prompts

- "Genera el JSON-LD de Product + Offer con precio normal y rebajado"
- "Crea mi sitemap.xml y robots.txt para un catálogo de 500 productos"
- "Añade Open Graph correcto a mi template de blog"
- "Revisa mis hreflang para español e inglés y corrige las URLs"

## Plantillas y recursos

- [templates/json-ld-y-sitemap.html](templates/json-ld-y-sitemap.html) — bloques JSON-LD (Product, Breadcrumb, FAQ) + ejemplo sitemap/robots
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel