---
name: node-servicios-workers-basico
description: Workers · nivel Básico · Node.js: servicios y CLIs. Paralelizás trabajo pesado con worker threads y tareas concurrentes. Objetivo del nivel: Crear un worker thread y comunicarse con él
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "workers"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Workers — Básico

## Qué hace este skill

Paralelizás trabajo pesado con worker threads y tareas concurrentes. En este nivel se entrega: **Crear un worker thread y comunicarse con él**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Workers** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un worker con new Worker
2. Enviar y recibir mensajes con postMessage
3. Terminar el worker correctamente
4. Manejar errores del worker

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un worker thread y comunicarse con él | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Crear un worker con new Worker · Enviar y recibir mensajes con postMessage · Terminar el worker correctamente · Manejar errores del worker | lista | sí | 3-4 pasos |
| $criterios_clave | Los mensajes van y vuelven sin corrupción · Los workers se terminan y no quedan huérfanos | lista | sí | calidad verificable |
| $prompt_guia | Creá un worker que procese el resizing de imágenes y comunicate con él por mensajes, con manejo de errores y cierre limpio. | texto | no | "Workers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mensajes van y vuelven sin corrupción
- [ ] Los workers se terminan y no quedan huérfanos

## Ejemplos de prompts

- "Creá un worker que procese el resizing de imágenes y comunicate con él por mensajes, con manejo de errores y cierre limpio."
- "Aplica Workers (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los mensajes van y vuelven sin corrupción"
- "Revisa mi node-servicios y dime qué pasos de Workers me faltan en este nivel"