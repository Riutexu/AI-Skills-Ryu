---
name: node-servicios-debugging-node-avanzado
description: Debugging · nivel Avanzado · Node.js: servicios y CLIs. Debuggeás Node con inspector, node --inspect, profiling y heap dumps. Objetivo del nivel: Diagnosticar problemas de rendimiento y memoria
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "debugging-node"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Debugging — Avanzado

## Qué hace este skill

Debuggeás Node con inspector, node --inspect, profiling y heap dumps. En este nivel se entrega: **Diagnosticar problemas de rendimiento y memoria**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Debugging** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Tomar CPU profiles con --cpu-prof
2. Analizar heap dumps y detectar retenciones
3. Medir tiempos de operaciones críticas
4. Usar Node inspector para monitorear el event loop

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Diagnosticar problemas de rendimiento y memoria | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Tomar CPU profiles con --cpu-prof · Analizar heap dumps y detectar retenciones · Medir tiempos de operaciones críticas · Usar Node inspector para monitorear el event loop | lista | sí | 3-4 pasos |
| $criterios_clave | El profile identifica el cuello de botella real · Los heap dumps muestran la retención de memoria | lista | sí | calidad verificable |
| $prompt_guia | El script de importación usa 3GB de RAM: tomá un heap dump, analizá las retenciones, encontrá el origen y proponé la corrección con datos. | texto | no | "Debugging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El profile identifica el cuello de botella real
- [ ] Los heap dumps muestran la retención de memoria

## Ejemplos de prompts

- "El script de importación usa 3GB de RAM: tomá un heap dump, analizá las retenciones, encontrá el origen y proponé la corrección con datos."
- "Aplica Debugging (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El profile identifica el cuello de botella real"
- "Revisa mi node-servicios y dime qué pasos de Debugging me faltan en este nivel"