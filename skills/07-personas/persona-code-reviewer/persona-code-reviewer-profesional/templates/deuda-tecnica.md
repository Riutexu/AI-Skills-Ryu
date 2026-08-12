# Registro de deuda técnica — con costo y fecha

> La deuda sin fecha de pago es deuda infinita. Cada fila debe ser pagable.

| # | PR que la creó | Descripción | Costo de mantenerla (h/año) | Costo de pagarla | Dueño | Fecha límite | Estado |
|---|---|---|---|---|---|---|---|
| D1 | #77 | Workaround de auth sin refresh | 40 | 16 | Ana | 2026-09-30 | 🔲 |
| D2 | #77 | Duplicación del parser de fechas | 12 | 4 | Luis | 2026-10-15 | 🔲 |

## Decisión de pago
| # | Decisión | Justificación |
|---|---|---|
| D1 | Pagar antes de la feature X | El workaround bloquea la feature |
| D2 | Pagar en la próxima refactor | Bajo costo, se hace con el análisis |

## Reglas
1. Toda deuda aceptada entra al registro el mismo día del merge.
2. Revisión trimestral: deuda sin dueño se elimina (el código se arregla o se elimina).
3. Reportar a dirección: total de horas/año que el equipo paga por deuda.