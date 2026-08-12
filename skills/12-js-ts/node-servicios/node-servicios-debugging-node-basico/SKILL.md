---
name: node-servicios-debugging-node-basico
description: Debugging · nivel Básico · Node.js: servicios y CLIs. Debuggeás Node con inspector, node --inspect, profiling y heap dumps. Objetivo del nivel: Depurar scripts con inspector y logs
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "debugging-node"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Debugging — Básico

## Qué hace este skill

Debuggeás Node con inspector, node --inspect, profiling y heap dumps. En este nivel se entrega: **Depurar scripts con inspector y logs**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Debugging** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr Node con --inspect y conectar DevTools
2. Usar breakpoints y paso a paso
3. Inspeccionar variables en el panel de scope
4. Usar console con formato y tablas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Depurar scripts con inspector y logs | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Correr Node con --inspect y conectar DevTools · Usar breakpoints y paso a paso · Inspeccionar variables en el panel de scope · Usar console con formato y tablas | lista | sí | 3-4 pasos |
| $criterios_clave | Los breakpoints detienen en el punto esperado · La inspección de variables es completa | lista | sí | calidad verificable |
| $prompt_guia | Depurá la CLI de importación con node --inspect y Chrome DevTools: breakpoints en el parseo del CSV y revisión de variables por paso. | texto | no | "Debugging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los breakpoints detienen en el punto esperado
- [ ] La inspección de variables es completa

## Ejemplos de prompts

- "Depurá la CLI de importación con node --inspect y Chrome DevTools: breakpoints en el parseo del CSV y revisión de variables por paso."
- "Aplica Debugging (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los breakpoints detienen en el punto esperado"
- "Revisa mi node-servicios y dime qué pasos de Debugging me faltan en este nivel"