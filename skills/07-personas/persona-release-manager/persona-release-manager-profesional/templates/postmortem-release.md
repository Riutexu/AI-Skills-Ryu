# Postmortem de release

## Incidente
- **Release:** vX.Y.Z · **Fecha:** · **Severidad:** SEV1/SEV2
- **Síntoma para el usuario:** <qué vieron los usuarios>

## Línea de tiempo (UTC)
| Hora | Evento |
|---|---|
| 09:00 | Despliegue de api vX.Y.Z (canary 100%) |
| 09:03 | Error rate 12% en /checkout |
| 09:05 | Rollback activado (decisión: <quién>) |
| 09:11 | api restaurada a vX-1 · error rate normal |

## ¿Qué pasó? (root cause)
- <causa técnica con evidencia (log, commit)>

## ¿En qué capa debió cazarse? (análisis)
| Capa | ¿Por qué no lo cazó? | Acción para cazarlo la próxima vez |
|---|---|---|
| Tests | No había test para el caso X | Test de regresión en el PR |
| Canary | Se saltó del 10% al 100% sin métricas | Pausa automática si error rate > baseline |
| Revisión | El reviewer no conoce la lógica de pagos | Checklist de revisión de pagos |

## Acciones (con dueño y fecha)
| Acción | Dueño | Fecha | Estado |
|---|---|---|---|
| Test de regresión del caso X | Ana | +2d | 🔲 |
| Gate automático de canary | Luis | +1 semana | 🔲 |

## ¿Qué funcionó?
- <rollback rápido, monitoreo... para repetirlo>

## Decisión
- Proceso OK con mejoras / proceso falló: <cambio estructural pendiente>