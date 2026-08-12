# Plan del programa de seguridad de IA (NIST AI RMF)

## Gobernanza
- [ ] Inventario de modelos (dueño, uso, datos, herramientas) — creado en el mes 1
- [ ] Política de uso de IA aprobada y comunicada
- [ ] Criterios de "alto riesgo" definidos (fuga, desinformación, daño a personas)
- [ ] Roles: dueño de modelo / riesgo / respuesta de incidentes

## Mapeo (continúo)
- [ ] Ficha de riesgo por modelo (siempre en producción)
- [ ] Cambios de contexto (nuevos datos, nuevas herramientas) → re-mapeo

## Medición (mensual)
- [ ] Métricas automatizadas por modelo (ver `resources/metricas-ia.md`)
- [ ] Panel mensual con tendencias
- [ ] Revisión de logs de incidentes

## Gestión (trimestral)
- [ ] Revisión del registro de riesgos y decisiones
- [ ] Red teaming programado (al menos 1 campaña/trimestre por modelo de riesgo)
- [ ] Re-test de remediaciones

## Incidentes de IA (nuevo playbook)
- [ ] Playbook IR-IA: detección → contención (desactivar modelo/flujo) → análisis → acciones
- [ ] Ejercicio de mesa anual

## Calendario inicial
| Mes | Entregable |
|---|---|
| 1 | Inventario + política + primeras fichas de riesgo |
| 2 | Métricas automatizadas + baselines |
| 3 | Primera campaña de red teaming + panel mensual |
| 4+ | Ciclo trimestral de revisión y mejora |