# Performance web

Skills para medir y optimizar la velocidad como un profesional: Core Web Vitals, imágenes y fuentes, code splitting, caching, CDN/edge y presupuestos de rendimiento en CI.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [performance-web-basico](performance-web-basico/SKILL.md) | Básico | Core Web Vitals (LCP/CLS/INP), Lighthouse, imágenes y lazy loading |
| [performance-web-avanzado](performance-web-avanzado/SKILL.md) | Avanzado | srcset/AVIF, code splitting, caching, fuentes y critical CSS |
| [performance-web-profesional](performance-web-profesional/SKILL.md) | Profesional | Presupuestos en CI, CDN/edge, RUM con CrUX, cachés avanzadas y streaming |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `metricas` | Lighthouse | + WebPageTest | + CrUX/RUM P75 |
| `optimizacion` | Imágenes y assets | JS/fuentes/caching | Arquitectura (CDN, edge) |
| `ciencia` | Manual | Guiada | Presupuestos en CI |
| `backend` | — | N+1 intro | Perfiles, Redis, streaming |

## Instalación

```
xcopy performance-web C:\Users\%USERNAME%\.config\opencode\skills\performance-web /E /I
```

## Ruta de aprendizaje

1. **Básico**: mide con Lighthouse y corrige imágenes/layout.
2. **Avanzado**: JS splitting, caching y fuentes.
3. **Profesional**: presupuestos, RUM y arquitectura.

## Referencias clave

- [Core Web Vitals (web.dev)](https://web.dev/vitals/)
- [web.dev Learn Performance](https://web.dev/learn/performance)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [WebPageTest](https://www.webpagetest.org/)
- [Cabeceras de caché (MDN)](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Cache-Control)