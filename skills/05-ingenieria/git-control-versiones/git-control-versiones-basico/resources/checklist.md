# Checklist Nivel Básico — Git Control de Versiones

Marca cada elemento antes de dar una tarea por terminada.

## Configuración

- [ ] `git --version` ejecutado y Git instalado.
- [ ] `git config --global user.name` y `user.email` configurados.
- [ ] Editor y herramientas auxiliares confirmados con el usuario.

## Repositorio

- [ ] Repo inicializado (`git init`) o clonado (`git clone`) en la ruta correcta.
- [ ] `.gitignore` presente con Node/Next y verificado con `git status` (no aparecen `node_modules`, `.env`, `.next`, `dist`).
- [ ] Se existe `opencode.json` o configs locales, se confirma que no están ignorados por error.

## Ciclo de commits

- [ ] `git status` consultado antes de cualquier escritura.
- [ ] `git diff` revisado: solo contenido intencional en el staging.
- [ ] `git add` limitado a los archivos de la tarea (no `add .` a ciegas).
- [ ] Mensaje de commit: imperativo, corto y descriptivo del qué.
- [ ] Commits atómicos: un cambio conceptual por commit.
- [ ] `git log --oneline` verificado al final.

## Ramas y sincronización

- [ ] Rama de tarea creada y activa antes de editar (si aplica).
- [ ] `git pull` ejecutado antes de trabajar en repos compartidos.
- [ ] `git push` exitoso y confirmado con `git status` limpio.
- [ ] No se usaron `--force` ni `reset --hard` sin permiso.
- [ ] No hay secretos en el historial (si `.env` se commiteó: avisar y planear limpieza).

## Reporte

- [ ] Resumen final entregado: rama, commits creados y estado del remoto.