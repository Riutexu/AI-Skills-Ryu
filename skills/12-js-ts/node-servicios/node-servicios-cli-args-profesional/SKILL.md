---
name: node-servicios-cli-args-profesional
description: CLI con args · nivel Profesional · Node.js: servicios y CLIs. Construís CLIs con parseo de argumentos, flags y salida interactiva. Objetivo del nivel: Diseñar una CLI completa con composición de comandos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "cli-args"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# CLI con args — Profesional

## Qué hace este skill

Construís CLIs con parseo de argumentos, flags y salida interactiva. En este nivel se entrega: **Diseñar una CLI completa con composición de comandos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CLI con args** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el comando raíz con subcomandos
2. Estructurar la CLI en módulos por comando
3. Implementar salida en JSON para automatización
4. Documentar la CLI en el README con ejemplos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar una CLI completa con composición de comandos | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Diseñar el comando raíz con subcomandos · Estructurar la CLI en módulos por comando · Implementar salida en JSON para automatización · Documentar la CLI en el README con ejemplos | lista | sí | 3-4 pasos |
| $criterios_clave | Los subcomandos comparten utilidades sin acoplar · La salida JSON permite uso programático | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la CLI de la herramienta interna: subcomandos (init, build, deploy, doctor), salida JSON con --json y documentación con ejemplos para el equipo. | texto | no | "CLI con args" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los subcomandos comparten utilidades sin acoplar
- [ ] La salida JSON permite uso programático

## Ejemplos de prompts

- "Diseñá la CLI de la herramienta interna: subcomandos (init, build, deploy, doctor), salida JSON con --json y documentación con ejemplos para el equipo."
- "Aplica CLI con args (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los subcomandos comparten utilidades sin acoplar"
- "Revisa mi node-servicios y dime qué pasos de CLI con args me faltan en este nivel"