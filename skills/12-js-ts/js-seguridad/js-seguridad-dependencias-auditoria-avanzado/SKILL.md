---
name: js-seguridad-dependencias-auditoria-avanzado
description: Dependencias y auditoría · nivel Avanzado · Seguridad web JS. Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. Objetivo del nivel: Gestionar el riesgo de supply chain
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "dependencias-auditoria"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Dependencias y auditoría — Avanzado

## Qué hace este skill

Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. En este nivel se entrega: **Gestionar el riesgo de supply chain**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias y auditoría** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Fijar versiones y lockfile con integridad
2. Evitar paquetes mantenidos pobremente
3. Revisar dependencias transitivas con tools
4. Evaluar el riesgo de paquetes críticos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Gestionar el riesgo de supply chain | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Fijar versiones y lockfile con integridad · Evitar paquetes mantenidos pobremente · Revisar dependencias transitivas con tools · Evaluar el riesgo de paquetes críticos | lista | sí | 3-4 pasos |
| $criterios_clave | El lockfile garantiza integridad · Los paquetes riesgosos se reemplazan o justifican | lista | sí | calidad verificable |
| $prompt_guia | La licencia de una librería cambió: auditá las dependencias transitivas, evaluá el riesgo de las críticas y definí qué reemplazar o justificar. | texto | no | "Dependencias y auditoría" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El lockfile garantiza integridad
- [ ] Los paquetes riesgosos se reemplazan o justifican

## Ejemplos de prompts

- "La licencia de una librería cambió: auditá las dependencias transitivas, evaluá el riesgo de las críticas y definí qué reemplazar o justificar."
- "Aplica Dependencias y auditoría (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza El lockfile garantiza integridad"
- "Revisa mi js-seguridad y dime qué pasos de Dependencias y auditoría me faltan en este nivel"