---
name: node-servicios-logging-avanzado
description: Logging · nivel Avanzado · Node.js: servicios y CLIs. Logueás con niveles, formato estructurado y sin exponer datos sensibles. Objetivo del nivel: Loguear en formato estructurado y con request tracing
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "logging"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Logging — Avanzado

## Qué hace este skill

Logueás con niveles, formato estructurado y sin exponer datos sensibles. En este nivel se entrega: **Loguear en formato estructurado y con request tracing**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Emitir logs en JSON con campos estructurados
2. Agregar request ID y correlación entre llamadas
3. Incluir duración y metadata de operaciones
4. Redactar campos sensibles automáticamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Loguear en formato estructurado y con request tracing | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Emitir logs en JSON con campos estructurados · Agregar request ID y correlación entre llamadas · Incluir duración y metadata de operaciones · Redactar campos sensibles automáticamente | lista | sí | 3-4 pasos |
| $criterios_clave | Los logs JSON son parseables por herramientas · La redacción de datos sensibles es automática | lista | sí | calidad verificable |
| $prompt_guia | Mejorá el logging a JSON estructurado con request id, duraciones y redacción automática de tokens y passwords antes de escribir. | texto | no | "Logging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los logs JSON son parseables por herramientas
- [ ] La redacción de datos sensibles es automática

## Ejemplos de prompts

- "Mejorá el logging a JSON estructurado con request id, duraciones y redacción automática de tokens y passwords antes de escribir."
- "Aplica Logging (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los logs JSON son parseables por herramientas"
- "Revisa mi node-servicios y dime qué pasos de Logging me faltan en este nivel"