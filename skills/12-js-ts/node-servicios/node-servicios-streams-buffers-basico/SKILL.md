---
name: node-servicios-streams-buffers-basico
description: Streams y buffers · nivel Básico · Node.js: servicios y CLIs. Procesás archivos grandes y flujos de datos con streams, pipes y buffers eficientes. Objetivo del nivel: Leer y escribir archivos y streams básicos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "streams-buffers"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Streams y buffers — Básico

## Qué hace este skill

Procesás archivos grandes y flujos de datos con streams, pipes y buffers eficientes. En este nivel se entrega: **Leer y escribir archivos y streams básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Streams y buffers** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer archivos con readFile y streams
2. Escribir archivos con writeFile y streams
3. Pipear streams de archivo a salida
4. Manejar la codificación de texto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Leer y escribir archivos y streams básicos | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Leer archivos con readFile y streams · Escribir archivos con writeFile y streams · Pipear streams de archivo a salida · Manejar la codificación de texto | lista | sí | 3-4 pasos |
| $criterios_clave | Los archivos se leen y escriben sin pérdida de datos · Los streams se cierran correctamente | lista | sí | calidad verificable |
| $prompt_guia | Escribí un script que copie archivos grandes con streams y pipe, mostrando el progreso en porcentaje. | texto | no | "Streams y buffers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los archivos se leen y escriben sin pérdida de datos
- [ ] Los streams se cierran correctamente

## Ejemplos de prompts

- "Escribí un script que copie archivos grandes con streams y pipe, mostrando el progreso en porcentaje."
- "Aplica Streams y buffers (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los archivos se leen y escriben sin pérdida de datos"
- "Revisa mi node-servicios y dime qué pasos de Streams y buffers me faltan en este nivel"