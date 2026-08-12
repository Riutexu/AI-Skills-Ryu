# Notas de release — plantilla para GitHub Releases

```markdown
## vX.Y.Z · <fecha>

**Tipo:** Stable / Pre-release (beta) / Hotfix

### Qué hay de nuevo
- <lo más importante primero, lenguaje de usuario cuando se pueda>

### Cambios destacados
- **Añadido:** ...
- **Cambiado:** ...
- **Corregido:** ...

### Para desarrolladores
- <cambios de API, config, migraciones necesarias>
- ⚠️ <Aviso de ruptura si hay: "se eliminó X">

### Artefactos
- <enlace a binario/build>

### Gracias a
- <contribuidores o nadie>

> Nota: <riesgo conocido o nota de soporte>
```

## Reglas
1. El título de la release = `vX.Y.Z` (igual al tag).
2. Las notas = resumen del changelog para esa versión.
3. Si hay ruptura, MÁS arriba y con ⚠️, no escondida abajo.