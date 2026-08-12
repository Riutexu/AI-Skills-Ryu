---
name: node-servicios-child-process-profesional
description: child_process · nivel Profesional · Node.js: servicios y CLIs. Orquestás procesos externos, scripts y comandos con control de salida y errores. Objetivo del nivel: Orquestar pipelines de procesos con resiliencia
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "child-process"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# child_process — Profesional

## Qué hace este skill

Orquestás procesos externos, scripts y comandos con control de salida y errores. En este nivel se entrega: **Orquestar pipelines de procesos con resiliencia**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **child_process** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir un runner de tareas con dependencias
2. Implementar reintentos y rollback ante fallos
3. Loggear y recolectar métricas de cada paso
4. Aislar procesos con límites de memoria y tiempo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Orquestar pipelines de procesos con resiliencia | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Construir un runner de tareas con dependencias · Implementar reintentos y rollback ante fallos · Loggear y recolectar métricas de cada paso · Aislar procesos con límites de memoria y tiempo | lista | sí | 3-4 pasos |
| $criterios_clave | El runner ejecuta el grafo de dependencias en orden · Los fallos producen rollback sin dejar estado corrupto | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el runner de deploys: grafo de pasos con dependencias, reintentos por paso, rollback si un paso crítico falla y métricas de duración por paso. | texto | no | "child_process" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El runner ejecuta el grafo de dependencias en orden
- [ ] Los fallos producen rollback sin dejar estado corrupto

## Ejemplos de prompts

- "Diseñá el runner de deploys: grafo de pasos con dependencias, reintentos por paso, rollback si un paso crítico falla y métricas de duración por paso."
- "Aplica child_process (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El runner ejecuta el grafo de dependencias en orden"
- "Revisa mi node-servicios y dime qué pasos de child_process me faltan en este nivel"