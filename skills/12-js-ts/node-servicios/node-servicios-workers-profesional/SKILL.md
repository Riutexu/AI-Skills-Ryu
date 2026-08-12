---
name: node-servicios-workers-profesional
description: Workers · nivel Profesional · Node.js: servicios y CLIs. Paralelizás trabajo pesado con worker threads y tareas concurrentes. Objetivo del nivel: Diseñar la arquitectura de procesamiento paralelo del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "workers"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# Workers — Profesional

## Qué hace este skill

Paralelizás trabajo pesado con worker threads y tareas concurrentes. En este nivel se entrega: **Diseñar la arquitectura de procesamiento paralelo del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Workers** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Decidir entre worker threads, child process o main thread
2. Diseñar el contrato de mensajes del pool
3. Medir el speedup real y ajustar el tamaño del pool
4. Documentar cuándo usar workers en el proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la arquitectura de procesamiento paralelo del proyecto | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Decidir entre worker threads, child process o main thread · Diseñar el contrato de mensajes del pool · Medir el speedup real y ajustar el tamaño del pool · Documentar cuándo usar workers en el proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | La decisión de arquitectura está documentada con datos · El speedup se mide con métricas reales | lista | sí | calidad verificable |
| $prompt_guia | El procesamiento de reportes tarda 20 minutos: diseñá la arquitectura de paralelización con workers, medí el speedup con 2, 4 y 8 workers y documentá la decisión. | texto | no | "Workers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La decisión de arquitectura está documentada con datos
- [ ] El speedup se mide con métricas reales

## Ejemplos de prompts

- "El procesamiento de reportes tarda 20 minutos: diseñá la arquitectura de paralelización con workers, medí el speedup con 2, 4 y 8 workers y documentá la decisión."
- "Aplica Workers (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza La decisión de arquitectura está documentada con datos"
- "Revisa mi node-servicios y dime qué pasos de Workers me faltan en este nivel"