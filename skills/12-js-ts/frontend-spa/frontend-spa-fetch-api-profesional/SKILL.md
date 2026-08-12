---
name: frontend-spa-fetch-api-profesional
description: Fetch y API · nivel Profesional · SPAs vanilla y Vite. Consumís el backend con fetch, manejo de errores HTTP y contratos de respuesta. Objetivo del nivel: Diseñar la capa de datos resiliente de la SPA
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fetch-api"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Fetch y API — Profesional

## Qué hace este skill

Consumís el backend con fetch, manejo de errores HTTP y contratos de respuesta. En este nivel se entrega: **Diseñar la capa de datos resiliente de la SPA**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fetch y API** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar reintentos con backoff y circuit breaker
2. Manejar respuestas de validación del backend campo a campo
3. Cachear respuestas estables con estrategia clara
4. Escribir la documentación del contrato de la API

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la capa de datos resiliente de la SPA | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Implementar reintentos con backoff y circuit breaker · Manejar respuestas de validación del backend campo a campo · Cachear respuestas estables con estrategia clara · Escribir la documentación del contrato de la API | lista | sí | 3-4 pasos |
| $criterios_clave | La capa de datos tolera caídas parciales del backend · Los errores de validación se mapean a los campos del form | lista | sí | calidad verificable |
| $prompt_guia | El backend PHP es inestable entre las 17 y las 18: diseñá la capa de datos con reintentos, circuit breaker y mapeo de errores de validación a campos del formulario. | texto | no | "Fetch y API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa de datos tolera caídas parciales del backend
- [ ] Los errores de validación se mapean a los campos del form

## Ejemplos de prompts

- "El backend PHP es inestable entre las 17 y las 18: diseñá la capa de datos con reintentos, circuit breaker y mapeo de errores de validación a campos del formulario."
- "Aplica Fetch y API (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza La capa de datos tolera caídas parciales del backend"
- "Revisa mi frontend-spa y dime qué pasos de Fetch y API me faltan en este nivel"