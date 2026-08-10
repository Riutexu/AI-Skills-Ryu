# Guía de Despliegue Manual Paso a Paso

Flujo de referencia para publicar una app simple en Vercel o Netlify desde el repositorio. Añadir a la documentación del proyecto.

## 0. Precondiciones

- [ ] `npm run build` pasa localmente.
- [ ] Repositorio subido al remoto (GitHub).
- [ ] Cuenta creada en el proveedor (Vercel o Netlify).

## 1. Importar el proyecto

**Vercel**

1. Ir a https://vercel.com → "Add New Project".
2. Importar el repo desde GitHub.
3. El framework se detecta (Next.js automático). Confirmar:
   - Build command: `npm run build`
   - Output directory: vacío (Next) / `out` (export estático)
4. Añadir variables de entorno (sección Environment Variables).
5. "Deploy".

**Netlify**

1. Ir a https://app.netlify.com → "Add new site" → "Import an existing project".
2. Conectar GitHub y seleccionar el repo.
3. Configurar:
   - Build command: `npm run build`
   - Publish directory: `out` o `dist` (según framework estático)
4. Añadir variables en "Site settings" → "Environment variables".
5. "Deploy site".

## 2. Variables de entorno

Nunca commitees valores reales. El patrón correcto:

| Archivo | Contenido | ¿Se commitea? |
| --- | --- | --- |
| `.env.example` | Nombres de variables sin valores | Sí |
| `.env.local` | Valores locales de desarrollo | No (ignorado) |
| Panel del proveedor | Valores de producción | No (nunca en el repo) |

Ejemplo de `.env.example`:

```env
API_URL=
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
```

## 3. Verificar el primer deploy

1. Ver los logs de build (`Logs` en Vercel / `Deploys` en Netlify).
2. Abrir la URL de producción generada.
3. Comprobar consola del navegador sin errores.
4. Probar el flujo principal (login, páginas, APIs).

## 4. Deploys automáticos

- `main` → despliega a producción en cada push.
- Pull request → genera preview URL automática (verificar en las tarjetas de los PRs).
- Domain custom: añadirlo en "Domains" (Vercel) o "Domain management" (Netlify); DNS con registro señalado y HTTPS automático.

## 5. Rollback manual (nivel básico)

- Vercel: "Deployments" → menú de la versión anterior → "Promote to Production".
- Netlify: "Deploys" → versión anterior → "Publish deploy".

## Errores comunes

| Error | Causa | Solución |
| --- | --- | --- |
| Build falla solo en el proveedor | Versiones de Node distintas | Fijar Node version en proyecto o settings |
| 404 en rutas | Import de una carpeta tipo `dist` en repo | Añadir la carpeta al repo o usar vercel.json |
| Variables undefined | Faltan en el panel | Añadir en Environment Variables y redeploy |
| Build lento | Dependencias sin cache | Activarla en settings del proveedor |