# Timeline de acciones — Red team

Registra cada acción con hora y evidencia. Este documento alimenta el informe técnico y permite auditar el engagement.

| # | Fecha/hora | Fase | Acción | Herramienta | Resultado | Evidencia |
|---|---|---|---|---|---|---|
| 1 | 2026-08-11 09:00 | Externo | Escaneo top 1000 | nmap | puertos 80,443,8080 | nmap-out.txt |
| 2 | 2026-08-11 09:40 | Externo | Fuzzing directorios | ffuf | /admin, /backup | fuzz-dirs.json |
| 3 | 2026-08-11 10:15 | Externo | Validación SQLi | sqlmap | parámetro id vulnerable | sqlmap.log |
| 4 | 2026-08-11 11:00 | Interno | Pivot | ligolo | sesión interna | pivot.log |

## Detecciones
| # | Acción | ¿Alertó el SOC? | ¿Cuál alerta? | Observación |
|---|---|---|---|---|
| 1 | nmap | No | — | Tráfico visto pero no alertado |
| 2 | ffuf | Sí | "Repetition of similar requests" | Rate limit no configurado |

## Reversión de persistencia
| Técnica | Fecha instalada | Fecha revertida | Verificado por |
|---|---|---|---|
| — | — | — | — |
