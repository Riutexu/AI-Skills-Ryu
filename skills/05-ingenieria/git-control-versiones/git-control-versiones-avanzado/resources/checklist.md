# Checklist Nivel Avanzado — Git Control de Versiones

Superado el nivel básico. Verifica antes de dar por terminada una integración o PR.

## Antes de integrar

- [ ] `git fetch origin` ejecutado y estado del remoto conocido.
- [ ] Decisión merge/rebase hecha a propósito según el escenario (no por costumbre).
- [ ] Rama sincronizada con el destino antes de integrar (`--ff-only` o rebase).
- [ ] Working tree limpio o trabajo guardado en stash con nombre (`git stash list`).

## Conflictos

- [ ] Conflicto detectado con `git status` y archivos listados.
- [ ] Cada conflicto resuelto revisando ambas versiones (no borrando a ciegas).
- [ ] Merge confirmado con commit o rebase continuado correctamente.
- [ ] No existen marcadores `<<<<<<<` / `=======` / `>>>>>>>` residuales (grep verificado).

## Conventional Commits y commitlint

- [ ] commitlint + husky instalados y hook `commit-msg` activo.
- [ ] Todos los commits del rango usan tipo valido (feat/fix/docs/refactor/test/perf/chore...).
- [ ] Breaking changes marcados con `!` y con impacto en versionado.
- [ ] `git log --oneline` verificado tras cada commit.

## Tags y versionado semantico

- [ ] Tipo de salto semver decidido al lanzar (breaking=mayor, feat=menor, fix=patch).
- [ ] Tag anotada `git tag -a vX.Y.Z -m "..."` y subida con `git push origin vX.Y.Z`.
- [ ] CHANGELOG o notas de release coherentes con los cambios reales.

## Pull Requests

- [ ] PR creado con titulo en Conventional Commits y descripcion util.
- [ ] Revisado el diff (`gh pr diff` o `git diff main...rama`) antes de aprobar.
- [ ] Cambios solicitados implementados y PR actualizado con push normal.
- [ ] Si se reescribio historia: `--force-with-lease` y mensaje en el hilo del PR.
- [ ] PR integrado con squash por defecto y rama borrada.

## Seguridad del historial

- [ ] Nunca se usó `--force` a secas sobre ramas compartidas.
- [ ] No hay secretos detectados en los commits del rango (revisión de diff).
- [ ] `git status` limpio al finalizar y reporte entregado al usuario.