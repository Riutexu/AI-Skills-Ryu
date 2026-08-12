---
name: javascript-moderno-convenciones-estilo-avanzado
description: Convenciones y estilo · nivel Avanzado · JavaScript moderno: ES2024. Aplicás convenciones de nombrado, formato y organización que hacen el código legible en equipo. Objetivo del nivel: Definir y aplicar convenciones de módulos y funciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "convenciones-estilo"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Convenciones y estilo — Avanzado

## Qué hace este skill

Aplicás convenciones de nombrado, formato y organización que hacen el código legible en equipo. En este nivel se entrega: **Definir y aplicar convenciones de módulos y funciones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Convenciones y estilo** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Estandarizar el orden de imports y exports en cada módulo
2. Definir reglas de tamaño máximo de funciones
3. Escribir JSDoc en funciones públicas
4. Crear una guía de estilo de módulos propia del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Definir y aplicar convenciones de módulos y funciones | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Estandarizar el orden de imports y exports en cada módulo · Definir reglas de tamaño máximo de funciones · Escribir JSDoc en funciones públicas · Crear una guía de estilo de módulos propia del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los módulos siguen la misma estructura · Las funciones públicas tienen JSDoc mínima | lista | sí | calidad verificable |
| $prompt_guia | Escribí una guía de convenciones para nuestros módulos: orden de imports, JSDoc mínimo para públicas y tamaño de funciones; después aplicala a este módulo de ejemplo. | texto | no | "Convenciones y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los módulos siguen la misma estructura
- [ ] Las funciones públicas tienen JSDoc mínima

## Ejemplos de prompts

- "Escribí una guía de convenciones para nuestros módulos: orden de imports, JSDoc mínimo para públicas y tamaño de funciones; después aplicala a este módulo de ejemplo."
- "Aplica Convenciones y estilo (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Todos los módulos siguen la misma estructura"
- "Revisa mi javascript-moderno y dime qué pasos de Convenciones y estilo me faltan en este nivel"