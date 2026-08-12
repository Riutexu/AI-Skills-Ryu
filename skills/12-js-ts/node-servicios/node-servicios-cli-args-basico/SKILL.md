---
name: node-servicios-cli-args-basico
description: CLI con args · nivel Básico · Node.js: servicios y CLIs. Construís CLIs con parseo de argumentos, flags y salida interactiva. Objetivo del nivel: Crear una CLI que parsee argumentos y flags
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "cli-args"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# CLI con args — Básico

## Qué hace este skill

Construís CLIs con parseo de argumentos, flags y salida interactiva. En este nivel se entrega: **Crear una CLI que parsee argumentos y flags**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CLI con args** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer process.argv y separar args de flags
2. Implementar flags --help y --version
3. Validar argumentos obligatorios
4. Mostrar mensajes de uso claros

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear una CLI que parsee argumentos y flags | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Leer process.argv y separar args de flags · Implementar flags --help y --version · Validar argumentos obligatorios · Mostrar mensajes de uso claros | lista | sí | 3-4 pasos |
| $criterios_clave | El --help documenta todos los flags · Los argumentos faltantes dan error con mensaje de uso | lista | sí | calidad verificable |
| $prompt_guia | Creá una CLI deploy.js que reciba el nombre del ambiente y un flag --dry-run, con --help completo y validación de argumentos. | texto | no | "CLI con args" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El --help documenta todos los flags
- [ ] Los argumentos faltantes dan error con mensaje de uso

## Ejemplos de prompts

- "Creá una CLI deploy.js que reciba el nombre del ambiente y un flag --dry-run, con --help completo y validación de argumentos."
- "Aplica CLI con args (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El --help documenta todos los flags"
- "Revisa mi node-servicios y dime qué pasos de CLI con args me faltan en este nivel"