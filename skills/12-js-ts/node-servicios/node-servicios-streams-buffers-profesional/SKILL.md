---
name: node-servicios-streams-buffers-profesional
description: Streams y buffers · nivel Profesional · Node.js: servicios y CLIs. Procesás archivos grandes y flujos de datos con streams, pipes y buffers eficientes. Objetivo del nivel: Diseñar pipelines de datos robustos con streams
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "streams-buffers"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# Streams y buffers — Profesional

## Qué hace este skill

Procesás archivos grandes y flujos de datos con streams, pipes y buffers eficientes. En este nivel se entrega: **Diseñar pipelines de datos robustos con streams**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Streams y buffers** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Componer pipelines con pipeline() y manejo de errores
2. Implementar multiprocesamiento de archivos con streams
3. Medir el throughput y optimizar el buffer
4. Documentar los pipelines de datos del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar pipelines de datos robustos con streams | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Componer pipelines con pipeline() y manejo de errores · Implementar multiprocesamiento de archivos con streams · Medir el throughput y optimizar el buffer · Documentar los pipelines de datos del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Los pipelines manejan errores y cierran recursos · El throughput se mide y optimiza con datos reales | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el pipeline de importación de CSV a JSON del proyecto: compose con pipeline(), manejo de errores centralizado, medición de throughput y particionado de salida por mes. | texto | no | "Streams y buffers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los pipelines manejan errores y cierran recursos
- [ ] El throughput se mide y optimiza con datos reales

## Ejemplos de prompts

- "Diseñá el pipeline de importación de CSV a JSON del proyecto: compose con pipeline(), manejo de errores centralizado, medición de throughput y particionado de salida por mes."
- "Aplica Streams y buffers (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los pipelines manejan errores y cierran recursos"
- "Revisa mi node-servicios y dime qué pasos de Streams y buffers me faltan en este nivel"