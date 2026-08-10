# Checklist avanzado: Performance web

- [ ] <picture> + srcset/sizes con AVIF/WebP y fallback
- [ ] Code splitting con dynamic import; chunk inicial bajo presupuesto
- [ ] Cache-Control por tipo de recurso (immutable con hash, no-cache HTML)
- [ ] Fuentes woff2, font-display swap, subconjuntos y preload crítico
- [ ] Critical CSS inline; resto diferido
- [ ] Animaciones solo transform/opacity
- [ ] WebPageTest revisado (waterfall del LCP, TTFB, third-party)
- [ ] Mejora medida y documentada vs. la base