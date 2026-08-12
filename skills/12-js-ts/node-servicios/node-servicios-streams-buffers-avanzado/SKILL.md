---
name: node-servicios-streams-buffers-avanzado
description: Streams y buffers · nivel Avanzado · Node.js: servicios y CLIs. Procesás archivos grandes y flujos de datos con streams, pipes y buffers eficientes. Objetivo del nivel: Transformar y procesar datos con streams
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "streams-buffers"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Streams y buffers — Avanzado

## Qué hace este skill

Procesás archivos grandes y flujos de datos con streams, pipes y buffers eficientes. En este nivel se entrega: **Transformar y procesar datos con streams**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Streams y buffers** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear transform streams que procesen línea a línea
2. Procesar archivos de logs grandes sin cargarlos a memoria
3. Manejar errores y backpressure en pipelines
4. Dividir archivos grandes en partes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Transformar y procesar datos con streams | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Crear transform streams que procesen línea a línea · Procesar archivos de logs grandes sin cargarlos a memoria · Manejar errores y backpressure en pipelines · Dividir archivos grandes en partes | lista | sí | 3-4 pasos |
| $criterios_clave | Los archivos de 2GB se procesan sin agotar memoria · El backpressure se maneja sin pérdida de chunks | lista | sí | calidad verificable |
| $prompt_guia | Creá un procesador de logs de 2GB: transform stream que filtre errores línea a línea y escriba a otro archivo, sin cargar todo a memoria y respetando backpressure. | texto | no | "Streams y buffers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los archivos de 2GB se procesan sin agotar memoria
- [ ] El backpressure se maneja sin pérdida de chunks

## Ejemplos de prompts

- "Creá un procesador de logs de 2GB: transform stream que filtre errores línea a línea y escriba a otro archivo, sin cargar todo a memoria y respetando backpressure."
- "Aplica Streams y buffers (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los archivos de 2GB se procesan sin agotar memoria"
- "Revisa mi node-servicios y dime qué pasos de Streams y buffers me faltan en este nivel"