# Checklist Nivel Profesional — Git Control de Versiones

Nivel de produccion. Verifica cada punto antes de dar por cerrada la tarea.

## Estrategia de ramas

- [ ] Estrategia elegida a partir del contexto del equipo y documentada en el repo.
- [ ] `main` protegido: reviews obligatorias, checks verdes, sin push directo.
- [ ] Reglas de rama por nivel definidas si la estrategia lo requiere.
- [ ] Nombres de rama convencionales: `feat/`, `fix/`, `hotfix/`, `release/`, `chore/`.

## Calidad automatizada

- [ ] Husky instalado y hooks activos (pre-commit lint-staged, commit-msg commitlint).
- [ ] Gitleaks pasando en los cambios staged: sin secretos detectados.
- [ ] La CI ejecuta los mismos checks que los hooks (paridad local/remoto).
- [ ] Un commit de prueba confirmo que los hooks bloquean errores reales.

## Releases y versionado

- [ ] Release branch usada solo para estabilizar y con fixes devueltos a `main`.
- [ ] Hotfix creado desde la tag de la release afectada e integrado en ambas ramas.
- [ ] Tags semver anotadas creadas y subidas (`git push origin vX.Y.Z`).
- [ ] CHANGELOG actualizado (automatizado con semantic-release o redactado).
- [ ] Notas de release visibles en GitHub con los cambios por categoria.

## Depuracion y recuperacion

- [ ] `git bisect` completado y finalizado con `git bisect reset`.
- [ ] `git reflog` consultado antes de restauraciones; rescatado por cherry-pick.
- [ ] No se ejecuto `git reset --hard` ni `git push --force` sin confirmacion explicita.

## Worktrees y monorepo

- [ ] `git worktree add` usado para trabajo paralelo; arboles removidos y `prune` ejecutado.
- [ ] Monorepo: changesets o versionado por paquete operativo; CI por matriz con paquetes afectados.

## Seguridad del historial

- [ ] GPG (o SSH signing) activo: `git log --show-signature` verifica firmas.
- [ ] Secretos auditados con gitleaks; si hubo filtracion: token rotado, historia purgada (`git filter-repo`) y credencial revocada.
- [ ] `git config --list` revisado: sin credenciales en texto plano ni configuraciones globales extranas.
- [ ] Historial final organizado segun la estrategia elegida; `git status` limpio y reporte entregado.