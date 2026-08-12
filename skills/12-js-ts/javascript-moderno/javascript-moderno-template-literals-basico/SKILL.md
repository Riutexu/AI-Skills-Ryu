---
name: javascript-moderno-template-literals-basico
description: Template literals · nivel Básico · JavaScript moderno: ES2024. Interpolás strings, multiline y usás tagged templates para construir textos y plantillas seguras. Objetivo del nivel: Interpolar variables y escribir strings multilinea con template literals
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "template-literals"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Template literals — Básico

## Qué hace este skill

Interpolás strings, multiline y usás tagged templates para construir textos y plantillas seguras. En este nivel se entrega: **Interpolar variables y escribir strings multilinea con template literals**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Template literals** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reemplazar concatenaciones por interpolación
2. Escribir bloques multilinea sin escapes de salto de línea
3. Evaluar expresiones dentro de la interpolación
4. Componer mensajes de error legibles con interpolación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Interpolar variables y escribir strings multilinea con template literals | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Reemplazar concatenaciones por interpolación · Escribir bloques multilinea sin escapes de salto de línea · Evaluar expresiones dentro de la interpolación · Componer mensajes de error legibles con interpolación | lista | sí | 3-4 pasos |
| $criterios_clave | No quedan concatenaciones con + para textos simples · Los saltos de línea se mantienen en el resultado | lista | sí | calidad verificable |
| $prompt_guia | Reescribí estas funciones de mensajes del validador usando template literals, con las expresiones interpoladas; los mensajes van al usuario final. | texto | no | "Template literals" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No quedan concatenaciones con + para textos simples
- [ ] Los saltos de línea se mantienen en el resultado

## Ejemplos de prompts

- "Reescribí estas funciones de mensajes del validador usando template literals, con las expresiones interpoladas; los mensajes van al usuario final."
- "Aplica Template literals (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza No quedan concatenaciones con + para textos simples"
- "Revisa mi javascript-moderno y dime qué pasos de Template literals me faltan en este nivel"