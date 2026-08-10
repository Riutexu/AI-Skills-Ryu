---
name: git-control-versiones-basico
description: Trabajo diario con Git: init/clone, add, commit, status, log, diff, ramas, push/pull y .gitignore para proyectos Node y Next.js. Usar al iniciar un repo, commitear o sincronizar cambios.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "git-control-versiones"
  nivel: basico
  stack: "git, GitHub CLI, Node.js, Next.js"
---

# Git Básico: Primeros Pasos con Control de Versiones

## Qué hace este skill

Guía el uso correcto del ciclo básico de Git: crear o clonar repositorios, registrar cambios con commits descriptivos, trabajar con ramas, sincronizar con remoto y mantener un `.gitignore` sano. Evita errores comunes como commitear artefactos, `node_modules` o archivos de entorno.

## Cuándo usarlo

- Al iniciar un proyecto nuevo con `git init` o descargar uno existente con `git clone`.
- Cuando hay que registrar cambios (add/commit) con mensajes claros y revisar el historial (status/log/diff).
- Al crear ramas para una nueva tarea y fusionar cambios sencillos.
- Al sincronizar trabajo local con un remoto (push/pull) o proteger archivos con `.gitignore`.
- Cuando se pide "hacer el commit de los cambios" sin especificar más.

## Requisitos previos

- Git instalado (`git --version` verifica la instalación).
- Terminal básica: moverse entre carpetas y ejecutar comandos.
- Concepto previo: saber qué es un repositorio y por qué versionamos código.
- Para `clone`/`push`: credenciales de GitHub o HTTPS con token.

## Workflow paso a paso

1. Verifica la instalación y configura tu identidad: `git --version`, `git config --global user.name "Tu Nombre"`, `git config --global user.email "tu@correo.com"`.
2. Inicia un repo nuevo con `git init` en la raíz del proyecto, o clona uno existente con `git clone <url>`.
3. Crea el `.gitignore` del proyecto antes del primer commit (usa la plantilla de `templates/gitignore-node-next.gitignore`).
4. Revisa el estado del repo con `git status` y los cambios pendientes con `git diff` y `git diff --staged`.
5. Agrega archivos al área de staging con `git add <archivo>` o `git add .` (solo si todo el contenido es intencional).
6. Haz el primer commit con `git commit -m "mensaje claro y en imperativo"` y revisa el historial con `git log --oneline`.
7. Crea una rama para tu tarea con `git branch nombre-rama` y actívala con `git checkout nombre-rama` (o `git checkout -b nombre-rama` en un paso).
8. Trabaja, repite los pasos 4-6 en la rama y compara versiones con `git diff main nombre-rama`.
9. Si es la primera sincronización: `git remote add origin <url>` y `git push -u origin nombre-rama`.
10. En proyectos existentes, actualiza primero con `git pull` antes de empezar a editar.
11. Sube los cambios con `git push` y baja los del remoto con `git pull`, revisando siempre `git status` antes y después.
12. Fusiona una rama terminada con `git checkout main` seguido de `git merge nombre-rama` (solo conflictos triviales en este nivel).
13. Verifica el resultado final con `git log --oneline --graph --all` y `git status` limpio.
14. Marca cada punto del checklist de `resources/checklist.md` y reporta al usuario el estado final.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `ruta_repo` | Ruta al repositorio a trabajar | string | Sí | `C:\proyectos\mi-app` |
| `url_remoto` | URL HTTPS o SSH del repo remoto | string | No | `https://github.com/usuario/mi-app.git` |
| `nombre_rama` | Nombre de la rama para la tarea | string | No | `feature/formulario-login` |
| `mensaje_commit` | Mensaje del commit en imperativo | string | Sí | `Agregar validacion de formulario` |
| `archivos` | Archivos a agregar al staging | array | No | `["src/index.ts", "package.json"]` |
| `crear_rama_nueva` | Si se debe crear y cambiar a una rama nueva | boolean | No | `true` |
| `hacer_push` | Si se debe sincronizar con el remoto | boolean | No | `false` |
| `revisar_diff` | Si se debe mostrar el diff antes de commitear | boolean | No | `true` |

## Reglas y checklist

- [ ] Identidad de Git configurada (user.name y user.email) antes del primer commit.
- [ ] `.gitignore` creado y verificado: no se commitea `node_modules`, `.env`, `.next` ni `dist`.
- [ ] `git status` consultado antes y después de cada operación de escritura.
- [ ] `git diff` revisado antes de `git add`: solo se agrega lo intencional.
- [ ] Mensajes de commit cortos, en imperativo, que describen qué hace el cambio, no cómo lo hace.
- [ ] Los commits son atómicos: un cambio conceptual por commit.
- [ ] `git log --oneline` consultado para confirmar el historial resultante.
- [ ] Nunca se usa `git push --force` ni `git reset --hard` en este nivel sin permiso explícito.
- [ ] Los secretos no existen en el historial; si `.env` se commiteó, detener y avisar.
- [ ] `git pull` ejecutado antes de empezar a trabajar en un repo compartido.

## Ejemplos de prompts

- "Inicializa un repositorio Git en `C:\proyectos\mi-app`, crea el `.gitignore` de Next.js y haz el commit inicial."
- "Muestra el estado del repo y el diff de los últimos cambios antes de commitearlos."
- "Crea la rama `feature/tema-oscuro`, haz commit de los cambios de `src/components/` y súbelos al remoto."
- "Clona `https://github.com/usuario/mi-app.git` en la carpeta actual y verifica que la rama `main` está actualizada."
- "¿Qué archivos debería incluir en `.gitignore` para un proyecto Next.js con TypeScript?"

## Plantillas y recursos

- [Plantilla de .gitignore para Node/Next.js](templates/gitignore-node-next.gitignore)
- [Hoja de comandos esenciales de Git](templates/hoja-comandos-esenciales.md)
- [Checklist de verificación del nivel básico](resources/checklist.md)