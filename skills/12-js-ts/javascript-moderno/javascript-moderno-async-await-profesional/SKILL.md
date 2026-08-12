---
name: javascript-moderno-async-await-profesional
description: async/await y promesas · nivel Profesional · JavaScript moderno: ES2024. Encadenás y componés operaciones asíncronas con promesas y async/await sin infierno de callbacks. Objetivo del nivel: Diseñar pipelines asíncronos resilientes con control de errores
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "async-await"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# async/await y promesas — Profesional

## Qué hace este skill

Encadenás y componés operaciones asíncronas con promesas y async/await sin infierno de callbacks. En este nivel se entrega: **Diseñar pipelines asíncronos resilientes con control de errores**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **async/await y promesas** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una utilidad withRetry con backoff jittered y circuit breaker
2. Implementar cancelación de flujos con AbortController
3. Modelar flujos con estado y progreso observable
4. Escribir tests que cubran fallos y reintentos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar pipelines asíncronos resilientes con control de errores | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear una utilidad withRetry con backoff jittered y circuit breaker · Implementar cancelación de flujos con AbortController · Modelar flujos con estado y progreso observable · Escribir tests que cubran fallos y reintentos | lista | sí | 3-4 pasos |
| $criterios_clave | Los circuit breakers evitan golpear servicios caídos · Las cancelaciones detienen el trabajo intermedio | lista | sí | calidad verificable |
| $prompt_guia | El endpoint de reportes se cae a veces a las 17:30: creá un wrapper withRetry con backoff y un circuit breaker que deje de intentar tras 5 fallos. Documentalo como si el guardia de turno lo fuera a mantener. | texto | no | "async/await y promesas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los circuit breakers evitan golpear servicios caídos
- [ ] Las cancelaciones detienen el trabajo intermedio

## Ejemplos de prompts

- "El endpoint de reportes se cae a veces a las 17:30: creá un wrapper withRetry con backoff y un circuit breaker que deje de intentar tras 5 fallos. Documentalo como si el guardia de turno lo fuera a mantener."
- "Aplica async/await y promesas (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Los circuit breakers evitan golpear servicios caídos"
- "Revisa mi javascript-moderno y dime qué pasos de async/await y promesas me faltan en este nivel"