# Plan de release multiservicio — plantilla

## Release: <nombre/código> · Ventana: <fecha y hora> · Dueño:

## Inventario de servicios y dependencias
| Servicio | Cambios | Depende de | Quienes dependen de él | Riesgo |
|---|---|---|---|---|
| api | Sí | db | web, workers | Alto |
| web | Sí | api | usuarios | Medio |
| workers | No | api | — | Bajo |

## Orden de despliegue (dependencias primero)
1. `db` (migraciones) → 2. `api` (canary) → 3. `web` → 4. `workers`

## Despliegue progresivo (para los de riesgo alto)
| Paso | Tráfico | Métricas de salida | Criterio de continuar |
|---|---|---|---|
| Canary 1% | 1% | error rate, P95 | < baseline |
| Canary 10% | 10% | ídem | < baseline |
| 100% | 100% | ídem + dashboards | estable 15 min |

## Rollback coordinado
| Servicio | Vía de rollback | Tiempo | Dependencias a revertir también |
|---|---|---|---|
| api | despliegue vX-1 | 5 min | web (si contrato roto) |
| web | despliegue vX-1 | 5 min | — |

## Aprobaciones
| Riesgo | Aprobador | Firma |
|---|---|---|
| Alto (api) | <nombre> | [ ] |
| Medio (web) | <nombre> | [ ] |

## Checklist de salida
- [ ] Smoke posterior (rutas críticas)
- [ ] Alertas/monitorización activas y revisadas
- [ ] Guía de rollback actualizada y accesible
- [ ] Responsable de decisión de rollback identificado