# Checklist de calidad: landing pages nivel profesional

## Negocio y conversión

- [ ] Objetivo de negocio escrito con su KPI único (leads, demos, ventas).
- [ ] Trayectoria de conversión trazada: cada CTA lleva a un destino rastreado.
- [ ] Evento de conversión emite `conversion` (con origen) en el punto exacto de éxito.
- [ ] Copy con propuesta de valor clara y prueba social con datos reales.
- [ ] Plan A/B documentado: hipótesis, variante, métrica y criterio de terminación.

## Rendimiento (Core Web Vitals)

- [ ] LCP < 2.5 s verificado: la imagen del LCP usa `priority` y `fetchPriority="high"`.
- [ ] CLS < 0.1: dimensiones explícitas en imágenes y fuentes con variables CSS.
- [ ] INP < 200 ms: scripts de analytics cargan `afterInteractive`, sin bloquear input.
- [ ] Fuentes servidas con `next/font`; ninguna fuente externa bloquea el render.
- [ ] Lighthouse rendimiento ≥ 90 y accesibilidad ≥ 90 en el dominio de producción.

## SEO y datos estructurados

- [ ] Metadata API completa: metadataBase, title template, description, canonical.
- [ ] Open Graph y Twitter Card con imagen 1200x630 comprobada en validador.
- [ ] JSON-LD válido según el validador de schema.org.
- [ ] `lang="es"` y jerarquía de encabezados correcta en toda la página.
- [ ] Sin contenido duplicado: canonical y robots coherentes.

## Analytics

- [ ] GA4 y/o Plausible configurados por variable de entorno, sin secretos en el repo.
- [ ] Eventos con nombres consistentes y propiedades planas (no anidar datos).
- [ ] Pageviews de SPA emitidos en cada cambio de ruta.
- [ ] Eventos visibles en el panel tras el deploy (prueba de humo con un clic real).
- [ ] Consentimiento de cookies gestionado (CE) antes de cargar scripts si aplica.

## Formulario y seguridad

- [ ] Validación en servidor o Server Action además de la validación en cliente.
- [ ] Rate limit o protección básica contra envíos masivos.
- [ ] Mensajes de éxito/error accesibles (`role="status"`).
- [ ] URLs de destino y redirecciones probadas tras el deploy.

## Deploy y verificación

- [ ] Preview por branch antes de producción; variables de entorno configuradas en ambos.
- [ ] Lighthouse o auditoría ejecutada sobre el dominio final, no sobre localhost.
- [ ] Pruebas de humo post-deploy: envío del formulario, 404, favicon, OG compartido.
- [ ] Monitoreo de CWV con RUM (web-vitals) o CrUX tras una semana de tráfico.