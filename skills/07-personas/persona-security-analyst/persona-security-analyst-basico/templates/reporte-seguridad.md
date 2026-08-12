# Reporte de seguridad — nivel básico (en simple)

## Resumen (3 líneas)
> <qué se revisó, cuántos riesgos, cuáles importan de verdad>

## Hallazgos por prioridad

| # | Riesgo (en simple) | Facilidad | Impacto | Prioridad | Remedio |
|---|---|---|---|---|---|
| S-01 | Las contraseñas se guardan en texto plano | Alta | Crítico | 🔴 Alta | Usar bcrypt (cost 10+) |
| S-02 | Clave de la API en el repositorio | Alta | Alto | 🔴 Alta | Mover a variable de entorno + revocar |
| S-03 | El formulario no valida entradas | Media | Medio | 🟡 Media | Validar en servidor, no solo en JS |
| S-04 | Sin cabecera X-Frame-Options | Media | Bajo | 🟢 Baja | Añadir helmet/header |

## Qué NO es urgente (para no asustarse)
- <hallazgos teóricos o de impacto bajo, con su explicación>

## Plan de acción inmediato
1. **S-01** (hoy): cambiar hash de contraseñas → <pasos>
2. **S-02** (hoy): revocar clave + quitar del repo → <pasos>
3. **S-03** (esta semana): validación en servidor → <pasos>

> Regla: un riesgo no arreglado con fecha es un riesgo que no se arregló.