# Estrategia: Trunk-Based Development

Contenido de referencia para adoptar trunk-based en un equipo. Adaptar a la realidad del producto.

## Decision breve

- `main` es la unica rama de larga vida y SIEMPRE esta lista para desplegar.
- Todo cambio entra por PR pequeno, integrado en menos de 1 dia laboral.
- Features grandes van detras de feature flags (funcionalidad inactiva en produccion).
- Cuando se requiere release fija: versiones menores via tags y branch de stabilizacion solo en LTS.

## Reglas de oro

1. Ramas cortas: horas, nunca dias. Si algo tarda, partir en PRs mas pequenos.
2. `main` verde siempre: los checks de CI son obligatorios en cada merge.
3. Sin merges de ramas largas: el integrador rebasea sobre `main` y usa squash al mergear.
4. Feature flags por defecto: el codigo nuevo se despliega apagado y se enciende con config.
5. Hotfixes: rama efimera desde `main`, test + review rapido y merge directo (squash).

## Flujo diario

```bash
git fetch origin
git checkout main
git pull --ff-only            # main siempre al dia
git checkout -b fix/ajuste-ruta
# ... cambios ...
git add . && git commit -m "fix: ajustar ruta de exportacion"
git push -u origin fix/ajuste-ruta
# PR -> CI verde -> review -> squash merge -> borrar rama
```

## Herramientas de soporte

- CI obligatoria (GitHub Actions): lint + typecheck + test + build en cada PR.
- Feature flags: Next.js server config, LaunchDarkly, o flags propios en DB de config.
- Debugging: git bisect disponible porque el historial es lineal y pequeno.
- Releases: tags semver anotadas + changelog automatizado (semantic-release).

## Cuando NO usar trunk-based

- Software embebido o hardware con ciclos largos de validacion.
- Contratos con clientes que exigen versiones fijas por varios meses sin rollback comun.
- Equipos sin CI automatica ni feature flags: el riesgo de romper main es alto.