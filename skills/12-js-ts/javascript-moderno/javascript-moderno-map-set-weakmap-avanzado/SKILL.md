---
name: javascript-moderno-map-set-weakmap-avanzado
description: Map/Set/WeakMap · nivel Avanzado · JavaScript moderno: ES2024. Usás colecciones con claves reales, deduplicación y referencias débiles donde corresponde. Objetivo del nivel: Combinar Map y Set para índices y caches eficientes
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "map-set-weakmap"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Map/Set/WeakMap — Avanzado

## Qué hace este skill

Usás colecciones con claves reales, deduplicación y referencias débiles donde corresponde. En este nivel se entrega: **Combinar Map y Set para índices y caches eficientes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Map/Set/WeakMap** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un índice bidireccional con dos Maps
2. Implementar una cache LRU con Map
3. Usar WeakMap para datos privados de instancias
4. Agrupar colecciones con Map de Sets

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar Map y Set para índices y caches eficientes | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear un índice bidireccional con dos Maps · Implementar una cache LRU con Map · Usar WeakMap para datos privados de instancias · Agrupar colecciones con Map de Sets | lista | sí | 3-4 pasos |
| $criterios_clave | La cache LRU expulsa el elemento menos reciente · WeakMap no retiene referencias que impiden el GC | lista | sí | calidad verificable |
| $prompt_guia | Implementá una cache LRU con Map para los resultados de búsqueda, y guardá metadatos privados de las instancias con WeakMap para que el GC haga su trabajo. | texto | no | "Map/Set/WeakMap" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cache LRU expulsa el elemento menos reciente
- [ ] WeakMap no retiene referencias que impiden el GC

## Ejemplos de prompts

- "Implementá una cache LRU con Map para los resultados de búsqueda, y guardá metadatos privados de las instancias con WeakMap para que el GC haga su trabajo."
- "Aplica Map/Set/WeakMap (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza La cache LRU expulsa el elemento menos reciente"
- "Revisa mi javascript-moderno y dime qué pasos de Map/Set/WeakMap me faltan en este nivel"