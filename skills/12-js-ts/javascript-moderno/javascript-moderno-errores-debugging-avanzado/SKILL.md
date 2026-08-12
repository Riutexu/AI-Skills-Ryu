---
name: javascript-moderno-errores-debugging-avanzado
description: Errores y debugging · nivel Avanzado · JavaScript moderno: ES2024. Lanzás, propagás y clasificás errores, y debuggeás con sourcemaps, breakpoints y profiling. Objetivo del nivel: Clasificar errores y debuggear con herramientas del navegador
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-debugging"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Errores y debugging — Avanzado

## Qué hace este skill

Lanzás, propagás y clasificás errores, y debuggeás con sourcemaps, breakpoints y profiling. En este nivel se entrega: **Clasificar errores y debuggear con herramientas del navegador**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y debugging** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear clases de error personalizadas con causas
2. Distinguir errores de red, validación y lógica
3. Debuggear con breakpoints y watch en DevTools
4. Usar debugger y logging condicional

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Clasificar errores y debuggear con herramientas del navegador | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear clases de error personalizadas con causas · Distinguir errores de red, validación y lógica · Debuggear con breakpoints y watch en DevTools · Usar debugger y logging condicional | lista | sí | 3-4 pasos |
| $criterios_clave | Cada categoría de error se maneja con su estrategia · Los logs de debug no llegan a producción | lista | sí | calidad verificable |
| $prompt_guia | Creá jerarquías de errores (NetworkError, ValidationError, ApiError) con la causa encadenada, y debuggeá el flujo de login con breakpoints explicando cada pausa. | texto | no | "Errores y debugging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada categoría de error se maneja con su estrategia
- [ ] Los logs de debug no llegan a producción

## Ejemplos de prompts

- "Creá jerarquías de errores (NetworkError, ValidationError, ApiError) con la causa encadenada, y debuggeá el flujo de login con breakpoints explicando cada pausa."
- "Aplica Errores y debugging (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Cada categoría de error se maneja con su estrategia"
- "Revisa mi javascript-moderno y dime qué pasos de Errores y debugging me faltan en este nivel"