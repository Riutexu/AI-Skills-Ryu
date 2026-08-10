---
name: devops-cicd-avanzado
description: GitHub Actions con jobs/steps/triggers, secrets y entornos dev/staging/prod, pipeline build+test+deploy automatico y Dockerfile basico. Usar al automatizar el ciclo de calidad y despliegue de un proyecto.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "devops-cicd"
  nivel: avanzado
  stack: "github actions, docker, node, secrets, entornos"
---

# DevOps Avanzado: Automatización con GitHub Actions y Docker

## Qué hace este skill

Construye el pipeline CI/CD del proyecto: GitHub Actions con jobs y steps bien estructurados, triggers correctos, secretos gestionados por entorno (dev/staging/prod), build + tests + deploy automático, y base de contenedores con un Dockerfile multi-stage. Deja el repo con un ciclo de calidad que corre solo en cada PR y cada push a ramas protegidas.

## Cuándo usarlo

- Al automatizar el ciclo build + lint + test + deploy que hoy se hace a mano.
- Al gestionar secretos de CI y entornos separados (dev/staging/prod) con protección.
- Al añadir un Dockerfile para empaquetar la app de forma reproducible.
- Al querer deploys automáticos solo desde ramas controladas (main, release).
- Al fallar la CI: depurar jobs, steps y cachés del workflow.

## Requisitos previos

- Nivel básico superado: proyecto desplegable y conceptos de CI/CD claros.
- Repositorio en GitHub con CI habilitada (Actions siempre visible en repos públicos).
- `docker` instalado localmente si se prueba el Dockerfile (o Docker Desktop).
- Conocimientos mínimos de YAML y del comando de build del proyecto.

## Workflow paso a paso

1. Audita el proyecto: comando de build, de test (`npm test`), de lint, framework y requisitos de entorno (Node version, variables).
2. Crea la carpeta `.github/workflows/` y escribe la primera versión del pipeline usando `templates/workflow-ci-cd.yml` como base.
3. Define los triggers correctos: `pull_request` para PRs y `push` solo en ramas controladas (`main`, `release/**`); evita correr deploys en PRs ajenos.
4. Estructura los jobs: `lint` + `test` + `build` para reacción rápida, y `deploy` con `needs` para ejecutarse solo si todo pasó.
5. Configura el entorno de GitHub: crea environments `dev`, `staging` y `production` en Settings → Environments, con protectors (aprobación manual en prod, rama restringida).
6. Guarda los secretos como GitHub Secrets (Settings → Secrets and variables) con el prefijo del entorno: `DEV_*`, `STAGING_*`, `PROD_*`; accede en el workflow vía `vars` y `secrets` dentro del `environment`.
7. Usa las actions oficiales con versión pinneada (`actions/checkout@v4`, `actions/setup-node@v4`, `actions/cache@v4` o el caching integrado de `setup-node`) y cachea `~/.npm` o `node_modules` por hash de lockfile.
8. Ejecuta el pipeline de prueba en un PR de ejemplo; corrige pasos con `act` local o iterando commits hasta que los 3 jobs estén verdes.
9. Añade el deploy automático: en el job `deploy` usa la CLI del proveedor (Vercel) o un runner con acceso al entorno; en este nivel el deploy a staging se hace desde `main` y prod desde tag `v*` o rama `release/**`.
10. Empaca con Docker: copia `templates/Dockerfile` a la raíz; si el proyecto usa volúmenes de build o Next.js, ajusta los stages (deps → build → runner sin devDependencies).
11. Valida el contenedor localmente: `docker build -t miapp:test .` y `docker run -p 3000:3000 miapp:test`; revisa tamaño (`docker images`) y que no haya capas con secretos.
12. Integra la imagen en el pipeline (opcional): job `docker` que construye y publica la imagen en GitHub Container Registry con el tag del commit/rama.
13. Revisa seguridad: sin secretos en logs (`echo` de secretos prohibido), permisos mínimos (`permissions: contents: read`), y actions pinneadas a SHA para producción.
14. Marca el checklist avanzado y reporta: jobs activos, estados de los entornos y cómo se despliega cada rama.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `ramas_deploy` | Ramas que despliegan a cada entorno | map | No | `main -> staging, release/* -> prod` |
| `entorno_deploy` | dev, staging o production | string | Sí | `staging` |
| `requiere_aprobacion` | Si prod requiere aprobación manual | boolean | No | `true` |
| `acciones` | Acciones oficiales a usar con versión | array | No | `["actions/checkout@v4", "actions/setup-node@v4"]` |
| `node_version` | Versión de Node en el pipeline | string | No | `20` |
| `cache_dependencias` | Activar caching de node_modules por lockfile | boolean | No | `true` |
| `publicar_imagen` | Si construir y publicar imagen Docker | boolean | No | `false` |
| `comando_deploy` | Comando de deploy por entorno | string | Sí | `npx vercel --prod` |

## Reglas y checklist

- [ ] Workflow YAML válido (lint checkeado): triggers solo en ramas controladas para deploys.
- [ ] Jobs con `needs` correctos: deploy jamás corre si lint/test/build fallan.
- [ ] Secretos en GitHub Secrets por entorno (prefijo DEV_/STAGING_/PROD_), nunca en el YAML ni en logs.
- [ ] Environments con protectores: aprobación manual en producción y rama restringida.
- [ ] Acciones pinneadas a versión (o SHA en rigor) y con `permissions` mínimos.
- [ ] Caching de dependencias activo y coherente con el lockfile del proyecto.
- [ ] Deploy verificado de extremo a extremo: push a staging y release a prod con evidencia (URL y checks verdes).
- [ ] Dockerfile multi-stage sin devDependencies en la imagen final y sin secretos en capas.
- [ ] Imagen construida localmente y probada (`docker run`) antes de integrarla en CI.
- [ ] `.env` nunca entra al contenedor; las variables se inyectan en runtime.
- [ ] Reporte final con estado de la pipeline y de cada entorno.

## Ejemplos de prompts

- "Crea el workflow CI/CD para este repo: lint + test + build en PRs y deploy a staging desde main usando `templates/workflow-ci-cd.yml`."
- "Configura los entornos dev/staging/prod con aprobación manual en producción y secretos separados."
- "Escribe el Dockerfile multi-stage para esta app Next.js y valida que la imagen no trae devDependencies."
- "El job de tests falla solo en CI pero pasa local: investiga versión de Node, caché y pasos del workflow."
- "Publica la imagen `miapp` en GHCR con el tag de la rama y añade el job al pipeline existente."

## Plantillas y recursos

- [Workflow completo de CI/CD (build, test, lint, deploy)](templates/workflow-ci-cd.yml)
- [Dockerfile multi-stage de referencia](templates/Dockerfile)
- [Checklist de verificación del nivel avanzado](resources/checklist.md)