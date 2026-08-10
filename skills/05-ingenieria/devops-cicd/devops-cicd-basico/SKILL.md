---
name: devops-cicd-basico
description: Que es CI/CD y despliegue manual a Vercel o Netlify con variables de entorno. Usar al publicar por primera vez una app simple (Next.js, React, estatico).
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "devops-cicd"
  nivel: basico
  stack: "vercel, netlify, next.js, react, variables de entorno"
---

# DevOps Básico: Primer Deploy y CI/CD Entendida

## Qué hace este skill

Explica qué es CI/CD con palabras sencillas y guía el primer despliegue real de una app: conexión del repositorio a Vercel o Netlify, configuración de variables de entorno, build en el proveedor y publicación de una URL accesible. Deja al usuario con su primer entorno en producción y los conceptos para dar el salto a la automatización.

## Cuándo usarlo

- Al publicar por primera vez una app simple (Next.js, Vite o estática) en producción.
- Al explicar conceptos de CI/CD (integración continua, despliegue continuo) antes de automatizar.
- Al configurar variables de entorno en Vercel/Netlify sin commitear secretos.
- Al crear la primera preview por pull request o alinear ramas con entornos básicos.

## Requisitos previos

- Proyecto listo para build: `npm run build` funciona localmente.
- Cuenta en Vercel o Netlify y repositorio en GitHub/GitLab/Bitbucket.
- Git instalado y repo subido al remoto.
- Concepto claro de variables de entorno (`.env`, `.env.local`).

## Workflow paso a paso

1. Confirma que el proyecto compila: `npm run build` localmente en verde y sin errores de tipos.
2. Sube el repositorio al remoto (`git add .`, commit, `git push`) y verifica `git status` limpio.
3. Crea la cuenta en Vercel (`vercel.com`) o Netlify (`app.netlify.com`) iniciando sesión con GitHub.
4. Importa el repositorio: opción "Add New Project" / "Import from Git" y selecciona el repo.
5. Deja que el proveedor detecte el framework (Next.js, Vite) y confirma el comando de build (`npm run build`) y el directorio de salida en caso de estáticos (`out/`, `dist/`).
6. Revisa las variables de entorno: importa las necesarias desde `.env.example` o añádelas manualmente en el panel del proyecto. NO subas nunca `.env` al repo.
7. Realiza el primer deploy (botón Deploy). Observa los logs de build; corrige errores y relega.
8. Verifica la URL de producción: carga, funciona y no hay errores de consola.
9. Conecta un dominio propio (opcional) desde el panel de dominios del proveedor.
10. Activa los deploys automáticos por rama: `main` despliega a producción y cada PR genera una preview URL.
11. Valida el despliegue por pull request: abre un PR, espera la preview y compruébala.
12. Documenta el flujo en el repo con `templates/guia-despliegue-manual.md` y la plantilla de entorno de `templates/entorno-ejemplo.env`.
13. Marca el checklist básico y reporta al usuario la URL de producción, las variables usadas y el estado de las previews.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `proveedor` | vercel o netlify | string | Sí | `vercel` |
| `url_repo` | URL del repositorio a desplegar | string | Sí | `https://github.com/usuario/mi-app` |
| `rama_produccion` | Rama que despliega a producción | string | No | `main` |
| `comando_build` | Comando de build del proyecto | string | No | `npm run build` |
| `directorio_salida` | Carpeta de artefactos para estáticos | string | No | `out` |
| `variables_entorno` | Pares nombre=valor para producción | map | No | `API_URL=https://api.example.com` |
| `dominio` | Dominio custom a conectar | string | No | `miapp.com` |
| `generar_preview` | Si activar deploys preview por PR | boolean | No | `true` |

## Reglas y checklist

- [ ] `npm run build` en verde localmente antes de intentar cualquier deploy.
- [ ] Repo empujado al remoto y `git status` limpio.
- [ ] Variables de entorno añadidas en el panel del proveedor, nunca en el repositorio.
- [ ] `.env` en el `.gitignore` y solo `.env.example` versionado (sin valores reales).
- [ ] Primer deploy observado en logs; errores corregidos antes de darlo por bueno.
- [ ] URL de producción verificada: carga, responde y sin errores en consola.
- [ ] Deploys por rama activados: `main` a producción y previews por PR.
- [ ] Dominio custom resuelto correctamente con certificado HTTPS activo.
- [ ] Documentación del flujo añadida al repo.
- [ ] Reporte final: URL de producción, variables configuradas y estado de previews.

## Ejemplos de prompts

- "Publica mi app de Next.js en Vercel: sube el repo, conecta el proyecto y dame la URL de producción."
- "¿Qué es CI/CD en términos simples? Explica cómo se aplica a mi proyecto actual."
- "Configura las variables de entorno para producción en Netlify sin commitear el `.env`."
- "Activa los deploys preview por pull request y muéstrame qué URL tendrá el PR #3."
- "Ayúdame a añadir `.env.example` y documentar el proceso de deploy en el README."

## Plantillas y recursos

- [Guía de despliegue manual paso a paso](templates/guia-despliegue-manual.md)
- [Plantilla de entorno de ejemplo](templates/entorno-ejemplo.env)
- [Checklist de verificación del nivel básico](resources/checklist.md)