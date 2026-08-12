---
name: node-servicios-file-system-avanzado
description: File system · nivel Avanzado · Node.js: servicios y CLIs. Manejás archivos y directorios con fs y la API promises moderna. Objetivo del nivel: Implementar walkers, watch y operaciones atómicas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "file-system"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# File system — Avanzado

## Qué hace este skill

Manejás archivos y directorios con fs y la API promises moderna. En este nivel se entrega: **Implementar walkers, watch y operaciones atómicas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **File system** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Recorrer árboles de directorios recursivamente
2. Vigilar cambios con fs.watch
3. Escribir archivos de forma atómica con rename
4. Manejar permisos y errores de archivos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Implementar walkers, watch y operaciones atómicas | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Recorrer árboles de directorios recursivamente · Vigilar cambios con fs.watch · Escribir archivos de forma atómica con rename · Manejar permisos y errores de archivos | lista | sí | 3-4 pasos |
| $criterios_clave | El walker maneja árboles profundos sin stack overflow · Las escrituras atómicas no dejan archivos corruptos | lista | sí | calidad verificable |
| $prompt_guia | Creá una utilidad que recorra el directorio de templates, vigile cambios con fs.watch y regenere el index de componentes de forma atómica. | texto | no | "File system" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El walker maneja árboles profundos sin stack overflow
- [ ] Las escrituras atómicas no dejan archivos corruptos

## Ejemplos de prompts

- "Creá una utilidad que recorra el directorio de templates, vigile cambios con fs.watch y regenere el index de componentes de forma atómica."
- "Aplica File system (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El walker maneja árboles profundos sin stack overflow"
- "Revisa mi node-servicios y dime qué pasos de File system me faltan en este nivel"