# Checklist básico: Performance web

- [ ] Medición inicial con Lighthouse (antes) registrada
- [ ] LCP < 2.5 s, CLS < 0.1, INP < 200 ms en las páginas objetivo
- [ ] Imágenes modernas (WebP/AVIF) y comprimidas
- [ ] Dimensiones fijas / aspect-ratio en todas las imágenes
- [ ] Lazy loading fuera de viewport; nunca en el LCP
- [ ] fetchpriority en la imagen crítica
- [ ] preconnect a dominios críticos de terceros
- [ ] Fuentes con font-display swap
- [ ] Scripts no bloqueantes (defer / al final)
- [ ] Re-medición final con mejora documentada