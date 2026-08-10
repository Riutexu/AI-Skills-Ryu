---
name: git-control-versiones-avanzado
description: Merge vs rebase, conflictos, stash, tags y semver, conventional commits, pull requests en GitHub, fetch vs pull. Usar en tareas de integración, revisión de PRs o estandarización de historial.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "git-control-versiones"
  nivel: avanzado
  stack: "git, GitHub, commitlint, conventional commits, semver"
---

# Git Avanzado: Integración Limpia y Colaboración con PRs

## Qué hace este skill

Domina la integración de ramas con criterio: decide entre merge y rebase según el contexto, resuelve conflictos sin romper nada, guarda trabajo en curso con stash, versiona con tags semver y colabora mediante Pull Requests con Conventional Commits validados por commitlint.

## Cuándo usarlo

- Al integrar ramas de features con `main` y decidir entre `merge` o `rebase`.
- Cuando aparece un conflicto de merge y hay que resolverlo archivo a archivo.
- Al necesitar dejar el working tree limpio temporalmente con `stash`.
- Al crear releases con tags siguiendo Semantic Versioning.
- Al estandarizar mensajes de commit en un equipo (Conventional Commits + commitlint).
- Al abrir, revisar o actualizar Pull Requests en GitHub y distinguir `fetch` de `pull`.

## Requisitos previos

- Nivel básico superado: add/commit/ramas/push/pull y `.gitignore`.
- Repositorio compartido con al menos dos ramas activas.
- Cuenta de GitHub con permiso para abrir PRs (token o GitHub CLI).
- `commitlint` y `husky` instalables vía npm en el proyecto (plantilla incluida).

## Workflow paso a paso

1. Identifica el escenario: ¿la rama vive mucho tiempo (usa merge) o es corta y diaria (usa rebase)? Revisa `git log --oneline --graph --all` para ver el estado real.
2. Antes de integrar, sincroniza tu rama con el remoto: `git fetch origin` y luego `git merge --ff-only origin/main` o `git rebase origin/main`.
3. Si hay conflictos, detecta los archivos afectados con `git status`, edítalos resolviendo ambas versiones y confirma con `git add` y `git commit` (merge) o `git rebase --continue` (rebase).
4. Si llevas cambios a medias y necesitas cambiar de contexto, guárdalos con `git stash push -m "descripcion"` y recupera con `git stash pop`. Lista con `git stash list`.
5. Estandariza los mensajes: instala commitlint y husky (`npm i -D @commitlint/cli @commitlint/config-conventional husky`), copia `templates/commitlint.config.js` y activa el hook con `npx husky init`.
6. Comitea con el formato `tipo(ámbito): descripción`, usando prefijos `feat`, `fix`, `docs`, `refactor`, `test`, `perf`, `chore`, y marca breaking changes con `!` (p. ej. `feat!(api): rompe el contrato de /users`).
7. Publica tu rama con `git push -u origin nombre-rama` y abre el PR con `gh pr create --title "..." --body "..." --base main` o desde la web de GitHub.
8. Revisa el PR desde el lado del revisor: `git fetch origin pull/<num>/head:pr-<num>`, revisa el diff con `git diff main...pr-<num>` y prueba localmente.
9. Aplica cambios solicitados en la revisión, actualiza el PR con `git push` y no rebasees fuerza sobre una rama de PR compartida sin avisar (usa `git push --force-with-lease` si es estrictamente necesario y comunicado).
10. Cuando el PR sea aprobado, intégralo: prefiere el merge con squash (historial limpio) o merge directo si el historial ya es atómico. Nunca rebasees commits ya subidos a `main`.
11. Para lanzar una versión: decide el tipo de salto semver (major si hay breaking, minor si hay feat, patch si solo hay fix), crea la tag con `git tag -a v1.2.0 -m "Release v1.2.0"` y súbela con `git push origin v1.2.0`.
12. Verifica el resultado: `git log --oneline --graph`, `git status` limpio y tags correctas con `git tag -l`.
13. Conecta el historial con los hitos: revisa que los ítems del checklist avanzado estén marcados y reporta al usuario el resumen del PR o la release creada.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `rama_base` | Rama destino de la integración | string | Sí | `main` |
| `rama_feature` | Rama de trabajo a integrar | string | Sí | `feature/pago-tarjeta` |
| `estrategia_integracion` | merge, rebase o squash | string | No | `rebase` |
| `tipo_commit` | Prefijo del Conventional Commit | string | No | `feat`, `fix`, `refactor` |
| `version_semver` | Versión para la tag de release | string | No | `v2.1.0` |
| `nombre_stash` | Descripción del stash al guardar trabajo | string | No | `wip: maquetacion tabla` |
| `mensaje_stash` | Mensaje del stash en stash list | string | Si se usa stash | `wip: maquetacion tabla` |
| `titulo_pr` | Título del PR a crear | string | No | `feat: agregar checkout de una pago` |
| `resolver_conflictos` | Manual o automático con theirs/ours | string | No | `manual` |

## Reglas y checklist

- [ ] Se usó `git fetch` para comprobar estado remoto antes de decidir merge/rebase; `git pull` solo como atajo convencido.
- [ ] No se rebasearon commits ya publicados en ramas compartidas (solo con `--force-with-lease` y avisado).
- [ ] Los conflictos se resolvieron verificando ambos lados, nunca borrando contenido a ciegas.
- [ ] `git stash list` revisado y stashes antiguos sin dueño eliminados (`git stash drop`).
- [ ] Todos los commits del PR siguen Conventional Commits y pasan commitlint.
- [ ] Breaking changes identificados con `!` y reflejados en el salto de versión mayor.
- [ ] La tag de release se creó anotada (`-a`) y se subió al remoto con `git push origin <tag>`.
- [ ] PR revisado con `gh pr diff` o `git diff main...rama` antes de aprobar.
- [ ] No se usó `git push --force` sin `--force-with-lease` ni se reescribió historial compartido.
- [ ] El resultado final se verificó con `git log --oneline --graph` y `git status` limpio.

## Ejemplos de prompts

- "Rebasea `feature/pago-tarjeta` sobre `main`, resuelve los conflictos de `src/api.ts` y publica la rama con `--force-with-lease`."
- "Guarda mi trabajo actual en un stash llamado `wip: sidebar movil`, muevete a `fix/bug-login` y luego recupera el stash."
- "Prepara los commits de esta tarea conforme a Conventional Commits, instala commitlint con husky y valida que pasan."
- "Abre un PR desde `feature/exportar-csv` hacia `main` con título `feat: exportar reportes a CSV` y descripción que liste los cambios."
- "Crea la release v1.4.0 con una tag anotada y verifica que el historial hacia main solo tenga merges squash."

## Plantillas y recursos

- [Configuración de commitlint para Conventional Commits](templates/commitlint.config.js)
- [Flujo de Pull Request resumido](templates/flujo-pull-request.md)
- [Checklist de verificación del nivel avanzado](resources/checklist.md)