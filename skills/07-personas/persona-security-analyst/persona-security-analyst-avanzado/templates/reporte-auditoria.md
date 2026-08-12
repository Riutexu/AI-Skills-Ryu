# Reporte de auditoría — nivel avanzado

## Resumen ejecutivo (5 líneas)
> estado global, nº de hallazgos por severidad, qué arreglar primero y por qué.

## Alcance
- **Objetivo:** · **Modelo de atacante:** · **Fecha:** · **Herramientas:**
- **Fuera de alcance:** <lo que no se auditó y por qué>

## Tabla de hallazgos
| ID | Severidad (CVSS) | OWASP | ATT&CK | Descripción corta | Estado |
|---|---|---|---|---|---|
| H-01 | 9.1 (CVSS:3.1/AV:N/...) | A01 | T1190 | IDOR en /api/invoices | Abierto |
| H-02 | 5.3 | A05 | — | CORS demasiado abierto | Abierto |

## Detalle por hallazgo
### H-01 · <título>
- **CVSS:** 9.1 · Vector: ...
- **Ubicación:** `archivo:línea` / endpoint
- **Descripción:** <qué pasa>
- **Evidencia:** <salida, captura, request>
- **Reproducción:** <pasos exactos>
- **Explotabilidad confirmada:** Sí/No + PoC (ruta)
- **Remediación:** <cambio concreto y cómo verificar>

## Plan de remediación por hitos
| Hito | Contenido | Fecha | Responsable |
|---|---|---|---|
| M1 | Arreglar H-01 y H-02 | +1 semana | Ana |
| M2 | Re-test + nuevas deps | +1 mes | Luis |