---
name: javascript-moderno-template-literals-profesional
description: Template literals · nivel Profesional · JavaScript moderno: ES2024. Interpolás strings, multiline y usás tagged templates para construir textos y plantillas seguras. Objetivo del nivel: Construir mini-DSLs de plantillas con tagged templates
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "template-literals"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Template literals — Profesional

## Qué hace este skill

Interpolás strings, multiline y usás tagged templates para construir textos y plantillas seguras. En este nivel se entrega: **Construir mini-DSLs de plantillas con tagged templates**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Template literals** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un tag de consulta SQL parametrizada
2. Crear un motor de plantillas condicionales con tag
3. Implementar un tag de logging con niveles y contexto
4. Documentar y testear los tags del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Construir mini-DSLs de plantillas con tagged templates | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Diseñar un tag de consulta SQL parametrizada · Crear un motor de plantillas condicionales con tag · Implementar un tag de logging con niveles y contexto · Documentar y testear los tags del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | El tag SQL escapa y parametriza todos los valores · Los tags tienen cobertura de tests para casos límite | lista | sí | calidad verificable |
| $prompt_guia | Diseñá un tagged template sql que escape los interpolados y genere la consulta parametrizada lista para el driver; que ni la inyección más creativa le gane. | texto | no | "Template literals" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tag SQL escapa y parametriza todos los valores
- [ ] Los tags tienen cobertura de tests para casos límite

## Ejemplos de prompts

- "Diseñá un tagged template sql que escape los interpolados y genere la consulta parametrizada lista para el driver; que ni la inyección más creativa le gane."
- "Aplica Template literals (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El tag SQL escapa y parametriza todos los valores"
- "Revisa mi javascript-moderno y dime qué pasos de Template literals me faltan en este nivel"