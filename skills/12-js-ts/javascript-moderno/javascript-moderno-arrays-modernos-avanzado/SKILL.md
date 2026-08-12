---
name: javascript-moderno-arrays-modernos-avanzado
description: Arrays y métodos modernos · nivel Avanzado · JavaScript moderno: ES2024. Transformás datos con map, filter, reduce, flatMap y métodos de ordenación sin mutar el original. Objetivo del nivel: Reducir datos con reduce y operar con flatMap y ordenación estable
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "arrays-modernos"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Arrays y métodos modernos — Avanzado

## Qué hace este skill

Transformás datos con map, filter, reduce, flatMap y métodos de ordenación sin mutar el original. En este nivel se entrega: **Reducir datos con reduce y operar con flatMap y ordenación estable**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y métodos modernos** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agrupar objetos por propiedad con reduce
2. Aplanar y transformar en un paso con flatMap
3. Ordenar con sort estable usando comparadores
4. Calcular totales y estadísticas con reduce

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reducir datos con reduce y operar con flatMap y ordenación estable | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Agrupar objetos por propiedad con reduce · Aplanar y transformar en un paso con flatMap · Ordenar con sort estable usando comparadores · Calcular totales y estadísticas con reduce | lista | sí | 3-4 pasos |
| $criterios_clave | Los comparadores manejan null y casos límite · Las reducciones son puras y legibles | lista | sí | calidad verificable |
| $prompt_guia | Con reduce, agrupá estas ventas por vendedor y calculá el total por grupo; después ordenalos de mayor a menor. La data viene del backend PHP, no la modifiques. | texto | no | "Arrays y métodos modernos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los comparadores manejan null y casos límite
- [ ] Las reducciones son puras y legibles

## Ejemplos de prompts

- "Con reduce, agrupá estas ventas por vendedor y calculá el total por grupo; después ordenalos de mayor a menor. La data viene del backend PHP, no la modifiques."
- "Aplica Arrays y métodos modernos (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Los comparadores manejan null y casos límite"
- "Revisa mi javascript-moderno y dime qué pasos de Arrays y métodos modernos me faltan en este nivel"