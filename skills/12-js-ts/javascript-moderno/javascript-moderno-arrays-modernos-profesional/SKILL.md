---
name: javascript-moderno-arrays-modernos-profesional
description: Arrays y métodos modernos · nivel Profesional · JavaScript moderno: ES2024. Transformás datos con map, filter, reduce, flatMap y métodos de ordenación sin mutar el original. Objetivo del nivel: Modelar transformaciones de datos complejas y de alto volumen
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "arrays-modernos"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Arrays y métodos modernos — Profesional

## Qué hace este skill

Transformás datos con map, filter, reduce, flatMap y métodos de ordenación sin mutar el original. En este nivel se entrega: **Modelar transformaciones de datos complejas y de alto volumen**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y métodos modernos** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar transformaciones con flatMap y reduce sobre miles de registros
2. Crear funciones de transformación reutilizables y tipadas
3. Optimizar iteraciones evitando pasadas innecesarias
4. Construir índices con Map para búsquedas O(1)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Modelar transformaciones de datos complejas y de alto volumen | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Implementar transformaciones con flatMap y reduce sobre miles de registros · Crear funciones de transformación reutilizables y tipadas · Optimizar iteraciones evitando pasadas innecesarias · Construir índices con Map para búsquedas O(1) | lista | sí | 3-4 pasos |
| $criterios_clave | Las transformaciones soportan datasets de 100k+ registros · Cada paso de la pipeline está documentado con JSDoc | lista | sí | calidad verificable |
| $prompt_guia | Necesito procesar 100 mil registros de logs: agrupalos por fecha, filtrá errores y calculá promedios, todo con métodos funcionales y un Map como índice. Que no se te escape ningún stack overflow. | texto | no | "Arrays y métodos modernos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las transformaciones soportan datasets de 100k+ registros
- [ ] Cada paso de la pipeline está documentado con JSDoc

## Ejemplos de prompts

- "Necesito procesar 100 mil registros de logs: agrupalos por fecha, filtrá errores y calculá promedios, todo con métodos funcionales y un Map como índice. Que no se te escape ningún stack overflow."
- "Aplica Arrays y métodos modernos (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las transformaciones soportan datasets de 100k+ registros"
- "Revisa mi javascript-moderno y dime qué pasos de Arrays y métodos modernos me faltan en este nivel"