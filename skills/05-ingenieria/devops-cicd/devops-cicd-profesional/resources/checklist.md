# Checklist Nivel Profesional — DevOps y CI/CD

Nivel de producción. Verifica cada punto antes de dar por cerrada la operación.

## Stack orquestado

- [ ] Docker Compose con app + BD + cache + worker según el proyecto.
- [ ] Versiones de imagen pinneadas (nunca `latest`) y variables desde `.env`.
- [ ] Volúmenes nombrados para datos persistentes y red propia definida.
- [ ] Healthchecks en todos los servicios y `depends_on` con condiciones.
- [ ] `docker compose up -d` validado localmente y `ps` en healthy.

## Pipeline multi-etapa

- [ ] Jobs en etapas (calidad -> seguridad -> construir -> desplegar) con gates.
- [ ] Caching de capas Docker (type=gha) activo y medido el ahorro.
- [ ] Matriz de builds usada con criterio, no inflada.
- [ ] Concurrency para evitar deploys simultáneos sobre el mismo entorno.

## Estrategia de deploy

- [ ] Estrategia elegida (blue/green, rolling o canary) y documentada en el repo.
- [ ] Canary configurado con porcentaje y ventana de observación parametrizados.
- [ ] Rollback automático probado en un ejercicio simulado con healthcheck caído.
- [ ] Healthcheck post-deploy cubre `status`, errores y latencia básica.

## Migraciones

- [ ] Patrón expand/migrate/contract aplicado en el release.
- [ ] El deploy nunca ejecuta migraciones destructivas; migraciones en ventana separada.
- [ ] Reversibilidad verificada: rollback no requiere deshacer esquema.

## Supply chain

- [ ] Dependabot activo con política mensual y PRs probados antes de merge.
- [ ] Escaneo trivy sin vulnerabilidades críticas/altas en cada release.
- [ ] SBOM generado y publicado como artefacto de la release.
- [ ] Imágenes firmadas y verificables (cosign u equivalente).

## Infraestructura y monitorización

- [ ] Infraestructura versionada (`infra/` Terraform o `vercel.json`) con backend remoto.
- [ ] Cambios de infraestructura pasan por PR y review, no se aplican a mano.
- [ ] Monitorización post-deploy activa: disponibilidad, errores y latencia con alertas.
- [ ] Simulacro de incidente (rollout + rollback) documentado con tiempos.

## Reporte final

- [ ] Diagrama del stack, estrategia elegida, pipeline y políticas de seguridad entregados al usuario.