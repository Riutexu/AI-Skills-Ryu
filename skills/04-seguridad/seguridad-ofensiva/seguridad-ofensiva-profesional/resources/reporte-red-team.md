# Informe de red team — estructura

## 1. Reporte ejecutivo (para negocio)
- **Resumen:** 5 líneas: qué se pidió, qué se logró, qué riesgo real existe.
- **Hallazgos críticos:** tabla con severidad y exposición al negocio.
- **Prioridades de remediación:** top 5 acciones con impacto.
- **Riesgo residual:** qué queda después de remediar lo crítico.

## 2. Reporte técnico (para el equipo)
- **Alcance y reglas:** hosts, fechas, reglas de impacto.
- **Timeline completo:** acciones, horas, herramientas (desde `templates/timeline.md`).
- **Hallazgos detallados** (por cada uno):
  - Título y severidad CVSS
  - Descripción e impacto
  - Pasos de reproducción exactos
  - Mapeo MITRE ATT&CK (técnica ID)
  - Evidencia (salidas, capturas, sin datos sensibles)
  - Remediación concreta y cómo verificarla
- **Detecciones observadas:** qué alertó el SOC y qué no (si aplica).
- **IoCs:** IPs, dominios, hashes usados en el engagement.
- **Anexos:** salidas completas de herramientas.

## 3. Cierre
- Estado de remediación y responsable por hallazgo.
- Fecha de re-test sugerida.
