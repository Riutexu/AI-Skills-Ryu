---
name: javascript-moderno-programacion-funcional-basico
description: Programación funcional · nivel Básico · JavaScript moderno: ES2024. Aplicás pureza, inmutabilidad y composición de funciones en el código de producción. Objetivo del nivel: Escribir funciones puras y evitar mutaciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "programacion-funcional"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Programación funcional — Básico

## Qué hace este skill

Aplicás pureza, inmutabilidad y composición de funciones en el código de producción. En este nivel se entrega: **Escribir funciones puras y evitar mutaciones**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Programación funcional** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar funciones con efectos laterales
2. Reescribir funciones impuras como puras
3. Usar map/filter/reduce en lugar de loops con mutación
4. Evitar mutar parámetros recibidos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir funciones puras y evitar mutaciones | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Identificar funciones con efectos laterales · Reescribir funciones impuras como puras · Usar map/filter/reduce en lugar de loops con mutación · Evitar mutar parámetros recibidos | lista | sí | 3-4 pasos |
| $criterios_clave | Las funciones puras no modifican sus argumentos · Las salidas dependen solo de las entradas | lista | sí | calidad verificable |
| $prompt_guia | Revisá estas funciones del módulo de precios: marcá cuáles son impuras y reescribilas como puras, sin tocar la API que usa el resto. | texto | no | "Programación funcional" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las funciones puras no modifican sus argumentos
- [ ] Las salidas dependen solo de las entradas

## Ejemplos de prompts

- "Revisá estas funciones del módulo de precios: marcá cuáles son impuras y reescribilas como puras, sin tocar la API que usa el resto."
- "Aplica Programación funcional (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las funciones puras no modifican sus argumentos"
- "Revisa mi javascript-moderno y dime qué pasos de Programación funcional me faltan en este nivel"