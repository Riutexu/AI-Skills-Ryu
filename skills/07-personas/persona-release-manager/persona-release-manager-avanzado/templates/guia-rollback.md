# Guía de rollback — por release

> Se escribe ANTES de desplegar, no después del incidente.

## Release: vX.Y.Z · Fecha prevista:

## ¿Qué desplegamos?
- <servicios/cambios incluidos>

## Vía de rollback 1: desplegar versión anterior
```
# Comando o paso: <cómo se vuelve a la versión buena>
# Ej.: gh release deploy vX.Y.Z-1  /  docker compose up -d --no-deps api:vX.Y.Z-1
```
**Tiempo estimado:** <min> · **Impacto:** <breve ventana de indisponibilidad / ninguno>

## Vía de rollback 2: feature flag / config
```
# Si el cambio está tras un flag: apagar <flag>
```
**Tiempo estimado:** <segundos> · **Impacto:** <ninguno>

## Migraciones de datos
- [ ] ¿Hay migraciones? → ¿son reversibles? → pasos: <...>
- [ ] ¿El rollback de código requiere rollback de datos? <sí/no + cómo>

## Criterio de activación del rollback
- [ ] Error rate > <X%>
- [ ] Latencia P95 > <X ms>
- [ ] <Alerta concreta del área>

## Responsable de decidir
- <persona y canal>

## Última prueba de rollback
- Fecha: · Resultado: <ok/falló + corrección>