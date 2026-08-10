# Checklist Nivel Profesional — Testing y Calidad

Nivel de producción. Verifica cada punto antes de dar por cerrada la tarea.

## TDD y pirámide

- [ ] TDD aplicado con ciclos rojo-verde-refactor auténticos en el/los módulos marcados.
- [ ] Pirámide auditada: conteo por capa y plan de inversión documentado.
- [ ] Presupuestos por capa fijados (unitario fuerte, E2E escaso y selectivo).
- [ ] Umbrals cumplidos en CI; no se rebajaron para "pasar" (verificado en git diff de la config).

## E2E y visual regression

- [ ] Playwright configurado con multi-navegador (chromium/firefox/webkit) y servidor web.
- [ ] Specs E2E con queries accesibles cubriendo flujo feliz y de error.
- [ ] Visual regression activada: snapshots comprometidos y diffs revisables en CI.
- [ ] Artefactos de evidencia (traces/screenshots) al fallar.
- [ ] Sharding aplicado si la suite E2E supera el presupuesto de tiempo.

## APIs y mutation testing

- [ ] APIs cubiertas con supertest: feliz, 404, validación de cuerpo y errores.
- [ ] Mutation testing ejecutado sobre módulos core con <= 30% de supervivientes.
- [ ] Supervivientes clasificados: débil, no definido o caso límite con acción tomada.

## Datos de test

- [ ] Fixtures JSON versionados en `src/test/fixtures/` con uso coherente.
- [ ] Factories tipadas para datos dinámicos; sin datos improvisados duplicados en tests.
- [ ] Ningún test depende de red real ni de servicios externos (MSW o mocks en el borde).

## Integración en CI

- [ ] Workflow de CI ejecuta: unit + coverage + mutation + E2E por shards.
- [ ] Reportes (coverage, mutation, playwright) publicados como artefactos.
- [ ] El pipeline bloquea el merge si los umbrals no se cumplen.

## Reporte

- [ ] Métricas de calidad completas entregadas: cobertura, supervivencia y E2E.