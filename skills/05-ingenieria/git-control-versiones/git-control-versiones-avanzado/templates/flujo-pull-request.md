# Flujo de Pull Request Resumido

Pasos minimos y notas de criterio para trabajar con PRs en GitHub sin romper el historial.

## Antes de crear el PR

```bash
git fetch origin
git status                          # working tree limpio
git log --oneline main..nombre-rama # ver que commits llevara el PR
git diff main...nombre-rama         # ver el diff completo de la rama
```

Reglas previas:

- La rama parte del `main` mas reciente (`git merge --ff-only origin/main` o rebase).
- Mensajes de commit en Conventional Commits (commitlint los valida).
- Sin secretos, sin archivos erroneos, .gitignore verificado.

## Crear el PR

```bash
git push -u origin nombre-rama
gh pr create --base main --head nombre-rama \
  --title "feat: titulo del cambio" \
  --body "## Que hace

## Como se probo

## Screenshots (si aplica)"
```

Convenios de titulo: `feat:` para funcionalidad nueva, `fix:` para correcciones, `docs:` para documentacion, `chore:` para mantenimiento.

## Revisar un PR ajeno

```bash
gh pr list                 # ver PRs abiertos
gh pr checkout 42          # moverse a la rama del PR 42
gh pr diff 42              # ver el diff
gh pr review 42 --approve  # aprobar
gh pr review 42 -r "falta test para X" --comment
```

## Actualizar el PR tras la revision

```bash
git add .
git commit -m "fix: ajustar validacion segun review"
git push                     # actualiza el PR automaticamente
```

Si se reescribe historial de la rama del PR (rebase interactivo), subir con:

```bash
git push --force-with-lease  # NUNCA --force a secas
```

Comunicar siempre en el PR cuando se fuerza: "rebase sobre main, luego de la review".

## Integrar y limpiar

```bash
gh pr merge 42 --squash --delete-branch   # historial limpio
gh pr merge 42 --merge                     # conserva commits individuales
git branch -d nombre-rama                  # limpieza local
```

- Squash es la opcion recomendada por defecto: historial de `main` limpio y atomico.
- Merge directo solo cuando los commits individuales son atómicos y con titulo correcto.
- Nunca rebasear commits ya integrados en `main`.

## Errores comunes a evitar

| Error | Consecuencia | Solucion |
| --- | --- | --- |
| `git pull --rebase` sin revisar | conflictos en cascada | fetch + status + merge o rebase deliberado |
| push con `--force` | historial compartido destruido | `--force-with-lease` + aviso |
| PR con muchos commits WIP | revision imposible | squash antes de crear el PR |
| PR sin descripcion | contexto perdido | plantilla `gh pr create --template` |
| Merge de main mientras se trabaja | contextos desincronizados | rebase corto o merge solo si la rama es larga |