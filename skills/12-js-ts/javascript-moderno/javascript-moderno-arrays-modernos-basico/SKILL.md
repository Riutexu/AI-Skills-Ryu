---
name: javascript-moderno-arrays-modernos-basico
description: Arrays y métodos modernos · nivel Básico · JavaScript moderno: ES2024. Transformás datos con map, filter, reduce, flatMap y métodos de ordenación sin mutar el original. Objetivo del nivel: Transformar y filtrar arrays con map, filter y find
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "arrays-modernos"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Arrays y métodos modernos — Básico

## Qué hace este skill

Transformás datos con map, filter, reduce, flatMap y métodos de ordenación sin mutar el original. En este nivel se entrega: **Transformar y filtrar arrays con map, filter y find**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y métodos modernos** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mapear un array de objetos a otro shape con map
2. Filtrar elementos con filter por una condición
3. Buscar un elemento con find y su índice con findIndex
4. Comprobar condiciones con every y some

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Transformar y filtrar arrays con map, filter y find | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Mapear un array de objetos a otro shape con map · Filtrar elementos con filter por una condición · Buscar un elemento con find y su índice con findIndex · Comprobar condiciones con every y some | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún método muta el array original · Los callbacks tienen nombre descriptivo o son cortos | lista | sí | calidad verificable |
| $prompt_guia | De esta lista de productos del backend PHP, obtené con map/filter/find: los activos, el más barato y un array de nombres en mayúscula. | texto | no | "Arrays y métodos modernos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún método muta el array original
- [ ] Los callbacks tienen nombre descriptivo o son cortos

## Ejemplos de prompts

- "De esta lista de productos del backend PHP, obtené con map/filter/find: los activos, el más barato y un array de nombres en mayúscula."
- "Aplica Arrays y métodos modernos (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Ningún método muta el array original"
- "Revisa mi javascript-moderno y dime qué pasos de Arrays y métodos modernos me faltan en este nivel"