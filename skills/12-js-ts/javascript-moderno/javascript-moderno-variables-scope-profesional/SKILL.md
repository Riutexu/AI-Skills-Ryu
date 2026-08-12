---
name: javascript-moderno-variables-scope-profesional
description: Variables y scope (let/const) · nivel Profesional · JavaScript moderno: ES2024. Manejás declaración, hoisting, temporal dead zone y scoping de bloques con let y const. Objetivo del nivel: Definir políticas de inmutabilidad y estado en el equipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "variables-scope"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Variables y scope (let/const) — Profesional

## Qué hace este skill

Manejás declaración, hoisting, temporal dead zone y scoping de bloques con let y const. En este nivel se entrega: **Definir políticas de inmutabilidad y estado en el equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Variables y scope (let/const)** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Redactar una guía de estilo para declaración de variables
2. Implementar estado compartido congelado con Object.freeze
3. Crear utilidades de copia profunda para datos inmutables
4. Auditar el código buscando mutaciones fuera de módulos dueños

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir políticas de inmutabilidad y estado en el equipo | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Redactar una guía de estilo para declaración de variables · Implementar estado compartido congelado con Object.freeze · Crear utilidades de copia profunda para datos inmutables · Auditar el código buscando mutaciones fuera de módulos dueños | lista | sí | 3-4 pasos |
| $criterios_clave | El estado compartido no se muta desde fuera del módulo dueño · La guía de estilo se aplica en el lint del proyecto | lista | sí | calidad verificable |
| $prompt_guia | Escribime una política de inmutabilidad para nuestro equipo: cuándo usar const, cuándo Object.freeze y cuándo clonar. Nivel de detalle: el que lee es un backend PHP que odia JS. | texto | no | "Variables y scope (let/const)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado compartido no se muta desde fuera del módulo dueño
- [ ] La guía de estilo se aplica en el lint del proyecto

## Ejemplos de prompts

- "Escribime una política de inmutabilidad para nuestro equipo: cuándo usar const, cuándo Object.freeze y cuándo clonar. Nivel de detalle: el que lee es un backend PHP que odia JS."
- "Aplica Variables y scope (let/const) (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El estado compartido no se muta desde fuera del módulo dueño"
- "Revisa mi javascript-moderno y dime qué pasos de Variables y scope (let/const) me faltan en este nivel"