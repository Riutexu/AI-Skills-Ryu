---
name: javascript-moderno-map-set-weakmap-profesional
description: Map/Set/WeakMap · nivel Profesional · JavaScript moderno: ES2024. Usás colecciones con claves reales, deduplicación y referencias débiles donde corresponde. Objetivo del nivel: Diseñar estructuras de datos a medida y manejo de memoria
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "map-set-weakmap"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Map/Set/WeakMap — Profesional

## Qué hace este skill

Usás colecciones con claves reales, deduplicación y referencias débiles donde corresponde. En este nivel se entrega: **Diseñar estructuras de datos a medida y manejo de memoria**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Map/Set/WeakMap** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un LRU cache con límite y estadísticas de hit
2. Usar WeakSet para marcas efímeras en objetos vivos
3. Modelar grafos con Map de Sets
4. Auditar fugas de memoria por referencias retenidas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar estructuras de datos a medida y manejo de memoria | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Implementar un LRU cache con límite y estadísticas de hit · Usar WeakSet para marcas efímeras en objetos vivos · Modelar grafos con Map de Sets · Auditar fugas de memoria por referencias retenidas | lista | sí | 3-4 pasos |
| $criterios_clave | Las estructuras exponen estadísticas útiles para monitoreo · No hay retenciones innecesarias de objetos descartados | lista | sí | calidad verificable |
| $prompt_guia | La SPA acumula memoria en sesiones largas: auditá retenciones y diseñá el estado compartido con WeakMap/WeakSet donde la vida de los objetos la dicte el DOM. | texto | no | "Map/Set/WeakMap" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las estructuras exponen estadísticas útiles para monitoreo
- [ ] No hay retenciones innecesarias de objetos descartados

## Ejemplos de prompts

- "La SPA acumula memoria en sesiones largas: auditá retenciones y diseñá el estado compartido con WeakMap/WeakSet donde la vida de los objetos la dicte el DOM."
- "Aplica Map/Set/WeakMap (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las estructuras exponen estadísticas útiles para monitoreo"
- "Revisa mi javascript-moderno y dime qué pasos de Map/Set/WeakMap me faltan en este nivel"