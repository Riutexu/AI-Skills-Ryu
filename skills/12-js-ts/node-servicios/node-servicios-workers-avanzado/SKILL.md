---
name: node-servicios-workers-avanzado
description: Workers · nivel Avanzado · Node.js: servicios y CLIs. Paralelizás trabajo pesado con worker threads y tareas concurrentes. Objetivo del nivel: Paralelizar tareas CPU-bound con pool de workers
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "workers"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Workers — Avanzado

## Qué hace este skill

Paralelizás trabajo pesado con worker threads y tareas concurrentes. En este nivel se entrega: **Paralelizar tareas CPU-bound con pool de workers**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Workers** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un pool de workers con cola de tareas
2. Distribuir trabajo por lotes a los workers
3. Recolectar resultados en orden
4. Balancear carga entre workers

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Paralelizar tareas CPU-bound con pool de workers | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Crear un pool de workers con cola de tareas · Distribuir trabajo por lotes a los workers · Recolectar resultados en orden · Balancear carga entre workers | lista | sí | 3-4 pasos |
| $criterios_clave | El pool reutiliza workers y procesa la cola completa · Los resultados se recolectan sin duplicados ni pérdidas | lista | sí | calidad verificable |
| $prompt_guia | Implementá un pool de 4 workers para procesar 10 mil imágenes en lote: cola de tareas, distribución por lotes y resultados ordenados. | texto | no | "Workers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pool reutiliza workers y procesa la cola completa
- [ ] Los resultados se recolectan sin duplicados ni pérdidas

## Ejemplos de prompts

- "Implementá un pool de 4 workers para procesar 10 mil imágenes en lote: cola de tareas, distribución por lotes y resultados ordenados."
- "Aplica Workers (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El pool reutiliza workers y procesa la cola completa"
- "Revisa mi node-servicios y dime qué pasos de Workers me faltan en este nivel"