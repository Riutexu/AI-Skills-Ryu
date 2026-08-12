---
name: javascript-moderno-map-set-weakmap-basico
description: Map/Set/WeakMap · nivel Básico · JavaScript moderno: ES2024. Usás colecciones con claves reales, deduplicación y referencias débiles donde corresponde. Objetivo del nivel: Usar Map y Set para almacenar y deduplicar datos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "map-set-weakmap"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Map/Set/WeakMap — Básico

## Qué hace este skill

Usás colecciones con claves reales, deduplicación y referencias débiles donde corresponde. En este nivel se entrega: **Usar Map y Set para almacenar y deduplicar datos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Map/Set/WeakMap** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Almacenar y recuperar valores con Map
2. Deduplicar un array con Set
3. Iterar un Map con for...of y entries
4. Verificar existencia con has y size

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar Map y Set para almacenar y deduplicar datos | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Almacenar y recuperar valores con Map · Deduplicar un array con Set · Iterar un Map con for...of y entries · Verificar existencia con has y size | lista | sí | 3-4 pasos |
| $criterios_clave | Las claves de Map no son convertidas a string sin querer · El código evita objetos planos cuando la clave no es string | lista | sí | calidad verificable |
| $prompt_guia | Usá un Map para guardar la sesión del usuario con claves de objeto, y un Set para deduplicar los tags del formulario. Mostrá cómo iterarlos. | texto | no | "Map/Set/WeakMap" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las claves de Map no son convertidas a string sin querer
- [ ] El código evita objetos planos cuando la clave no es string

## Ejemplos de prompts

- "Usá un Map para guardar la sesión del usuario con claves de objeto, y un Set para deduplicar los tags del formulario. Mostrá cómo iterarlos."
- "Aplica Map/Set/WeakMap (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las claves de Map no son convertidas a string sin querer"
- "Revisa mi javascript-moderno y dime qué pasos de Map/Set/WeakMap me faltan en este nivel"