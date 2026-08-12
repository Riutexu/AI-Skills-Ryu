---
name: node-servicios-child-process-basico
description: child_process · nivel Básico · Node.js: servicios y CLIs. Orquestás procesos externos, scripts y comandos con control de salida y errores. Objetivo del nivel: Ejecutar comandos externos desde Node
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "child-process"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# child_process — Básico

## Qué hace este skill

Orquestás procesos externos, scripts y comandos con control de salida y errores. En este nivel se entrega: **Ejecutar comandos externos desde Node**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **child_process** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ejecutar comandos con execFile y spawn
2. Capturar stdout y stderr
3. Manejar exit codes y errores
4. Pasar argumentos seguros al comando

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Ejecutar comandos externos desde Node | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Ejecutar comandos con execFile y spawn · Capturar stdout y stderr · Manejar exit codes y errores · Pasar argumentos seguros al comando | lista | sí | 3-4 pasos |
| $criterios_clave | Los comandos se ejecutan con sus argumentos correctos · Los exit codes no-cero se manejan explícitamente | lista | sí | calidad verificable |
| $prompt_guia | Creá un script que corra el artisan de Laravel o composer desde Node, capture la salida y muestre el exit code al final. | texto | no | "child_process" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los comandos se ejecutan con sus argumentos correctos
- [ ] Los exit codes no-cero se manejan explícitamente

## Ejemplos de prompts

- "Creá un script que corra el artisan de Laravel o composer desde Node, capture la salida y muestre el exit code al final."
- "Aplica child_process (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los comandos se ejecutan con sus argumentos correctos"
- "Revisa mi node-servicios y dime qué pasos de child_process me faltan en este nivel"