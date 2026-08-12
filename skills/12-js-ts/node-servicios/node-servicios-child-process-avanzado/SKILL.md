---
name: node-servicios-child-process-avanzado
description: child_process · nivel Avanzado · Node.js: servicios y CLIs. Orquestás procesos externos, scripts y comandos con control de salida y errores. Objetivo del nivel: Spawnear procesos con streaming y control fino
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "child-process"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# child_process — Avanzado

## Qué hace este skill

Orquestás procesos externos, scripts y comandos con control de salida y errores. En este nivel se entrega: **Spawnear procesos con streaming y control fino**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **child_process** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Transmitir la salida en vivo con spawn
2. Limitar el tiempo de ejecución con timeout
3. Matar procesos colgados y limpiar hijos
4. Correr procesos en paralelo y recolectar resultados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Spawnear procesos con streaming y control fino | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Transmitir la salida en vivo con spawn · Limitar el tiempo de ejecución con timeout · Matar procesos colgados y limpiar hijos · Correr procesos en paralelo y recolectar resultados | lista | sí | 3-4 pasos |
| $criterios_clave | La salida fluye en vivo sin buffers perdidos · Los procesos colgados se matan con sus hijos | lista | sí | calidad verificable |
| $prompt_guia | El script de deploy se cuelga a veces: agregá timeout, kill del árbol de procesos y ejecución en paralelo de los pasos independientes. | texto | no | "child_process" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La salida fluye en vivo sin buffers perdidos
- [ ] Los procesos colgados se matan con sus hijos

## Ejemplos de prompts

- "El script de deploy se cuelga a veces: agregá timeout, kill del árbol de procesos y ejecución en paralelo de los pasos independientes."
- "Aplica child_process (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza La salida fluye en vivo sin buffers perdidos"
- "Revisa mi node-servicios y dime qué pasos de child_process me faltan en este nivel"