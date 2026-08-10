---
name: devops-cicd-profesional
description: Docker Compose multi-servicio, pipelines multi-etapa con caching, estrategias de deploy blue/green/rolling/canary con rollback, zero-downtime migrations, supply chain (dependabot, sbom), IaC y monitorizacion post-deploy. Usar en plataformas en produccion.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "devops-cicd"
  nivel: profesional
  stack: "docker compose, github actions, terraform, vercel cli, dependabot, observabilidad"
---

# DevOps Profesional: Plataformas Resilientes y Deploys Sin Fricción

## Qué hace este skill

Diseña la operación de nivel de producción: servicios orquestados con Docker Compose (app + BD + cache), pipelines multi-etapa con caching eficiente, estrategias de despliegue (blue/green, rolling, canary) con rollback verificado, migraciones de base de datos sin downtime, endurecimiento de la cadena de suministro (dependabot, SBOM), introducción a infraestructura como código y monitorización post-deploy para detectar regresiones antes que los usuarios.

## Cuándo usarlo

- Al montar el stack local de desarrollo o producción con varios servicios (app, Postgres, Redis).
- Al diseñar el pipeline multi-etapa de una plataforma con entornos y release gates.
- Al planear el primer despliegue sin downtime o tras un incidente de producción.
- Al endurecer seguridad: dependabot, análisis de imágenes (trivy), SBOM y firmas.
- Al versionar infraestructura con Terraform o Vercel CLI y monitorizar tras deploy.

## Requisitos previos

- Niveles básico y avanzado superados (pipeline CI/CD funcionando).
- Docker + Docker Compose instalados.
- Producto en producción o a punto de estarlo, con base de datos gestionada.
- Acceso a GitHub Advanced Security o dependabot estándar, y cuenta de un proveedor de imágenes (GHCR).
- Conocimientos de YAML, observabilidad básica (logs/errores) e idea de qué es IaC.

## Workflow paso a paso

1. Audita el stack real: servicios del proyecto (app, BD, cache, workers) y versiones. Documenta el resultado en el repo.
2. Reflexiona el stack a Docker Compose: copia `templates/docker-compose.yml`, mantén volúmenes nombrados para la BD, healthchecks en cada servicio y red definida; usa versiones pinneadas (nunca `latest`) con variables de entorno desde `.env` (plantilla `entorno-ejemplo.env` del nivel básico ampliada).
3. Valida localmente: `docker compose up -d`, `docker compose ps` (healthy), `docker compose logs -f app` y `docker compose down -v` para limpiar datos de prueba.
4. Diseña el pipeline multi-etapa: rebaja el tiempo con caching de capas Docker (`docker/build-push-action` con `cache-from/to: type=gha`), build en paralelo por plataforma y `matrix` solo cuando aporte (no inflar el número de jobs).
5. Establece release gates: el job `deploy` exige tests verdes, imagen firmada (cosign) y análisis de vulnerabilidades sin criterias altas.
6. Define la estrategia de deploy según la plataforma: contrato blue/green (Nginx/traffic shifter o servicio gestionado), rolling (deploy incremental por replicas) o canary (5-10% de tráfico con observación durante N minutos). Documenta la elegida.
7. Implementa rollback automático: healthcheck por post-deploy; si el chequeo falla en X segundos, se reutiliza la imagen/versión anterior (ver `templates/workflow-multietapa-rollback.yml`) y se paga un alert.
8. Migraciones sin downtime: nunca migrar y versionar en el mismo deploy; usa patron expand-migrate-contract: (1) expand (columnas/tablas nuevas compatibles), (2) migrate en ventana dedicada y (3) contract (retirar lo viejo). Los deploy reversibles no ejecutan migraciones destructivas.
9. Endurece la cadena de suministro: activa dependabot (config `dependabot.yml` en `.github/` con monthly PRs), escanea imágenes con trivy en CI, genera SBOM (`syft` o plugin BuildKit) y firma con cosign; registra las políticas de actualización en el repo.
10. Introduce IaC progresivamente: para Vercel, versiona el proyecto con `vercel.json` y `vercel link`; para infraestructura real, un módulo Terraform mínimo (provider, resource de ejemplo) en `infra/` con estado en backend remoto; nunca infraestructura huérfana.
11. Configura monitorización post-deploy: disponible/errors/latencia (Uptime Kuma simple o SaaS), con alertas conectadas al canal del equipo y zonas de visualización de releases en dasboard de errores; define el checklist post-deploy (ver plantilla).
12. Ejecuta un deploy completo de punta a punta monitorizado: lanza, observa métricas durante 15-30 min, documenta el resultado y repite con un rollout/rollback de prueba para validar el mecanismo.
13. Marca el checklist profesional y entrega al usuario: diagrama del stack, estrategia elegida, pipeline y políticas de seguridad.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `estrategia_deploy` | blue-green, rolling o canary | string | Sí | `canary` |
| `porcentaje_canary` | % de tráfico inicial en canary | number | No | `10` |
| `ventana_observacion` | Minutos de observación post-deploy | number | No | `15` |
| `servicios_compose` | Servicios del docker-compose | array | No | `["app", "postgres", "redis"]` |
| `imagen_release` | URI de la imagen de la release | string | Sí | `ghcr.io/mi-org/miapp:1.4.0` |
| `proveedor_ia` | terraform o vercel cli | string | No | `terraform` |
| `ejecutar_migraciones` | Si el deploy ejecuta migración (solo expand) | boolean | No | `false` |
| `umbral_rollback` | Umbral de error que dispara rollback (%) | number | No | `1` |
| `escaneo_seguridad` | trivy, sbom, firma cosign | array | No | `["trivy", "sbom"]` |

## Reglas y checklist

- [ ] Docker Compose con versiones pinneadas, volúmenes nombrados, healthchecks y red propia; validado con `docker compose up`.
- [ ] Pipeline multi-etapa con caching de capas (gha) y sin inflar la matriz.
- [ ] Release gates: tests verdes, escaneo de vulnerabilidades sin críticas y firma en el registro.
- [ ] Estrategia de deploy elegida y documentada con su mecanismo de rollback.
- [ ] Rollback probado de verdad (ejercicio de falta de healthcheck) antes de una crisis real.
- [ ] Migraciones con patrón expand/migrate/contract; el deploy nunca ejecuta migraciones destructivas.
- [ ] Dependabot activo con política mensual y PRs aplicados con pruebas.
- [ ] SBOM generado por release y evidencias de firma (cosign) verificables.
- [ ] Infraestructura versionada en `infra/` (Terraform o vercel.json) y no huérfana.
- [ ] Post-deploy monitorizado: disponibilidad, errores y latencia con alertas activas.
- [ ] Incidente simulado de rollout/rollback documentado con tiempos.
- [ ] Reporte final entregado: estrategia, stack, pipeline y estado de seguridad.

## Ejemplos de prompts

- "Refleja mi stack (app Node + Postgres + Redis) en un docker-compose completo con healthchecks y volúmenes nombrados."
- "Optimiza el pipeline para que el build Docker use caching gha y rebaje el tiempo de 12 a 4 minutos."
- "Quiero canary al 10% con ventana de 15 minutos y rollback automático: configúralo en el workflow con healthcheck por post-deploy."
- "Prepara el proceso de migraciones sin downtime para el próximo release: expand + migrate + contract."
- "Activa dependabot con PRs mensuales, escaneo trivy y SBOM en cada release; documenta las políticas."
- "Crea el módulo Terraform mínimo para mi app en `infra/` con backend remoto y conecta el deploy."

## Plantillas y recursos

- [Docker Compose multi-servicio completo](templates/docker-compose.yml)
- [Workflow multi-etapa con rollback](templates/workflow-multietapa-rollback.yml)
- [Checklist de verificación del nivel profesional](resources/checklist.md)