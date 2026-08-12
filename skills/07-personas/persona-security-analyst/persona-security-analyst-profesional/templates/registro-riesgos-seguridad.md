# Registro vivo de riesgos de seguridad

> Se revisa trimestralmente. Un riesgo sin dueño ni fecha es un incidente futuro.

## Riesgos por activo
| Activo | Riesgo | Prob. (1-5) | Impacto (1-5) | Prioridad | Mitigación | Estado | Dueño | Revisión |
|---|---|---|---|---|---|---|---|---|
| API pagos | IDOR en facturas | 3 | 5 | 15 | Checks de autorización + test IDOR | 🔲 | Ana | trimestral |
| Web | Dependencias con CVE | 4 | 3 | 12 | Renovabot + audit en CI | ✅ | Luis | mensual |
| Bots | Token filtrado | 2 | 4 | 8 | Gitleaks en CI + rotación | ✅ | Ana | trimestral |

## Tendencias (panel mensual)
| Métrica | Mes 1 | Mes 2 | Mes 3 | Meta |
|---|---|---|---|---|
| Hallazgos abiertos SEV alto | 5 | 4 | 2 | → 0 |
| Tiempo medio de remediación | 14 días | 10 días | 7 días | < 7 días |
| % features de riesgo con threat model | 30% | 60% | 90% | 100% |
| Incidentes reincidentes | 2 | 1 | 0 | 0 |

## Reglas
1. Nuevo hallazgo → entra al registro el mismo día.
2. Reducción de prioridad = solo con mitigación implementada.
3. Trimestralmente: cada riesgo se mantiene, mitiga o acepta con firma.