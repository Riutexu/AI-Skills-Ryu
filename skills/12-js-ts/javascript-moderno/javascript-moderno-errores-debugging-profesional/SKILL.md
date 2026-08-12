---
name: javascript-moderno-errores-debugging-profesional
description: Errores y debugging · nivel Profesional · JavaScript moderno: ES2024. Lanzás, propagás y clasificás errores, y debuggeás con sourcemaps, breakpoints y profiling. Objetivo del nivel: Diseñar estrategia de errores con reporte y monitoreo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-debugging"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Errores y debugging — Profesional

## Qué hace este skill

Lanzás, propagás y clasificás errores, y debuggeás con sourcemaps, breakpoints y profiling. En este nivel se entrega: **Diseñar estrategia de errores con reporte y monitoreo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y debugging** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un reporte de errores con contexto y fingerprint
2. Crear boundary de error global en la SPA con recovery
3. Analizar errores repetidos con agrupación
4. Escribir tests que reproduzcan errores reportados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar estrategia de errores con reporte y monitoreo | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Implementar un reporte de errores con contexto y fingerprint · Crear boundary de error global en la SPA con recovery · Analizar errores repetidos con agrupación · Escribir tests que reproduzcan errores reportados | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte incluye contexto útil y sin datos sensibles · Los errores globales muestran UI de recovery amigable | lista | sí | calidad verificable |
| $prompt_guia | Implementá un boundary global de errores que muestre una pantalla de recovery y reporte el error con fingerprint al backend PHP, sin mandar datos personales. | texto | no | "Errores y debugging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte incluye contexto útil y sin datos sensibles
- [ ] Los errores globales muestran UI de recovery amigable

## Ejemplos de prompts

- "Implementá un boundary global de errores que muestre una pantalla de recovery y reporte el error con fingerprint al backend PHP, sin mandar datos personales."
- "Aplica Errores y debugging (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El reporte incluye contexto útil y sin datos sensibles"
- "Revisa mi javascript-moderno y dime qué pasos de Errores y debugging me faltan en este nivel"