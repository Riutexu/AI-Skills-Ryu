---
name: node-servicios-cli-args-avanzado
description: CLI con args · nivel Avanzado · Node.js: servicios y CLIs. Construís CLIs con parseo de argumentos, flags y salida interactiva. Objetivo del nivel: Parsear args con Node 22 nativo y entrada interactiva
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "cli-args"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# CLI con args — Avanzado

## Qué hace este skill

Construís CLIs con parseo de argumentos, flags y salida interactiva. En este nivel se entrega: **Parsear args con Node 22 nativo y entrada interactiva**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CLI con args** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar util.parseArgs con opciones y positionals
2. Agregar entrada interactiva con readline
3. Implementar confirmación antes de acciones destructivas
4. Colorear la salida para legibilidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Parsear args con Node 22 nativo y entrada interactiva | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Usar util.parseArgs con opciones y positionals · Agregar entrada interactiva con readline · Implementar confirmación antes de acciones destructivas · Colorear la salida para legibilidad | lista | sí | 3-4 pasos |
| $criterios_clave | parseArgs cubre flags, positionals y valores · Las acciones destructivas piden confirmación | lista | sí | calidad verificable |
| $prompt_guia | Mejorá la CLI de migraciones con util.parseArgs, confirmación interactiva antes de aplicar y salida con colores para éxito y error. | texto | no | "CLI con args" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] parseArgs cubre flags, positionals y valores
- [ ] Las acciones destructivas piden confirmación

## Ejemplos de prompts

- "Mejorá la CLI de migraciones con util.parseArgs, confirmación interactiva antes de aplicar y salida con colores para éxito y error."
- "Aplica CLI con args (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza parseArgs cubre flags, positionals y valores"
- "Revisa mi node-servicios y dime qué pasos de CLI con args me faltan en este nivel"