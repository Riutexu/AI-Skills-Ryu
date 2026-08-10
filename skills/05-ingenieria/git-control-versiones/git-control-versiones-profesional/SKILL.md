---
name: git-control-versiones-profesional
description: Estrategias de ramas (git-flow vs trunk-based), releases y hotfixes, hooks husky/lint-staged/gitleaks, git bisect, reflog, worktrees, monorepo, firma GPG y seguridad de historial. Usar en software en produccion o equipos medianos.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "git-control-versiones"
  nivel: profesional
  stack: "git, GitHub, husky, lint-staged, gitleaks, GPG, semantic-release"
---

# Git Profesional: Estrategias, Releases y Seguridad de Historial

## Qué hace este skill

Diseña flujos de trabajo Git de nivel de producción: elección deliberada de estrategia de ramas, gestión de releases con hotfixes y changelogs, automatización de calidad con hooks (husky, lint-staged, gitleaks) y herramientas de debugging forense (bisect, reflog), worktrees para trabajo paralelo, firma de commits con GPG y manejo seguro de monorepos.

## Cuándo usarlo

- Al decidir la estrategia de ramas de un equipo: git-flow, trunk-based o híbrida.
- Al preparar releases: ramas de release, hotfixes urgentes y changelog automatizado.
- Al instalar puertas de calidad previas al commit (lint, tests, secretos) con hooks.
- Cuando hay que encontrar qué commit rompió algo (bisect) o recuperar trabajo "perdido" (reflog).
- Al trabajar en varias tareas a la vez sin mezclar working trees (worktrees).
- Al gestionar un monorepo, firmar commits con GPG o limpiar/auditar el historial.

## Requisitos previos

- Niveles básico y avanzado superados.
- Producto con CD/CI y al menos un entorno de producción.
- `husky`, `lint-staged` y `gitleaks` disponibles (npm para los dos primeros, binario o Docker para gitleaks).
- Para GPG: par de llaves generado (`gpg --full-generate-key`) y clave pública en GitHub.
- Familiaridad con CI (GitHub Actions o equivalente) para los flujos de release.

## Workflow paso a paso

1. Evalúa el contexto del equipo (velocidad de release, tamaño, disciplina) y elige estrategia: trunk-based si el `main` se despliega varias veces al día con feature flags; git-flow si hay releases calendarizadas con soporte de versiones anteriores. Documenta la decisión en el repo (plantilla en `templates/flujo-trunk-based.md`).
2. Configura las puertas de calidad: `npm i -D husky lint-staged` + `npm i -D gitleaks` (o gitleaks vía Docker), copia `templates/husky-lint-staged.config.js` y `templates/pre-commit.sh`, y registra hooks con `npx husky add .husky/pre-commit "npx lint-staged"` y un hook `pre-push` o `pre-commit` que ejecute gitleaks.
3. Define ramas protegidas en GitHub: `main` con required reviews, checks obligatorios y sin push directo.
4. Para cada release: crea rama de release desde `main` (`git checkout -b release/vX.Y.Z`), estabiliza con fixes y llévalos también a `main`; versiona con tags semver anotadas y genera el changelog con semantic-release o `git log --oneline vX.Y.Z-1..HEAD`.
5. Ante un bug crítico en producción: crea hotfix desde la tag de la release afectada (`git checkout -b hotfix/importante vX.Y.Z`), fix + test, y merge doble: a la rama de release/main y de vuelta a la rama de desarrollo.
6. Para encontrar el commit culpable de una regresión: `git bisect start`, `git bisect bad`, `git bisect good <tag-ok>`, y en cada paso ejecuta la prueba que falla y marca con `git bisect good|bad` hasta aislar el commit; termina con `git bisect reset`.
7. Si algo "se perdió": localiza con `git reflog` el hash previo al desastre y restaura con `git checkout <hash>` o `git cherry-pick <hash>`; nunca entres en pánico con `reset --hard`.
8. Para trabajo paralelo sin interrupciones: `git worktree add ../mi-app-wip -b feature/paralela` crea una copia física; al terminar, `git worktree remove ../mi-app-wip` y `git worktree prune`.
9. Firmas: `git config --global user.signingkey <fingerprint>` y `git config --global commit.gpgsign true`, activa verificación en GitHub; para llaves subidas a tu máquina, usa SSH signing o GPG agent (Windows: `gpg-agent --daemon` o pinentry).
10. Seguridad del historial: si un secreto se commiteó, considera GitHub support para purgar, o reescribe con `git filter-repo` (nunca `filter-branch` a secas) y rota la credencial. Bloquea `.env` en el `.gitignore` y agrega rules de secrets en el repo.
11. Monorepo: define límites claros por paquete (un `package.json` por paquete dentro de `packages/`), usa `changesets` para versionar de forma independiente y CI por matrices (`matrix.package` en GitHub Actions) para testear solo los paquetes afectados.
12. Verifica el resultado completo: `git log --oneline --graph`, `git tag -l`, `git status` limpio, hooks funcionando con un commit de prueba y `git reflog` sin sorpresas. Marca el checklist profesional y reporta al usuario la decisión de flujo tomada y los artefactos creados.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `estrategia` | git-flow, trunk-based o hibrida | string | Sí | `trunk-based` |
| `version_release` | Versión de la release/hotfix | string | No | `v2.4.1` |
| `tipo_release` | release, hotfix o prerelease | string | No | `hotfix` |
| `rama_hotfix` | Rama para el fix urgente | string | No | `hotfix/pago-502` |
| `commit_sospechoso` | Rango para bisect inicial | string | No | `v2.0.0..HEAD` |
| `comando_verificacion` | Comando para validar en bisect | string | No | `npm test` |
| `habilitar_gpg` | Activar firma de commits | boolean | No | `true` |
| `hook_lint` | Archivos que lint-staged procesa | array | No | `["*.ts", "*.tsx"]` |
| `paquete_monorepo` | Paquete afectado en el monorepo | string | No | `packages/design-system` |

## Reglas y checklist

- [ ] Estrategia de ramas documentada en el repo con responsabilidades por rama.
- [ ] `main` protegido: reviews necesarias, checks obligatorios, sin push directo.
- [ ] Hooks instalados: pre-commit con lint-staged y gitleaks; se probaron con un commit real.
- [ ] Releases con tag anotada semver + changelog generado o redactado manualmente.
- [ ] Hotfixes nacen desde la tag de la release afectada y se integran en ambas ramas.
- [ ] `git bisect` completado con `bisect reset` y culpable identificado.
- [ ] `git reflog` usado antes de cualquier rescate; nada de `reset --hard` ciego.
- [ ] Worktrees creados y removidos limpiamente (`worktree prune` sin sobras).
- [ ] GPG: commits firmados, verificación activada y `git log --show-signature` limpio.
- [ ] Secretos: historial auditado (gitleaks), tokens rotados y purga hecha si hizo falta.
- [ ] Monorepo: versionado por paquete y CI por matriz, cambios aislados por paquete.
- [ ] Reporte final al usuario con decisiones tomadas y estado del repositorio.

## Ejemplos de prompts

- "Configura trunk-based en este repo: protege `main`, instala husky con lint-staged y gitleaks, y deja documentada la estrategia."
- "Crea un hotfix `v2.4.1` para el bug de pago: rama desde la tag, fix, test y merge a main y al desarrollo."
- "Usa git bisect entre `v2.0.0..HEAD` con `npm test -- --run` para encontrar el commit que rompe el login."
- "He perdido cambios que estaban en `feature/x`; investiga con reflog y recupera el commit correcto con cherry-pick."
- "Habilita la firma GPG para mis commits y verifica con `git log --show-signature`."
- "En este monorepo con `packages/`, dime qué paquetes necesita rebuild segun los cambios de la rama y prepara la CI por matriz."

## Plantillas y recursos

- [Configuración de husky + lint-staged + gitleaks](templates/husky-lint-staged.config.js)
- [Hook pre-commit de referencia](templates/pre-commit.sh)
- [Flujo trunk-based documentado](templates/flujo-trunk-based.md)
- [Checklist de verificación del nivel profesional](resources/checklist.md)