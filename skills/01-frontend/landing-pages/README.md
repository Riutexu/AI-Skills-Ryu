# Landing pages

Conjunto de skills para diseñar, construir y medir landing pages de alta conversión: desde una página estática con HTML5 y CSS puro hasta una aplicación Next.js en producción con analytics y testing. Resuelve el problema de crear páginas de aterrizaje efectivas en cualquier etapa del proyecto, siempre con contenido real, semántica correcta, diseño responsive y criterios de calidad medibles.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| [landing-pages-basico](./landing-pages-basico/SKILL.md) | Básico | Estructura completa de landing con HTML5 semántico y CSS puro: hero, secciones, CTA, formulario con validación nativa y responsive con media queries. |
| [landing-pages-avanzado](./landing-pages-avanzado/SKILL.md) | Avanzado | Landing con Tailwind CSS: componentes reutilizables, SEO on-page, Open Graph, accesibilidad ARIA, animaciones con IntersectionObserver y formularios con estado. |
| [landing-pages-profesional](./landing-pages-profesional/SKILL.md) | Profesional | Landing de producción con Next.js y React: Core Web Vitals, analytics (GA4/Plausible), A/B testing, componentes de conversión y deploy en Vercel o Netlify. |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| stack | HTML5, CSS3 | Tailwind CSS, JavaScript | Next.js, React, TypeScript |
| entorno | Archivos estáticos locales | CDN de Tailwind o build | Proyecto Next.js con deploy |
| SEO | Meta básica manual | Meta + Open Graph completo | Metadata API + JSON-LD |
| Formularios | Validación nativa HTML5 | Validación JS con estado | Envío a API + eventos de conversión |
| Animaciones | Hover y transiciones CSS | IntersectionObserver + clases | Motion + LCP controlado |
| Medición | Ninguna | Ninguna | GA4/Plausible + A/B testing |
| Calidad | HTML válido y responsive | Lighthouse SEO y A11y ≥ 90 | CWV: LCP < 2.5 s, CLS < 0.1, INP < 200 ms |

## Instalación

Copia la carpeta del tema dentro de la biblioteca de skills de opencode. Opción por proyecto:

```powershell
Copy-Item -Recurse "01-frontend\landing-pages" -Destination ".opencode\skills\landing-pages"
```

Opción global en el equipo:

```powershell
Copy-Item -Recurse "01-frontend\landing-pages" -Destination "$HOME\.config\opencode\skills\landing-pages"
```

En macOS o Linux: `cp -r 01-frontend/landing-pages ~/.config/opencode/skills/`. Verifica que los tres skills (`landing-pages-basico`, `landing-pages-avanzado`, `landing-pages-profesional`) aparecen disponibles en opencode.

## Ruta de aprendizaje

1. **Básico → Avanzado**: domina la estructura semántica, el flujo visual de una landing (hero → beneficios → prueba → CTA) y el responsive con media queries antes de pasar a Tailwind.
2. **Avanzado → Profesional**: domina componentes Tailwind, animaciones accesibles y SEO on-page antes de pasar a React y Next.js.
3. **Profesional**: trabaja únicamente con métricas de negocio (conversión) y rendimiento real medido con Lighthouse, RUM y analytics.

## Referencias clave

- [MDN: HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN: Consultas de medios (media queries)](https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [Google Analytics 4: guía de desarrolladores](https://developers.google.com/analytics/devguides/collection/ga4)