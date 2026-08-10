# SEO técnico

Skills para optimizar el posicionamiento desde el código: metadatos, datos estructurados JSON-LD, sitemaps, rendimiento como factor SEO y auditorías automatizadas.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [seo-tecnico-basico](seo-tecnico-basico/SKILL.md) | Básico | Titles, meta descriptions, headings, alt, URLs limpias y semántica |
| [seo-tecnico-avanzado](seo-tecnico-avanzado/SKILL.md) | Avanzado | JSON-LD (schema.org), Open Graph, sitemap.xml, robots.txt, canonical e hreflang |
| [seo-tecnico-profesional](seo-tecnico-profesional/SKILL.md) | Profesional | Auditorías con Lighthouse CI/CrUX, hreflang completo, crawl budget, SEO en SPAs |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `idiomas` | Uno | Uno + social | Multi-idioma (hreflang) |
| `datos_estructurados` | — | JSON-LD básico | Schema completo + validación |
| `auditoria` | Manual | Manual guiada | Automatizada (CI/CrUX) |
| `tipo_sitio` | Cualquiera | Blogs/tiendas | SPAs y grandes catálogos |
| `metricas` | — | Core Web Vitals | CWV con presupuestos |

## Instalación

```
xcopy seo-tecnico C:\Users\%USERNAME%\.config\opencode\skills\seo-tecnico /E /I
```

## Ruta de aprendizaje

1. **Básico**: HTML semántico y metadatos correctos en cada página.
2. **Avanzado**: JSON-LD, Open Graph y archivos para bots (sitemap/robots).
3. **Profesional**: medición y auditoría continua (CrUX, Lighthouse CI).

## Referencias clave

- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Guía de Core Web Vitals (web.dev)](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)