# Checklist profesional: Performance web

- [ ] Lighthouse CI con presupuestos y bloqueo en PRs
- [ ] web-vitals RUM instrumentado y agregado diario por segmento
- [ ] Alarmas sobre P75 de LCP/CLS/INP configuradas
- [ ] Comparativa CrUX vs RUM sin divergencias silenciosas
- [ ] Caché stale-while-revalidate y purga por tag en producción
- [ ] CDN/edge en uso; TTFB < 300 ms verificado en varias regiones
- [ ] N+1 resuelto; perfiles y Redis en rutas calientes
- [ ] Streaming/islands donde bloqueaba el render
- [ ] Móvil real probado (gama baja) y métrica ligada al negocio
- [ ] Reporte mensual de CWV con regresiones detectadas