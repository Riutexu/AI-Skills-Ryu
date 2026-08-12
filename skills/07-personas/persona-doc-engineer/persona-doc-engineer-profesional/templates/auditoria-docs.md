# Auditoría de documentación — matriz valor/costo

## Inventario
| Documento | Dueño | Audiencia | ¿Dónde vive? | ¿Actualizado? |
|---|---|---|---|---|
| README de api-core | Ana | Todos | repo | Sí |
| Wiki "cómo desplegar" | Luis | Ops | Confluence | No (2024) |
| Guía de plugins | — | Devs externos | repo/docs | Sí |

## Valor (datos, no opiniones)
| Documento | Búsquedas/traffic | Tickets citándolo | Tickets "cómo hago X" (negativo) | Valor |
|---|---|---|---|---|
| README api-core | Alto | 12 | 2 | Alto |
| Wiki desplegar | Bajo | 1 | 9 | Bajo (falla) |
| Guía plugins | Medio | 5 | 3 | Medio |

## Costo
| Documento | Horas/año de mantenimiento | Costo |
|---|---|---|
| README api-core | 8 | Bajo |
| Wiki desplegar | 20 (se reescribe cada vez) | Alto |
| Guía plugins | 4 | Bajo |

## Decisiones
| Documento | Decisión | Razón |
|---|---|---|
| README api-core | Mantener | Valor alto, costo bajo |
| Wiki desplegar | Reescribir como guía en repo | Falla en su trabajo, está obsoleta |
| Guía plugins | Mantener | Valor medio, costo bajo |

## Regla
> Un documento que no se lee ni ahorra tickets es un impuesto. Eliminar o fusionar.