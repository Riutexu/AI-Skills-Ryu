# Checklist Nivel Avanzado — DevOps y CI/CD

Superado el nivel básico. Verifica cada punto antes de dar por cerrada la automatización.

## Workflow y triggers

- [ ] `.github/workflows/` creado con un workflow YAML válido.
- [ ] Triggers correctos: PRs corren calidad, deploys solo en `main`/`release/**`/tags.
- [ ] Jobs en paralelo donde conviene (lint/test) y con `needs` para el deploy.
- [ ] `permissions` mínimos declarados (`contents: read`).
- [ ] Acciones oficiales con versión pinneada y caching de dependencias activo.

## Entornos y secretos

- [ ] Environments `dev`, `staging` y `production` creados en GitHub.
- [ ] Protectores: aprobación manual en producción y restricción de ramas.
- [ ] Secretos por entorno con prefijo y sin valores en el repositorio.
- [ ] Ningún secreto se imprime en logs (verificado en el output del workflow).

## Pipeline en funcionamiento

- [ ] Pipeline verde de extremo a extremo en un PR real.
- [ ] Deploy a staging ejecutado desde `main` y verificado por URL.
- [ ] Deploy a producción desde tag/release verificado (si aplica en el proyecto).
- [ ] Fallo en CI diagnosticado sin tocar producción (rollback no necesario).

## Docker

- [ ] Dockerfile multi-stage presente y probado con `docker build`.
- [ ] Imagen final sin devDependencies y tamaño razonable (`docker images`).
- [ ] `docker run` local funcionando y app respondiendo.
- [ ] Variables inyectadas en runtime; `.env` NO copiado al contenedor.
- [ ] Ninguna capa contiene secretos (revisión de contexto de build / `.dockerignore`).

## Reporte

- [ ] Jobs activos, estados por entorno y flujo de despliegue comunicados al usuario.