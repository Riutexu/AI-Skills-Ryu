---
name: node-servicios-errores-exit-codes-basico
description: Errores y exit codes · nivel Básico · Node.js: servicios y CLIs. Manejás errores de scripts y servicios con exit codes significativos y fallos controlados. Objetivo del nivel: Controlar exit codes y errores de scripts
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-exit-codes"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Errores y exit codes — Básico

## Qué hace este skill

Manejás errores de scripts y servicios con exit codes significativos y fallos controlados. En este nivel se entrega: **Controlar exit codes y errores de scripts**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y exit codes** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Salir con process.exitCode según el resultado
2. Capturar errores en el nivel top de la CLI
3. Distinguir errores esperados de inesperados
4. Mostrar mensajes de error claros en stderr

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Controlar exit codes y errores de scripts | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Salir con process.exitCode según el resultado · Capturar errores en el nivel top de la CLI · Distinguir errores esperados de inesperados · Mostrar mensajes de error claros en stderr | lista | sí | 3-4 pasos |
| $criterios_clave | El exit code refleja el resultado real · Los mensajes de error van a stderr | lista | sí | calidad verificable |
| $prompt_guia | Revisá la CLI para que devuelva exit code 0 en éxito, 1 en error de validación y 2 en error inesperado, con mensajes en stderr. | texto | no | "Errores y exit codes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El exit code refleja el resultado real
- [ ] Los mensajes de error van a stderr

## Ejemplos de prompts

- "Revisá la CLI para que devuelva exit code 0 en éxito, 1 en error de validación y 2 en error inesperado, con mensajes en stderr."
- "Aplica Errores y exit codes (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El exit code refleja el resultado real"
- "Revisa mi node-servicios y dime qué pasos de Errores y exit codes me faltan en este nivel"