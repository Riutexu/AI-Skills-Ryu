# CHANGELOG — formato por versión

```markdown
# Changelog

Todas las versiones notables de este proyecto quedan registradas aquí.

## [v1.2.0] - 2026-08-11

### Añadido
- Tema oscuro en el reproductor (#12)

### Cambiado
- La búsqueda ahora incluye títulos en minúsculas (#14)

### Corregido
- El login fallaba con contraseñas que contenían `#` (#13)

### Eliminado
- Soporte de la API vieja de metadatos (deprecated desde v1.0)

## [v1.1.0] - 2026-06-20
...

## [v1.0.0] - 2026-04-01
- Primera versión pública
```

## Reglas
1. La sección nueva va SIEMPRE arriba (lo más reciente primero).
2. Escríbela en pasado: "se añadió", no "añadimos" ni "añadir".
3. Un cambio = una línea; si no puedes resumirlo, no entiendes el cambio.
4. Las versiones de changelog y las etiquetas git coinciden EXACTAMENTE.
5. No escribas "varias mejoras menores": eso es no documentar.