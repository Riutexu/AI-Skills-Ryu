# Checklist Nivel Básico — DevOps y CI/CD

Marca cada elemento antes de dar una tarea de despliegue básico por terminada.

## Preparación

- [ ] `npm run build` ejecutado localmente y en verde.
- [ ] Repositorio empujado al remoto y `git status` limpio.
- [ ] Cuenta activa en Vercel o Netlify conectada a GitHub.

## Despliegue

- [ ] Proyecto importado con build command y output directory correctos.
- [ ] `.env.example` versionado; valores reales solo en el panel del proveedor.
- [ ] `.env*` en el `.gitignore` (verificado con `git status`).
- [ ] Variables de entorno añadidas en el panel y visibles en el build.
- [ ] Primer deploy completado revisando los logs.
- [ ] URL de producción abierta, cargando y sin errores de consola.
- [ ] Deploys automáticos activados: rama de producción y previews por PR.
- [ ] Preview de un PR comprobada de extremo a extremo.
- [ ] Dominio custom resuelto con HTTPS (si aplica).

## Conceptos

- [ ] CI y CD diferenciados y explicados al usuario (integración vs despliegue).
- [ ] Diferencia entre entorno local, preview y producción comunicada.

## Reporte

- [ ] URL de producción, variables configuradas y estado de previews entregados al usuario.