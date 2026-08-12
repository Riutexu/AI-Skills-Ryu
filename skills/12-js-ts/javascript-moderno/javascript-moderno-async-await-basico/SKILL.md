---
name: javascript-moderno-async-await-basico
description: async/await y promesas · nivel Básico · JavaScript moderno: ES2024. Encadenás y componés operaciones asíncronas con promesas y async/await sin infierno de callbacks. Objetivo del nivel: Escribir flujos asíncronos con async/await y try/catch
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "async-await"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# async/await y promesas — Básico

## Qué hace este skill

Encadenás y componés operaciones asíncronas con promesas y async/await sin infierno de callbacks. En este nivel se entrega: **Escribir flujos asíncronos con async/await y try/catch**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **async/await y promesas** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Convertir una cadena de .then en async/await
2. Manejar errores con try/catch en un flujo async
3. Ejecutar promesas en paralelo con Promise.all
4. Usar Promise.allSettled para tareas independientes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir flujos asíncronos con async/await y try/catch | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Convertir una cadena de .then en async/await · Manejar errores con try/catch en un flujo async · Ejecutar promesas en paralelo con Promise.all · Usar Promise.allSettled para tareas independientes | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún error asíncrono queda sin manejar · Los await están dentro de funciones async | lista | sí | calidad verificable |
| $prompt_guia | Pasá este código con .then encadenados del cargador de usuarios a async/await con try/catch, y agregá un Promise.allSettled para cargar dos endpoints en paralelo. | texto | no | "async/await y promesas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún error asíncrono queda sin manejar
- [ ] Los await están dentro de funciones async

## Ejemplos de prompts

- "Pasá este código con .then encadenados del cargador de usuarios a async/await con try/catch, y agregá un Promise.allSettled para cargar dos endpoints en paralelo."
- "Aplica async/await y promesas (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Ningún error asíncrono queda sin manejar"
- "Revisa mi javascript-moderno y dime qué pasos de async/await y promesas me faltan en este nivel"