# Hoja de Comandos Esenciales de Git

Referencia rápida del ciclo diario. Ejecuta siempre `git status` antes y después de cualquier operación de escritura.

## Configuración inicial

```bash
git --version                          # verificar instalacion
git config --global user.name "Nombre" # identidad global
git config --global user.email "correo@ejemplo.com"
git config --global core.editor code --wait   # editor por defecto
git config --list                      # revisar configuracion actual
```

## Iniciar o clonar

```bash
git init                              # crear repo nuevo en el directorio actual
git clone https://github.com/usuario/repo.git   # copiar repo existente
git clone git@github.com:usuario/repo.git       # clonar por SSH
```

## Ciclo de trabajo diario

```bash
git status                            # estado del working tree y staging
git diff                              # cambios sin agregar (unstaged)
git diff --staged                     # cambios agregados (staged)
git add archivo.ts                    # agregar un archivo al staging
git add src/                          # agregar una carpeta
git add .                             # agregar todo (usar con cautela)
git commit -m "Mensaje en imperativo" # crear commit
git commit -am "Mensaje"              # add + commit de archivos ya rastreados
git log --oneline                     # historial resumido
git log --oneline --graph --all       # historial grafico de todas las ramas
```

## Ramas

```bash
git branch                            # listar ramas locales
git branch nombre-rama                # crear rama
git checkout nombre-rama              # cambiar de rama
git checkout -b nombre-rama           # crear y cambiar en un paso
git merge nombre-rama                 # fusionar rama en la actual
git branch -d nombre-rama             # borrar rama ya fusionada
```

## Remoto

```bash
git remote -v                         # ver remotos configurados
git remote add origin <url>           # vincular remoto
git push -u origin main               # primera subida de la rama
git push                              # subir cambios
git pull                              # bajar y fusionar cambios
git fetch                             # bajar cambios sin fusionar
```

## Deshacer con cuidado (nivel básico)

```bash
git restore archivo.ts                # descartar cambios sin commitear
git restore --staged archivo.ts       # quitar del staging, conservar cambios
```

## Reglas de oro del nivel básico

1. Nunca comitees secretos, `node_modules` ni artefactos (`dist`, `.next`).
2. Revisa `git diff` antes de `git add` y `git status` antes de commitear.
3. Un commit = un cambio conceptual. Mensaje en imperativo y corto.
4. Haz `git pull` antes de empezar a editar en repos compartidos.
5. No uses `git push --force` ni `git reset --hard` sin permiso explícito.