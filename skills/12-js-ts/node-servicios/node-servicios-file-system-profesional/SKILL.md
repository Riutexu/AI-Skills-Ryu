---
name: node-servicios-file-system-profesional
description: File system · nivel Profesional · Node.js: servicios y CLIs. Manejás archivos y directorios con fs y la API promises moderna. Objetivo del nivel: Diseñar el manejo de archivos de la herramienta con integridad
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "file-system"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# File system — Profesional

## Qué hace este skill

Manejás archivos y directorios con fs y la API promises moderna. En este nivel se entrega: **Diseñar el manejo de archivos de la herramienta con integridad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **File system** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar versionado de archivos de salida
2. Crear backups con verificación de integridad
3. Manejar conflictos de escritura concurrente
4. Documentar las operaciones de archivos del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el manejo de archivos de la herramienta con integridad | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Implementar versionado de archivos de salida · Crear backups con verificación de integridad · Manejar conflictos de escritura concurrente · Documentar las operaciones de archivos del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Los archivos críticos tienen backup verificado · Las escrituras concurrentes no se pisan | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el manejo de archivos de la herramienta de exportación: versionado de salidas, backup con checksum y prevención de escrituras concurrentes. | texto | no | "File system" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los archivos críticos tienen backup verificado
- [ ] Las escrituras concurrentes no se pisan

## Ejemplos de prompts

- "Diseñá el manejo de archivos de la herramienta de exportación: versionado de salidas, backup con checksum y prevención de escrituras concurrentes."
- "Aplica File system (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los archivos críticos tienen backup verificado"
- "Revisa mi node-servicios y dime qué pasos de File system me faltan en este nivel"