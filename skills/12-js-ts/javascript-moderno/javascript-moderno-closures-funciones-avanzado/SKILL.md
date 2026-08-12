---
name: javascript-moderno-closures-funciones-avanzado
description: Closures y funciones · nivel Avanzado · JavaScript moderno: ES2024. Aprovechás closures, arrow functions, parámetros rest y funciones de orden superior. Objetivo del nivel: Implementar closures que encapsulan estado privado
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "closures-funciones"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Closures y funciones — Avanzado

## Qué hace este skill

Aprovechás closures, arrow functions, parámetros rest y funciones de orden superior. En este nivel se entrega: **Implementar closures que encapsulan estado privado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Closures y funciones** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una fábrica de contadores con closure
2. Implementar un módulo contador con variables privadas
3. Usar closures para configurar funciones con partial application
4. Crear un memoizador genérico con closure

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Implementar closures que encapsulan estado privado | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear una fábrica de contadores con closure · Implementar un módulo contador con variables privadas · Usar closures para configurar funciones con partial application · Crear un memoizador genérico con closure | lista | sí | 3-4 pasos |
| $criterios_clave | El estado privado no es accesible desde fuera · Las funciones memoizadas devuelven los mismos resultados | lista | sí | calidad verificable |
| $prompt_guia | Implementá una función memoize que cachee resultados de funciones costosas usando un closure con Map; probala con una función que calcula factorial. | texto | no | "Closures y funciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado privado no es accesible desde fuera
- [ ] Las funciones memoizadas devuelven los mismos resultados

## Ejemplos de prompts

- "Implementá una función memoize que cachee resultados de funciones costosas usando un closure con Map; probala con una función que calcula factorial."
- "Aplica Closures y funciones (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El estado privado no es accesible desde fuera"
- "Revisa mi javascript-moderno y dime qué pasos de Closures y funciones me faltan en este nivel"