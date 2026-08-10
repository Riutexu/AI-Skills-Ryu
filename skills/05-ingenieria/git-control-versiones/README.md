# Git Control de Versiones

Skills en español para dominar Git de forma progresiva: desde el primer `git init` hasta estrategias de release, hooks de calidad y seguridad de historial. Cada nivel incluye plantillas funcionales y checklist de verificación para que los agentes de opencode ejecuten tareas de Git con criterio profesional.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `git-control-versiones-basico` | Básico | Control de versiones, init/clone, add/commit/status/log/diff, ramas, push/pull, .gitignore |
| `git-control-versiones-avanzado` | Avanzado | Merge vs rebase, conflictos, stash, tags y semver, conventional commits, Pull Requests, fetch vs pull |
| `git-control-versiones-profesional` | Profesional | Estrategias de ramas, releases, hooks (husky/lint-staged/gitleaks), bisect/reflog, worktrees, monorepo, GPG |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| alcance | Repositorio local del usuario | Repositorio compartido con equipo | Repositorio de producción multi-equipo |
| ramas | Crear, cambiar y fusionar | Rebase y resolución de conflictos | Git-flow / trunk-based / hotfixes |
| mensajes de commit | Libres y descriptivos | Conventional Commits (feat/fix/breaking) | Changelog automatizado y commits firmados |
| seguridad | Uso correcto de rm/forced ops | Protección de ramas principales | GPG, gitleaks, historia limpiada |
| herramientas | CLI de Git | GitHub y commitlint | Husky, lint-staged, gitleaks, bisect |
| salida esperada | Historial local limpio | PRs revisables | Releases versionadas y auditables |

## Instalación

Copia la carpeta del tema (o solo los niveles que necesites) dentro de tu árbol de skills de opencode:

```powershell
# Proyecto
Copy-Item -Recurse "05-ingenieria\git-control-versiones" ".opencode\skills\"

# Global (Windows)
Copy-Item -Recurse "05-ingenieria\git-control-versiones" "$env:USERPROFILE\.config\opencode\skills\"
```

En Linux/macOS el destino global es `~/.config/opencode/skills/`. Reinicia opencode tras copiar los archivos para que se carguen los skills.

## Ruta de aprendizaje

1. **Básico**: domina el ciclo diario add/commit/status/log/diff, ramas y push/pull. Consistencia por encima de velocidad.
2. **Avanzado**: aprende cuándo rebasear y cuándo mergear, resuelve conflictos sin miedo, versiona con semver, estandariza mensajes con Conventional Commits y colabora vía Pull Requests.
3. **Profesional**: elige y aplica una estrategia de ramas, automatiza calidad con hooks, audita el historial con bisect/reflog, gestiona releases y firma tus commits con GPG.

Cada checklist del nivel anterior se da por superada antes de pasar al siguiente.

## Referencias clave

- [Documentación oficial de Git](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)
- [Semantic Versioning](https://semver.org/lang/es/)
- [Guía de GitHub para Pull Requests](https://docs.github.com/es/pull-requests)
- [Atlassian: merge vs rebase](https://www.atlassian.com/es/git/tutorials/merging-vs-rebasing)
- [GitHub: firma de commits con GPG](https://docs.github.com/es/authentication/managing-commit-signature-verification)