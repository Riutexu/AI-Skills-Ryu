---
name: node-servicios-errores-exit-codes-avanzado
description: Errores y exit codes · nivel Avanzado · Node.js: servicios y CLIs. Manejás errores de scripts y servicios con exit codes significativos y fallos controlados. Objetivo del nivel: Manejar errores asíncronos y procesos no capturados
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-exit-codes"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Errores y exit codes — Avanzado

## Qué hace este skill

Manejás errores de scripts y servicios con exit codes significativos y fallos controlados. En este nivel se entrega: **Manejar errores asíncronos y procesos no capturados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y exit codes** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar unhandledRejection y uncaughtException
2. Crear un wrapper de errores de la CLI
3. Clasificar errores con códigos y categorías
4. Registrar el fallo y salir limpiamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar errores asíncronos y procesos no capturados | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Manejar unhandledRejection y uncaughtException · Crear un wrapper de errores de la CLI · Clasificar errores con códigos y categorías · Registrar el fallo y salir limpiamente | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún error asíncrono deja el proceso en estado raro · La salida limpia cierra recursos abiertos | lista | sí | calidad verificable |
| $prompt_guia | Endurecé el arranque de la CLI: handlers globales de rejection y excepción, clasificación de errores por código y cierre limpio de recursos. | texto | no | "Errores y exit codes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún error asíncrono deja el proceso en estado raro
- [ ] La salida limpia cierra recursos abiertos

## Ejemplos de prompts

- "Endurecé el arranque de la CLI: handlers globales de rejection y excepción, clasificación de errores por código y cierre limpio de recursos."
- "Aplica Errores y exit codes (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Ningún error asíncrono deja el proceso en estado raro"
- "Revisa mi node-servicios y dime qué pasos de Errores y exit codes me faltan en este nivel"