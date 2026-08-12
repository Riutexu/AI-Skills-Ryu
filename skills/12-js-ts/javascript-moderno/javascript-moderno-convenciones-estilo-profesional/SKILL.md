---
name: javascript-moderno-convenciones-estilo-profesional
description: Convenciones y estilo · nivel Profesional · JavaScript moderno: ES2024. Aplicás convenciones de nombrado, formato y organización que hacen el código legible en equipo. Objetivo del nivel: Impulsar convenciones con lint automático y revisión en equipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "convenciones-estilo"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Convenciones y estilo — Profesional

## Qué hace este skill

Aplicás convenciones de nombrado, formato y organización que hacen el código legible en equipo. En este nivel se entrega: **Impulsar convenciones con lint automático y revisión en equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Convenciones y estilo** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar reglas de estilo en ESLint para automatizarlas
2. Crear un checklist de revisión de código para JS
3. Documentar decisiones de estilo en ADR
4. Organizar sesión de refactor para unificar el codebase

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Impulsar convenciones con lint automático y revisión en equipo | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Configurar reglas de estilo en ESLint para automatizarlas · Crear un checklist de revisión de código para JS · Documentar decisiones de estilo en ADR · Organizar sesión de refactor para unificar el codebase | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas de estilo se aplican solas en el lint · El checklist se usa en cada PR | lista | sí | calidad verificable |
| $prompt_guia | Armame el checklist de code review de la familia JS/TS y convertí en reglas de ESLint las tres violaciones que más vemos en los PRs. | texto | no | "Convenciones y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas de estilo se aplican solas en el lint
- [ ] El checklist se usa en cada PR

## Ejemplos de prompts

- "Armame el checklist de code review de la familia JS/TS y convertí en reglas de ESLint las tres violaciones que más vemos en los PRs."
- "Aplica Convenciones y estilo (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las reglas de estilo se aplican solas en el lint"
- "Revisa mi javascript-moderno y dime qué pasos de Convenciones y estilo me faltan en este nivel"