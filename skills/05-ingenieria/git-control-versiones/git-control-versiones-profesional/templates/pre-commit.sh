#!/bin/sh

# Pre-commit: calidad antes de commitear.
# Requiere husky + lint-staged + gitleaks instalados.
# Ejecuta: npx husky add .husky/pre-commit "npx lint-staged"

if ! command -v gitleaks >/dev/null 2>&1; then
  echo "gitleaks no encontrado; ejecutando via Docker..."
  docker run --rm -v "$(pwd):/repo" -w /repo \
    zricethezav/gitleaks:latest protect --source=/repo --staged
else
  gitleaks protect --staged -v
fi

# Convencional: el hook commit-msg lo valida con commitlint
if [ -n "$(git diff --cached --name-only | grep -E '\.(ts|tsx|js|jsx)$' | head -1)" ]; then
  echo "Type-check rapido de archivos staged..."
  npx tsc --noEmit || exit 1
fi